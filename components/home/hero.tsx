'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileText,
  ArrowUpRight,
  User,
  Briefcase,
  Code2,
  Zap,
  Send,
  Cpu,
} from 'lucide-react'
import { profile } from '@/lib/data'

/* ─── Bento Grid Section (Hybrid Cursor x NVIDIA Hairline Cards) ─── */
function BentoHeroGrid() {
  const techBadges = ['Python', 'C++', 'ROS2', 'OpenCV', 'TensorFlow', 'FastAPI', 'PyTorch', 'YOLOv8']

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-14 w-full max-w-5xl text-left"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 items-stretch">
        {/* Card 1: Hands-On Experience */}
        <Link
          href="/experience"
          className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-6 transition-all hover:border-[#cfcdc4] hover:-translate-y-0.5"
        >
          <div className="nvidia-corner-square" />
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e]">
                <Briefcase className="size-4 text-[#76b900]" />
              </div>
              <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#f54e00] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-[#26251e] group-hover:text-[#f54e00] transition-colors">
              Hands-On Experience
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#5a5852]">
              Real-world engineering internships in computer vision, edge deployment &amp; ROS2 systems.
            </p>
          </div>
        </Link>

        {/* Card 2: Background & Journey */}
        <Link
          href="/about"
          className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-6 transition-all hover:border-[#cfcdc4] hover:-translate-y-0.5"
        >
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e]">
                <User className="size-4 text-[#76b900]" />
              </div>
              <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#f54e00] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-[#26251e] group-hover:text-[#f54e00] transition-colors">
              Background &amp; Journey
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#5a5852]">
              AI &amp; Mechatronics engineering student background, core focus, and career objectives.
            </p>
          </div>
        </Link>

        {/* Card 3: Tech Stack & Tools (JetBrains Mono Badges) */}
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
            <h3 className="text-lg font-semibold tracking-tight text-[#26251e] group-hover:text-[#f54e00] transition-colors">
              Tech Stack &amp; Tools
            </h3>
            
            {/* JetBrains Mono Tool Badges */}
            <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px]">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-2 py-0.5 text-[#26251e]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Link>

        {/* Card 4: Applied AI & Systems */}
        <Link
          href="/projects"
          className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-6 transition-all hover:border-[#cfcdc4] hover:-translate-y-0.5"
        >
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e]">
                <Cpu className="size-4 text-[#76b900]" />
              </div>
              <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#f54e00] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-[#26251e] group-hover:text-[#f54e00] transition-colors">
              Applied AI &amp; Systems
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#5a5852]">
              Production RAG infrastructure, reinforcement learning &amp; edge vision projects.
            </p>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

/* ─── Main Hybrid Hero Section ─── */
export function Hero() {
  return (
    <section className="relative py-20 bg-[#f7f7f4] text-[#26251e]">
      <div className="mx-auto flex max-w-5xl flex-col items-start px-6">
        {/* Status Chip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e6e5e0] bg-[#ffffff] px-3.5 py-1 font-mono text-xs font-medium text-[#5a5852]"
        >
          <span className="size-2 rounded-full bg-[#76b900]" />
          <span>Summer 2027 Internship Search</span>
        </motion.div>

        {/* Display Headline (Weight 400 with tight letter-spacing) */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl text-left text-4xl font-normal leading-[1.12] tracking-tight sm:text-6xl text-[#26251e]"
        >
          Computer vision on embedded hardware, robotics, and industrial data.
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-3xl text-left text-base sm:text-lg leading-relaxed text-[#5a5852]"
        >
          Hi, I&apos;m Prajal Jain &mdash; an AI &amp; Robotics engineering student looking for a Summer 2027 internship. If you&apos;re building systems where AI models have to run on real hardware (Raspberry Pi, Jetson, edge devices), I&apos;d like to hear from you.
        </motion.p>

        {/* Action Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center gap-4"
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

        {/* Bento Grid */}
        <BentoHeroGrid />
      </div>
    </section>
  )
}
