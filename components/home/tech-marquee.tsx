import { techStack } from '@/lib/data'
import { Cpu, Terminal, Layers, Code, Zap } from 'lucide-react'

export function TechMarquee() {
  const items = [...techStack, ...techStack]

  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-card/20 py-12">
      <div className="mb-6 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-primary/80 font-bold">
          Technical Stack &amp; Autonomous Infrastructure
        </span>
      </div>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4">
          {items.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-md transition-all hover:border-purple-500/40 hover:bg-white/[0.08]"
            >
              <Cpu className="size-4 text-purple-400" />
              <span className="font-mono text-sm font-semibold text-foreground whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

