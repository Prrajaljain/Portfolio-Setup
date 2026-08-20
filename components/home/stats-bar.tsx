import { stats } from '@/lib/data'
import { Award, Zap, Cpu, CheckCircle } from 'lucide-react'

const statIcons = [Zap, Cpu, CheckCircle, Award]

export function StatsBar() {
  return (
    <section className="relative border-y border-[#e6e5e0] bg-[#f7f7f4] py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 sm:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = statIcons[i % statIcons.length]
          return (
            <div
              key={stat.label}
              className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 transition-all duration-200 hover:border-[#cfcdc4]"
            >
              <div className="nvidia-corner-square" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[#26251e]">
                  {stat.value}
                </span>
                <div className="flex size-8 items-center justify-center rounded-sm bg-[#fafaf7] text-[#76b900] border border-[#e6e5e0]">
                  <Icon className="size-4 text-[#76b900]" />
                </div>
              </div>
              <span className="mt-3 text-xs sm:text-sm font-medium leading-snug text-[#5a5852]">
                {stat.label}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
