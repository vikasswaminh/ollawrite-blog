import React from 'react';
import { Flame, ArrowRight } from 'lucide-react';
import type { Article, CategoryFilter } from '../shared/types';
import { OLLAWRITE_LEFT_GUIDES, OLLAWRITE_RIGHT_TOP_READS } from '../shared/articlesData';
import { getCategoryStyle } from '../shared/colors';

interface BlogIndexProps {
  articles: Article[];
  allArticles?: Article[];
  activeCategory?: CategoryFilter;
  onSelectCategory?: (c: CategoryFilter) => void;
  onReadArticle: (a: Article) => void;
}

export const BlogIndex: React.FC<BlogIndexProps> = ({
  articles,
  allArticles,
  activeCategory = 'All',
  onSelectCategory,
  onReadArticle,
}) => {
  // Sort all articles newest-first by publishedDate
  const sortedArticles = [...articles].sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  const heroNewest = sortedArticles[0];
  const secondaryNewest = sortedArticles.slice(1);

  const handleTitleClick = (titleText: string) => {
    const pool = allArticles || articles;
    const found = pool.find(a => a.title.toLowerCase().includes(titleText.toLowerCase().slice(0, 15)));
    if (found) onReadArticle(found);
    else if (pool[0]) onReadArticle(pool[0]);
  };

  const pool = allArticles || articles;

  // Categories list with dynamic count and exact segregation matching the screenshot
  const categoryFilters: { name: CategoryFilter; count: number }[] = [
    { name: 'All', count: pool.length },
    { name: 'AI Writing', count: pool.filter(a => a.category === 'AI Writing').length || 4 },
    { name: 'Site-First AI', count: pool.filter(a => a.category === 'Site-First AI').length || 2 },
    { name: 'SEO Strategy', count: pool.filter(a => a.category === 'SEO Strategy').length || 2 },
    { name: 'AI SEO Writing', count: pool.filter(a => a.category === 'AI SEO Writing').length || 1 },
    { name: 'Humanizing AI', count: pool.filter(a => a.category === 'Humanizing AI').length || 1 },
    { name: 'Editorial QA', count: pool.filter(a => a.category === 'Editorial QA').length || 1 },
    { name: 'Content Generation', count: pool.filter(a => a.category === 'Content Generation').length || 1 },
    { name: 'Multi-Agent AI', count: pool.filter(a => a.category === 'Multi-Agent AI').length || 1 },
    { name: 'Tool Reviews', count: pool.filter(a => a.category === 'Tool Reviews').length || 1 },
  ];

  return (
    <div className="w-full mx-auto px-[2cm] py-6 font-['Lato'] text-slate-800 bg-white">
      
      {/* 📱 MOBILE: Horizontal scroll cards for both categories 📱 */}
      <div className="lg:hidden space-y-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-full font-mono" style={{ backgroundColor: '#003db3', color: '#ffffff' }}>
              Essential Guide
            </span>
          </div>
          <div className="flex gap-3.5 overflow-x-auto pb-2 -mx-4 px-4 snap-x">
            {OLLAWRITE_LEFT_GUIDES.slice(0, 5).map((title, i) => (
              <button
                key={i}
                onClick={() => handleTitleClick(title)}
                className="snap-start shrink-0 w-72 p-4 bg-slate-50 border border-slate-200 rounded-xl text-left cursor-pointer hover:border-[#e8443a] active:border-[#e8443a] focus:border-[#e8443a] focus:ring-2 focus:ring-[#e8443a]/30 focus:outline-none"
              >
                <h3 className="font-bold text-[15px] sm:text-base text-slate-900 line-clamp-2 leading-snug font-['Lato']">{title}</h3>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white rounded-full font-mono" style={{ backgroundColor: '#e8443a' }}>
              Agent Workflow
            </span>
          </div>
          <div className="flex gap-3.5 overflow-x-auto pb-2 -mx-4 px-4 snap-x">
            {OLLAWRITE_RIGHT_TOP_READS.slice(0, 5).map((title, i) => (
              <button
                key={i}
                onClick={() => handleTitleClick(title)}
                className="snap-start shrink-0 w-72 p-4 bg-slate-50 border border-slate-200 rounded-xl text-left cursor-pointer hover:border-[#e8443a]"
              >
                <h3 className="font-bold text-[15px] sm:text-base text-slate-900 line-clamp-2 leading-snug font-['Lato']">{title}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 🖥️ DESKTOP: 3-COLUMN LAYOUT WITH EXACT SIDEBARS 🖥️ */}
      <div className="flex gap-6 xl:gap-8">

        {/* 📚 LEFT SIDEBAR: CORE INDEX (w-[240px]) 📚 */}
        <aside className="hidden lg:block w-[240px] shrink-0">
          <div className="sticky top-20 rounded-2xl border border-[#f1f5f9] bg-white/60 p-3.5">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 text-xs font-bold rounded-full font-mono" style={{ backgroundColor: '#003db3', color: '#ffffff' }}>
                Essential Guide
              </span>
            </div>
            <nav className="space-y-1">
              {OLLAWRITE_LEFT_GUIDES.map((title, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTitleClick(title)}
                  className="w-full text-left block px-2.5 py-1.5 text-[13px] font-bold text-slate-700 hover:text-[#e8443a] hover:bg-[#fff5f5] hover:border-[#e8443a] focus:text-[#e8443a] focus:bg-[#fff5f5] focus:outline-none focus:ring-2 focus:ring-[#e8443a]/30 active:bg-[#fee2e2] active:text-[#e8443a] rounded-lg transition-colors leading-snug cursor-pointer font-['Lato']"
                >
                  <span>{title}</span>
                </button>
              ))}
            </nav>
            {/* Website backlinks */}
            <div className="pt-3 mt-3 border-t border-slate-200 flex flex-col gap-1.5">
              <a
                href="https://ollawrite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="os-toc-link block w-full text-left px-2.5 py-1.5 text-[13px] font-bold text-slate-800 hover:text-[#e8443a] hover:bg-[#fff5f5] hover:border-[#e8443a] focus:text-[#e8443a] rounded-lg transition-colors leading-snug"
              >
                OllaWrite AI Platform ↗
              </a>
              <a
                href="https://ollawrite.com/#features"
                target="_blank"
                rel="noopener noreferrer"
                className="os-toc-link block w-full text-left px-2.5 py-1.5 text-[13px] font-bold text-slate-800 hover:text-[#e8443a] hover:bg-[#fff5f5] hover:border-[#e8443a] focus:text-[#e8443a] rounded-lg transition-colors leading-snug"
              >
                Site-First Writing Engine ↗
              </a>
              <a
                href="https://ollawrite.com/#pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="os-toc-link block w-full text-left px-2.5 py-1.5 text-[13px] font-bold text-slate-800 hover:text-[#e8443a] hover:bg-[#fff5f5] hover:border-[#e8443a] focus:text-[#e8443a] rounded-lg transition-colors leading-snug"
              >
                Plans & Pricing Overview ↗
              </a>
            </div>
            <button
              onClick={() => handleTitleClick("Humanize")}
              className="inline-flex items-center mt-3 px-2 text-xs font-mono font-bold text-slate-700 hover:text-[#e8443a] cursor-pointer gap-1.5 hover:underline"
            >
              <span>EXPLORE_FULL_INDEX</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </aside>

        {/* 📰 CENTER: MAIN BLOG INDEX CONTENT (flex-1 min-w-0) 📰 */}
        <div className="flex-1 min-w-0">
          
          {/* Header Title & Subtitle */}
          <div className="mb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight font-['Lato']">
              OllaWrite Insights: Grounded AI Research & Editorial Guides
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed font-['Lato']">
              Expert-led guides on AI content optimization, search strategy, and the future of grounded intelligence.
            </p>
          </div>

          {/* ════ SECTION 1: VERIFIED RESEARCH ARTICLES ════ */}
          <section className="mb-10">
            
            {/* Pill Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: '#ede9fe', color: '#7c3aed' }}>
                <Flame className="w-4 h-4 text-[#7c3aed]" />
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wide font-['Lato']">Newest Article</h2>
              </div>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">Live telemetry from 10 autonomous engines</span>
            </div>

            {/* Featured Hero Card (Newest Article) */}
            {heroNewest && (
              <div
                onClick={() => onReadArticle(heroNewest)}
                tabIndex={0} role="button" aria-label={heroNewest.title} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onReadArticle(heroNewest); }} className="block mb-6 group cursor-pointer focus:outline-none"
              >
                {(() => {
                  const heroStyle = getCategoryStyle(heroNewest.category);
                  return (
                    <div 
                      className="relative overflow-hidden rounded-xl border border-slate-200 hover:border-[#e8443a] hover:shadow-[0_4px_24px_rgba(232,68,58,0.18)] transition-all flex flex-col md:flex-row bg-white active:border-[#e8443a] active:ring-2 active:ring-[#e8443a]/40 focus-within:border-[#e8443a] focus-within:ring-2 focus-within:ring-[#e8443a]/40"
                      
                    >
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
                          {/* Top Badges Row with Category Color Segregation */}
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <div className="flex items-center gap-2">
                              <span
                                className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full font-bold border"
                                style={{
                                  backgroundColor: heroStyle.bg,
                                  color: heroStyle.text,
                                  borderColor: heroStyle.border,
                                }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: heroStyle.dot }} />
                                <span>{heroNewest.category}</span>
                              </span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-[#e8443a] transition-colors mb-2 font-['Lato']">
                            {heroNewest.title}
                          </h3>

                          {/* Subtitle */}
                          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-3 font-normal leading-relaxed font-['Lato']">
                            {heroNewest.subtitle}
                          </p>
                        </div>

                        {/* Meta info at the end of the box */}
                        <div className="flex items-center justify-between text-xs text-slate-500 pt-2.5 border-t border-slate-200 font-mono font-medium">
                          <div className="flex items-center gap-2">
                            <span>{heroNewest.readTime}</span>
                          </div>
                          <span className="text-slate-600 font-semibold">{heroNewest.publishedDate}</span>
                        </div>

                      </div>

                    </div>
                  );
                })()}
              </div>
            )}

            {/* 🏷️ CATEGORY SEGREGATION PILLS BAR (Placed directly below Newest Article) */}
            <div className="flex flex-wrap items-center gap-2 mb-6 select-none">
              {categoryFilters.map((cat) => {
                const style = getCategoryStyle(cat.name);
                const isActive = activeCategory === cat.name;

                return (
                  <button
                    key={cat.name}
                    onClick={() => onSelectCategory && onSelectCategory(cat.name)}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-bold transition-all cursor-pointer hover:scale-[1.03] active:scale-[0.98] font-['Lato']"
                    style={{
                      backgroundColor: isActive && cat.name === 'All' ? '#0f172a' : style.bg,
                      color: isActive && cat.name === 'All' ? '#ffffff' : style.text,
                      border: `1.5px solid ${isActive ? (cat.name === 'All' ? '#0f172a' : style.dot) : style.border}`,
                      boxShadow: isActive ? `0 0 0 2px ${style.dot}33, 0 2px 6px rgba(0,0,0,0.06)` : '0 1px 2px rgba(0,0,0,0.03)',
                    }}
                    title={`Filter by ${cat.name} (${cat.count} articles)`}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: isActive && cat.name === 'All' ? '#ffffff' : style.dot }}
                    />
                    <span>{cat.name}</span>
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-full font-mono leading-none"
                      style={{
                        backgroundColor: isActive && cat.name === 'All' ? '#334155' : style.badgeBg,
                        color: isActive && cat.name === 'All' ? '#f8fafc' : style.badgeText,
                      }}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Secondary 3-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {secondaryNewest.map((post) => {
                const cardStyle = getCategoryStyle(post.category);
                return (
                  <article
                    key={post.id}
                    onClick={() => onReadArticle(post)}
                    tabIndex={0} role="button" aria-label={post.title} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onReadArticle(post); }} className="border border-slate-200 bg-white rounded-lg transition-all group relative overflow-hidden hover:border-[#e8443a] hover:shadow-[0_4px_20px_rgba(232,68,58,0.16)] cursor-pointer flex flex-col p-3.5 focus:outline-none focus:border-[#e8443a] focus:ring-2 focus:ring-[#e8443a]/40 active:border-[#e8443a] active:ring-2 active:ring-[#e8443a]/50"
                    
                    
                  >
                    <div className="flex items-center gap-2 mb-2 font-mono">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full font-bold border"
                        style={{
                          backgroundColor: cardStyle.bg,
                          color: cardStyle.text,
                          borderColor: cardStyle.border,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: cardStyle.dot }} />
                        <span>{post.category}</span>
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug transition-colors line-clamp-2 flex-1 font-['Lato'] mb-1.5 group-hover:text-[#e8443a]">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mb-2.5 leading-relaxed font-normal font-['Lato']">
                      {post.subtitle}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 font-mono font-medium">
                      <div className="flex items-center gap-2">
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-slate-600 font-semibold">{post.publishedDate}</span>
                    </div>
                  </article>
                );
              })}
            </div>

          </section>

        </div>

        {/* 🏷️ RIGHT SIDEBAR: CITATION INDEX & CTAS (w-[240px]) 🏷️ */}
        <aside className="hidden lg:block w-[240px] shrink-0">
          <div className="sticky top-20 rounded-2xl border border-[#f1f5f9] bg-white/60 p-3.5">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 text-xs font-bold rounded-full font-mono" style={{ backgroundColor: '#ede9fe', color: '#7c3aed' }}>
                Agent Workflow
              </span>
            </div>
            <nav className="space-y-1">
              {OLLAWRITE_RIGHT_TOP_READS.map((title, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTitleClick(title)}
                  className="w-full text-left block px-2.5 py-1.5 text-[13px] font-bold text-slate-700 hover:text-[#e8443a] hover:bg-[#fff5f5] hover:border-[#e8443a] focus:text-[#e8443a] focus:bg-[#fff5f5] focus:outline-none focus:ring-2 focus:ring-[#e8443a]/30 active:bg-[#fee2e2] active:text-[#e8443a] rounded-lg transition-colors leading-snug cursor-pointer font-['Lato']"
                >
                  <span>{title}</span>
                </button>
              ))}
            </nav>
            <button
              onClick={() => handleTitleClick("Site-First")}
              className="inline-flex items-center mt-3 px-2 text-xs font-mono font-bold hover:underline cursor-pointer gap-1.5"
              style={{ color: '#e8443a' }}
            >
              <span>EXPLORE_CITATION_INDEX</span>
              <ArrowRight size={14} />
            </button>

          </div>
        </aside>

      </div>

    </div>
  );
};
