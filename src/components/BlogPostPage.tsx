import React, { useEffect } from 'react';
import type { Article } from '../shared/types';
import { ArrowLeft, Check, Share2 } from 'lucide-react';

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

    return `<div class="overflow-x-auto my-6"><table class="prose-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
  });

  // Process Headings
  html = html.replace(/^## (.*$)/gim, (m, g1) => {
    const cleanId = g1.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `<h2 id="${cleanId}" class="text-2xl sm:text-3xl font-bold text-slate-900 mt-10 mb-4 font-['Lato']">${g1}</h2>`;
  });
  html = html.replace(/^### (.*$)/gim, (m, g1) => {
    const cleanId = g1.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `<h3 id="${cleanId}" class="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3 font-['Lato']">${g1}</h3>`;
  });
  html = html.replace(/^#### (.*$)/gim, (m, g1) => {
    const cleanId = g1.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `<h4 id="${cleanId}" class="text-lg font-bold text-blue-700 mt-5 mb-2 font-['Lato']">${g1}</h4>`;
  });

  // Formatting
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800 font-semibold">$1</a>');

  // Blockquotes & Lists
  html = html.replace(/^> (.*$)/gim, '<blockquote class="pl-4 border-l-4 border-blue-500 my-5 italic text-slate-700 bg-blue-50/50 py-3 px-4 rounded-r">$1</blockquote>');
  html = html.replace(/^-\s+(.*$)/gim, '<li class="ml-4 list-disc text-slate-800 my-1">$1</li>');
  html = html.replace(/^(\d+)\.\s+(.*$)/gim, '<li class="ml-4 list-decimal text-slate-800 my-1"><strong>$1.</strong> $2</li>');

  const blocks = html.split(/\n\n+/);
  const processed = blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<div') || trimmed.startsWith('<h') || trimmed.startsWith('<table') || trimmed.startsWith('<details') || trimmed.startsWith('<blockquote') || trimmed.startsWith('<li')) {
      return trimmed;
    }
    return `<p class="leading-relaxed mb-5 text-slate-800 font-['Lato'] text-base sm:text-lg">${trimmed.replace(/\n/g, '<br/>')}</p>`;
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

  const essentialGuides = allArticles.filter(a => a.id !== article.id).slice(0, 4);
  const agentWorkflows = allArticles.filter(a => a.id !== article.id).slice(4, 8);

  const websiteBacklinks = [
    { title: 'OllaWrite AI Platform ↗', href: 'https://ollawrite.com' },
    { title: 'Site-First Writing Engine ↗', href: 'https://ollawrite.com/#features' },
    { title: 'Plans & Pricing Overview ↗', href: 'https://ollawrite.com/#pricing' }
  ];

  const primaryTag = article.tags?.[0] || article.category || 'Insights';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white text-slate-900 font-['Lato'] min-h-screen py-8 px-4 sm:px-6 lg:px-12 animate-fade-in">
      <div className="max-w-[1560px] mx-auto">
        
        {/* Navigation & Breadcrumbs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            <button onClick={onBack} className="hover:text-blue-600 transition cursor-pointer font-bold text-blue-600 flex items-center gap-1">
              <ArrowLeft size={16} /> Home
            </button>
            <span>/</span>
            <button onClick={onBack} className="hover:text-blue-600 transition cursor-pointer">
              Blog
            </button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{primaryTag}</span>
          </nav>

          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 transition text-xs font-mono font-bold cursor-pointer"
          >
            {copied ? <Check size={14} className="text-emerald-600" /> : <Share2 size={14} />}
            <span>{copied ? 'COPIED_LINK' : 'SHARE_ARTICLE'}</span>
          </button>
        </div>

        {/* Article Post Header */}
        <header className="post-header mb-10 pb-8 border-b border-slate-200">
          <div className="post-meta-caption flex items-center gap-3 text-sm font-bold text-blue-600 uppercase mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs tracking-wider">{primaryTag}</span>
            <span>•</span>
            <span className="text-slate-500 font-semibold">{article.publishedDate}</span>
            <span>•</span>
            <span className="text-slate-500 font-semibold">{article.readTime}</span>
          </div>

          <h1 className="os-display-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4 font-['Lato']">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="os-lead-paragraph text-lg sm:text-xl text-slate-600 leading-relaxed mb-6 font-normal">
              {article.subtitle}
            </p>
          )}

          {/* Author & Hashtags Bar */}
          <div className="author-hashtags-row flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <div className="author-info-group flex items-center gap-3">
              <div className="author-avatar-lightning w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-lg">
                ⚡
              </div>
              <div>
                <div className="author-title-name font-bold text-slate-900 text-base">{article.author.name}</div>
                <div className="author-subtitle-link text-xs text-slate-500">{article.author.role || 'OllaWrite Content Architecture'}</div>
              </div>
            </div>

            <div className="hashtags-group flex flex-wrap gap-2 text-sm font-semibold text-blue-600">
              <span>#{primaryTag.toLowerCase().replace(/[^a-z0-9]/g, '')}</span>
              <span>#aiwriting</span>
              <span>#agenticAI</span>
              <span>#contentstrategy</span>
            </div>
          </div>
        </header>

        {/* 3-Column Grid Layout (Matching localhost:4321) */}
        <div className="blog-layout-grid grid grid-cols-1 lg:grid-cols-[270px_1fr_270px] gap-8 items-start">
          
          {/* Left Sidebar: Essential Guides */}
          <aside className="blog-sidebar sticky top-24 space-y-4">
            <span className="sidebar-title blue block text-xs font-bold uppercase tracking-wider bg-blue-600 text-white px-3 py-1.5 rounded-full w-max mb-3">
              Essential Guides
            </span>
            <div className="sidebar-cards-stack flex flex-col gap-2.5">
              {essentialGuides.map((g) => (
                <button
                  key={g.id}
                  onClick={() => onSelectArticle(g)}
                  className="os-toc-link text-left w-full p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/50 text-slate-800 font-medium text-xs sm:text-sm transition cursor-pointer line-clamp-2"
                >
                  {g.title}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
                {websiteBacklinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="os-toc-link block p-3 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-500 text-blue-600 font-bold text-xs sm:text-sm transition"
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
              className="prose text-slate-800 space-y-6 text-base sm:text-lg font-['Lato']"
              dangerouslySetInnerHTML={{ __html: parseArticleContentToHtml(article.content) }}
            />

            {/* Bringing It All Together Highlight Box */}
            <section className="bringing-together-card mt-12 p-8 sm:p-10 bg-blue-50/70 border border-blue-200 border-t-4 border-t-blue-600 rounded-xl text-center shadow-xs">
              <h2 id="bringing-it-all-together" className="bringing-together-title text-2xl sm:text-3xl font-extrabold text-blue-900 mb-3">
                Bringing It All Together
              </h2>
              <p className="bringing-together-desc text-base sm:text-lg text-slate-700 max-w-xl mx-auto mb-6 leading-relaxed">
                OllaWrite offers robust, grounded deployment for autonomous AI content systems with built-in audit logging and human approval gates.
              </p>
              <div className="cta-button-wrapper flex justify-center">
                <a
                  href="https://ollawrite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="os-btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-md transition transform hover:-translate-y-0.5 inline-block"
                >
                  Get Started Today →
                </a>
              </div>
            </section>
          </main>

          {/* Right Sidebar: Agent Workflows */}
          <aside className="blog-sidebar sticky top-24 space-y-4">
            <span className="sidebar-title purple block text-xs font-bold uppercase tracking-wider bg-blue-600 text-white px-3 py-1.5 rounded-full w-max mb-3">
              Agent Workflows
            </span>
            <div className="sidebar-cards-stack flex flex-col gap-2.5">
              {agentWorkflows.map((w) => (
                <button
                  key={w.id}
                  onClick={() => onSelectArticle(w)}
                  className="os-toc-link text-left w-full p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/50 text-slate-800 font-medium text-xs sm:text-sm transition cursor-pointer line-clamp-2"
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
