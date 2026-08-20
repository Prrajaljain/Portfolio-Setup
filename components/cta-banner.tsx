'use client'

import { ContactForm } from '@/components/contact/contact-form'

export function CtaBanner() {
  return (
    <section className="relative border-t border-[#e6e5e0] bg-[#f7f7f4] py-20 px-6">
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <span className="font-mono text-xs font-semibold text-[#807d72] uppercase tracking-wider">
          GET IN TOUCH
        </span>
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#26251e]">
          Let&apos;s Connect
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-[#5a5852] max-w-xl mx-auto">
          Whether you&apos;re working on embedded systems, robotics, or just want to chat about edge AI&mdash;my inbox is open.
        </p>

        <div className="mt-8 rounded-md border border-[#e6e5e0] bg-[#ffffff] p-6 sm:p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
