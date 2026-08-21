import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { projects } from '@/lib/data'
import { ProjectCard } from '@/components/project-card'
import { SectionWrapper } from '@/components/section-wrapper'

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <SectionWrapper className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="inline-flex w-fit items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[1.5px] text-[#D94A10]">
              <Sparkles className="size-3.5 text-[#D94A10]" />
              Selected Engineering Works
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Featured Projects
            </h2>
            <p className="max-w-2xl text-[16px] leading-relaxed text-[#52525B]">
              A selection of autonomous UAV/AMR stacks, computer vision pipelines, and embedded AI systems deployed on edge hardware.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-md bg-[#F25C1F] px-5 py-2.5 text-[15px] font-semibold text-white shadow-rest transition-all duration-200 ease-out hover:bg-[#D94A10] hover:shadow-hover hover:-translate-y-[1px] active:translate-y-0 active:shadow-press focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-[2px]" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
