'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 bg-[#f7f7f4] text-[#26251e] overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] items-center gap-10 lg:gap-14">
          {/* Left Column — Real Headshot Photo (4:5 Aspect, Rounded 16px, Clean Hairline Border) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-[280px] lg:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#e6e5e0] bg-[#ffffff] p-2 shadow-sm">
              <div className="nvidia-corner-square" />
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#fafaf7]">
                <Image
                  src="/images/prajal-headshot.jpg"
                  alt="Prajal Jain — AI & Robotics Engineer"
                  fill
                  sizes="(max-width: 1024px) 280px, 300px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column — Type & Action CTA */}
          <div className="flex flex-col items-start text-left">
            {/* Monospace Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-[#5a5852] uppercase tracking-widest"
            >
              <span className="size-2 rounded-full bg-[#76b900]" />
              <span>AI &amp; ROBOTICS &middot; EMBEDDED SYSTEMS</span>
            </motion.div>

            {/* Display Headline (Large, Tight Leading, Orange Accent) */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl font-normal leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[64px] text-[#26251e]"
            >
              I build AI that runs on hardware,{' '}
              <span className="font-semibold text-[#f54e00] block mt-1">
                not just in notebooks.
              </span>
            </motion.h1>

            {/* Intro Paragraphs (2 Paragraphs, Generous Line Height) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 space-y-3 max-w-2xl text-base sm:text-[17px] leading-relaxed text-[#5a5852]"
            >
              <p>
                I&apos;m Prajal &mdash; an AI and robotics engineer with a mechatronics background. I work on computer vision systems that run on embedded boards, where models have to hold up against real power, timing and lighting constraints.
              </p>
              <p>
                Recently: an 8-rotor payload drone demonstrated to Indian Army Southern Command, and a crowd monitoring system that ran live to 5,000+ people during Navratri.
              </p>
            </motion.div>

            {/* Action Buttons: [ View work ] (Primary Orange) | [ Get in touch ] (Outlined) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#selected-work"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f54e00] px-6 text-sm font-medium text-white transition-colors hover:bg-[#d04200]"
              >
                <span>View work</span>
                <ArrowDown className="size-4" />
              </a>

              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#e6e5e0] bg-[#ffffff] px-6 text-sm font-medium text-[#26251e] transition-colors hover:bg-[#fafaf7] hover:border-[#cfcdc4]"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="size-4 text-[#807d72]" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
