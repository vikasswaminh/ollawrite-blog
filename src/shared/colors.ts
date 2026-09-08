/**
 * Simplified four-color brand system — Blue, Red, Yellow, Green only.
 * Every color on the site maps to one of these four brand colors.
 */
export interface CategoryStyle {
  /** solid chip background */
  bg: string;
  /** chip text color (dark brand tone on light pastel chips) */
  text: string;
  /** hover / accent color used for card borders, links, headings */
  accent: string;
}

/** Per-category styling: light pink chip backgrounds with pinkish names. */
export const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  'Humanizing AI':      { bg: '#fdf2f8', text: '#db2777', accent: '#003db3' }, // pink
  'Site-First AI':      { bg: '#fdf2f8', text: '#db2777', accent: '#e8443a' }, // pink
  'Multi-Agent AI':     { bg: '#fdf2f8', text: '#db2777', accent: '#003db3' }, // pink
  'Editorial QA':       { bg: '#fdf2f8', text: '#db2777', accent: '#16a34a' }, // pink
  'SEO Strategy':       { bg: '#fdf2f8', text: '#db2777', accent: '#003db3' }, // pink
  'Content Generation': { bg: '#fdf2f8', text: '#db2777', accent: '#003db3' }, // pink
  'AI Search':          { bg: '#fdf2f8', text: '#db2777', accent: '#003db3' }, // pink
};

export const FALLBACK_CATEGORY_STYLE: CategoryStyle = { bg: '#fdf2f8', text: '#db2777', accent: '#003db3' };

export function getCategoryStyle(category?: string): CategoryStyle {
  return (category && CATEGORY_STYLES[category]) || FALLBACK_CATEGORY_STYLE;
}

/** Four-color brand palette (yellow removed — normal colors only) */
export const BRAND = {
  blue: '#003db3',
  blueDark: '#002d86',
  red: '#e8443a',
  redDark: '#c7352d',
  yellow: '#475569',   // yellow removed → normal slate
  yellowDark: '#0f172a',
  green: '#16a34a',
  greenDark: '#15803d',
  orange: '#475569',   // yellow removed → normal slate
  orangeLight: '#f1f5f9',
  footer: '#0b0f19',
} as const;

/**
 * Rotating accent cycle (yellow removed — normal colors only):
 * blue → red → slate → green → repeat.
 */
export const ACCENT_CYCLE = [
  '#003db3', // brand blue
  '#e8443a', // brand red
  '#475569', // normal slate (was yellow)
  '#16a34a', // brand green
] as const;

/** Cycles through ACCENT_CYCLE by index — always returns a valid hex. */
export function cycleAccent(i: number): string {
  return ACCENT_CYCLE[((i % ACCENT_CYCLE.length) + ACCENT_CYCLE.length) % ACCENT_CYCLE.length];
}
