export interface Citation {
  id: number;
  label: string;
  source: string;
  url?: string;
  year?: string;
  excerpt?: string;
}

export interface VerifiedInsight {
  supportedBy: string;
  citationCount: number;
  keyTakeaway: string;
  groundingScore?: number; // e.g. 99.4%
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface TocItem {
  id: string;
  title: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: Author;
  publishedDate: string;
  updatedDate?: string;
  readTime: string;
  featured?: boolean;
  editorialNumber: string; // "01", "02", etc.
  cardType?: 'featured' | 'standard' | 'compact';
  summary: string;
  content: string;
  citations: Citation[];
  verifiedInsight: VerifiedInsight;
  tags: string[];
  toc: TocItem[];
  imageUrl: string;
  sourceCount: number;
  benchmarkScore?: string;
}

export type CategoryFilter =
  | 'All'
  | 'Humanizing AI'
  | 'AI vs Human Writing'
  | 'AI SEO Writing'
  | 'Content Generation'
  | 'SEO Strategy'
  | 'AI Writing'
  | 'Tool Reviews'
  | 'Site-First AI'
  | 'Multi-Agent AI'
  | 'Editorial QA';
