// ─────────────────────────────────────────────────────────────────────────────
//  PER-PROJECT BRANDING  ·  the ONLY file that changes between blog repos.
//  Owner-locked via CODEOWNERS — the SEO team does not edit this (see CONTRIBUTING.md).
// ─────────────────────────────────────────────────────────────────────────────
export const SITE = {
  brand: 'OllaWrite',
  title: 'OllaWrite Blog',
  description: 'Guides, tips, and product updates from the OllaWrite team.',
  url: 'https://blogs.ollawrite.com',
  marketingUrl: 'https://ollawrite.com',
  marketingLabel: 'ollawrite.com',
  author: 'OllaWrite Team',
  accent: '#7c3aed',
  tagline: 'Write with clarity.',
  locale: 'en',
} as const;

export const NAV = [
  { label: 'Blog', href: '/' },
  { label: 'Tags', href: '/tags/' },
  { label: 'About', href: '/about/' },
];
