import { principles } from '@/lib/data'
import { Sparkles } from 'lucide-react'

export function ApproachSection() {
  return (
    <section className="border-t border-[#e6e5e0] bg-[#f7f7f4] py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-left">
          <span className="mb-3 inline-flex items-center gap-2 rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#5a5852]">
            <Sparkles className="size-3.5 text-[#f54e00]" />
            ENGINEERING PRINCIPLES
          </span>
          <h2 className="text-3xl font-normal tracking-tight text-[#26251e] sm:text-4xl">
            Principles that <span className="font-semibold text-[#f54e00]">guide my work</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-6 transition-all duration-200 hover:border-[#cfcdc4]"
            >
              <div className="nvidia-corner-square" />
              <div>
                <h3 className="text-[18px] font-semibold tracking-tight text-[#26251e] group-hover:text-[#f54e00] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a5852]">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
