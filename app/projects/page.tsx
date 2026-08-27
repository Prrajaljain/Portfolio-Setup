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
    <div className="relative min-h-screen bg-[#F5F4F0] text-[#1A1A1A]">
      <section className="relative overflow-hidden border-b border-[#E8E4DE] bg-[#F5F4F0] pt-16 pb-16">
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-left">
          <span className="mb-4 inline-flex items-center gap-2 rounded-sm border border-[#E8E4DE] bg-[#FFFFFF] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#4A4744]">
            <Cpu className="size-3.5 text-[#D94A10]" />
            PROJECTS
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-6xl">
            Things I&apos;ve <span className="font-bold text-[#F25C1F]">built</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#2D2B28] font-normal">
            Computer vision on embedded hardware, drone systems, and industrial analytics &mdash; two of them deployed in the field.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[13px]">
            <span className="rounded-sm border border-[#F25C1F]/40 bg-[#F25C1F]/15 px-3 py-1 font-semibold text-[#F25C1F]">
              All ({projects.length})
            </span>
            <span className="rounded-sm border border-[#E8E4DE] bg-[#FFFFFF] px-3 py-1 text-[#2D2B28] font-medium">
              Robotics &amp; Drones
            </span>
            <span className="rounded-sm border border-[#E8E4DE] bg-[#FFFFFF] px-3 py-1 text-[#2D2B28] font-medium">
              Computer Vision
            </span>
            <span className="rounded-sm border border-[#E8E4DE] bg-[#FFFFFF] px-3 py-1 text-[#2D2B28] font-medium">
              Embedded Systems
            </span>
            <span className="rounded-sm border border-[#E8E4DE] bg-[#FFFFFF] px-3 py-1 text-[#2D2B28] font-medium">
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
