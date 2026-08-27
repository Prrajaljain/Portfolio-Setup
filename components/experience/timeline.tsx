'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Calendar, MapPin, Zap, Award, Sparkles, Building2, Cpu } from 'lucide-react'
import { experience } from '@/lib/data'
import { SectionWrapper } from '@/components/section-wrapper'

export function Timeline() {
  return (
    <SectionWrapper id="experience" className="mx-auto max-w-6xl px-6 py-16 text-left">
      {/* Scroll-Triggered Fade Entrance Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Section Title Header */}
        <div className="mb-12 space-y-2">
          <span className="font-mono text-xs font-semibold text-[#4A4744] uppercase tracking-wider">
            CAREER &amp; INDUSTRY EXPERIENCE
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Where I&apos;ve <span className="font-bold text-[#F25C1F]">built things</span>
          </h2>
        </div>

        {/* Main Experience Layout with LEFT Vertical Timeline Axis */}
        <div className="relative">
          {/* Continuous Vertical Timeline Line on Left Side (Visible on All Screen Sizes) */}
          <div className="absolute left-[28px] sm:left-[36px] top-8 bottom-8 w-[2px] bg-[#E8E4DE] block" />

          <div className="flex flex-col gap-10 sm:gap-16">
            {experience.map((job, idx) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.15 }}
                className="relative grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr] items-start gap-4 sm:gap-8"
              >
              {/* Left Timeline Node & Date Pill Axis */}
              <div className="flex flex-col items-center z-10 pt-2">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative flex size-11 sm:size-14 items-center justify-center rounded-full border-2 border-[#D94A10] bg-[#FFFFFF] shadow-hover ring-4 ring-[#FDF3EE] cursor-pointer"
                >
                  <Cpu className="size-5 sm:size-6 text-[#D94A10]" />
                </motion.div>

                <span className="mt-2 sm:mt-3 rounded-full border border-[#E8E4DE] bg-[#FFFFFF] px-2 sm:px-3 py-0.5 sm:py-1 font-mono text-[10px] sm:text-[11px] font-semibold text-[#D94A10] shadow-rest whitespace-nowrap">
                  {job.isCurrent ? '2026 – Present' : '2025'}
                </span>
              </div>

              {/* Main Experience Card (Right of Left Node Axis) */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group relative flex w-full flex-col gap-6 rounded-[12px] border border-[#E8E4DE] bg-[#FFFFFF] p-6 sm:p-8 shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover"
              >
                {/* 1. Top Badges Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8E4DE] pb-4">
                  {/* Left: Role Status Pill */}
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
                      job.isCurrent
                        ? 'border-[#22c55e]/30 bg-[#22c55e]/10 text-[#15803d]'
                        : 'border-[#E8E4DE] bg-[#FAF8F5] text-[#4A4744]'
                    }`}
                  >
                    <span
                      className={`size-2 rounded-full ${
                        job.isCurrent ? 'bg-[#22c55e]' : 'bg-[#4A4744]'
                      }`}
                    />
                    {job.isCurrent ? 'Current Role' : 'Previous Role'}
                  </span>

                  {/* Right: Date Range Pill */}
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F25C1F]/30 bg-[#FDF3EE] px-3.5 py-1 text-xs font-semibold text-[#D94A10]">
                    <Calendar className="size-3.5 text-[#D94A10]" />
                    <span>{job.period}</span>
                  </span>
                </div>

                {/* 2. Role Title & Company / Location */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">
                    {job.role}
                  </h3>

                  <div className="mt-2.5 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#4A4744]">
                    <div className="flex items-center gap-1.5 text-[#D94A10]">
                      <Building2 className="size-4" />
                      <span>{job.company}</span>
                    </div>
                    <span className="text-[#8A8580]">&middot;</span>
                    <div className="flex items-center gap-1 text-[#4A4744]">
                      <MapPin className="size-3.5 text-[#8A8580]" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                {/* 3. Metric Highlights Pill Grid */}
                {job.metrics && job.metrics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {job.metrics.map((metric) => (
                      <motion.div
                        key={metric}
                        whileHover={{ scale: 1.01, x: 3 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-center gap-2.5 rounded-[8px] border border-[#E8E4DE] bg-[#FAF8F5] px-4 py-2.5 text-xs font-semibold text-[#1A1A1A] transition-colors group-hover:border-[#D94A10]/30"
                      >
                        <Sparkles className="size-3.5 shrink-0 text-[#F25C1F]" />
                        <span>{metric}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* 4. Tech Stack Tag Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E4DE] bg-[#FFFFFF] px-3 py-1 text-xs font-medium text-[#2D2B28] shadow-rest transition-all hover:border-[#D94A10]"
                    >
                      <Zap className="size-3 text-[#F25C1F]" />
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* 5. Role Summary */}
                <p className="text-xs sm:text-sm leading-relaxed text-[#2D2B28] font-normal">
                  {job.summary}
                </p>

                {/* 6. Key Achievements (Individual Card Boxes) */}
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#4A4744]">
                    <Award className="size-4 text-[#D94A10]" />
                    <span>KEY ACHIEVEMENTS</span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {job.highlights.map((h) => (
                      <motion.div
                        key={h}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-start gap-3 rounded-[8px] border border-[#E8E4DE] bg-[#FAF8F5] p-3.5 sm:p-4 text-xs sm:text-sm text-[#2D2B28] leading-relaxed transition-all duration-200 hover:border-[#D94A10] hover:bg-[#FFFFFF] hover:shadow-rest"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#D94A10]" />
                        <span className="font-normal text-[#1A1A1A]">{h}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      </motion.div>
    </SectionWrapper>
  )
}
