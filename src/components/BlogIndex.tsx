import React, { useState } from 'react';
import { Flame, Brain, Search, X, ArrowRight, ShieldCheck } from 'lucide-react';
import type { Article, CategoryFilter } from '../shared/types';
import { OLLAWRITE_LEFT_GUIDES, OLLAWRITE_RIGHT_TOP_READS } from '../shared/articlesData';
import { KnowledgeMatrixTable } from './KnowledgeMatrixTable';

interface BlogIndexProps {
  articles: Article[];
  onReadArticle: (a: Article) => void;
}

export const BlogIndex: React.FC<BlogIndexProps> = ({ articles, onReadArticle }) => {
  const [activeTab, setActiveTab] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(8);

  const newestArticles = [...articles].slice(0, 4);
  const heroNewest = newestArticles[0];
  const secondaryNewest = newestArticles.slice(1, 4);

  const aiAuthorityArticles = articles.filter(a =>
    a.category === 'Site-First AI' || a.category === 'Multi-Agent AI' || a.category === 'Editorial QA'
  );
  const heroAuthority = aiAuthorityArticles[0] || articles[1];
  const secondaryAuthority = aiAuthorityArticles.slice(1, 6);

  const categories: CategoryFilter[] = ['All', 'Humanizing AI', 'Site-First AI', 'Multi-Agent AI', 'SEO Strategy', 'Content Generation'];

  const filteredArticles = articles.filter(a => {
    const matchesCategory = activeTab === 'All' || a.category === activeTab;
    if (!searchQuery.trim()) return matchesCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      a.title.toLowerCase().includes(q) ||
      a.subtitle.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });

  const handleTitleClick = (titleText: string) => {
    const found = articles.find(a => a.title.toLowerCase().includes(titleText.toLowerCase().slice(0, 15)));
    if (found) onReadArticle(found);
    else if (articles[0]) onReadArticle(articles[0]);
  };

  return (
    <div className="w-full mx-auto px-[2cm] py-6 font-['Lato'] text-slate-800 bg-white">
      
      {/* ── MOBILE: Horizontal scroll cards for both categories ── */}
      <div className="lg:hidden space-y-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3.5 py-1.5 text-xs sm:text-sm font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-full font-mono">
              [01] CORE INDEX
            </span>
          </div>
          <div className="flex gap-3.5 overflow-x-auto pb-2 -mx-4 px-4 snap-x">
            {OLLAWRITE_LEFT_GUIDES.slice(0, 5).map((title, i) => (
              <button
                key={i}
                onClick={() => handleTitleClick(title)}
                className="snap-start shrink-0 w-72 p-4 bg-slate-50 border border-slate-200 rounded-xl text-left cursor-pointer hover:border-blue-500"
              >
                <h3 className="font-bold text-[15px] sm:text-base text-slate-900 line-clamp-2 leading-snug font-['Lato']">{title}</h3>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3.5 py-1.5 text-xs sm:text-sm font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full font-mono">
              [02] CITATION INDEX
            </span>
          </div>
          <div className="flex gap-3.5 overflow-x-auto pb-2 -mx-4 px-4 snap-x">
            {OLLAWRITE_RIGHT_TOP_READS.slice(0, 5).map((title, i) => (
              <button
                key={i}
                onClick={() => handleTitleClick(title)}
                className="snap-start shrink-0 w-72 p-4 bg-slate-50 border border-slate-200 rounded-xl text-left cursor-pointer hover:border-indigo-500"
              >
                <h3 className="font-bold text-[15px] sm:text-base text-slate-900 line-clamp-2 leading-snug font-['Lato']">{title}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP: 3-COLUMN LAYOUT WITH EXACT SIDEBARS ── */}
      <div className="flex gap-6 xl:gap-8">

        {/* ════ LEFT SIDEBAR: CORE INDEX (w-[240px]) ════ */}
        <aside className="hidden lg:block w-[240px] shrink-0">
          <div className="sticky top-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-full font-mono">
                [01] CORE INDEX
              </span>
            </div>
            <nav className="space-y-1">
              {OLLAWRITE_LEFT_GUIDES.map((title, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTitleClick(title)}
                  className="w-full text-left block px-2.5 py-1.5 text-[13px] font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 rounded-lg transition-colors leading-snug cursor-pointer font-['Lato']"
                >
                  <span className="text-blue-600 font-mono text-[12px] mr-2 font-bold">[{idx < 9 ? `0${idx + 1}` : idx + 1}]</span>
                  <span>{title}</span>
                </button>
              ))}
            </nav>
            <button
              onClick={() => handleTitleClick("Humanize")}
              className="inline-flex items-center mt-3 px-2 text-xs font-mono font-bold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer gap-1.5"
            >
              <span>EXPLORE_FULL_INDEX</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </aside>

        {/* ════ CENTER: MAIN BLOG INDEX CONTENT (flex-1 min-w-0) ════ */}
        <div className="flex-1 min-w-0">
          
          {/* Header Title & Subtitle */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight font-['Lato']">
              Autonomous Content Infrastructure &amp; Citation Graph Intelligence
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed font-['Lato']">
              Peer-reviewed technical research, semantic sitemap grounding, and verifiable multi-agent pipelines.
            </p>
          </div>

          {/* ── SECTION 1: VERIFIED RESEARCH ARTICLES ── */}
          <section className="mb-10">
            
            {/* Pill Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">
                <Flame className="w-4 h-4 fill-blue-600 text-blue-600" />
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wide font-['Lato']">Verified Research</h2>
              </div>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">Live telemetry from 10 autonomous engines</span>
            </div>

            {/* Featured Hero Card */}
            {heroNewest && (
              <div
                onClick={() => onReadArticle(heroNewest)}
                className="block mb-5 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex flex-col md:flex-row bg-white">
                  
                  {/* Left Hero Image */}
                  <div className="md:w-[36%] aspect-[16/10] md:aspect-auto overflow-hidden bg-slate-100 min-h-[190px]">
                    <img
                      src={heroNewest.imageUrl}
                      alt={heroNewest.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="eager"
                    />
                  </div>

                  {/* Right Hero Content */}
                  <div className="md:w-[64%] p-4 sm:p-6 bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      {/* Top Badges Row */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono px-2.5 py-0.5 rounded font-bold">
                          {heroNewest.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>VERIFIED</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mb-2 font-['Lato']">
                        {heroNewest.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-3 font-normal leading-relaxed font-['Lato']">
                        {heroNewest.subtitle}
                      </p>
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center gap-3 text-xs text-slate-500 pt-2.5 border-t border-slate-200 font-mono font-medium">
                      <span className="text-blue-600 font-bold">{heroNewest.readTime}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-bold">{heroNewest.sourceCount} Grounded Sources</span>
                      <span>•</span>
                      <span className="text-blue-600 hover:underline font-bold">Inspect sources →</span>
                    </div>

                  </div>

                </div>
              </div>
            )}

            {/* Secondary 3-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {secondaryNewest.map((post) => (
                <article
                  key={post.id}
                  onClick={() => onReadArticle(post)}
                  className="border border-slate-200 hover:border-blue-500 bg-white rounded-lg transition-all group relative overflow-hidden hover:shadow-md cursor-pointer flex flex-col p-3.5"
                >
                  <div className="flex items-center gap-2 mb-2 font-mono">
                    <span className="inline-block text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                      {post.category}
                    </span>
                    <span className="inline-block text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-bold">
                      [0{post.id.replace('art-', '')}]
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 flex-1 font-['Lato'] mb-1.5">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-2.5 leading-relaxed font-normal font-['Lato']">
                    {post.subtitle}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 font-mono font-medium">
                    <span>{post.readTime}</span>
                    <span className="text-blue-600 font-bold">{post.sourceCount} citations</span>
                  </div>
                </article>
              ))}
            </div>

          </section>

          {/* ── SECTION 2: AI AUTHORITY ARTICLES ── */}
          <section className="mb-10">
            
            {/* Pill Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 rounded-full">
                <Brain className="w-4 h-4 fill-indigo-600 text-indigo-600" />
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wide font-['Lato']">AI Systems Architecture</h2>
              </div>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">{aiAuthorityArticles.length} peer-reviewed benchmarks</span>
            </div>

            {/* Second Hero Card */}
            {heroAuthority && (
              <div
                onClick={() => onReadArticle(heroAuthority)}
                className="block mb-5 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl border border-slate-200 hover:border-indigo-500 hover:shadow-md transition-all flex flex-col md:flex-row bg-white">
                  
                  <div className="md:w-[36%] aspect-[16/10] md:aspect-auto overflow-hidden bg-slate-100 min-h-[190px]">
                    <img
                      src={heroAuthority.imageUrl}
                      alt={heroAuthority.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="eager"
                    />
                  </div>

                  <div className="md:w-[64%] p-4 sm:p-6 bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      {/* Top Badges Row */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="inline-block bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-mono px-2.5 py-0.5 rounded font-bold">
                          {heroAuthority.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded">
                          <Brain className="w-3.5 h-3.5 text-indigo-600" />
                          <span>ARCHITECTURE</span>
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors mb-2 font-['Lato']">
                        {heroAuthority.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-3 font-normal leading-relaxed font-['Lato']">
                        {heroAuthority.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-500 pt-2.5 border-t border-slate-200 font-mono font-medium">
                      <span className="text-indigo-600 font-bold">{heroAuthority.readTime}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-bold">{heroAuthority.sourceCount} Grounded Sources</span>
                      <span>•</span>
                      <span className="text-indigo-600 hover:underline font-bold">Read architecture →</span>
                    </div>

                  </div>

                </div>
              </div>
            )}

            {/* Secondary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {secondaryAuthority.slice(0, 3).map((post) => (
                <article
                  key={post.id}
                  onClick={() => onReadArticle(post)}
                  className="border border-slate-200 hover:border-indigo-500 bg-white rounded-lg transition-all group relative overflow-hidden hover:shadow-md cursor-pointer flex flex-col p-3.5"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-md bg-slate-100 relative mb-2.5">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-2 right-2 bg-white/90 border border-slate-200 rounded-full p-1 shadow-xs">
                      <Brain className="w-3.5 h-3.5 text-indigo-600" />
                    </span>
                  </div>

                  <span className="inline-block w-fit mb-1.5 text-xs px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-mono border border-indigo-200 font-bold">
                    {post.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2 flex-1 font-['Lato'] mb-1.5">
                    {post.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-2 font-mono font-medium pt-2 border-t border-slate-100 flex justify-between">
                    <span>{post.readTime}</span>
                    <span className="text-indigo-600 font-bold">[{post.sourceCount} citations]</span>
                  </div>
                </article>
              ))}
            </div>

          </section>

          {/* ── SECTION 3: ALL KNOWLEDGE ARTICLES ── */}
          <div className="border-t border-slate-200 mb-8 pt-8">
            
            {/* Title & Search Bar */}
            <div className="flex flex-col gap-3 mb-5">
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 font-mono">[03] ALL KNOWLEDGE ARTICLES</h2>
                <span className="text-xs font-mono text-blue-600 font-bold hidden sm:inline">INDEX_NODES: {filteredArticles.length}</span>
              </div>
              
              <div className="relative w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Query knowledge base..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 rounded-lg bg-white text-slate-900 outline-none transition-all font-['Lato'] font-normal shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-1.5 mb-5 pb-2 border-b border-slate-200 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer font-['Lato'] ${
                    activeTab === cat
                      ? 'bg-blue-600 text-white font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Active search status */}
            {searchQuery && (
              <div className="mb-4 flex items-center gap-3 font-mono">
                <span className="text-xs text-slate-600 font-medium">
                  Query returned {filteredArticles.length} node{filteredArticles.length !== 1 ? 's' : ''} for "{searchQuery}"
                </span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-blue-600 hover:underline font-bold cursor-pointer"
                >
                  Reset query
                </button>
              </div>
            )}

          </div>

          {/* ── SECTION 4: DATA TABLE ── */}
          <div id="table" className="scroll-mt-36">
            <KnowledgeMatrixTable />
          </div>

        </div>

        {/* ════ RIGHT SIDEBAR: CITATION INDEX & CTAS (w-[240px]) ════ */}
        <aside className="hidden lg:block w-[240px] shrink-0">
          <div className="sticky top-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full font-mono">
                [02] CITATION INDEX
              </span>
            </div>
            <nav className="space-y-1">
              {OLLAWRITE_RIGHT_TOP_READS.map((title, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTitleClick(title)}
                  className="w-full text-left block px-2.5 py-1.5 text-[13px] font-bold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/70 rounded-lg transition-colors leading-snug cursor-pointer font-['Lato']"
                >
                  <span className="text-indigo-600 font-mono text-[12px] mr-2 font-bold">0{idx + 1}.</span>
                  <span>{title}</span>
                </button>
              ))}
            </nav>
            <button
              onClick={() => handleTitleClick("Site-First")}
              className="inline-flex items-center mt-3 px-2 text-xs font-mono font-bold text-indigo-600 hover:text-indigo-700 hover:underline cursor-pointer gap-1.5"
            >
              <span>EXPLORE_CITATION_INDEX</span>
              <ArrowRight size={14} />
            </button>

            {/* OllaWrite Knowledge CTA Box */}
            <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mx-auto mb-2 font-mono text-sm font-bold">
                [O]
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1 font-['Lato']">
                Run Live Sitemap Audit
              </h4>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed font-['Lato'] font-normal">
                Audit your site’s internal information gain &amp; citation coverage.
              </p>
              <a
                href="https://ollawrite.com"
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold py-2 rounded-md shadow-xs transition-colors"
              >
                EXECUTE_AUDIT →
              </a>
            </div>

          </div>
        </aside>

      </div>

      {/* ── SECTION 5: COMPLETE KNOWLEDGE ARCHIVE ── */}
      <section className="bg-slate-50 border-t border-slate-200 py-8 mt-10 rounded-xl">
        <div className="w-full mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-1.5 font-['Lato'] leading-tight">
            Complete knowledge index
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 font-normal font-['Lato'] leading-relaxed">
            Browse all {articles.length} verified research papers and architecture specifications. Use the query box above for parameter filtering.
          </p>

          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4 font-['Lato']">
              All Research Nodes <span className="text-xs font-mono text-blue-600 font-semibold">({articles.length} verified)</span>
            </h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5 list-none p-0 m-0">
              {articles.map((article) => (
                <li key={article.id}>
                  <button
                    onClick={() => onReadArticle(article)}
                    className="w-full text-left block text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 hover:underline py-0.5 leading-snug cursor-pointer font-['Lato']"
                  >
                    <span className="text-blue-600 font-mono text-xs mr-2 font-bold">[{article.id.replace('art-', '')}]</span>
                    <span>{article.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};
