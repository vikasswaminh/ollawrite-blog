import React, { useEffect } from 'react';
import type { Article } from '../shared/types';
import { ArrowLeft, Check, Share2 } from 'lucide-react';
import { getCategoryStyle, cycleAccent } from '../shared/colors';

interface BlogPostPageProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  allArticles: Article[];
}

function parseArticleContentToHtml(content: string): string {
  if (!content) return '';

  let html = content;

  // Process markdown tables
  html = html.replace(/((?:\|[^\n]+\|\n?)+)/g, (match) => {
    const lines = match.trim().split('\n').filter(l => l.trim().startsWith('|'));
    if (lines.length < 2) return match;
    const headerRow = lines[0];
    const bodyRows = lines.slice(2);
    const parseCells = (row: string) => row.split('|').slice(1, -1).map(c => c.trim());
    
    const headers = parseCells(headerRow);
    const ths = headers.map(h => `<th>${h}</th>`).join('');
    const trs = bodyRows.map(r => {
      const cells = parseCells(r);
      return `<tr>${cells.map(c => `<td>${c}</td>`).join('')}</tr>`;
    }).join('');

    return `<div class="overflow-x-auto mt-0 mb-3"><table class="prose-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
  });

  // Process Headings
  html = html.replace(/^## (.*$)/gim, (m, g1) => {
    const cleanId = g1.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `<h2 id="${cleanId}" class="text-lg sm:text-xl font-bold text-slate-900 mt-4 mb-2 font-['Lato']">${g1}</h2>`;
  });
  html = html.replace(/^### (.*$)/gim, (m, g1) => {
    const cleanId = g1.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `<h3 id="${cleanId}" class="text-base sm:text-lg font-bold text-slate-900 mt-3.5 mb-1.5 font-['Lato']">${g1}</h3>`;
  });
  html = html.replace(/^#### (.*$)/gim, (m, g1) => {
    const cleanId = g1.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `<h4 id="${cleanId}" class="text-sm sm:text-base font-bold text-[#003db3] mt-2.5 mb-1 font-['Lato']">${g1}</h4>`;
  });

  // Formatting
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#003db3] underline hover:text-[#002d86] font-medium">$1</a>');

  // Blockquotes & Lists
  html = html.replace(/^> (.*$)/gim, '<blockquote class="pl-3 border-l-4 border-[#003db3] my-2.5 italic text-slate-700 bg-[#eef4ff]/60 py-2 px-3 rounded-r text-sm sm:text-base">$1</blockquote>');
  html = html.replace(/^-\s+(.*$)/gim, '<li class="ml-4 list-disc text-slate-800 my-0.5 text-sm sm:text-base">$1</li>');
  html = html.replace(/^(\d+)\.\s+(.*$)/gim, '<li class="ml-4 list-decimal text-slate-800 my-0.5 text-sm sm:text-base"><strong>$1.</strong> $2</li>');

  const blocks = html.split(/\n\n+/);
  const processed = blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<div') || trimmed.startsWith('<h') || trimmed.startsWith('<table') || trimmed.startsWith('<details') || trimmed.startsWith('<blockquote') || trimmed.startsWith('<li') || trimmed.startsWith('<ul') || trimmed.startsWith('<ol')) {
      return trimmed;
    }
    const cleanParagraph = trimmed.replace(/\n+/g, ' ');
    return `<p class="leading-relaxed mb-3 text-slate-800 font-['Lato'] text-sm sm:text-base">${cleanParagraph}</p>`;
  });

  return processed.join('\n');
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  article,
  onBack,
  onSelectArticle,
  allArticles
}) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article]);

  // All other articles, newest-first by publishedDate
  const others = allArticles
    .filter(a => a.id !== article.id)
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
  const essentialGuides = others.slice(0, 4);
  const agentWorkflows = others.slice(4, 8);

  const websiteBacklinks = [
    { title: 'OllaWrite AI Platform ↗', href: 'https://www.ollawrite.com' },
    { title: 'Site-First Writing Engine ↗', href: 'https://www.ollawrite.com/#features' },
    { title: 'Plans & Pricing Overview ↗', href: 'https://www.ollawrite.com/#pricing' }
  ];

  const primaryTag = article.tags?.[0] || article.category || 'Insights';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white text-slate-900 font-['Lato'] min-h-screen py-4 px-3 sm:px-5 lg:px-8 animate-fade-in">
      <div className="max-w-[1560px] mx-auto">
        
        {/* Navigation & Breadcrumbs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-2.5 border-b border-slate-200">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <button onClick={onBack} className="hover:text-[#e8443a] transition cursor-pointer font-bold text-[#e8443a] flex items-center gap-1">
              <ArrowLeft size={15} /> Home
            </button>
            <span>/</span>
            <button onClick={onBack} className="hover:text-[#e8443a] transition cursor-pointer">
              Blog
            </button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{primaryTag}</span>
          </nav>

          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 transition text-xs font-mono font-bold cursor-pointer"
          >
            {copied ? <Check size={13} className="text-emerald-600" /> : <Share2 size={13} />}
            <span>{copied ? 'COPIED_LINK' : 'SHARE_ARTICLE'}</span>
          </button>
        </div>

        {/* Article Post Header */}
        <header className="post-header mb-4 pb-3 border-b border-slate-200">
          <div className="post-meta-caption flex items-center gap-2.5 text-xs font-bold text-[#003db3] uppercase mb-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] tracking-wider" style={{ backgroundColor: getCategoryStyle(article.category).bg, color: getCategoryStyle(article.category).text }}>{primaryTag}</span>
            <span>•</span>
            <span className="text-slate-500 font-semibold">{article.publishedDate}</span>
            <span>•</span>
            <span className="text-slate-500 font-semibold">{article.readTime}</span>
          </div>

          <h1 className="os-display-title text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-2 font-['Lato']">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="os-lead-paragraph text-sm sm:text-base text-slate-600 leading-relaxed mb-3 font-normal">
              {article.subtitle}
            </p>
          )}

          {/* Author & Hashtags Bar */}
          <div className="author-hashtags-row flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-slate-100">
            <div className="author-info-group flex items-center gap-2.5">
              <div className="author-avatar-lightning w-8 h-8 rounded-full bg-[#eef4ff] border border-[#c7d8f8] flex items-center justify-center text-sm">
                ⚡
              </div>
              <div>
                <div className="author-title-name font-bold text-slate-900 text-sm">{article.author.name}</div>
                <div className="author-subtitle-link text-[11px] text-slate-500">{article.author.role || 'OllaWrite Content Architecture'}</div>
              </div>
            </div>

            <div className="hashtags-group flex flex-wrap gap-2 text-xs font-semibold">
              <span style={{ color: cycleAccent(0) }}>#{primaryTag.toLowerCase().replace(/[^a-z0-9]/g, '')}</span>
              <span style={{ color: cycleAccent(1) }}>#aiwriting</span>
              <span style={{ color: cycleAccent(2) }}>#agenticAI</span>
              <span style={{ color: cycleAccent(3) }}>#contentstrategy</span>
            </div>
          </div>
        </header>

        {/* 3-Column Grid Layout */}
        <div className="blog-layout-grid grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-4 xl:gap-5 items-start">
          
          {/* Left Sidebar: Essential Guides */}
          <aside className="blog-sidebar sticky top-16 space-y-2.5">
            <span className="sidebar-title blue block text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full w-max mb-2" style={{ backgroundColor: '#003db3' }}>
              Essential Guides
            </span>
            <div className="sidebar-cards-stack flex flex-col gap-1.5">
              {essentialGuides.map((g) => (
                <button
                  key={g.id}
                  onClick={() => onSelectArticle(g)}
                  className="os-toc-link text-left w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 hover:text-[#e8443a] font-bold text-xs sm:text-[13px] transition-colors cursor-pointer line-clamp-2"
                >
                  {g.title}
                </button>
              ))}

              <div className="pt-2 border-t border-slate-200 flex flex-col gap-1.5">
                {websiteBacklinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="os-toc-link block p-2 bg-slate-50 border border-slate-200 rounded-lg hover:border-[#e8443a] hover:text-[#e8443a] text-slate-800 font-bold text-xs transition"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Center Column: Main Content */}
          <main className="blog-main-column min-w-0">
            <div
              className="prose text-slate-800 space-y-2.5 text-sm sm:text-base font-['Lato']"
              dangerouslySetInnerHTML={{ __html: parseArticleContentToHtml(article.content) }}
            />
          </main>

          {/* Right Sidebar: Agent Workflows */}
          <aside className="blog-sidebar sticky top-16 space-y-2.5">
            <span className="sidebar-title purple block text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full w-max mb-2" style={{ backgroundColor: '#e8443a' }}>
              Agent Workflows
            </span>
            <div className="sidebar-cards-stack flex flex-col gap-1.5">
              {agentWorkflows.map((w) => (
                <button
                  key={w.id}
                  onClick={() => onSelectArticle(w)}
                  className="os-toc-link text-left w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 hover:text-[#e8443a] font-bold text-xs sm:text-[13px] transition-colors cursor-pointer line-clamp-2"
                >
                  {w.title}
                </button>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
