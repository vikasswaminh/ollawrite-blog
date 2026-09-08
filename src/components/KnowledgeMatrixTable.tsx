import React from 'react';
import { Terminal, ShieldCheck } from 'lucide-react';

export const KnowledgeMatrixTable: React.FC = () => {
  const benchmarkData = [
    {
      modelPipeline: "OllaWrite Multi-Agent RAG v4.2",
      knowledgeSource: "Live Site Graph + Primary Papers",
      hallucinationRate: "< 0.14%",
      citationVerification: "100% Hash Grounded",
      informationGainDelta: "+340% Organic Impressions",
      shipVerdict: "AUTOMATED_PASS"
    },
    {
      modelPipeline: "Standard RAG (Single Chunk Vector)",
      knowledgeSource: "Static PDF / Docs Vector Embeddings",
      hallucinationRate: "4.8%",
      citationVerification: "62% Loose Semantic Matches",
      informationGainDelta: "+85% Baseline",
      shipVerdict: "WARN_FLAG"
    },
    {
      modelPipeline: "GPT-4o Direct Prompt Wrapper",
      knowledgeSource: "Model Internal Training Weights",
      hallucinationRate: "16.2%",
      citationVerification: "0% Unverifiable Claims",
      informationGainDelta: "-45% Post-Core Update",
      shipVerdict: "REJECTED"
    },
    {
      modelPipeline: "Claude 3.5 Direct Prompt Wrapper",
      knowledgeSource: "Model Internal Training Weights",
      hallucinationRate: "12.8%",
      citationVerification: "0% Unverifiable Claims",
      informationGainDelta: "-38% Post-Core Update",
      shipVerdict: "REJECTED"
    },
    {
      modelPipeline: "Automated 'Humanizer' Token Swapper",
      knowledgeSource: "Probabilistic Synonym Insertion",
      hallucinationRate: "22.4%",
      citationVerification: "0% Syntax Corrupted",
      informationGainDelta: "-82% Demoted by Helpful Content",
      shipVerdict: "CRITICAL_FAIL"
    }
  ];

  return (
    <section className="my-8 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-6 shadow-xs overflow-hidden font-['Lato']">
      
      {/* Header Info */}
      <div className="mb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs sm:text-sm">
          <span className="text-[#003db3] font-bold flex items-center gap-1.5">
            <Terminal size={16} />
            <span>BENCHMARK_TELEMETRY // GROUNDING_MATRIX</span>
          </span>
          <span className="text-slate-700 font-semibold bg-white px-2.5 py-0.5 rounded border border-slate-300 text-xs">
            N = 1,200 Evaluated Runs
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Lato']">
          Empirical Verification Matrix
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal font-['Lato']">
          Side-by-side factual retention, hallucination frequency, and search retention metrics across AI architectures.
        </p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left border-collapse text-xs sm:text-sm font-['Lato']">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider">
              <th className="py-3 px-4">Architecture</th>
              <th className="py-3 px-4">Knowledge Source</th>
              <th className="py-3 px-4">Hallucination</th>
              <th className="py-3 px-4">Citations</th>
              <th className="py-3 px-4">SERP Delta</th>
              <th className="py-3 px-4 text-right">Ship Verdict</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {benchmarkData.map((row, i) => {
              const isWinner = row.shipVerdict === 'AUTOMATED_PASS';
              return (
                <tr
                  key={i}
                  className={`transition-colors ${
                    isWinner ? 'bg-blue-50/50 hover:bg-blue-50' : 'hover:bg-slate-50'
                  }`}
                >
                  <td className="py-3 px-4 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      {isWinner && <ShieldCheck size={16} className="text-green-600 shrink-0" />}
                      <span>{row.modelPipeline}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-600 font-medium">{row.knowledgeSource}</td>
                  <td className={`py-3 px-4 font-mono font-bold ${
                    isWinner ? 'text-green-600' : row.shipVerdict === 'WARN_FLAG' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {row.hallucinationRate}
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-700">{row.citationVerification}</td>
                  <td className={`py-3 px-4 font-mono font-bold ${
                    isWinner ? 'text-green-600' : row.shipVerdict === 'WARN_FLAG' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {row.informationGainDelta}
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold">
                    <span
                      className={`inline-block px-2.5 py-1 rounded text-xs uppercase tracking-wider ${
                        isWinner
                          ? 'bg-green-100 text-green-800 border border-green-300'
                          : row.shipVerdict === 'WARN_FLAG'
                          ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                          : 'bg-red-100 text-red-800 border border-red-300'
                      }`}
                    >
                      {row.shipVerdict}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </section>
  );
};
