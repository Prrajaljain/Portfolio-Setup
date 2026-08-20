'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative bg-[#f7f7f4] text-[#26251e] overflow-hidden pt-24 pb-[120px]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-center gap-12 lg:gap-16">
          {/* LEFT COLUMN — Text Content (Order 1 on both mobile & desktop) */}
          <div className="order-1 flex flex-col items-start text-left">
            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 font-mono text-[12px] text-[#5a5852] uppercase tracking-[2px]"
            >
              AI &amp; ROBOTICS &middot; EMBEDDED SYSTEMS
            </motion.div>

            {/* 2. Headline (64px desktop / 36px mobile, weight 700, leading 1.05) */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-[36px] sm:text-5xl lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-[#26251e] max-w-[12ch] sm:max-w-none"
            >
              I build AI that runs on hardware,{' '}
              <span className="text-[#f54e00] block sm:inline font-bold">
                not just in notebooks.
              </span>
            </motion.h1>

            {/* 3. Intro Paragraphs (17px, line-height 1.7, max-width 58ch) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 space-y-4 text-[17px] leading-[1.7] text-[#5a5852] max-w-[58ch]"
            >
              <p>
                I&apos;m Prajal &mdash; an AI and robotics engineer with a mechatronics background. I work on computer vision systems that run on embedded boards, where models have to hold up against real power, timing and lighting constraints.
              </p>
              <p>
                Recently: an 8-rotor payload drone demonstrated to Indian Army Southern Command, and a crowd monitoring system that ran live to 5,000+ people during Navratri.
              </p>
            </motion.div>

            {/* 4. Buttons (32px above) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {/* Primary: View work — orange fill */}
              <a
                href="#selected-work"
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#f54e00] px-6 text-sm font-medium text-white transition-colors hover:bg-[#d04200]"
              >
                View work
              </a>

              {/* Secondary: Get in touch — outlined */}
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-[#e6e5e0] bg-transparent px-6 text-sm font-medium text-[#26251e] transition-colors hover:bg-[#ffffff] hover:border-[#cfcdc4]"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Portrait Photo (Order 2: Photo LAST on mobile!) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-2 mx-auto w-full max-w-[280px] lg:max-w-[420px]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] border border-[#e6e5e0] bg-[#ffffff] shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/prajal-headshot.jpg"
                alt="Prajal Jain — AI & Robotics Engineer"
                fill
                sizes="(max-width: 1024px) 280px, 420px"
                className="object-cover object-center rounded-[16px]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
