import { CaseStudy } from "@/types";
import { ArrowRight, CheckCircle2, AlertCircle, Cpu } from "lucide-react";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { diagramData } = caseStudy;

  return (
    <article className="rounded-md border border-white/[0.08] bg-[#111114] p-6 md:p-8 transition-all hover:border-zinc-700">
      {/* Header */}
      <div className="flex flex-col gap-2 pb-6 border-b border-white/[0.08]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold text-emerald-400">
            {caseStudy.category}
          </span>
          <span className="font-mono text-xs text-zinc-500">{caseStudy.year}</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-100">
          {caseStudy.title}
        </h2>
        <p className="text-sm text-zinc-400">{caseStudy.subtitle}</p>

        {/* Key Metrics */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {caseStudy.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-sm border border-white/[0.06] bg-[#16161a] p-3 flex flex-col gap-0.5"
            >
              <span className="font-mono text-lg font-bold text-emerald-400">
                {metric.value}
              </span>
              <span className="text-xs text-zinc-400 font-mono">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* System Schematic / Pipeline Diagram */}
      {diagramData && (
        <div className="my-6 rounded-sm border border-white/[0.06] bg-[#0c0c0e] p-4">
          <div className="flex items-center gap-2 mb-3">
            <Cpu className="h-4 w-4 text-emerald-400" />
            <span className="font-mono text-xs font-medium text-zinc-300 uppercase tracking-wider">
              System Architecture Flow
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 py-2">
            {diagramData.nodes.map((node, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center flex-1 gap-2">
                <div className="w-full rounded-sm border border-white/[0.1] bg-[#16161b] px-3 py-2.5 text-center font-mono text-xs text-zinc-200 shadow-sm">
                  {node}
                </div>
                {i < diagramData.nodes.length - 1 && (
                  <div className="flex items-center justify-center text-zinc-600 rotate-90 md:rotate-0 my-1 md:my-0">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-3 text-center font-mono text-[11px] text-zinc-500">
            {diagramData.caption}
          </p>
        </div>
      )}

      {/* Core Narrative: Problem -> Approach -> Outcome */}
      <div className="space-y-6 pt-2">
        {/* Problem */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-zinc-300 font-semibold text-sm">
            <AlertCircle className="h-4 w-4 text-amber-400" />
            <h4>Problem Statement</h4>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400 pl-6">
            {caseStudy.problem}
          </p>
        </div>

        {/* Approach */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-zinc-300 font-semibold text-sm">
            <Cpu className="h-4 w-4 text-emerald-400" />
            <h4>Engineering Approach</h4>
          </div>
          <ul className="space-y-2 pl-6">
            {caseStudy.approach.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed">
                <span className="text-emerald-500 font-mono text-xs mt-0.5">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-zinc-300 font-semibold text-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <h4>Measurable Outcomes</h4>
          </div>
          <ul className="space-y-2 pl-6">
            {caseStudy.outcome.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300 leading-relaxed font-medium">
                <span className="text-emerald-400 font-mono text-xs mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technology Stack Tags */}
      <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.06]">
        <span className="font-mono text-xs text-zinc-500">Tech:</span>
        {caseStudy.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-sm bg-zinc-800/60 px-2 py-0.5 font-mono text-[11px] text-zinc-300 border border-white/[0.04]"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
