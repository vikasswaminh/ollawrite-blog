import { useState } from 'react';
import { ChevronDown, Menu, X, Search, Terminal, Cpu, Sun, Moon } from 'lucide-react';
import type { CategoryFilter } from '../shared/types';

interface HeaderProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (c: CategoryFilter) => void;
  onOpenSearch: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeCategory, 
  onSelectCategory, 
  onOpenSearch,
  theme,
  onToggleTheme
}) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm font-['Lato']">
      
      {/* ── 1. TECHNICAL TELEMETRY TOP BAR ── */}
      <div className="bg-slate-100 text-slate-700 text-[12px] sm:text-[13px] font-mono tracking-wider uppercase h-9 flex items-center border-b border-slate-200 select-none overflow-hidden font-medium">
        <div className="w-full mx-auto px-[2cm] flex items-center justify-between">
          
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-900 font-bold">NODE_INDEX: LIVE_V4.2</span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="text-slate-600 hidden sm:inline">LATENCY: 14MS</span>
            <span className="text-slate-300 hidden md:inline">·</span>
            <span className="text-blue-600 font-bold hidden md:inline">100% GROUNDED SOURCES</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-600 font-mono whitespace-nowrap font-medium">
            <a href="#docs" className="hidden lg:inline hover:text-blue-600 transition-colors">API_DOCS</a>
            <span className="text-slate-300 hidden lg:inline">·</span>
            <a href="#sandbox" className="hidden md:inline hover:text-blue-600 transition-colors">RAG_SANDBOX</a>
            <span className="text-slate-300 hidden md:inline">·</span>
            <a href="https://ollawrite.com" className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1.5 transition-colors">
              <span>[+]</span> RUN_AUDIT →
            </a>
          </div>

        </div>
      </div>

      {/* ── 2. MAIN NAV ── */}
      <div className="h-[60px] bg-white flex items-center">
        <div className="w-full mx-auto px-[2cm] flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => onSelectCategory('All')} 
            className="flex items-center gap-2.5 text-left cursor-pointer focus:outline-none group shrink-0"
            aria-label="OllaWrite Knowledge Base Home"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-600/40 text-blue-600 flex items-center justify-center font-mono font-bold text-lg shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-all">
              [O]
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-slate-900 font-bold text-xl sm:text-2xl tracking-tight leading-none font-['Lato']">
                  Olla<span className="text-blue-600">Write</span>
                </span>
                <span className="bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded tracking-wider uppercase border border-blue-200">
                  KNOWLEDGE
                </span>
              </div>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 font-['Lato']">
            <button 
              onClick={() => onSelectCategory('Site-First AI')}
              className={`flex items-center gap-1 text-[14px] font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'Site-First AI' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              <span>Site-First</span>
              <ChevronDown size={14} className="text-slate-400 stroke-[2.5]" />
            </button>

            <button 
              onClick={() => onSelectCategory('All')}
              className={`text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap ${
                activeCategory === 'All' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Knowledge Base
            </button>

            <button 
              onClick={() => onSelectCategory('Multi-Agent AI')}
              className={`flex items-center gap-1 text-[14px] font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'Multi-Agent AI' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              <span>Multi-Agent</span>
              <ChevronDown size={14} className="text-slate-400 stroke-[2.5]" />
            </button>

            <button 
              onClick={() => onSelectCategory('Editorial QA')}
              className={`flex items-center gap-1 text-[14px] font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'Editorial QA' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              <span>QA Gates</span>
              <ChevronDown size={14} className="text-slate-400 stroke-[2.5]" />
            </button>

            <button 
              onClick={() => onSelectCategory('SEO Strategy')}
              className={`flex items-center gap-1 text-[14px] font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'SEO Strategy' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              <span>SERP Impact</span>
              <ChevronDown size={14} className="text-slate-400 stroke-[2.5]" />
            </button>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* BLACK & WHITE / DARK & LIGHT THEME TOGGLE SWITCH */}
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 font-mono text-xs font-bold transition-all cursor-pointer shadow-xs"
              title={`Switch to ${theme === 'light' ? 'Dark (Black)' : 'Light (White)'} Mode`}
              aria-label="Toggle Black & White Theme"
            >
              {theme === 'light' ? (
                <>
                  <Moon size={14} className="text-slate-700" />
                  <span className="hidden sm:inline">DARK_MODE</span>
                </>
              ) : (
                <>
                  <Sun size={14} className="text-amber-400" />
                  <span className="hidden sm:inline">LIGHT_MODE</span>
                </>
              )}
            </button>

            <button 
              onClick={onOpenSearch} 
              className="text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 px-3 py-1.5 border border-slate-300 bg-slate-50 rounded-lg cursor-pointer hidden sm:flex items-center gap-2 hover:border-blue-500 transition-colors font-mono"
            >
              <Search size={14} className="text-blue-600" />
              <span>QUERY</span>
              <kbd className="text-[10px] bg-slate-200 px-1 py-0.5 rounded border border-slate-300 text-slate-600 font-bold">⌘K</kbd>
            </button>

            <a 
              href="https://ollawrite.com" 
              target="_blank" 
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg shadow-xs transition-all hidden sm:flex items-center gap-1.5 cursor-pointer whitespace-nowrap font-mono"
            >
              <Terminal size={14} />
              <span>TEST API</span>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900"
              aria-label="Toggle navigation"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── 3. TECHNICAL STATUS STRIP ── */}
      <div className="bg-slate-50 text-slate-700 text-[12px] sm:text-[13px] font-mono py-1.5 overflow-x-auto select-none border-t border-slate-200 font-medium">
        <div className="w-full mx-auto px-[2cm] flex items-center justify-between whitespace-nowrap gap-5">
          
          <div className="flex items-center gap-1.5">
            <Cpu size={15} className="text-blue-600" />
            <span className="text-blue-700 font-bold">RAG Pipeline: 4 Dedicated Agents</span>
          </div>
          <span className="text-slate-300">·</span>

          <div className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-black">✓</span>
            <span className="font-bold text-slate-800">Zero-Hallucination Gate (Active)</span>
          </div>
          <span className="text-slate-300">·</span>

          <div className="flex items-center gap-1.5">
            <span className="text-amber-500 font-black">★</span>
            <span className="font-bold text-slate-800">4.9★ Enterprise Trust Index</span>
          </div>
          <span className="text-slate-300">·</span>

          <span className="font-bold text-slate-800">99.4% Factual Alignment</span>
          <span className="text-slate-300">·</span>

          <span className="font-bold text-slate-800">Sitemap Crawler v4.2</span>
          <span className="text-slate-300">·</span>

          <span className="text-blue-600 font-black">100% Cryptographic Citations</span>
          <span className="text-slate-300">·</span>

          <span className="font-bold text-slate-800">SOC2 Type II Verified</span>
          <span className="text-slate-300">·</span>

          <span className="font-bold text-slate-800">OpenAI &amp; Claude RAG Compatible</span>
          <span className="text-slate-300">·</span>

          <span className="font-bold text-slate-800">Avg Latency: 420ms</span>
          <span className="text-slate-300">·</span>

          <span className="font-black text-emerald-600">Ship Verdict Engine: Pass</span>

        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 text-lg font-black font-['Lato'] shadow-md">
          <button onClick={() => { onSelectCategory('All'); setOpen(false); }} className="block w-full text-left py-2 text-slate-900">
            Knowledge Index
          </button>
          <button onClick={() => { onSelectCategory('Site-First AI'); setOpen(false); }} className="block w-full text-left py-2 text-slate-900">
            Site-First Grounding
          </button>
          <button onClick={() => { onSelectCategory('Multi-Agent AI'); setOpen(false); }} className="block w-full text-left py-2 text-slate-900">
            Multi-Agent Architecture
          </button>
          <button onClick={() => { onSelectCategory('Editorial QA'); setOpen(false); }} className="block w-full text-left py-2 text-slate-900">
            Automated QA Gates
          </button>
          <button onClick={() => { onSelectCategory('SEO Strategy'); setOpen(false); }} className="block w-full text-left py-2 text-slate-900">
            Information Gain
          </button>
        </div>
      )}

    </header>
  );
};
