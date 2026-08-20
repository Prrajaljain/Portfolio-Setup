import { CheckCircle2, Briefcase, Calendar, MapPin, Zap } from 'lucide-react'
import { experience } from '@/lib/data'

export function Timeline() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-left">
      <div className="relative flex flex-col gap-12">
        {/* Timeline connector line */}
        <div className="absolute left-[11px] top-4 hidden h-[calc(100%-2rem)] w-[1px] bg-[#e6e5e0] sm:block" />

        {experience.map((job) => (
          <div key={job.company} className="relative flex gap-6 sm:pl-10">
            {/* Timeline Node Icon */}
            <span className="absolute left-0 top-2 hidden size-5 items-center justify-center rounded-sm border border-[#e6e5e0] bg-[#ffffff] sm:flex">
              <span className="size-2 rounded-sm bg-[#76b900]" />
            </span>

            <div className="flex w-full flex-col gap-4 rounded-md border border-[#e6e5e0] bg-[#ffffff] p-6 transition-all duration-200 hover:border-[#cfcdc4]">
              <div className="nvidia-corner-square" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[#e6e5e0] pb-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#26251e]">{job.role}</h3>
                  <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-[#f54e00]">
                    <Briefcase className="size-3.5" />
                    <span>{job.company}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#807d72]">
                  <span className="inline-flex items-center gap-1 rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-2.5 py-1 text-[#26251e]">
                    <Calendar className="size-3 text-[#76b900]" />
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-2.5 py-1 text-[#26251e]">
                    <MapPin className="size-3 text-[#76b900]" />
                    {job.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-[#5a5852]">
                {job.description}
              </p>

              <div className="flex flex-col gap-2.5 rounded-sm border border-[#e6e5e0] bg-[#fafaf7] p-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#26251e]">Key Achievements</span>
                <ul className="flex flex-col gap-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#76b900]" />
                      <span className="text-[#26251e]">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-xs">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-2.5 py-1 text-[#5a5852]"
                  >
                    <Zap className="size-3 text-[#f54e00]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
