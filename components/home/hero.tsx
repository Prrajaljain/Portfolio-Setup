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
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#1A1A1A]">
                  <User className="size-4 text-[#76b900]" />
                </div>
                <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#F25C1F] transition-colors" />
              </div>
              <h3 className="text-[18px] font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#F25C1F] transition-colors">
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
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#1A1A1A]">
                  <Briefcase className="size-4 text-[#76b900]" />
                </div>
                <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#F25C1F] transition-colors" />
              </div>
              <h3 className="text-[18px] font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#F25C1F] transition-colors">
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
              <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#1A1A1A]">
                <Code2 className="size-4 text-[#76b900]" />
              </div>
              <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#F25C1F] transition-colors" />
            </div>

            <h3 className="text-[18px] font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#F25C1F] transition-colors">
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
                  className="flex flex-col items-center justify-center rounded-sm border border-[#e6e5e0] bg-[#fafaf7] p-2 text-[#1A1A1A] transition-colors group-hover:border-[#cfcdc4]"
                >
                  <span className="font-bold text-[#F25C1F]">{badge.tag || badge.fontTag}</span>
                  <span className="mt-1 text-[10px] text-[#5a5852] font-sans truncate w-full text-center">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-[#e6e5e0] pt-3 text-[11px] font-mono text-[#807d72] flex items-center justify-between">
            <span>EXPLORE ALL TOOLS</span>
            <span className="text-[#F25C1F] font-bold">&rarr;</span>
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
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#1A1A1A]">
                  <Cpu className="size-4 text-[#76b900]" />
                </div>
                <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#F25C1F] transition-colors" />
              </div>
              <h3 className="text-[18px] font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#F25C1F] transition-colors">
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
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#1A1A1A]">
                  <Send className="size-4 text-[#76b900]" />
                </div>
                <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#F25C1F] transition-colors" />
              </div>
              <h3 className="text-[18px] font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#F25C1F] transition-colors">
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
    <section className="relative bg-[#F5F4F0] text-[#1A1A1A] overflow-hidden pt-16 pb-[90px]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] items-start gap-10 lg:gap-14">
          {/* LEFT COLUMN — Text Content */}
          <div className="order-1 flex flex-col items-start text-left">
            {/* 1. Eyebrow (12px gap to headline) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-[12px] font-mono text-[13px] font-medium text-[#71717A] uppercase tracking-[1.5px]"
            >
              HI, I&apos;M PRAJAL JAIN
            </motion.div>

            {/* 2. Headline: 64px, leading 1.02, tracking -0.03em (28px gap to role line) */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-[28px] max-w-xl text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.02] tracking-[-0.03em] text-[#1A1A1A]"
            >
              I build AI that{' '}
              <span className="text-[#F25C1F] font-bold block">
                runs on hardware
              </span>
            </motion.h1>

            {/* 3. Subtitle / Role Line (16px gap to subhead) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mb-[16px] flex flex-wrap items-center gap-[10px] font-mono text-[13px] sm:text-[14px] font-medium text-[#F25C1F]"
            >
              <span className="size-[7px] shrink-0 rounded-full bg-[#76b900]" />
              <span>AI &amp; Robotics &middot; Embedded Systems &middot; Industrial Data Analytics</span>
            </motion.div>

            {/* 4. Subhead Paragraph (40px gap to button row) */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-[40px] max-w-[48ch] text-[17px] leading-[1.65] text-[#52525B]"
            >
              Drones that see. Machines that sort. Data that tells you what the factory floor won&apos;t.
            </motion.p>

            {/* 5. Button Row (48px gap to divider rule) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-[48px] flex flex-wrap items-center gap-[12px]"
            >
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#F25C1F] px-[24px] text-[15px] font-semibold text-white transition-all hover:bg-[#d04200] active:scale-95 shadow-sm"
              >
                <FileText className="size-4" />
                <span>Resume</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-[#e6e5e0] bg-[#ffffff] px-[24px] text-[15px] font-semibold text-[#1A1A1A] transition-all hover:bg-[#fafaf7] hover:border-[#cfcdc4] active:scale-95 shadow-sm"
              >
                <Send className="size-4 text-[#F25C1F]" />
                <span>Let&apos;s talk</span>
              </Link>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-[8px] border border-[#e6e5e0] bg-[#ffffff] px-[20px] text-[15px] font-semibold text-[#1A1A1A] transition-all hover:bg-[#fafaf7] hover:border-[#cfcdc4] hover:text-[#F25C1F] active:scale-95 shadow-none"
              >
                <span>GitHub</span>
                <ArrowUpRight className="size-4 text-[#807d72]" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-[8px] border border-[#e6e5e0] bg-[#ffffff] px-[20px] text-[15px] font-semibold text-[#1A1A1A] transition-all hover:bg-[#fafaf7] hover:border-[#cfcdc4] hover:text-[#F25C1F] active:scale-95 shadow-none"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="size-4 text-[#807d72]" />
              </a>
            </motion.div>

            {/* 6. Orange 2px Divider Rule (100% width of text column) */}
            <div className="w-full h-[2px] bg-[#F25C1F]" />

            {/* 7. Proof Strip (20px gap after divider) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full pt-[20px] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8A8580] block">
                  INDIAN ARMY
                </span>
                <span className="font-mono text-[15px] font-medium text-[#1A1A1A] mt-1 block">
                  octocopter demo
                </span>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8A8580] block">
                  NAVRATRI 2025
                </span>
                <span className="font-mono text-[15px] font-medium text-[#1A1A1A] mt-1 block">
                  5,000+ crowd, live
                </span>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8A8580] block">
                  RISHABH INSTRUMENTS
                </span>
                <span className="font-mono text-[15px] font-medium text-[#1A1A1A] mt-1 block">
                  telemetry &rarr; dashboards
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Photo Treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-2 mx-auto w-full max-w-[320px] lg:max-w-[380px] lg:pt-6"
          >
            <div className="relative aspect-[4/5] w-full">
              {/* Solid Offset Block (#1A1A1A, 12px right & 12px down, rounded 4px) */}
              <div className="absolute inset-0 translate-x-[12px] translate-y-[12px] rounded-[4px] bg-[#1A1A1A]" />

              {/* Photo Frame (rounded 4px) */}
              <div className="relative z-10 h-full w-full overflow-hidden rounded-[4px] border border-[#e6e5e0] bg-[#ffffff]">
                <Image
                  src="/images/prajal-headshot.jpg"
                  alt="Prajal Jain — AI & Robotics Engineer"
                  fill
                  sizes="(max-width: 1024px) 320px, 380px"
                  className="object-cover object-center rounded-[4px]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section Bleed at Bottom — Bento Grid seamlessly embedded in background */}
        <BentoHeroGrid />
      </div>
    </section>
  )
}
