'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileText,
  ArrowUpRight,
  User,
  Briefcase,
  Code2,
  Cpu,
  Send,
} from 'lucide-react'
import { profile } from '@/lib/data'

/* ─── Asymmetric 3-Column Bento Grid Section (Matching Image 2 Structure) ─── */
function BentoHeroGrid() {
  const techBadges = [
    { name: 'Python', tag: 'PY' },
    { name: 'C++', tag: 'C++' },
    { name: 'ROS2', tag: 'ROS' },
    { name: 'OpenCV', tag: 'CV' },
    { name: 'TensorFlow', tag: 'TF' },
    { name: 'FastAPI', tag: 'API' },
    { name: 'PyTorch', tag: 'PT' },
    { name: 'YOLOv8', tag: 'YOLO' },
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
                Industry experience in computer vision, edge deployment &amp; ROS2 systems.
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
                  <span className="font-bold text-[#f54e00]">{badge.tag}</span>
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
                Production RAG infrastructure, reinforcement learning &amp; edge vision projects.
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

/* ─── Main Hybrid Hero Section ─── */
export function Hero() {
  return (
    <section className="relative pt-16 pb-20 bg-[#f7f7f4] text-[#26251e]">
      <div className="mx-auto flex max-w-5xl flex-col items-start px-6">
        {/* Status Chip ({typography.caption-uppercase} = 11px / font-semibold) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e6e5e0] bg-[#ffffff] px-3.5 py-1 font-mono text-[11px] font-semibold text-[#5a5852] uppercase tracking-wider"
        >
          <span className="size-2 rounded-full bg-[#76b900]" />
          <span>Summer 2027 Internship Search</span>
        </motion.div>

        {/* Display Headline ({typography.display-mega} = 72px / weight 400 / -2.16px tracking) */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl text-left text-4xl font-normal leading-[1.1] tracking-[-0.03em] sm:text-6xl lg:text-[72px] text-[#26251e]"
        >
          Computer vision on embedded hardware, robotics, and industrial data.
        </motion.h1>

        {/* Intro Paragraph ({typography.body-md} = 16px / 400) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-3xl text-left text-base leading-relaxed text-[#5a5852]"
        >
          Hi, I&apos;m Prajal Jain &mdash; an AI &amp; Robotics engineering student looking for a Summer 2027 internship. If you&apos;re building systems where AI models have to run on real hardware (Raspberry Pi, Jetson, edge devices), I&apos;d like to hear from you.
        </motion.p>

        {/* Action Button Row ({typography.button} = 14px / font-medium) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex items-center gap-4"
        >
          {/* Primary CTA (Cursor Orange #f54e00) */}
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#f54e00] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#d04200]"
          >
            Get in touch
          </Link>

          {/* Secondary CTA (Resume Link) */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#e6e5e0] bg-[#ffffff] px-5 py-2.5 text-sm font-medium text-[#26251e] transition-colors hover:bg-[#fafaf7] hover:border-[#cfcdc4]"
          >
            <FileText className="size-4 text-[#807d72]" />
            <span>Read Resume</span>
          </a>
        </motion.div>

        {/* Asymmetric 5-Card Bento Grid */}
        <BentoHeroGrid />
      </div>
    </section>
  )
}
