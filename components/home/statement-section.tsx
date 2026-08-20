'use client'

import { motion } from 'framer-motion'

export function StatementSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative border-y border-[#e6e5e0] bg-[#ffffff] py-28 sm:py-36 text-center"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Large Statement Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-normal leading-snug tracking-tight text-[#26251e]">
          Most AI students have never wired an IMU.{' '}
          <span className="block font-semibold text-[#f54e00] mt-1 sm:mt-2">
            Most mechatronics graduates have never trained a model.
          </span>
        </h2>

        {/* Subtitle Paragraph */}
        <p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-[#5a5852]">
          When a vision system fails in the field, I can tell whether it&apos;s the model, the lighting, or the mounting &mdash; and that&apos;s usually the difference between a demo and a deployment.
        </p>
      </div>
    </motion.section>
  )
}
