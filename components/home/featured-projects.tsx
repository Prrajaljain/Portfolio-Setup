import { Sparkles } from 'lucide-react'
import { projects } from '@/lib/data'
import { ProjectCard } from '@/components/project-card'
import { SectionWrapper } from '@/components/section-wrapper'

export function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="inline-flex w-fit items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[1.5px] text-[#D94A10]">
            <Sparkles className="size-3.5 text-[#D94A10]" />
            Selected Engineering Works
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-[16px] leading-relaxed text-[#2D2B28] font-normal">
            Computer vision on embedded hardware, a heavy-lift drone platform, and a tuned flight controller &mdash; each built and tested on the bench, then run somewhere real.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
