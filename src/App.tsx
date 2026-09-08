import { useState, useEffect, Component, type ReactNode, type ErrorInfo } from 'react';
import { Header } from './components/Header';
import { BlogIndex } from './components/BlogIndex';
import { BlogPostPage } from './components/BlogPostPage';
import { SearchModal } from './components/SearchModal';
import { ARTICLES_DATA } from './shared/articlesData';
import type { Article, CategoryFilter } from './shared/types';
import './styles/knowledge.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Knowledge Base App caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'Lato, sans-serif', maxWidth: '600px', margin: '40px auto', textAlign: 'center', background: '#090d16', color: '#f8fafc', border: '1px solid #1e293b', borderRadius: '12px' }}>
          <h2 style={{ color: '#06b6d4', fontSize: '20px' }}>[ERR_KNOWLEDGE_BASE_RENDER]</h2>
          <p style={{ marginTop: '10px', color: '#94a3b8', fontSize: '13px' }}>{this.state.error?.message}</p>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: '20px', padding: '8px 18px', background: '#06b6d4', color: '#090d16', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            RELOAD_SESSION
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
  // Black & White (Light / Dark) Theme State
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('ollawrite_theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ollawrite_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredArticles = activeCategory === 'All'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter(a => a.category === activeCategory);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-['Lato'] selection:bg-[#dbe7ff] selection:text-[#002d86]">

        {/* Technical Header with B&W Theme Switch */}
        <Header
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onOpenSearch={() => setIsSearchOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* 3-Column Knowledge Layout or Full Dedicated Blog Webpage */}
        <main className="flex-1">
          {selectedArticle ? (
            <BlogPostPage
              article={selectedArticle}
              onBack={() => setSelectedArticle(null)}
              onSelectArticle={setSelectedArticle}
              allArticles={ARTICLES_DATA}
            />
          ) : (
            <BlogIndex
              articles={filteredArticles}
              allArticles={ARTICLES_DATA}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              onReadArticle={setSelectedArticle}
            />
          )}
        </main>

        {/* Search Modal (Ctrl+K) */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          articles={ARTICLES_DATA}
          onSelectArticle={(art) => {
            setSelectedArticle(art);
            setIsSearchOpen(false);
          }}
        />

      </div>
    </ErrorBoundary>
  );
}

export default App;
