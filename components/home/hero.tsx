'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  User,
  Briefcase,
  Code2,
  Cpu,
  Send,
  FileText,
} from 'lucide-react'
import { profile } from '@/lib/data'

/* ─── Asymmetric 3-Column Bento Grid Section ─── */
function BentoHeroGrid() {
  const techBadges = [
    { name: 'Python', tag: 'PY' },
    { name: 'C++', tag: 'C++' },
    { name: 'TensorFlow', tag: 'TF' },
    { name: 'OpenCV', tag: 'CV' },
    { name: 'TFLite', tag: 'TL' },
    { name: 'MediaPipe', fontTag: 'MP' },
    { name: 'Raspberry Pi', tag: 'PI' },
    { name: 'Arduino', tag: 'ARD' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-14 w-full text-left"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {/* Left Column: 2 Cards Stacked Vertically */}
        <div className="flex flex-col gap-4 justify-between">
          {/* Card 1: Background & Journey */}
          <Link
            href="/about"
            className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 h-full transition-all hover:border-[#cfcdc4] hover:-translate-y-0.5"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e]">
                  <User className="size-4 text-[#76b900]" />
                </div>
                <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#f54e00] transition-colors" />
              </div>
              <h3 className="text-[18px] font-semibold tracking-tight text-[#26251e] group-hover:text-[#f54e00] transition-colors">
                Background &amp; Journey
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5a5852]">
                My education in AI &amp; Mechatronics engineering, core background, and journey.
              </p>
            </div>
          </Link>

          {/* Card 2: Hands-On Experience */}
          <Link
            href="/experience"
            className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 h-full transition-all hover:border-[#cfcdc4] hover:-translate-y-0.5"
          >
            <div className="nvidia-corner-square" />
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e]">
                  <Briefcase className="size-4 text-[#76b900]" />
                </div>
                <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#f54e00] transition-colors" />
              </div>
              <h3 className="text-[18px] font-semibold tracking-tight text-[#26251e] group-hover:text-[#f54e00] transition-colors">
                Hands-On Experience
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5a5852]">
                Industry experience in computer vision, edge deployment &amp; embedded AI systems.
              </p>
            </div>
          </Link>
        </div>

        {/* Center Column: 1 Tall Card Spanning Height */}
        <Link
          href="/about#skills"
          className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-6 transition-all hover:border-[#cfcdc4] hover:-translate-y-0.5"
        >
          <div className="nvidia-corner-square" />
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e]">
                <Code2 className="size-4 text-[#76b900]" />
              </div>
              <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#f54e00] transition-colors" />
            </div>

            <h3 className="text-[18px] font-semibold tracking-tight text-[#26251e] group-hover:text-[#f54e00] transition-colors">
              Tech Stack &amp; Tools
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5a5852]">
              Technologies and tools I use to build innovative AI &amp; robotics solutions.
            </p>

            {/* 4x2 Icon Grid */}
            <div className="mt-6 grid grid-cols-4 gap-2 font-mono text-[11px]">
              {techBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex flex-col items-center justify-center rounded-sm border border-[#e6e5e0] bg-[#fafaf7] p-2 text-[#26251e] transition-colors group-hover:border-[#cfcdc4]"
                >
                  <span className="font-bold text-[#f54e00]">{badge.tag || badge.fontTag}</span>
                  <span className="mt-1 text-[10px] text-[#5a5852] font-sans truncate w-full text-center">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-[#e6e5e0] pt-3 text-[11px] font-mono text-[#807d72] flex items-center justify-between">
            <span>EXPLORE ALL TOOLS</span>
            <span className="text-[#f54e00] font-bold">&rarr;</span>
          </div>
        </Link>

        {/* Right Column: 2 Cards Stacked Vertically */}
        <div className="flex flex-col gap-4 justify-between">
          {/* Card 4: Applied AI & Systems */}
          <Link
            href="/projects"
            className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 h-full transition-all hover:border-[#cfcdc4] hover:-translate-y-0.5"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e]">
                  <Cpu className="size-4 text-[#76b900]" />
                </div>
                <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#f54e00] transition-colors" />
              </div>
              <h3 className="text-[18px] font-semibold tracking-tight text-[#26251e] group-hover:text-[#f54e00] transition-colors">
                Applied AI &amp; Systems
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5a5852]">
                Computer vision on embedded hardware, payload drones, and industrial analytics.
              </p>
            </div>
          </Link>

          {/* Card 5: Let's Connect */}
          <Link
            href="/contact"
            className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 h-full transition-all hover:border-[#cfcdc4] hover:-translate-y-0.5"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e]">
                  <Send className="size-4 text-[#76b900]" />
                </div>
                <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#f54e00] transition-colors" />
              </div>
              <h3 className="text-[18px] font-semibold tracking-tight text-[#26251e] group-hover:text-[#f54e00] transition-colors">
                Let&apos;s Connect
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5a5852]">
                Available for AI &amp; Autonomous Systems engineering projects worldwide.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export function Hero() {
  const githubUrl = profile.socials.find((s) => s.label === 'GitHub')?.href ?? 'https://github.com/Prrajaljain'
  const linkedinUrl = profile.socials.find((s) => s.label === 'LinkedIn')?.href ?? 'https://linkedin.com/in/prajaljain23'

  return (
    <section className="relative bg-[#f7f7f4] text-[#26251e] overflow-hidden pt-16 pb-[90px]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] items-center gap-10 lg:gap-14">
          {/* LEFT COLUMN — Text Content */}
          <div className="order-1 flex flex-col items-start text-left">
            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-[16px] font-mono text-[13px] font-medium text-[#71717A] uppercase tracking-[1.5px]"
            >
              HI, PRAJAL JAIN
            </motion.div>

            {/* 2. Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-[20px] max-w-xl text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-[-0.02em] text-[#26251e]"
            >
              I build AI that{' '}
              <span className="text-[#f54e00] font-bold block">
                runs on hardware
              </span>
            </motion.h1>

            {/* 3. Subtitle Line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mb-[20px] flex flex-wrap items-center gap-[10px] font-mono text-[13px] sm:text-[14px] font-medium text-[#f54e00]"
            >
              <span className="size-[7px] shrink-0 rounded-full bg-[#76b900]" />
              <span>AI &amp; Robotics &middot; Embedded Systems &middot; Industrial Data Analytics</span>
            </motion.div>

            {/* 4. Tagline / Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-[28px] max-w-[48ch] text-[17px] leading-[1.65] text-[#52525B]"
            >
              Drones that see. Machines that sort. Data that tells you what the factory floor won&apos;t.
            </motion.p>

            {/* 5. Unified Action Buttons & Social Pills Row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-[28px] flex flex-wrap items-center gap-[12px]"
            >
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#f54e00] px-[24px] text-[15px] font-semibold text-white transition-all hover:bg-[#d04200] active:scale-95 shadow-sm"
              >
                <FileText className="size-4" />
                <span>Resume</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-[#e6e5e0] bg-[#ffffff] px-[24px] text-[15px] font-semibold text-[#26251e] transition-all hover:bg-[#fafaf7] hover:border-[#cfcdc4] active:scale-95 shadow-sm"
              >
                <Send className="size-4 text-[#f54e00]" />
                <span>Let&apos;s talk</span>
              </Link>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-[#e6e5e0] bg-[#ffffff] px-[20px] text-[14px] font-medium text-[#26251e] transition-all hover:bg-[#fafaf7] hover:border-[#cfcdc4] hover:text-[#f54e00] active:scale-95 shadow-sm"
              >
                <span className="font-mono text-[11px] font-bold text-[#f54e00]">GH</span>
                <span>GitHub</span>
                <ArrowUpRight className="size-3.5 text-[#807d72]" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-[#e6e5e0] bg-[#ffffff] px-[20px] text-[14px] font-medium text-[#26251e] transition-all hover:bg-[#fafaf7] hover:border-[#cfcdc4] hover:text-[#f54e00] active:scale-95 shadow-sm"
              >
                <span className="font-mono text-[11px] font-bold text-[#f54e00]">IN</span>
                <span>LinkedIn</span>
                <ArrowUpRight className="size-3.5 text-[#807d72]" />
              </a>
            </motion.div>

            {/* 6. Proof Strip (3 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full border-t border-[#e6e5e0] pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[#5a5852]"
            >
              <div>
                <span className="font-bold text-[#26251e] block uppercase tracking-wider">INDIAN ARMY</span>
                <span className="text-[#f54e00] mt-0.5 block font-medium">octocopter demo</span>
              </div>
              <div>
                <span className="font-bold text-[#26251e] block uppercase tracking-wider">NAVRATRI 2025</span>
                <span className="text-[#f54e00] mt-0.5 block font-medium">5,000+ crowd, live</span>
              </div>
              <div>
                <span className="font-bold text-[#26251e] block uppercase tracking-wider">RISHABH INSTRUMENTS</span>
                <span className="text-[#f54e00] mt-0.5 block font-medium">telemetry &rarr; dashboards</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-2 mx-auto w-full max-w-[320px] lg:max-w-[380px]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] border border-[#e6e5e0] bg-[#ffffff] shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/prajal-headshot.jpg"
                alt="Prajal Jain — AI & Robotics Engineer"
                fill
                sizes="(max-width: 1024px) 320px, 380px"
                className="object-cover object-center rounded-[16px]"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <BentoHeroGrid />
      </div>
    </section>
  )
}
