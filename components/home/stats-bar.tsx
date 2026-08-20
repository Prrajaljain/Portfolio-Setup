'use client'

import { motion } from 'framer-motion'

const statsData = [
  { value: '2', label: 'live deployments' },
  { value: '4', label: 'open-source repos' },
  { value: '8.65', label: 'GPA' },
  { value: '2027', label: 'B.Tech AI' },
]

export function StatsBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative border-y border-[#e6e5e0] bg-[#f7f7f4] py-8"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 items-center">
          {statsData.map((stat) => (
            <div key={stat.label} className="flex flex-col items-start text-left">
              <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-[#f54e00]">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm font-medium text-[#5a5852]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
