import { skillGroups } from '@/lib/data'
import { Cpu, Eye, Bot, Terminal, CheckCircle } from 'lucide-react'

const groupIcons = [Cpu, Eye, Bot, Terminal]

export function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-16 text-left">
      <div className="mb-12 space-y-2">
        <span className="font-mono text-xs font-semibold text-[#807d72] uppercase tracking-wider">
          CORE COMPETENCIES
        </span>
        <h2 className="text-3xl font-normal tracking-tight text-[#26251e] sm:text-4xl">
          Engineering <span className="font-semibold text-[#f54e00]">Capabilities</span>
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, idx) => {
          const Icon = groupIcons[idx % groupIcons.length]
          return (
            <div
              key={group.title}
              className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 transition-all duration-200 hover:border-[#cfcdc4] hover:-translate-y-0.5"
            >
              <div className="nvidia-corner-square" />
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e]">
                    <Icon className="size-4 text-[#76b900]" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#807d72]">0{idx + 1}</span>
                </div>

                <h3 className="text-base font-semibold text-[#26251e]">
                  {group.title}
                </h3>

                <ul className="mt-4 flex flex-col gap-2 font-mono text-xs">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-[#5a5852]">
                      <CheckCircle className="size-3.5 text-[#76b900]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
