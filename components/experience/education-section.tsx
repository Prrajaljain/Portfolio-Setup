import { GraduationCap, Award, Sparkles } from 'lucide-react'
import { education, certifications } from '@/lib/data'

export function EducationSection() {
  return (
    <section className="relative border-t border-[#e6e5e0] bg-[#f7f7f4]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 text-left">
          <span className="mb-3 inline-flex items-center gap-2 rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#5a5852]">
            <Sparkles className="size-3.5 text-[#f54e00]" />
            ACADEMIC &amp; PROFESSIONAL CREDENTIALS
          </span>
          <h2 className="text-3xl font-normal tracking-tight text-[#26251e] sm:text-4xl">
            Education &amp; <span className="font-semibold text-[#f54e00]">Certifications</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Education column */}
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg text-[#26251e]">
              <div className="flex size-7 items-center justify-center rounded-sm bg-[#fafaf7] text-[#26251e] border border-[#e6e5e0]">
                <GraduationCap className="size-4 text-[#76b900]" />
              </div>
              Degrees &amp; Academic Training
            </h3>
            {education.map((item) => (
              <div
                key={item.degree}
                className="group relative rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 transition-all duration-200 hover:border-[#cfcdc4]"
              >
                <div className="nvidia-corner-square" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="text-base font-semibold tracking-tight text-[#26251e]">{item.degree}</h4>
                  <span className="font-mono text-xs font-semibold text-[#5a5852]">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-[#5a5852]">{item.school}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-2.5 py-1 font-mono text-xs font-semibold text-[#76b900]">
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications column */}
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg text-[#26251e]">
              <div className="flex size-7 items-center justify-center rounded-sm bg-[#fafaf7] text-[#26251e] border border-[#e6e5e0]">
                <Award className="size-4 text-[#f54e00]" />
              </div>
              Industry Certifications
            </h3>
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="group relative rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 transition-all duration-200 hover:border-[#cfcdc4]"
              >
                <h4 className="text-base font-semibold tracking-tight text-[#26251e]">{cert.title}</h4>
                <p className="mt-1 text-sm text-[#5a5852]">{cert.issuer}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-2.5 py-1 font-mono text-xs font-semibold text-[#f54e00]">
                  <span>{cert.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
