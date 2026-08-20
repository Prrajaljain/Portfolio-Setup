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
  ArrowDown,
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
      className="mt-14 w-full max-w-5xl text-left"
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
    <section className="relative bg-[#f7f7f4] text-[#26251e] overflow-hidden pt-20 pb-[100px]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-center gap-12 lg:gap-16">
          {/* LEFT COLUMN — Text Content */}
          <div className="order-1 flex flex-col items-start text-left">
            {/* 1. Greeting Line */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-2 font-mono text-xs font-semibold text-[#807d72] uppercase tracking-wider"
            >
              HI, Prajal Jain
            </motion.div>

            {/* 2. Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-6xl lg:text-[60px] font-bold leading-[1.08] tracking-[-0.03em] text-[#26251e]"
            >
              I build AI that{' '}
              <span className="text-[#f54e00] font-bold">
                runs on hardware
              </span>
            </motion.h1>

            {/* 3. Subtitle Role Line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-3 font-mono text-xs sm:text-sm font-semibold text-[#f54e00] flex items-center gap-2"
            >
              <span className="size-2 rounded-full bg-[#76b900]" />
              <span>AI &amp; Robotics Engineer | Embedded Systems</span>
            </motion.div>

            {/* 4. Description Line */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-base sm:text-lg leading-relaxed text-[#5a5852] max-w-xl"
            >
              Computer vision on Raspberry Pi and Arduino, drone systems, and industrial analytics.
            </motion.p>

            {/* 5. Primary Buttons Row: [ Resume ] [ Let's talk ] */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f54e00] px-6 text-sm font-medium text-white transition-colors hover:bg-[#d04200]"
              >
                <FileText className="size-4" />
                <span>Resume</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#e6e5e0] bg-[#ffffff] px-6 text-sm font-medium text-[#26251e] transition-colors hover:bg-[#fafaf7] hover:border-[#cfcdc4]"
              >
                <Send className="size-4 text-[#f54e00]" />
                <span>Let&apos;s talk</span>
              </Link>
            </motion.div>

            {/* 6. Social Buttons Row: [ GitHub ] [ LinkedIn ] */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-3 flex items-center gap-3 font-mono text-xs"
            >
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-4 py-2 font-semibold text-[#26251e] transition-colors hover:border-[#cfcdc4] hover:text-[#f54e00]"
              >
                <span className="text-[10px] font-bold text-[#f54e00]">GH</span>
                <span>GitHub</span>
                <ArrowUpRight className="size-3 text-[#807d72]" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-4 py-2 font-semibold text-[#26251e] transition-colors hover:border-[#cfcdc4] hover:text-[#f54e00]"
              >
                <span className="text-[10px] font-bold text-[#f54e00]">IN</span>
                <span>LinkedIn</span>
                <ArrowUpRight className="size-3 text-[#807d72]" />
              </a>
            </motion.div>

            {/* 7. Scroll to explore indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex items-center gap-2 text-xs font-mono text-[#807d72]"
            >
              <ArrowDown className="size-3.5 text-[#f54e00] animate-bounce" />
              <span>Scroll to explore</span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-2 mx-auto w-full max-w-[280px] lg:max-w-[380px]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] border border-[#e6e5e0] bg-[#ffffff] shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/prajal-headshot.jpg"
                alt="Prajal Jain — AI & Robotics Engineer"
                fill
                sizes="(max-width: 1024px) 280px, 380px"
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
