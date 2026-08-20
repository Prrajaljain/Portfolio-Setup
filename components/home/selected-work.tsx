'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Zap, Play } from 'lucide-react'

const selectedProjects = [
  {
    title: 'Autonomous Payload Drone',
    videoSrc: '/drone-takeoff.mp4',
    posterSrc: '/images/drone-thumbnail.jpg',
    description:
      '8-rotor octocopter with onboard CNN obstacle detection. Split control — Raspberry Pi runs perception, a separate flight controller owns stabilisation, so a stall in vision can’t take down flight.',
    specs: [
      '100kg payload class · 6–8 min flight',
      'Demonstrated to Indian Army Southern Command',
    ],
    tags: ['Python', 'CNN', 'Raspberry Pi'],
    repo: 'https://github.com/Prrajaljain',
  },
  {
    title: 'Real-Time Crowd Detection',
    videoSrc: '/octocopter-hover.mp4',
    posterSrc: '/images/crowd-thumbnail.jpg',
    description:
      'Live headcount and automated safety alerts from video feeds. Counts are smoothed across frames because raw detection jitters as people occlude each other.',
    specs: [
      'Shri Mahalaxmi Temple, Pune — Navratri 2025',
      'Peak crowds of 5,000+',
    ],
    tags: ['YOLOv8', 'OpenCV', 'Python'],
    repo: 'https://github.com/Prrajaljain/AI-Crowd-Monitor',
  },
  {
    title: 'AI Waste Sorting',
    videoSrc: '/waste-sorter.mp4',
    posterSrc: '/images/sorter-thumbnail.jpg',
    description:
      'On-device material classification routing waste to the correct bin. No cloud, no network — everything runs on the Pi.',
    specs: ['92–96% accuracy across three classes'],
    tags: ['MediaPipe', 'TFLite', 'Raspberry Pi'],
    repo: 'https://github.com/Prrajaljain/ai-waste-sorting',
  },
]

export function SelectedWork() {
  return (
    <motion.section
      id="selected-work"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative py-20 bg-[#f7f7f4] text-[#26251e]"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="font-mono text-xs font-semibold text-[#5a5852] uppercase tracking-wider">
            SELECTED WORK
          </span>
          <h2 className="mt-2 text-3xl font-normal tracking-tight text-[#26251e] sm:text-5xl">
            Deployed, <span className="font-semibold text-[#f54e00]">not just built</span>
          </h2>
        </div>

        {/* 3 Video-Led Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {selectedProjects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-[#e6e5e0] bg-[#ffffff] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#cfcdc4] hover:shadow-md"
            >
              <div className="nvidia-corner-square" />

              {/* Top Video Preview Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#fafaf7] border-b border-[#e6e5e0]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={project.posterSrc}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                  <source src={project.videoSrc} type="video/mp4" />
                </video>

                <div className="absolute top-3 right-3 rounded-sm border border-[#e6e5e0] bg-[#ffffff]/90 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#5a5852] backdrop-blur-sm flex items-center gap-1">
                  <Play className="size-2.5 text-[#76b900] fill-[#76b900]" />
                  <span>DEMO</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 text-left">
                <h3 className="text-[18px] font-semibold tracking-tight text-[#26251e] group-hover:text-[#f54e00] transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5a5852]">
                  {project.description}
                </p>

                {/* Specs Box */}
                <div className="mt-4 space-y-1 rounded-sm border border-[#e6e5e0] bg-[#fafaf7] p-3 font-mono text-[11px] text-[#26251e]">
                  {project.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-[#76b900]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-2 py-0.5 text-[#26251e]"
                    >
                      <Zap className="size-3 text-[#f54e00]" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link Footer */}
                {project.repo && (
                  <div className="mt-6 border-t border-[#e6e5e0] pt-3 flex items-center justify-end font-mono text-xs">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#f54e00] hover:text-[#d04200] transition-colors"
                    >
                      <span>View repository</span>
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Link below cards */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-[#26251e] hover:text-[#f54e00] transition-colors"
          >
            <span>See all projects</span>
            <ArrowUpRight className="size-4 text-[#f54e00]" />
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
