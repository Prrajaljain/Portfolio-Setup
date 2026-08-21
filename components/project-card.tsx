import { ArrowUpRight, Code2, Cpu, Activity, ShieldCheck, Zap, Globe } from 'lucide-react'
import type { projects } from '@/lib/data'

const icons = [Cpu, Activity, ShieldCheck]

export function ProjectCard({ project, index = 0 }: { project: (typeof projects)[number]; index?: number }) {
  const Icon = icons[index % icons.length]

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-5 text-left shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover hover:-translate-y-[3px] active:shadow-press active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]">
      {/* Top Banner Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex size-9 items-center justify-center rounded-sm bg-[#FDF3EE]">
          <Icon className="size-4 text-[#D94A10]" />
        </div>
        <span className="rounded-[4px] border border-[#E8E4DE] bg-[#FAF8F5] px-2.5 py-1 font-mono text-[11px] font-semibold text-[#8A8580]">
          {project.year}
        </span>
      </div>

      {/* Content details */}
      <div className="flex flex-1 flex-col">
        <span className="mb-1 font-mono text-[11px] font-semibold text-[#D94A10]">
          {project.category}
        </span>

        <h3 className="mb-2 text-[18px] font-semibold leading-tight text-[#1A1A1A] transition-colors group-hover:text-[#D94A10]">
          {project.title}
        </h3>

        <p className="mb-3 text-[14px] leading-[1.5] text-[#4A4744]">
          {project.description}
        </p>

        {/* Specs tag */}
        {project.specs && (
          <div className="mb-3 rounded-[4px] border border-[#E8E4DE] bg-[#FAF8F5] p-2.5 font-mono text-[11px] text-[#1A1A1A]">
            ⚙️ <span className="font-semibold">{project.specs}</span>
          </div>
        )}

        {/* Fork note if present */}
        {'note' in project && (project as Record<string, unknown>).note ? (
          <p className="mb-3 font-mono text-[11px] italic text-[#8A8580]">
            {(project as Record<string, unknown>).note as string}
          </p>
        ) : null}

        {/* Tech Stack Pills (Tier 1 -> Tier 2 elevation) */}
        <div className="mb-5 flex flex-wrap gap-1.5 font-mono text-[11px]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-[4px] border border-[#E8E4DE] bg-transparent px-2 py-0.5 text-[#1A1A1A] shadow-rest transition-all duration-200 ease-out hover:shadow-hover hover:border-[#D94A10] hover:-translate-y-[2px]"
            >
              <Zap className="size-3 text-[#F25C1F]" />
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-[#E8E4DE] pt-3 text-xs">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#4A4744] hover:text-[#D94A10] transition-colors focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
            >
              <Code2 className="size-3.5" />
              <span>Repository</span>
            </a>
          )}

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#D94A10] hover:text-[#F25C1F] transition-colors ml-auto focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <span>{project.category.includes('Web') ? 'Live App' : 'View Project'}</span>
            {project.category.includes('Web') ? <Globe className="size-3.5" /> : <ArrowUpRight className="size-3.5" />}
          </a>
        </div>
      </div>
    </div>
  )
}
