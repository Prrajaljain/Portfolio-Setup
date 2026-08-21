import { CheckCircle2, Briefcase, Calendar, MapPin, Zap } from 'lucide-react'
import { experience } from '@/lib/data'
import { SectionWrapper } from '@/components/section-wrapper'

export function Timeline() {
  return (
    <SectionWrapper id="experience" className="mx-auto max-w-6xl px-6 py-16 text-left">
      <div className="mb-10 space-y-2">
        <span className="font-mono text-xs font-semibold text-[#8A8580] uppercase tracking-wider">
          CAREER &amp; INDUSTRY EXPERIENCE
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
          Where I&apos;ve <span className="font-bold text-[#F25C1F]">built things</span>
        </h2>
      </div>

      <div className="relative flex flex-col gap-12">
        {/* Timeline connector line */}
        <div className="absolute left-[11px] top-4 hidden h-[calc(100%-2rem)] w-[1px] bg-[#E8E4DE] sm:block" />

        {experience.map((job) => (
          <div key={job.company} className="relative flex gap-6 sm:pl-10">
            {/* Timeline Node Icon */}
            <span className="absolute left-0 top-2 hidden size-5 items-center justify-center rounded-sm border border-[#E8E4DE] bg-[#FFFFFF] sm:flex">
              <span className="size-2 rounded-sm bg-[#D94A10]" />
            </span>

            <div className="flex w-full flex-col gap-4 rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-6 shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover hover:-translate-y-[2px]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[#E8E4DE] pb-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#1A1A1A]">{job.role}</h3>
                  <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-[#D94A10]">
                    <Briefcase className="size-3.5" />
                    <span>{job.company}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#8A8580]">
                  <span className="inline-flex items-center gap-1 rounded-sm border border-[#E8E4DE] bg-[#FAF8F5] px-2.5 py-1 text-[#1A1A1A]">
                    <Calendar className="size-3 text-[#D94A10]" />
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-sm border border-[#E8E4DE] bg-[#FAF8F5] px-2.5 py-1 text-[#1A1A1A]">
                    <MapPin className="size-3 text-[#D94A10]" />
                    {job.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-[#52525B]">
                {job.summary || job.description}
              </p>

              <div className="flex flex-col gap-2.5 rounded-sm border border-[#E8E4DE] bg-[#FAF8F5] p-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">Key Achievements</span>
                <ul className="flex flex-col gap-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#D94A10]" />
                      <span className="text-[#1A1A1A]">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-xs">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-sm border border-[#E8E4DE] bg-[#FAF8F5] px-2.5 py-1 text-[#52525B]"
                  >
                    <Zap className="size-3 text-[#F25C1F]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
