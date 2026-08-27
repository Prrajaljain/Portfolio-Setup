import { Sparkles } from 'lucide-react'
import { SectionWrapper } from '@/components/section-wrapper'
import { ContactForm } from '@/components/contact/contact-form'
import { profile } from '@/lib/data'

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="relative border-t border-[#E8E4DE] bg-[#F5F4F0] py-20 px-6">
      <div className="mx-auto max-w-4xl text-left space-y-8">
        <div className="text-center space-y-3">
          <span className="font-mono text-xs font-semibold text-[#4A4744] uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Sparkles className="size-3.5 text-[#D94A10]" />
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Let&apos;s <span className="font-bold text-[#F25C1F]">talk</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#2D2B28] max-w-xl mx-auto">
            Most interested in computer vision, robotics and embedded systems. Send me a message below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start">
          {/* Quick Direct Info Box */}
          <div className="rounded-[12px] border border-[#E8E4DE] bg-[#FFFFFF] p-6 shadow-rest space-y-4">
            <div>
              <span className="font-mono text-[11px] font-semibold text-[#4A4744] uppercase block mb-1">
                Direct Email
              </span>
              <a href={`mailto:${profile.email}`} className="text-sm font-semibold text-[#D94A10] hover:underline break-all">
                {profile.email}
              </a>
            </div>
            <div>
              <span className="font-mono text-[11px] font-semibold text-[#4A4744] uppercase block mb-1">
                Location
              </span>
              <p className="text-sm font-medium text-[#1A1A1A]">{profile.location}</p>
            </div>
          </div>

          {/* Form Box */}
          <div className="rounded-[12px] border border-[#E8E4DE] bg-[#FFFFFF] p-6 sm:p-8 shadow-rest">
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
