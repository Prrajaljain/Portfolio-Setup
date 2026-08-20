import type { Metadata } from 'next'
import { Cpu } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { CtaBanner } from '@/components/cta-banner'
import { projects } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Projects — Prajal Jain',
  description: 'Computer vision on embedded hardware, drone systems, and industrial analytics built by Prajal Jain.',
}

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[#f7f7f4] text-[#26251e]">
      <section className="relative overflow-hidden border-b border-[#e6e5e0] bg-[#f7f7f4] pt-16 pb-16">
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-left">
          <span className="mb-4 inline-flex items-center gap-2 rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#5a5852]">
            <Cpu className="size-3.5 text-[#76b900]" />
            PROJECTS
          </span>
          <h1 className="mb-4 text-4xl font-normal tracking-tight text-[#26251e] sm:text-6xl">
            Things I&apos;ve <span className="font-semibold text-[#f54e00]">built</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#5a5852]">
            Computer vision on embedded hardware, drone systems, and industrial analytics &mdash; two of them deployed in the field.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[13px]">
            <span className="rounded-sm border border-[#f54e00]/40 bg-[#f54e00]/15 px-3 py-1 font-semibold text-[#f54e00]">
              All ({projects.length})
            </span>
            <span className="rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3 py-1 text-[#5a5852]">
              Robotics &amp; Drones
            </span>
            <span className="rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3 py-1 text-[#5a5852]">
              Computer Vision
            </span>
            <span className="rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3 py-1 text-[#5a5852]">
              Embedded Systems
            </span>
            <span className="rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3 py-1 text-[#5a5852]">
              Web &amp; AI
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
