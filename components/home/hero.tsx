'use client'

import Image from 'next/image'
import Link from 'next/link'
import { User, Briefcase, Code2, Cpu, FileText, Send, ArrowUpRight, ArrowRight } from 'lucide-react'
import { profile } from '@/lib/data'

/* ─── Asymmetric 3-Column Bento Grid Section ─── */
function BentoHeroGrid() {
  const techBadges = [
    { name: 'Python', tag: 'PY', icon: '/images/tech/python.svg' },
    { name: 'YOLOv8', tag: 'YOLO', icon: '/images/tech/yolo.svg' },
    { name: 'TensorFlow', tag: 'TF', icon: '/images/tech/tensorflow.svg' },
    { name: 'OpenCV', tag: 'CV', icon: '/images/tech/opencv.svg' },
    { name: 'Power BI', tag: 'PBI', icon: '/images/tech/powerbi.svg' },
    { name: 'MediaPipe', tag: 'MP', icon: '/images/tech/mediapipe.svg' },
    { name: 'Raspberry Pi', tag: 'PI', icon: '/images/tech/raspberrypi.svg' },
    { name: 'Arduino', tag: 'ARD', icon: '/images/tech/arduino.svg' },
  ]

  return (
    <div id="bento-grid" className="mt-6 md:mt-8 w-full text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Left Column: 2 Cards Stacked Vertically */}
        <div className="flex flex-col gap-6 justify-between">
          {/* Card 1: Background & Journey -> #about */}
          <Link
            href="#about"
            className="group relative flex flex-col justify-between rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-[28px] h-full shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover hover:-translate-y-[3px] active:shadow-press active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#FDF3EE]">
                  <User className="size-4 text-[#D94A10]" />
                </div>
                <ArrowUpRight className="size-4 text-[#8A8580] transition-all duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[#D94A10]" />
              </div>
              <h2 className="text-[20px] font-semibold tracking-tight text-[#1A1A1A]">
                Background &amp; Journey
              </h2>
              <p className="mt-2 text-[15px] leading-[1.5] text-[#2B2927]">
                Mechatronics diploma, then AI. Why the combination matters.
              </p>
            </div>
          </Link>

          {/* Card 2: Hands-On Experience -> #experience */}
          <Link
            href="#experience"
            className="group relative flex flex-col justify-between rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-[28px] h-full shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover hover:-translate-y-[3px] active:shadow-press active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#FDF3EE]">
                  <Briefcase className="size-4 text-[#D94A10]" />
                </div>
                <ArrowUpRight className="size-4 text-[#8A8580] transition-all duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[#D94A10]" />
              </div>
              <h2 className="text-[20px] font-semibold tracking-tight text-[#1A1A1A]">
                Hands-On Experience
              </h2>
              <p className="mt-2 text-[15px] leading-[1.5] text-[#2B2927]">
                Rishabh Instruments and Navikshaa &mdash; dashboards, RL agents, research image classification.
              </p>
            </div>
          </Link>
        </div>

        {/* Center Column: 1 Tall Card Spanning Height -> #tech-stack */}
        <Link
          href="#tech-stack"
          className="group relative flex flex-col justify-between rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-[28px] h-full shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover hover:-translate-y-[3px] active:shadow-press active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
        >
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex size-9 items-center justify-center rounded-sm bg-[#FDF3EE]">
                <Code2 className="size-4 text-[#D94A10]" />
              </div>
              <ArrowUpRight className="size-4 text-[#8A8580] transition-all duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[#D94A10]" />
            </div>

            <h2 className="text-[20px] font-semibold tracking-tight text-[#1A1A1A]">
              Tech Stack &amp; Tools
            </h2>
            <p className="mt-2 text-[15px] leading-[1.5] text-[#2B2927]">
              Computer vision, embedded boards, edge AI, and data analysis.
            </p>
          </div>

          <div className="mt-auto pt-6 grid grid-cols-2 gap-2.5">
            {techBadges.map((badge) => (
              <div
                key={badge.name}
                className="inline-flex items-center gap-2.5 rounded-full border border-[#E8E4DE] bg-[#FAF8F5] px-3.5 py-2 text-[13px] font-medium text-[#1A1A1A] transition-colors group-hover:border-[#D94A10]/40 leading-none w-full min-w-0 shadow-xs"
              >
                {badge.icon ? (
                  <Image
                    src={badge.icon}
                    alt={badge.name}
                    width={16}
                    height={16}
                    className="size-4 shrink-0 object-contain"
                  />
                ) : (
                  <span className="shrink-0 font-mono text-[10px] font-bold text-[#D94A10] uppercase leading-none">
                    {badge.tag}
                  </span>
                )}
                <span className="truncate leading-none">{badge.name}</span>
              </div>
            ))}
          </div>
        </Link>

        {/* Right Column: 2 Cards Stacked Vertically */}
        <div className="flex flex-col gap-6 justify-between">
          {/* Card 4: Projects -> #projects */}
          <Link
            href="#projects"
            className="group relative flex flex-col justify-between rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-[28px] h-full shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover hover:-translate-y-[3px] active:shadow-press active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#FDF3EE]">
                  <Cpu className="size-4 text-[#D94A10]" />
                </div>
                <ArrowUpRight className="size-4 text-[#8A8580] transition-all duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[#D94A10]" />
              </div>
              <h2 className="text-[20px] font-semibold tracking-tight text-[#1A1A1A]">
                Applied AI &amp; Systems
              </h2>
              <p className="mt-2 text-[15px] leading-[1.5] text-[#2B2927]">
                Payload octocopter, crowd detection, waste sorting, and custom PID flight control.
              </p>
            </div>
          </Link>

          {/* Card 5: Get in touch -> #contact */}
          <Link
            href="#contact"
            className="group relative flex flex-col justify-between rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-[28px] h-full shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover hover:-translate-y-[3px] active:shadow-press active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#FDF3EE]">
                  <Send className="size-4 text-[#D94A10]" />
                </div>
                <ArrowUpRight className="size-4 text-[#8A8580] transition-all duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[#D94A10]" />
              </div>
              <h2 className="text-[20px] font-semibold tracking-tight text-[#1A1A1A]">
                Get in touch
              </h2>
              <p className="mt-2 text-[15px] leading-[1.5] text-[#2B2927]">
                Open to conversations about computer vision, robotics, and embedded AI.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const githubUrl = profile.socials.find((s) => s.label === 'GitHub')?.href ?? 'https://github.com/Prrajaljain'
  const linkedinUrl = profile.socials.find((s) => s.label === 'LinkedIn')?.href ?? 'https://linkedin.com/in/prajaljain23'

  return (
    <section className="relative bg-[#F5F4F0] text-[#1A1A1A] overflow-hidden box-border">
      {/* 1. First Screen Viewport (100% height minus 80px header) */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8 min-h-[calc(100vh-80px)] flex flex-col justify-between pt-6 sm:pt-8 md:pt-10 pb-8">
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] items-center gap-10 lg:gap-14 my-auto">

          {/* LEFT COLUMN CONTAINER */}
          <div className="flex flex-col items-start text-left w-full">

            {/* 1. Eyebrow */}
            <div className="mb-[12px] font-mono text-[13px] font-semibold text-[#4A4744] uppercase tracking-[1.5px]">
              HI, I&apos;M PRAJAL JAIN
            </div>

            {/* 2. Headline */}
            <h1 className="mb-[28px] max-w-xl text-[40px] md:text-[48px] lg:text-[64px] font-bold leading-[1.02] tracking-[-0.03em] text-[#1A1A1A]">
              I build AI that{' '}
              <span className="text-[#F25C1F] font-bold block">
                runs on hardware
              </span>
            </h1>

            {/* 3. Subtitle / Role Line */}
            <div className="mb-[16px] flex flex-wrap items-center gap-[10px] font-mono text-[13px] sm:text-[14px] font-medium text-[#D94A10]">
              <span className="size-[6px] shrink-0 rounded-full bg-[#D94A10]" />
              <span>
                AI &amp; Robotics &middot; Embedded Systems &middot; Industrial Data Analytics
              </span>
            </div>

            {/* 4. Subhead Paragraph */}
            <p className="mb-[40px] max-w-[480px] text-[17px] leading-[1.65] text-[#2D2B28]">
              Drones that see. Machines that sort.<br className="hidden sm:block" />
              Data that tells you what the factory floor won&apos;t.
            </p>

            {/* 5. Button Row */}
            <div className="mb-[48px] flex flex-wrap items-center gap-6">
              {/* Primary button: Resume */}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-auto items-center justify-center gap-2 rounded-md bg-[#F25C1F] px-[24px] py-[14px] text-[15px] font-semibold text-white shadow-rest transition-all duration-200 ease-out hover:bg-[#D94A10] hover:shadow-hover hover:-translate-y-[1px] active:translate-y-0 active:shadow-press focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
              >
                <FileText className="size-4" />
                <span>Resume</span>
              </a>

              {/* Secondary button: Let's talk */}
              <Link
                href="#contact"
                className="inline-flex w-auto items-center justify-center gap-2 rounded-md border border-[#E0DCD6] bg-[#ffffff] px-[24px] py-[14px] text-[15px] font-semibold text-[#1A1A1A] shadow-none transition-all duration-200 ease-out hover:bg-[#1A1A1A] hover:text-[#F5F4F0] hover:border-[#1A1A1A] hover:shadow-rest active:scale-95 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
              >
                <Send className="size-4 text-[#F25C1F]" />
                <span>Let&apos;s talk</span>
              </Link>

              {/* GitHub and LinkedIn links */}
              <div className="inline-flex items-center gap-5 pt-1 sm:pt-0">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-[#1A1A1A] transition-colors duration-150 hover:text-[#D94A10] focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="size-4 text-[#807d72] transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[#D94A10]" />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-[#1A1A1A] transition-colors duration-150 hover:text-[#D94A10] focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="size-4 text-[#807d72] transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[#D94A10]" />
                </a>
              </div>
            </div>

            {/* 6. Proof Strip & Orange Rule */}
            <div className="w-full pt-2">
              <div className="w-full h-[2px] bg-[#F25C1F]" />

              <div className="w-full pt-[20px] pb-[8px] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 font-mono">
                <div>
                  <span className="font-mono text-[11px] font-semibold text-[#4A4744] uppercase tracking-wider block">
                    Indian Army
                  </span>
                  <span className="font-mono text-[15px] font-medium text-[#1A1A1A] mt-1 block whitespace-nowrap">
                    octocopter demo
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] font-semibold text-[#4A4744] uppercase tracking-wider block">
                    Navratri 2025
                  </span>
                  <span className="font-mono text-[15px] font-medium text-[#1A1A1A] mt-1 block whitespace-nowrap">
                    5,000+ crowd, live
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] font-semibold text-[#4A4744] uppercase tracking-wider block">
                    Rishabh Instruments
                  </span>
                  <span className="font-mono text-[15px] font-medium text-[#1A1A1A] mt-1 block whitespace-nowrap">
                    11 dashboards live
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN — Photo Desktop Position */}
          <div className="hidden lg:block mx-auto w-full max-w-[360px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[8px] border border-[#E8E4DE] bg-white shadow-rest">
              <Image
                src="/images/prajal-headshot.jpg"
                alt="Prajal Jain — AI & Robotics Engineer"
                fill
                sizes="360px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* 2. Portfolio Bento Grid Section (Starts cleanly below the 100vh landing fold) */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8 pt-16 md:pt-24 pb-16 md:pb-24">
        <BentoHeroGrid />
      </div>
    </section>
  )
}
