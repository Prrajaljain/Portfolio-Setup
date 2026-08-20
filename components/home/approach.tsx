'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ApproachSection() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null)

  const phases = [
    {
      phase: 1,
      pillLabel: 'Phase 1',
      title: 'Planning & Strategy',
      desc: "I'll collaborate to map out your goals, target architecture, and key system requirements. We'll outline hardware bounds, model targets, and integration roadmaps.",
      accentColor: '#f54e00',
    },
    {
      phase: 2,
      pillLabel: 'Phase 2',
      title: 'Development & Progress Update',
      desc: "Once we agree on the system spec, I dive into coding, ROS2 node architecture, and neural net quantization. From initial benchmarks to production code, I keep you updated every step of the way.",
      accentColor: '#76b900',
    },
    {
      phase: 3,
      pillLabel: 'Phase 3',
      title: 'Deployment & Hardware Verification',
      desc: "This is where the magic happens! Models and pipelines are deployed to edge hardware (Jetson, Pi, embedded devices) and verified for real-time 60+ FPS performance.",
      accentColor: '#3b82f6',
    },
  ]

  return (
    <section className="relative py-20 px-6 max-w-5xl mx-auto text-left">
      {/* Section Heading */}
      <div className="mb-12 space-y-2">
        <span className="font-mono text-xs font-semibold text-[#807d72] uppercase tracking-wider">
          SYSTEM WORKFLOW
        </span>
        <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#26251e]">
          My <span className="font-semibold text-[#f54e00]">Approach</span>
        </h2>
      </div>

      {/* 3 Phase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {phases.map((p) => {
          const isHovered = hoveredPhase === p.phase

          return (
            <div
              key={p.phase}
              onMouseEnter={() => setHoveredPhase(p.phase)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="relative group rounded-md border border-[#e6e5e0] bg-[#ffffff] p-6 transition-all duration-200 hover:border-[#cfcdc4] min-h-[320px] flex flex-col justify-between"
            >
              {/* NVIDIA Corner Square Motif */}
              <div
                className="nvidia-corner-square"
                style={{ backgroundColor: p.accentColor }}
              />

              {/* Header Pill */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-3 py-1 font-mono text-xs font-semibold text-[#26251e]">
                  <span>{p.pillLabel}</span>
                  <span
                    className="size-1.5 rounded-full"
                    style={{ backgroundColor: p.accentColor }}
                  />
                </span>
                <span className="font-mono text-xs text-[#807d72]">0{p.phase}</span>
              </div>

              {/* Title & Description */}
              <div className="my-auto space-y-3 pt-6">
                <h3 className="text-xl font-semibold tracking-tight text-[#26251e]">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5a5852] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              {/* Card Footer Line */}
              <div className="border-t border-[#e6e5e0] pt-3 text-[11px] font-mono text-[#807d72] flex items-center justify-between">
                <span>STAGE 0{p.phase} SPEC</span>
                <span style={{ color: p.accentColor }} className="font-bold">&rarr;</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
