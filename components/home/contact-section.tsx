import { ContactForm } from '@/components/contact/contact-form'
import { SectionWrapper } from '@/components/section-wrapper'

export function ContactSection() {
  return (
    <SectionWrapper className="relative border-t border-[#E8E4DE] bg-[#F5F4F0] py-20 px-6">
      <div className="mx-auto max-w-3xl text-center space-y-4">
        <span className="font-mono text-xs font-semibold text-[#8A8580] uppercase tracking-wider">
          GET IN TOUCH
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
          Let&apos;s <span className="font-bold text-[#F25C1F]">talk</span>
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-[#52525B] max-w-xl mx-auto">
          Working on something where the model has to run on real hardware? I&apos;d like to hear about it.
        </p>

        <div className="mt-8 rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-6 sm:p-8 shadow-rest text-left">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  )
}
