/**
 * Color Segregation System for OllaWrite Knowledge Base & Categories
 * Maps every category to a distinct dot color, pastel background, border, text color, and count badge.
 */
export interface CategoryStyle {
  /** colored indicator dot */
  dot: string;
  /** solid chip background */
  bg: string;
  /** border color */
  border: string;
  /** chip text color */
  text: string;
  /** count badge background */
  badgeBg: string;
  /** count badge text color */
  badgeText: string;
  /** hover / accent color used for card borders, links, headings */
  accent: string;
}

/** Per-category styling matching the exact visual segregation from the design */
export const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  'All': {
    dot: '#ffffff',
    bg: '#0f172a',
    border: '#1e293b',
    text: '#ffffff',
    badgeBg: '#334155',
    badgeText: '#f8fafc',
    accent: '#0f172a',
  },
  'AI Writing': {
    dot: '#f59e0b',
    bg: '#fffbeb',
    border: '#fde68a',
    text: '#92400e',
    badgeBg: '#fef3c7',
    badgeText: '#78350f',
    accent: '#f59e0b',
  },
  'Guides': {
    dot: '#f59e0b',
    bg: '#fffbeb',
    border: '#fde68a',
    text: '#92400e',
    badgeBg: '#fef3c7',
    badgeText: '#78350f',
    accent: '#f59e0b',
  },
  'Site-First AI': {
    dot: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd',
    text: '#0369a1',
    badgeBg: '#e0f2fe',
    badgeText: '#075985',
    accent: '#0284c7',
  },
  'RAG': {
    dot: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd',
    text: '#0369a1',
    badgeBg: '#e0f2fe',
    badgeText: '#075985',
    accent: '#0284c7',
  },
  'SEO Strategy': {
    dot: '#16a34a',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    text: '#15803d',
    badgeBg: '#dcfce7',
    badgeText: '#166534',
    accent: '#16a34a',
  },
  'SEO': {
    dot: '#16a34a',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    text: '#15803d',
    badgeBg: '#dcfce7',
    badgeText: '#166534',
    accent: '#16a34a',
  },
  'AI SEO Writing': {
    dot: '#10b981',
    bg: '#ecfdf5',
    border: '#a7f3d0',
    text: '#047857',
    badgeBg: '#d1fae5',
    badgeText: '#065f46',
    accent: '#10b981',
  },
  'Humanizing AI': {
    dot: '#e11d48',
    bg: '#fff1f2',
    border: '#fecdd3',
    text: '#be123c',
    badgeBg: '#ffe4e6',
    badgeText: '#9f1239',
    accent: '#e11d48',
  },
  'AEO': {
    dot: '#e11d48',
    bg: '#fff1f2',
    border: '#fecdd3',
    text: '#be123c',
    badgeBg: '#ffe4e6',
    badgeText: '#9f1239',
    accent: '#e11d48',
  },
  'Multi-Agent AI': {
    dot: '#9333ea',
    bg: '#faf5ff',
    border: '#e9d5ff',
    text: '#7e22ce',
    badgeBg: '#f3e8ff',
    badgeText: '#6b21a8',
    accent: '#9333ea',
  },
  'GEO': {
    dot: '#9333ea',
    bg: '#faf5ff',
    border: '#e9d5ff',
    text: '#7e22ce',
    badgeBg: '#f3e8ff',
    badgeText: '#6b21a8',
    accent: '#9333ea',
  },
  'Editorial QA': {
    dot: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0',
    text: '#047857',
    badgeBg: '#d1fae5',
    badgeText: '#065f46',
    accent: '#059669',
  },
  'Citations': {
    dot: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0',
    text: '#047857',
    badgeBg: '#d1fae5',
    badgeText: '#065f46',
    accent: '#059669',
  },
  'Content Generation': {
    dot: '#64748b',
    bg: '#f8fafc',
    border: '#e2e8f0',
    text: '#334155',
    badgeBg: '#f1f5f9',
    badgeText: '#475569',
    accent: '#64748b',
  },
  'Robots.txt': {
    dot: '#64748b',
    bg: '#f8fafc',
    border: '#e2e8f0',
    text: '#334155',
    badgeBg: '#f1f5f9',
    badgeText: '#475569',
    accent: '#64748b',
  },
  'Tool Reviews': {
    dot: '#4f46e5',
    bg: '#eef2ff',
    border: '#c7d2fe',
    text: '#3730a3',
    badgeBg: '#e0e7ff',
    badgeText: '#312e81',
    accent: '#4f46e5',
  },
  'AI Search': {
    dot: '#4f46e5',
    bg: '#eef2ff',
    border: '#c7d2fe',
    text: '#3730a3',
    badgeBg: '#e0e7ff',
    badgeText: '#312e81',
    accent: '#4f46e5',
  },
  'AI vs Human Writing': {
    dot: '#db2777',
    bg: '#fdf2f8',
    border: '#fbcfe8',
    text: '#9d174d',
    badgeBg: '#fce7f3',
    badgeText: '#831843',
    accent: '#db2777',
  },
};

export const FALLBACK_CATEGORY_STYLE: CategoryStyle = {
  dot: '#0284c7',
  bg: '#f0f9ff',
  border: '#bae6fd',
  text: '#0369a1',
  badgeBg: '#e0f2fe',
  badgeText: '#075985',
  accent: '#0284c7',
};

export function getCategoryStyle(category?: string): CategoryStyle {
  return (category && CATEGORY_STYLES[category]) || FALLBACK_CATEGORY_STYLE;
}

/** Four-color brand palette */
export const BRAND = {
  blue: '#003db3',
  blueDark: '#002d86',
  red: '#e8443a',
  redDark: '#c7352d',
  yellow: '#f59e0b',
  green: '#16a34a',
  greenDark: '#15803d',
  footer: '#0b0f19',
} as const;

/**
 * Rotating accent cycle
 */
export const ACCENT_CYCLE = [
  '#003db3', // brand blue
  '#e8443a', // brand red
  '#f59e0b', // brand amber
  '#16a34a', // brand green
  '#9333ea', // purple
] as const;

/** Cycles through ACCENT_CYCLE by index — always returns a valid hex. */
export function cycleAccent(i: number): string {
  return ACCENT_CYCLE[((i % ACCENT_CYCLE.length) + ACCENT_CYCLE.length) % ACCENT_CYCLE.length];
}
