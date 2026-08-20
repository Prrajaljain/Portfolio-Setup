'use client'

import { motion } from 'framer-motion'

export function CurrentlySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative border-t border-[#e6e5e0] bg-[#f7f7f4] py-16 text-left"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold text-[#5a5852] uppercase tracking-wider block mb-4">
            CURRENTLY
          </span>

          <div className="space-y-4 rounded-xl border border-[#e6e5e0] bg-[#ffffff] p-6 sm:p-8">
            <div className="nvidia-corner-square" />
            <p className="text-base sm:text-lg font-medium leading-relaxed text-[#26251e]">
              <span className="font-semibold text-[#f54e00]">AI &amp; Data Analyst Intern</span> at Rishabh Instruments Limited &mdash; building Power BI dashboards and predictive models on manufacturing telemetry.
            </p>

            <div className="pt-2 border-t border-[#e6e5e0] space-y-1 font-mono text-xs sm:text-sm text-[#5a5852]">
              <p className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#76b900]" />
                <span>B.Tech Artificial Intelligence, Vishwakarma University &middot; 2027</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#76b900]" />
                <span>Diploma in Mechatronics, Indo-German Tool Room (IGTR)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
