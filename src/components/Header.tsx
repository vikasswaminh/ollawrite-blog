import { useState } from 'react';
import { ChevronDown, Menu, X, Terminal, Cpu, Sun, Moon } from 'lucide-react';
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
      
      {/* ── 1. TECHNICAL TELEMETRY TOP BAR (OllaGraph brand blue) ── */}
      <div className="og-blue-bar text-[12px] sm:text-[13px] font-mono tracking-wider uppercase h-9 flex items-center border-b border-[#002752] select-none overflow-hidden font-medium">
        <div className="w-full mx-auto px-[2cm] flex items-center justify-between">
          
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#16a34a] animate-pulse"></span>
            <span className="text-white font-bold">NODE_INDEX: LIVE_V4.2</span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="text-slate-200 hidden sm:inline">LATENCY: 14MS</span>
            <span className="text-slate-300 hidden md:inline">·</span>
            <span className="text-white font-bold hidden md:inline">100% GROUNDED SOURCES</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-200 font-mono whitespace-nowrap font-medium">
            <a href="https://www.ollawrite.com/#features" className="hidden lg:inline hover:text-white transition-colors">API_DOCS</a>
            <span className="text-slate-400 hidden lg:inline">·</span>
            <a href="https://www.ollawrite.com/#how" className="hidden md:inline hover:text-white transition-colors">RAG_SANDBOX</a>
            <span className="text-slate-400 hidden md:inline">·</span>
            <a href="https://www.ollawrite.com" className="text-white hover:text-slate-200 font-bold flex items-center gap-1.5 transition-colors">
              <span>[+]</span> RUN_AUDIT →
            </a>
          </div>

        </div>
      </div>

      {/* ── 2. MAIN NAV ── */}
      <div className="h-[60px] bg-white flex items-center">
        <div className="w-full mx-auto px-[2cm] grid grid-cols-[1fr_auto_1fr] items-center">
          
          {/* Wordmark only — logo removed */}
          <button 
            onClick={() => onSelectCategory('All')} 
            className="flex items-center gap-2 text-left cursor-pointer focus:outline-none group shrink-0"
            aria-label="OllaWrite Knowledge Base Home"
          >
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-xl sm:text-2xl tracking-tight leading-none font-['Lato']">
                Olla<span className="text-[#e8443a]">Write</span>
              </span>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-['Lato']">
            <a 
              href="https://www.ollawrite.com/#features"
              className="text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap text-slate-700 hover:text-[#e8443a]"
            >
              Features
            </a>

            <a 
              href="https://www.ollawrite.com/#how"
              className="text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap text-slate-700 hover:text-[#e8443a]"
            >
              How it works
            </a>

            <a 
              href="https://www.ollawrite.com/#pricing"
              className="text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap text-slate-700 hover:text-[#e8443a]"
            >
              Pricing
            </a>

            <a 
              href="https://www.ollawrite.com/#faq"
              className="text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap text-slate-700 hover:text-[#e8443a]"
            >
              FAQ
            </a>

            <a 
              href="https://blogs.ollawrite.com"
              onClick={() => onSelectCategory('All')}
              className="text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap text-[#e8443a] hover:text-[#c7372e]"
            >
              Blog
            </a>

            <a 
              href="https://www.ollawrite.com/contact/"
              className="text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap text-slate-700 hover:text-[#e8443a]"
            >
              Contact
            </a>
          </nav>

          {/* Right Action */}
          <div className="flex items-center justify-end gap-2 shrink-0">
            
            {/* BLACK & WHITE / DARK & LIGHT THEME TOGGLE SWITCH (small box) */}
            <button
              onClick={onToggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 transition-all cursor-pointer shadow-xs shrink-0"
              title={`Switch to ${theme === 'light' ? 'Dark (Black)' : 'Light (White)'} Mode`}
              aria-label="Toggle Black & White Theme"
            >
              {theme === 'light' ? (
                <Moon size={14} className="text-slate-700" />
              ) : (
                <Sun size={14} className="text-slate-700" />
              )}
            </button>

            <a 
              href="https://www.ollawrite.com/" 
              target="_blank" 
              rel="noreferrer"
              className="og-cta-red text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg shadow-xs transition-all hidden sm:flex items-center gap-1.5 cursor-pointer whitespace-nowrap font-mono"
            >
              <Terminal size={14} />
              <span>Start free</span>
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
            <Cpu size={15} className="text-[#003db3]" />
            <span className="text-[#003db3] font-bold">RAG Pipeline: 4 Dedicated Agents</span>
          </div>
          <span className="text-slate-300">·</span>

          <div className="flex items-center gap-1.5">
            <span className="text-green-600 font-black">✓</span>
            <span className="font-bold text-slate-800">Zero-Hallucination Gate (Active)</span>
          </div>
          <span className="text-slate-300">·</span>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-800 font-black">★</span>
            <span className="font-bold text-slate-800">4.9★ Enterprise Trust Index</span>
          </div>
          <span className="text-slate-300">·</span>

          <span className="font-bold text-slate-800">99.4% Factual Alignment</span>
          <span className="text-slate-300">·</span>

          <span className="font-bold text-slate-800">Sitemap Crawler v4.2</span>
          <span className="text-slate-300">·</span>

          <span className="text-[#003db3] font-black">100% Cryptographic Citations</span>
          <span className="text-slate-300">·</span>

          <span className="font-bold text-slate-800">SOC2 Type II Verified</span>
          <span className="text-slate-300">·</span>

          <span className="font-bold text-slate-800">OpenAI &amp; Claude RAG Compatible</span>
          <span className="text-slate-300">·</span>

          <span className="font-bold text-slate-800">Avg Latency: 420ms</span>
          <span className="text-slate-300">·</span>

          <span className="font-black text-green-600">Ship Verdict Engine: Pass</span>

        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 text-lg font-black font-['Lato'] shadow-md">
          <a href="https://www.ollawrite.com/#features" className="block w-full text-left py-2 text-slate-900 hover:text-[#e8443a]">
            Features
          </a>
          <a href="https://www.ollawrite.com/#how" className="block w-full text-left py-2 text-slate-900 hover:text-[#e8443a]">
            How it works
          </a>
          <a href="https://www.ollawrite.com/#pricing" className="block w-full text-left py-2 text-slate-900 hover:text-[#e8443a]">
            Pricing
          </a>
          <a href="https://www.ollawrite.com/#faq" className="block w-full text-left py-2 text-slate-900 hover:text-[#e8443a]">
            FAQ
          </a>
          <a href="https://blogs.ollawrite.com" onClick={() => { onSelectCategory('All'); setOpen(false); }} className="block w-full text-left py-2 text-[#e8443a]">
            Blog
          </a>
          <a href="https://www.ollawrite.com/contact/" className="block w-full text-left py-2 text-slate-900 hover:text-[#e8443a]">
            Contact
          </a>
        </div>
      )}

    </header>
  );
};
