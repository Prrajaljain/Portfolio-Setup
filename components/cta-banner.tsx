'use client'

import { Mail } from 'lucide-react'

export function CtaBanner() {
  return (
    <section id="contact" className="relative border-t border-[#E8E4DE] bg-[#F5F4F0] py-20 px-6">
      <div className="mx-auto max-w-3xl text-center space-y-4">
        <span className="font-mono text-xs font-semibold text-[#4A4744] uppercase tracking-wider">
          GET IN TOUCH
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1A1A]">
          Let&apos;s <span className="text-[#F25C1F]">Connect</span>
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-[#2D2B28] max-w-xl mx-auto">
          Most interested in computer vision, robotics and embedded systems. If that overlaps with what you work on, get in touch.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="mailto:prrajal.jain@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F25C1F] px-8 py-3.5 text-sm font-semibold text-white shadow-rest transition-all hover:bg-[#D94A10] hover:shadow-hover focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <Mail className="size-4" />
            <span>Send an email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
