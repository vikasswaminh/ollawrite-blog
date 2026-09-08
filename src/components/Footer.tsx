import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import type { CategoryFilter } from '../shared/types';

interface FooterProps {
  onSelectCategory: (cat: CategoryFilter) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer className="w-full bg-slate-50 text-slate-700 relative overflow-hidden border-t border-slate-200 font-['Lato']">
      
      {/* ── 1. TOP CTA BAR ── */}
      <div className="bg-white text-slate-900 py-5 border-b border-slate-200 shadow-xs">
        <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <a href="/" className="bg-blue-50 p-2 rounded-xl border border-blue-200 flex items-center gap-2.5" aria-label="OllaWrite Knowledge base">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-sm">
                [O]
              </div>
              <span className="font-bold text-slate-900 text-lg sm:text-xl tracking-tight font-['Lato']">
                Olla<span className="text-blue-600">Write</span> Knowledge
              </span>
            </a>
            <div className="hidden md:block">
              <p className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
                Autonomous Content Infrastructure · Citation Graph Intelligence
              </p>
              <p className="text-xs text-slate-500 mt-0.5 font-normal">
                10 autonomous engines · 12M+ grounded articles · 100% citation verified
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://ollawrite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 text-xs sm:text-sm rounded-lg transition-colors shadow-xs"
            >
              <CheckCircle2 className="h-4 w-4 stroke-[2.5]" />
              <span>Deploy Grounded Engine</span>
            </a>
            <a
              href="tel:+18005529748"
              className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 border border-slate-300 font-bold px-3.5 py-2 text-xs sm:text-sm rounded-lg hover:bg-slate-200 transition-colors font-mono"
            >
              <Phone className="h-4 w-4 text-blue-600" />
              <span>+1 (800) OLLA-WRITE</span>
            </a>
          </div>

        </div>
      </div>

      {/* ── 2. DESKTOP 12-COLUMN LINKS GRID ── */}
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 relative z-10">
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          
          {/* Col 1: Flagship Programs (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200 text-slate-900 rounded-xl p-4 mb-4 shadow-xs">
              <p className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase mb-1">⭐ CORE_ENGINES</p>
              <p className="text-sm font-bold leading-tight mb-1 font-['Lato']">Site-First Citation Graph</p>
              <p className="text-xs text-slate-500 font-normal">Zero Hallucination Verification Gates</p>
            </div>

            <ul className="space-y-1 text-xs mb-4">
              <li>
                <button
                  onClick={() => onSelectCategory('Site-First AI')}
                  className="w-full text-left hover:bg-white transition-colors px-2.5 py-1.5 rounded-lg font-semibold text-slate-700 flex items-center justify-between cursor-pointer border border-transparent hover:border-slate-200"
                >
                  <span className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Sitemap Vector Crawler
                  </span>
                  <span className="text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-bold">V4.2</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Humanizing AI')}
                  className="w-full text-left hover:bg-white transition-colors px-2.5 py-1.5 rounded-lg font-semibold text-slate-700 flex items-center justify-between cursor-pointer border border-transparent hover:border-slate-200"
                >
                  <span className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Token Variance Calibration
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded font-bold">ACTIVE</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Research by Track (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-white text-slate-800 border border-slate-200 px-3 py-1 inline-block rounded-md mb-4 font-mono">
              <h4 className="font-bold text-xs tracking-wider">SYSTEMS_BY_TRACK</h4>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <div>
                <h5 className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase mb-2">🤖 Agentic AI</h5>
                <ul className="space-y-1.5 text-xs">
                  <li><button onClick={() => onSelectCategory('Site-First AI')} className="text-left hover:text-blue-600 text-slate-700 font-medium cursor-pointer">Site-First Grounding</button></li>
                  <li><button onClick={() => onSelectCategory('Multi-Agent AI')} className="text-left hover:text-blue-600 text-slate-700 font-medium cursor-pointer">Multi-Agent Mesh</button></li>
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase mb-2">✍️ Humanization</h5>
                <ul className="space-y-1.5 text-xs">
                  <li><button onClick={() => onSelectCategory('Humanizing AI')} className="text-left hover:text-blue-600 font-bold text-slate-900 cursor-pointer">Humanizing AI Engine →</button></li>
                  <li><button onClick={() => onSelectCategory('Humanizing AI')} className="text-left hover:text-blue-600 text-slate-700 font-medium cursor-pointer">Burstiness Calibration</button></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Col 3: Benchmarks & Resources */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-4">
            <div>
              <h5 className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase mb-2">Compliance</h5>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li><a href="https://ollawrite.com" className="hover:text-blue-600">SOC2 Type II</a></li>
                <li><a href="https://ollawrite.com" className="hover:text-blue-600">GDPR Verified</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase mb-2">Developer</h5>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li><a href="https://ollawrite.com" className="hover:text-blue-600">Sitemap API</a></li>
                <li><a href="https://ollawrite.com" className="hover:text-blue-600">Fact SDK</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase mb-2">Company</h5>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li><a href="https://ollawrite.com" className="hover:text-blue-600">About Us</a></li>
                <li><a href="https://ollawrite.com" className="hover:text-blue-600">Trust Center</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* ── 3. BOTTOM BAR ── */}
        <div className="border-t border-slate-200 pt-5 mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <div className="text-center md:text-left">
            <p className="text-xs text-slate-800 font-bold font-['Lato']">
              © 2026 OllaWrite Inc. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5 font-normal">
              Bangalore &amp; San Francisco · Autonomous AI Systems
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-600">
            <a href="https://ollawrite.com" className="hover:text-blue-600 font-medium">Contact</a>
            <span>·</span>
            <a href="https://ollawrite.com" className="hover:text-blue-600 font-medium">About</a>
            <span>·</span>
            <a href="https://ollawrite.com" className="hover:text-blue-600 font-medium">Verification Terms</a>
          </div>
        </div>

      </div>

    </footer>
  );
};
