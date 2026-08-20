'use client'

import { motion } from 'framer-motion'

const techCategories = [
  {
    label: 'AI / ML',
    items: ['Python', 'TensorFlow', 'TFLite', 'CNNs', 'Reinforcement Learning'],
  },
  {
    label: 'Vision',
    items: ['OpenCV', 'MediaPipe', 'YOLOv8', 'Object detection'],
  },
  {
    label: 'Embedded',
    items: ['Raspberry Pi', 'Arduino', 'Embedded C/C++', 'MPU-6050', 'PID control'],
  },
  {
    label: 'Data',
    items: ['Power BI', 'SQL', 'Pandas', 'NumPy'],
  },
]

const marqueeItems = [
  'Python',
  'TensorFlow',
  'TFLite',
  'OpenCV',
  'YOLOv8',
  'MediaPipe',
  'Raspberry Pi',
  'Arduino',
  'Embedded C++',
  'MPU-6050',
  'Power BI',
  'SQL',
  'Pandas',
  'NumPy',
  'Streamlit',
  'Linux',
  'Git',
]

export function TechGrouping() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative py-20 bg-[#f7f7f4] text-[#26251e]"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="font-mono text-xs font-semibold text-[#5a5852] uppercase tracking-wider">
            WHAT I WORK WITH
          </span>
          <h2 className="mt-2 text-3xl font-normal tracking-tight text-[#26251e] sm:text-4xl">
            Core stack &amp; <span className="font-semibold text-[#f54e00]">verified tooling</span>
          </h2>
        </div>

        {/* 4 Clean Grouped Rows */}
        <div className="flex flex-col gap-4 rounded-xl border border-[#e6e5e0] bg-[#ffffff] p-6 sm:p-8">
          {techCategories.map((cat, idx) => (
            <div
              key={cat.label}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                idx !== techCategories.length - 1 ? 'border-b border-[#e6e5e0] pb-4' : ''
              }`}
            >
              {/* Category Label (Left, Mono Muted) */}
              <span className="w-32 shrink-0 font-mono text-xs font-semibold uppercase tracking-wider text-[#5a5852]">
                {cat.label}
              </span>

              {/* Items List (Right, Bold Font-Mono) */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-[#26251e]">
                {cat.items.map((item, itemIdx) => (
                  <span key={item} className="inline-flex items-center">
                    <span className="rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-2.5 py-1 text-[#26251e]">
                      {item}
                    </span>
                    {itemIdx !== cat.items.length - 1 && (
                      <span className="mx-1.5 text-[#cfcdc4]">&middot;</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Optional Flourish — Infinite Marquee */}
        <div className="mt-12 overflow-hidden rounded-md border border-[#e6e5e0] bg-[#ffffff] py-3">
          <div className="flex w-max animate-marquee space-x-6 font-mono text-xs text-[#5a5852] hover:[animation-play-state:paused]">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={`${item}-${i}`} className="flex items-center space-x-6">
                <span>{item}</span>
                <span className="text-[#f54e00] font-bold">&bull;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
