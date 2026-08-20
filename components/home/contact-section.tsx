'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/contact/contact-form'

export function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative border-t border-[#e6e5e0] bg-[#f7f7f4] py-20 px-6"
    >
      <div className="mx-auto max-w-3xl text-center space-y-4">
        <span className="font-mono text-xs font-semibold text-[#5a5852] uppercase tracking-wider">
          GET IN TOUCH
        </span>
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#26251e]">
          Let&apos;s <span className="font-semibold text-[#f54e00]">talk</span>
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-[#5a5852] max-w-xl mx-auto">
          Working on something where the model has to run on real hardware? I&apos;d like to hear about it.
        </p>

        <div className="mt-8 rounded-xl border border-[#e6e5e0] bg-[#ffffff] p-6 sm:p-8 shadow-sm text-left">
          <ContactForm />
        </div>
      </div>
    </motion.section>
  )
}
