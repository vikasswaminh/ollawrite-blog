import { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, Terminal, Database } from 'lucide-react';
import type { Article } from '../shared/types';
import { POPULAR_SEARCH_TOPICS } from '../shared/articlesData';
import { cycleAccent, getCategoryStyle } from '../shared/colors';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === '' 
    ? [] 
    : articles.filter(a => 
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.summary.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase()) ||
        (a.tags?.some(t => t.toLowerCase().includes(query.toLowerCase())) ?? false)
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm flex items-start justify-center pt-12 sm:pt-20 px-4 animate-fade-in font-['Lato']">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden text-slate-900">
        
        {/* Search Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Terminal className="w-5 h-5 text-[#003db3] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="QUERY_KNOWLEDGE_BASE (e.g. sitemap, multi-agent, SEO)..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none font-mono font-medium py-1"
          />
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-200 transition cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Popular Topics */}
        {query.trim() === '' && (
          <div className="p-5">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
              <Database size={14} className="text-[#003db3]" />
              <span>INDEXED_TOPIC_VECTORS</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCH_TOPICS.map((topic, i) => {
                const accent = cycleAccent(i);
                return (
                  <button
                    key={topic}
                    onClick={() => setQuery(topic)}
                    className="px-3 py-1.5 rounded-lg border bg-slate-50 text-xs font-mono font-semibold text-slate-700 transition cursor-pointer"
                    style={{ borderColor: `${accent}55`, color: accent }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${accent}18`;
                      e.currentTarget.style.borderColor = accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.borderColor = `${accent}55`;
                    }}
                  >
                    &gt; {topic}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Results List */}
        {query.trim() !== '' && (
          <div className="max-h-[380px] overflow-y-auto divide-y divide-slate-100 p-3">
            {filtered.length > 0 ? (
              filtered.map((art) => (
                <button
                  key={art.id}
                  onClick={() => {
                    onSelectArticle(art);
                    onClose();
                  }}
                  className="w-full text-left p-3.5 rounded-xl hover:bg-slate-50 transition flex items-center justify-between group cursor-pointer"
                >
                  <div className="pr-3">
                    <div className="flex items-center gap-2 text-xs font-mono mb-1">
                      <span className="font-bold uppercase" style={{ color: getCategoryStyle(art.category).accent }}>[{art.category}]</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#003db3] transition font-['Lato']">
                      {art.title}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-1 mt-1 font-['Lato'] font-normal">
                      {art.subtitle}
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-[#003db3] group-hover:translate-x-0.5 transition shrink-0" />
                </button>
              ))
            ) : (
              <div className="p-8 text-center text-slate-500 text-xs sm:text-sm font-mono">
                NO_VECTORS_FOUND_FOR "{query}"
              </div>
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between font-mono font-medium">
          <span>ESC to exit console</span>
          <span>{articles.length} specifications in vector index</span>
        </div>

      </div>
    </div>
  );
};
