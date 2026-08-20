import type { Metadata } from 'next'
import { Cpu } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { CtaBanner } from '@/components/cta-banner'
import { projects } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Projects — Prajal Jain',
  description: 'Production autonomous systems, computer vision pipelines, and embedded AI platforms built by Prajal Jain.',
}

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#fafafa]">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#09090b] pt-16 pb-16">
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-left">
          <span className="mb-4 inline-flex items-center gap-2 rounded-sm border border-white/10 bg-[#111113] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#76b900]">
            <Cpu className="size-3.5 text-[#76b900]" />
            AI &amp; AUTONOMOUS SYSTEMS PORTFOLIO
          </span>
          <h1 className="mb-4 text-4xl font-normal tracking-tight text-[#fafafa] sm:text-6xl">
            Production-Focused <span className="font-semibold text-[#f54e00]">Projects</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#a1a1aa]">
            A curated selection of real-time ROS2 navigation stacks, computer vision pipelines, and embedded AI platforms deployed at the edge.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[13px]">
            <span className="rounded-sm border border-[#f54e00]/40 bg-[#f54e00]/15 px-3 py-1 font-semibold text-[#f54e00]">
              All Projects ({projects.length})
            </span>
            <span className="rounded-sm border border-white/10 bg-[#111113] px-3 py-1 text-[#a1a1aa]">
              ROS2 &amp; Robotics
            </span>
            <span className="rounded-sm border border-white/10 bg-[#111113] px-3 py-1 text-[#a1a1aa]">
              Computer Vision
            </span>
            <span className="rounded-sm border border-white/10 bg-[#111113] px-3 py-1 text-[#a1a1aa]">
              Embedded Edge AI
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
