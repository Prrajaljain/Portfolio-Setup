import { ArrowUpRight, Code2, Cpu, Activity, ShieldCheck, Zap } from 'lucide-react'
import type { projects } from '@/lib/data'

const icons = [Cpu, Activity, ShieldCheck]

export function ProjectCard({ project, index = 0 }: { project: (typeof projects)[number]; index?: number }) {
  const Icon = icons[index % icons.length]

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 text-left transition-all duration-200 hover:border-[#cfcdc4] hover:-translate-y-0.5">
      {/* NVIDIA Corner Square Motif */}
      <div className="nvidia-corner-square" />

      {/* Top Banner Header */}
      <div className="mb-4 flex items-center justify-between pt-2">
        <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e]">
          <Icon className="size-4 text-[#76b900]" />
        </div>
        <span className="rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-2.5 py-1 font-mono text-[11px] font-semibold text-[#5a5852]">
          {project.year}
        </span>
      </div>

      {/* Content details */}
      <div className="flex flex-1 flex-col">
        <h3 className="mb-2 text-[18px] font-semibold leading-tight text-[#26251e] transition-colors group-hover:text-[#f54e00]">
          {project.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-[#5a5852]">
          {project.description}
        </p>

        {/* Technical Summary Tag */}
        <div className="mb-4 rounded-sm border border-[#e6e5e0] bg-[#fafaf7] p-2.5 font-mono text-[11px] text-[#5a5852]">
          ⚡ Real-Time Edge &amp; Hardware Inference
        </div>

        {/* Tech Stack Pills in JetBrains Mono */}
        <div className="mb-5 flex flex-wrap gap-1.5 font-mono text-[13px]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-2 py-0.5 text-[#26251e]"
            >
              <Zap className="size-3 text-[#f54e00]" />
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-[#e6e5e0] pt-3 text-xs">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#5a5852] hover:text-[#26251e] transition-colors"
          >
            <Code2 className="size-3.5" />
            <span>Repository</span>
          </a>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#f54e00] hover:text-[#d04200] transition-colors"
          >
            <span>View Project</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
