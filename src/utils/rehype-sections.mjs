// Rehype plugin: groups top-level H2 sections and wraps them in semantic
// containers matching the OllaWrite reference blog design (Executive Brief,
// Key Takeaways, Critical Pitfalls, FAQ accordion, Final Take).

const SPECIAL = {
  'tl dr': { type: 'exec-brief', label: 'Executive Brief', heading: 'TL;DR Summary', level: 3 },
  'tl dr summary': { type: 'exec-brief', label: 'Executive Brief', heading: 'TL;DR Summary', level: 3 },
  'key takeaways': { type: 'key-takeaways', level: 3 },
  'key points': { type: 'key-takeaways', level: 3 },
  'frequently asked questions': { type: 'faq', level: 2 },
  'wrapping up': { type: 'final-take', label: 'Final Take', level: 2 },
  'wrapping it up': { type: 'final-take', label: 'Final Take', level: 2 },
};

const PITFALLS = /mistake/i;

const BRAND = 'OllaWrite';
const LOGIN_URL = 'https://login.ollawrite.com';

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function textOf(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  if (node.type === 'element') {
    return (node.children || []).map(textOf).join('');
  }
  return '';
}

function h(tag, props, children) {
  const el = { type: 'element', tagName: tag, properties: props || {}, children: children || [] };
  return el;
}

function text(value) {
  return { type: 'text', value };
}

// Build a section heading element at a given level, preserving id.
function headingEl(node, level, newText) {
  const props = { ...(node.properties || {}) };
  const children = newText ? [text(newText)] : node.children;
  return h('h' + level, props, children);
}

function buildDefault(section) {
  const wrapper = h('section', { className: ['post-section'] }, []);
  wrapper.children.push(section.heading);
  wrapper.children.push(...section.body);
  return wrapper;
}

function buildExecBrief(section) {
  const label = h('div', { className: ['box-label'] }, [text('Executive Brief')]);
  const heading = headingEl(section.heading, 3, 'TL;DR Summary');
  const inner = h('div', { className: ['exec-brief-inner'] }, [label, heading, ...section.body]);
  return h('div', { className: ['exec-brief'] }, [inner]);
}

function buildKeyTakeaways(section) {
  const heading = headingEl(section.heading, 3, null);
  return h('div', { className: ['key-takeaways'] }, [heading, ...section.body]);
}

function buildPitfalls(section) {
  const badge = h('span', { className: ['pitfalls-badge'] }, [text('Critical Pitfalls')]);
  const head = h('div', { className: ['pitfalls-head'] }, [section.heading, badge]);
  const wrapper = h('div', { className: ['critical-pitfalls'] }, [head, ...section.body]);
  return wrapper;
}

function buildFaq(section) {
  const wrapper = h('div', { className: ['faq'] }, []);
  wrapper.children.push(section.heading);
  // Group H3 question + following content into <details> items.
  let current = null;
  const items = [];
  for (const node of section.body) {
    if (node.type === 'element' && node.tagName === 'h3') {
      current = { question: node, body: [] };
      items.push(current);
    } else if (current) {
      current.body.push(node);
    } else {
      // content before first question
      wrapper.children.push(node);
    }
  }
  for (const item of items) {
    const summary = h('summary', {}, item.question.children);
    const details = h('details', { className: ['faq-item'] }, [summary, ...item.body]);
    wrapper.children.push(details);
  }
  return wrapper;
}

function buildFinalTake(section) {
  const label = h('div', { className: ['box-label'] }, [text('Final Take')]);
  const btn = h('a', { className: ['btn', 'final-take-btn'], href: LOGIN_URL }, [text(`Start free with ${BRAND} →`)]);
  const inner = h('div', { className: ['final-take-inner'] }, [label, section.heading, ...section.body, btn]);
  return h('div', { className: ['final-take'] }, [inner]);
}

// "Complete Guide & Deep-Dive Analysis" wrapper around all default body sections.
function buildCompleteGuide(defaultSections) {
  const heading = h('h2', { className: ['complete-guide-heading'] }, [text('Complete Guide & Deep-Dive Analysis')]);
  const wrapper = h('div', { className: ['complete-guide'] }, [heading]);
  for (const section of defaultSections) {
    wrapper.children.push(buildDefault(section));
  }
  return wrapper;
}

// "Top" link + "Share" button shown after the Final Take box.
function buildPostEnd() {
  const top = h('a', { className: ['top-link'], href: '#' }, [text('Top')]);
  const share = h('button', { className: ['share-btn'], type: 'button' }, [text('Share')]);
  return h('div', { className: ['post-end'] }, [top, share]);
}

export default function rehypeSections() {
  return (tree) => {
    const children = tree.children || [];
    const sections = [];
    let current = null;

    for (const node of children) {
      if (node.type === 'element' && node.tagName === 'h2') {
        current = { heading: node, body: [] };
        sections.push(current);
      } else if (current) {
        current.body.push(node);
      } else {
        if (sections.length === 0) sections.push({ heading: null, body: [] });
        sections[0].body.push(node);
      }
    }

    const out = [];
    const buckets = {
      execBrief: null,
      keyTakeaways: null,
      pitfalls: null,
      faq: null,
      finalTake: null,
      defaults: [],
    };

    for (const section of sections) {
      if (!section.heading) {
        out.push(...section.body);
        continue;
      }
      const headingText = textOf(section.heading);
      const norm = normalize(headingText);
      const special = SPECIAL[norm];

      if (special) {
        if (special.type === 'exec-brief') buckets.execBrief = section;
        else if (special.type === 'key-takeaways') buckets.keyTakeaways = section;
        else if (special.type === 'faq') buckets.faq = section;
        else if (special.type === 'final-take') buckets.finalTake = section;
      } else if (PITFALLS.test(headingText)) {
        buckets.pitfalls = section;
      } else {
        buckets.defaults.push(section);
      }
    }

    // Emit in the reference's fixed order.
    if (buckets.execBrief) out.push(buildExecBrief(buckets.execBrief));
    if (buckets.keyTakeaways) out.push(buildKeyTakeaways(buckets.keyTakeaways));
    if (buckets.defaults.length > 0) out.push(buildCompleteGuide(buckets.defaults));
    if (buckets.pitfalls) out.push(buildPitfalls(buckets.pitfalls));
    if (buckets.faq) out.push(buildFaq(buckets.faq));
    if (buckets.finalTake) {
      out.push(buildFinalTake(buckets.finalTake));
      out.push(buildPostEnd());
    }

    tree.children = out;
  };
}
