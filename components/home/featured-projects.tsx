import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { projects } from '@/lib/data'
import { ProjectCard } from '@/components/project-card'

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8">
      {/* Background glow accents */}
      <div className="absolute left-1/4 top-1/2 -z-10 size-96 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5" />
              Autonomous &amp; AI Systems Portfolio
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Featured <span className="text-gradient-purple">Projects</span>
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              A selection of autonomous UAV/AMR stacks, computer vision pipelines, and embedded AI systems deployed on edge hardware.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-secondary/80 px-6 py-3 text-sm font-bold text-foreground backdrop-blur-md transition-all duration-200 hover:border-primary/40 hover:bg-secondary hover:translate-x-1"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="size-4 text-purple-400" />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

