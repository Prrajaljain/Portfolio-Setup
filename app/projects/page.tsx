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
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#60a5fa]">
            <Cpu className="size-3.5 text-[#60a5fa]" />
            AI &amp; Autonomous Systems Portfolio
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#fafafa] sm:text-6xl">
            Production-Focused <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Projects</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-[#a1a1aa]">
            A curated selection of real-time ROS2 navigation stacks, computer vision pipelines, and embedded AI platforms deployed at the edge.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-blue-500/40 bg-blue-500/15 px-4 py-1.5 font-mono text-xs font-bold text-[#60a5fa]">
              All Projects ({projects.length})
            </span>
            <span className="rounded-full border border-white/10 bg-[#111113] px-4 py-1.5 font-mono text-xs font-semibold text-[#a1a1aa]">
              ROS2 &amp; Robotics
            </span>
            <span className="rounded-full border border-white/10 bg-[#111113] px-4 py-1.5 font-mono text-xs font-semibold text-[#a1a1aa]">
              Computer Vision
            </span>
            <span className="rounded-full border border-white/10 bg-[#111113] px-4 py-1.5 font-mono text-xs font-semibold text-[#a1a1aa]">
              Embedded Edge AI
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
