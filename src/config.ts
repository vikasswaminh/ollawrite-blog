// ─────────────────────────────────────────────────────────────────────────────
//  PER-PROJECT BRANDING  ·  the ONLY file that changes between blog repos.
//  Owner-locked via CODEOWNERS — the SEO team does not edit this (see CONTRIBUTING.md).
// ─────────────────────────────────────────────────────────────────────────────
export const SITE = {
  brand: 'OllaWrite',
  title: 'OllaWrite Journal',
  description:
    'Editorial intelligence, technical search & verification. In-depth research on site-first AI writing, canonical SEO grounding, and multi-agent systems.',
  url: 'https://blog.ollawrite.com',
  marketingUrl: 'https://ollawrite.com',
  marketingLabel: 'ollawrite.com',
  author: 'OllaWrite Editorial',
  accent: '#1d4ed8',
  tagline: 'The AI content writer that reads your site first.',
  locale: 'en',
} as const;

export const NAV = [
  { label: 'Blog', href: '/' },
  { label: 'Contact', href: 'https://ollawrite.com/contact' },
  { label: 'Tags', href: '/tags/' },
  { label: 'About', href: '/about/' },
];
