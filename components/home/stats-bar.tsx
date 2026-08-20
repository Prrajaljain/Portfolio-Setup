import { stats } from '@/lib/data'
import { Award, Zap, Cpu, CheckCircle } from 'lucide-react'

const statIcons = [Zap, Cpu, CheckCircle, Award]

export function StatsBar() {
  return (
    <section className="relative border-y border-border/40 bg-gradient-to-r from-background via-card/40 to-background py-10 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 sm:grid-cols-4 sm:px-8">
        {stats.map((stat, i) => {
          const Icon = statIcons[i % statIcons.length]
          return (
            <div
              key={stat.label}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </span>
                <div className="flex size-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" />
                </div>
              </div>
              <span className="mt-3 text-sm font-medium leading-snug text-muted-foreground group-hover:text-foreground">
                {stat.label}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

