import { GraduationCap, Award, Sparkles } from 'lucide-react'
import { education, certifications } from '@/lib/data'
import { SectionWrapper } from '@/components/section-wrapper'

export function EducationSection() {
  return (
    <SectionWrapper className="relative border-t border-[#E8E4DE] bg-[#F5F4F0]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-left">
          <span className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#8A8580]">
            <Sparkles className="size-3.5 text-[#D94A10]" />
            ACADEMIC &amp; PROFESSIONAL CREDENTIALS
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Education &amp; <span className="font-bold text-[#F25C1F]">Certifications</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Education column */}
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg text-[#1A1A1A]">
              <div className="flex size-7 items-center justify-center rounded-sm bg-[#FDF3EE] text-[#D94A10]">
                <GraduationCap className="size-4 text-[#D94A10]" />
              </div>
              Degrees &amp; Academic Training
            </h3>
            {education.map((item) => (
              <div
                key={item.degree}
                className="group relative rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-5 shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover hover:-translate-y-[2px]"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="text-base font-semibold tracking-tight text-[#1A1A1A]">{item.degree}</h4>
                  <span className="font-mono text-xs font-semibold text-[#8A8580]">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-[#52525B]">{item.school}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-sm border border-[#E8E4DE] bg-[#FAF8F5] px-2.5 py-1 font-mono text-xs font-semibold text-[#D94A10]">
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications column */}
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg text-[#1A1A1A]">
              <div className="flex size-7 items-center justify-center rounded-sm bg-[#FDF3EE] text-[#D94A10]">
                <Award className="size-4 text-[#D94A10]" />
              </div>
              Industry Certifications
            </h3>
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="group relative rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-5 shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover hover:-translate-y-[2px]"
              >
                <h4 className="text-base font-semibold tracking-tight text-[#1A1A1A]">{cert.title}</h4>
                <p className="mt-1 text-sm text-[#52525B]">{cert.issuer}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-sm border border-[#E8E4DE] bg-[#FAF8F5] px-2.5 py-1 font-mono text-xs font-semibold text-[#F25C1F]">
                  <span>{cert.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
