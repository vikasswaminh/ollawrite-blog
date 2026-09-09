import { useState, useEffect } from 'react';
import { X, ArrowLeft, Link2, Share2, Check, ShieldCheck, Terminal } from 'lucide-react';
import type { Article } from '../shared/types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectArticle: (art: Article) => void;
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

  // Process Markdown Headings
  html = html.replace(/^## (.*$)/gim, (m, g1) => {
    const cleanId = g1.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `<h2 id="${cleanId}" class="text-2xl font-bold text-slate-900 mt-8 mb-4 font-['Lato']">${g1}</h2>`;
  });
  html = html.replace(/^### (.*$)/gim, (m, g1) => {
    const cleanId = g1.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `<h3 id="${cleanId}" class="text-xl font-bold text-slate-900 mt-6 mb-3 font-['Lato']">${g1}</h3>`;
  });
  html = html.replace(/^#### (.*$)/gim, (m, g1) => {
    const cleanId = g1.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `<h4 id="${cleanId}" class="text-lg font-bold text-blue-700 mt-4 mb-2 font-['Lato']">${g1}</h4>`;
  });

  // Bold, Italics, Links
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800 font-semibold">$1</a>');

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote class="pl-4 border-l-4 border-blue-500 my-4 italic text-slate-700 bg-blue-50/50 py-2.5 px-4 rounded-r">$1</blockquote>');

  // Lists
  html = html.replace(/^-\s+(.*$)/gim, '<li class="ml-4 list-disc text-slate-800 my-1">$1</li>');
  html = html.replace(/^(\d+)\.\s+(.*$)/gim, '<li class="ml-4 list-decimal text-slate-800 my-1"><strong>$1.</strong> $2</li>');

  // Paragraph wrapping for text blocks not inside HTML containers
  const blocks = html.split(/\n\n+/);
  const processed = blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<div') || trimmed.startsWith('<h') || trimmed.startsWith('<table') || trimmed.startsWith('<details') || trimmed.startsWith('<blockquote') || trimmed.startsWith('<li') || trimmed.startsWith('<ul') || trimmed.startsWith('<ol')) {
      return trimmed;
    }
    const cleanParagraph = trimmed.replace(/\n+/g, ' ');
    return `<p class="leading-relaxed mb-3 text-slate-800 font-['Lato'] text-base sm:text-lg">${cleanParagraph}</p>`;
  });

  return processed.join('\n');
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onSelectArticle,
  allArticles
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  const related = allArticles.filter(a => a.id !== article.id).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex justify-center p-0 sm:p-4 md:p-6 animate-fade-in font-['Lato']">
      <div className="bg-white w-full max-w-5xl sm:rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-screen sm:max-h-[92vh] text-slate-900">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 font-mono text-xs sm:text-sm font-bold transition cursor-pointer"
          >
            <ArrowLeft size={14} className="text-blue-600" />
            <span>RETURN_TO_GRAPH</span>
          </button>

          <div className="hidden sm:flex items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-600">
            <span className="text-blue-600 font-bold uppercase">{article.category}</span>
            <span>·</span>
            <span className="font-semibold">{article.readTime}</span>
            <span>·</span>
            <span className="text-emerald-600 font-bold">✓ {article.sourceCount} GROUNDED CITATIONS</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 transition text-xs flex items-center gap-1 cursor-pointer font-mono"
              title="Copy link"
            >
              {copied ? <Check size={14} className="text-emerald-600" /> : <Share2 size={14} />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 transition cursor-pointer"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="overflow-y-auto p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Column: Citation Inspector */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-4 space-y-5 font-mono text-xs">
                
                {/* Author Card */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-2.5">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-blue-600/40"
                    />
                    <div>
                      <div className="text-sm font-bold text-slate-900">{article.author.name}</div>
                      <div className="text-xs text-blue-600 font-semibold">{article.author.role}</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-['Lato'] font-normal">
                    {article.author.bio || 'AI systems architect & researcher at OllaWrite.'}
                  </p>
                </div>

                {/* Table of Contents */}
                {article.toc && article.toc.length > 0 && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                      // DOCUMENT_INDEX
                    </div>
                    <nav className="space-y-1.5 text-xs">
                      {article.toc.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-slate-600 hover:text-blue-600 transition leading-snug py-0.5 font-medium"
                        >
                          &gt; {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Grounded Citation Graph */}
                {article.citations && article.citations.length > 0 && (
                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-2.5">
                      <Link2 size={13} className="text-blue-600" />
                      <span>CITATION_GRAPH ({article.citations.length})</span>
                    </div>
                    <div className="space-y-2.5">
                      {article.citations.map((c) => (
                        <div key={c.id} className="text-xs text-slate-700 border-l-2 border-blue-500 pl-2.5 py-0.5">
                          <div className="font-bold text-blue-700">[{c.id < 9 ? `0${c.id}` : c.id}] {c.label}</div>
                          <div className="text-slate-500 text-[11px] mt-0.5">{c.source} ({c.year})</div>
                          {c.excerpt && (
                            <div className="text-slate-600 text-[11px] mt-1 italic font-['Lato']">
                              "{c.excerpt}"
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </aside>

            {/* Right Column: Main Spec Reading Column */}
            <main className="lg:col-span-8 max-w-[700px] w-full">
              
              {/* Category & Status */}
              <div className="flex items-center gap-2 text-xs font-mono mb-3 font-semibold">
                <span className="bg-blue-50 text-blue-700 border border-blue-200 font-bold px-2 py-0.5 rounded uppercase">
                  {article.category}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500">{article.publishedDate}</span>
                <span className="text-slate-300">·</span>
                <span className="text-emerald-600 font-bold">VERIFIED_PASS</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-3 font-['Lato']">
                {article.title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 pb-5 border-b border-slate-200 font-normal font-['Lato']">
                {article.subtitle}
              </p>

              {/* Verified Telemetry Box */}
              {article.verifiedInsight && (
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 mb-6 font-mono">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    <span>AUTOMATED_AUDIT_VERDICT: SHIP_APPROVED</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-['Lato'] font-normal">
                    {article.verifiedInsight.keyTakeaway}
                  </p>
                  <div className="text-xs text-slate-500 mt-3 pt-2.5 border-t border-blue-200 flex items-center justify-between">
                    <span>INDEX: {article.verifiedInsight.supportedBy}</span>
                    <span className="text-emerald-600 font-bold">SCORE: {article.benchmarkScore || '99.4%'}</span>
                  </div>
                </div>
              )}

              {/* Article Content */}
              <div
                className="text-sm sm:text-base leading-relaxed text-slate-800 font-['Lato'] font-normal article-content-rendered"
                dangerouslySetInnerHTML={{ __html: parseArticleContentToHtml(article.content) }}
              />

              {/* Related Articles Footer */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 mb-4">
                  // RELATED_RESEARCH_NODES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {related.map(rel => (
                    <button
                      key={rel.id}
                      onClick={() => onSelectArticle(rel)}
                      className="p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-500 text-left transition cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-mono text-blue-600 font-bold uppercase block mb-1">
                          {rel.category}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug font-['Lato']">
                          {rel.title}
                        </h5>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 mt-2 block font-medium">
                        {rel.readTime} →
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </main>

          </div>
        </div>

      </div>
    </div>
  );
};
