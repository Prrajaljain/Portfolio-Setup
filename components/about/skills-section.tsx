import { skillGroups } from '@/lib/data'
import { Cpu, Eye, Bot, Terminal, CheckCircle } from 'lucide-react'
import { SectionWrapper } from '@/components/section-wrapper'

const groupIcons = [Cpu, Eye, Bot, Terminal]

export function SkillsSection() {
  return (
    <SectionWrapper id="tech-stack" className="relative mx-auto max-w-6xl px-6 py-16 text-left">
      <div className="mb-12 space-y-2">
        <span className="font-mono text-xs font-semibold text-[#8A8580] uppercase tracking-wider">
          CORE COMPETENCIES &amp; TOOLS
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
          Tech Stack &amp; <span className="font-bold text-[#F25C1F]">Capabilities</span>
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, idx) => {
          const Icon = groupIcons[idx % groupIcons.length]
          return (
            <div
              key={group.title}
              className="group relative flex flex-col justify-between rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-5 shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover hover:-translate-y-[3px]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex size-9 items-center justify-center rounded-sm bg-[#FDF3EE] text-[#D94A10]">
                    <Icon className="size-4 text-[#D94A10]" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#8A8580]">0{idx + 1}</span>
                </div>

                <h3 className="text-base font-semibold text-[#1A1A1A]">
                  {group.title}
                </h3>

                <ul className="mt-4 flex flex-col gap-2 font-mono text-xs">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-[#52525B]">
                      <CheckCircle className="size-3.5 text-[#D94A10]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
