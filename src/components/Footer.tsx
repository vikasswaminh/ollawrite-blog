import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import type { CategoryFilter } from '../shared/types';
import { cycleAccent } from '../shared/colors';

interface FooterProps {
  onSelectCategory: (cat: CategoryFilter) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer className="w-full bg-[#0b0f19] text-[#94a3b8] relative overflow-hidden border-t border-[#1e293b] font-['Lato']">
      
      {/* ── 1. TOP CTA BAR ── */}
      <div className="bg-[#111827] text-white py-5 border-b border-[#1e293b] shadow-xs">
        <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <a href="https://www.ollawrite.com" className="px-2 py-1 rounded-xl flex items-center gap-2.5" aria-label="OllaWrite Knowledge base">
              <span className="font-bold text-white text-lg sm:text-xl tracking-tight font-['Lato']">
                Olla<span className="text-[#e8443a]">Write</span> Knowledge
              </span>
            </a>
            <div className="hidden md:block">
              <p className="text-xs font-mono font-bold tracking-wider text-[#93b4ff] uppercase">
                Grounded AI Research · Editorial Intelligence · Search Strategy
              </p>
              <p className="text-xs text-[#64748b] mt-0.5 font-normal">
                10 autonomous engines · 12M+ grounded articles · 100% citation verified
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.ollawrite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="og-cta-red inline-flex items-center gap-2 text-white font-bold px-4 py-2 text-xs sm:text-sm rounded-lg transition-colors shadow-xs"
            >
              <CheckCircle2 className="h-4 w-4 stroke-[2.5]" />
              <span>Deploy Grounded Engine</span>
            </a>
            <a
              href="tel:+18005529748"
              className="inline-flex items-center gap-2 bg-[#1e293b] text-white border border-[#334155] font-bold px-3.5 py-2 text-xs sm:text-sm rounded-lg hover:bg-[#334155] transition-colors font-mono"
            >
              <Phone className="h-4 w-4 text-[#93b4ff]" />
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
            <div className="bg-[#111827] border border-[#1e293b] text-white rounded-xl p-4 mb-4 shadow-xs">
              <p className="text-xs font-mono font-bold tracking-wider text-[#93b4ff] uppercase mb-1">⭐ CORE_ENGINES</p>
              <p className="text-sm font-bold leading-tight mb-1 font-['Lato']">Site-First Citation Graph</p>
              <p className="text-xs text-[#64748b] font-normal">Zero Hallucination Verification Gates</p>
            </div>

            <ul className="space-y-1 text-xs mb-4">
              <li>
                <button
                  onClick={() => onSelectCategory('Site-First AI')}
                  className="w-full text-left hover:bg-[#111827] transition-colors px-2.5 py-1.5 rounded-lg font-semibold text-[#94a3b8] flex items-center justify-between cursor-pointer border border-transparent hover:border-[#1e293b]"
                >
                  <span className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: cycleAccent(0) }}></span>
                    Sitemap Vector Crawler
                  </span>
                  <span className="text-[10px] font-mono text-white px-1.5 py-0.5 rounded font-bold" style={{ backgroundColor: '#003db3' }}>V4.2</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Humanizing AI')}
                  className="w-full text-left hover:bg-[#111827] transition-colors px-2.5 py-1.5 rounded-lg font-semibold text-[#94a3b8] flex items-center justify-between cursor-pointer border border-transparent hover:border-[#1e293b]"
                >
                  <span className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: cycleAccent(1) }}></span>
                    Token Variance Calibration
                  </span>
                  <span className="text-[10px] font-mono text-white px-1.5 py-0.5 rounded font-bold" style={{ backgroundColor: '#16a34a' }}>ACTIVE</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Research by Track (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-[#111827] text-white border border-[#1e293b] px-3 py-1 inline-block rounded-md mb-4 font-mono">
              <h4 className="font-bold text-xs tracking-wider">SYSTEMS_BY_TRACK</h4>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <div>
                <h5 className="text-xs font-mono font-bold tracking-wider uppercase mb-2" style={{ color: '#6d9bff' }}>🤖 Agentic AI</h5>
                <ul className="space-y-1.5 text-xs">
                  <li><button onClick={() => onSelectCategory('Site-First AI')} className="text-left hover:text-white text-[#94a3b8] font-medium cursor-pointer">Site-First Grounding</button></li>
                  <li><button onClick={() => onSelectCategory('Multi-Agent AI')} className="text-left hover:text-white text-[#94a3b8] font-medium cursor-pointer">Multi-Agent Mesh</button></li>
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-mono font-bold tracking-wider uppercase mb-2" style={{ color: '#6d9bff' }}>✍️ Humanization</h5>
                <ul className="space-y-1.5 text-xs">
                  <li><button onClick={() => onSelectCategory('Humanizing AI')} className="text-left hover:text-[#e8443a] font-bold text-white cursor-pointer">Humanizing AI Engine →</button></li>
                  <li><button onClick={() => onSelectCategory('Humanizing AI')} className="text-left hover:text-white text-[#94a3b8] font-medium cursor-pointer">Burstiness Calibration</button></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Col 3: Benchmarks & Resources */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-4">
            <div>
              <h5 className="text-xs font-mono font-bold tracking-wider text-white uppercase mb-2 flex items-center gap-1.5"><span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#16a34a' }}></span>Compliance</h5>
              <ul className="space-y-1.5 text-xs text-[#94a3b8]">
                <li><a href="https://www.ollawrite.com" className="hover:text-white">SOC2 Type II</a></li>
                <li><a href="https://www.ollawrite.com" className="hover:text-white">GDPR Verified</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-mono font-bold tracking-wider text-white uppercase mb-2 flex items-center gap-1.5"><span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#f5b400' }}></span>Developer</h5>
              <ul className="space-y-1.5 text-xs text-[#94a3b8]">
                <li><a href="https://www.ollawrite.com" className="hover:text-white">Sitemap API</a></li>
                <li><a href="https://www.ollawrite.com" className="hover:text-white">Fact SDK</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-mono font-bold tracking-wider text-white uppercase mb-2 flex items-center gap-1.5"><span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#e8443a' }}></span>Company</h5>
              <ul className="space-y-1.5 text-xs text-[#94a3b8]">
                <li><a href="https://www.ollawrite.com" className="hover:text-white">About Us</a></li>
                <li><a href="https://www.ollawrite.com" className="hover:text-white">Trust Center</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* ── 3. BOTTOM BAR ── */}
        <div className="border-t border-[#1e293b] pt-5 mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#64748b] font-mono">
          <div className="text-center md:text-left">
            <p className="text-xs text-white font-bold font-['Lato']">
              © 2026 OllaWrite Inc. All rights reserved.
            </p>
            <p className="text-[11px] text-[#64748b] mt-0.5 font-normal">
              Bangalore &amp; San Francisco · Autonomous AI Systems
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#94a3b8]">
            <a href="https://www.ollawrite.com" className="hover:text-white font-medium">Contact</a>
            <span>·</span>
            <a href="https://www.ollawrite.com" className="hover:text-white font-medium">About</a>
            <span>·</span>
            <a href="https://www.ollawrite.com" className="hover:text-white font-medium">Verification Terms</a>
          </div>
        </div>

      </div>

    </footer>
  );
};
