'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, User, Briefcase, Code2, Cpu, ArrowRight, FileText, Send } from 'lucide-react'
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
    <div id="bento-grid" className="mt-6 md:mt-8 w-full text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Left Column: 2 Cards Stacked Vertically */}
        <div className="flex flex-col gap-6 justify-between">
          {/* Card 1: Background & Journey */}
          <Link
            href="/about"
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
              <p className="mt-2 text-[15px] leading-[1.5] text-[#4A4744]">
                Mechatronics diploma, then AI. Why the combination matters.
              </p>
            </div>
          </Link>

          {/* Card 2: Hands-On Experience */}
          <Link
            href="/experience"
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
              <p className="mt-2 text-[15px] leading-[1.5] text-[#4A4744]">
                Rishabh Instruments and Navikshaa &mdash; dashboards, RL agents, medical imaging.
              </p>
            </div>
          </Link>
        </div>

        {/* Center Column: 1 Tall Card Spanning Height */}
        <Link
          href="/about#skills"
          className="group relative flex flex-col justify-between rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-[28px] shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover hover:-translate-y-[3px] active:shadow-press active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
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
            <p className="mt-2 text-[15px] leading-[1.5] text-[#4A4744]">
              Technologies and tools I use to build innovative AI &amp; robotics solutions.
            </p>

            {/* 4x2 Icon Grid */}
            <div className="mt-6 grid grid-cols-4 gap-2 font-mono text-[10px]">
              {techBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex flex-col items-center justify-center rounded-[4px] border border-[#E8E4DE] bg-transparent p-2 text-[#1A1A1A] shadow-rest transition-all duration-200 ease-out hover:shadow-hover hover:border-[#D94A10] hover:-translate-y-[2px]"
                >
                  <span className="font-mono text-[10px] uppercase text-[#8A8580] font-medium">{badge.tag || badge.fontTag}</span>
                  <span className="mt-1 text-[12px] text-[#1A1A1A] font-sans leading-tight text-center w-full block">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-[#E8E4DE] pt-4 text-[12px] font-mono text-[#8A8580] flex items-center justify-between transition-colors duration-200 group-hover:text-[#D94A10]">
            <span className="font-medium">Explore all tools</span>
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-[2px]" />
          </div>
        </Link>

        {/* Right Column: 2 Cards Stacked Vertically */}
        <div className="flex flex-col gap-6 justify-between">
          {/* Card 4: Applied AI & Systems */}
          <Link
            href="/projects"
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
              <p className="mt-2 text-[15px] leading-[1.5] text-[#4A4744]">
                Octocopter demonstrated to the Indian Army. Crowd monitoring at 5,000+ people.
              </p>
            </div>
          </Link>

          {/* Card 5: Work With Me */}
          <Link
            href="/contact"
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
                Work With Me
              </h2>
              <p className="mt-2 text-[15px] leading-[1.5] text-[#4A4744]">
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
    <section className="relative bg-[#F5F4F0] text-[#1A1A1A] overflow-hidden pt-[40px] md:pt-[52px] pb-[40px] md:pb-[56px] box-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] items-start gap-10 lg:gap-14">

          {/* LEFT COLUMN CONTAINER */}
          <div className="order-1 flex flex-col items-start text-left w-full">

            {/* 1. Eyebrow (12px gap to headline) — order-1 */}
            <div className="order-1 mb-[12px] font-mono text-[13px] font-medium text-[#71717A] uppercase tracking-[1.5px]">
              HI, I&apos;M PRAJAL JAIN
            </div>

            {/* 2. Headline: 40px (<768px), 48px (768px-1024px), 64px (≥1024px) (28px gap to role line) — order-2 */}
            <h1 className="order-2 mb-[28px] max-w-xl text-[40px] md:text-[48px] lg:text-[64px] font-bold leading-[1.02] tracking-[-0.03em] text-[#1A1A1A]">
              I build AI that{' '}
              <span className="text-[#F25C1F] font-bold block">
                runs on hardware
              </span>
            </h1>

            {/* 3. Subtitle / Role Line: (16px gap to subhead) — order-3 */}
            <div className="order-3 mb-[16px] flex flex-wrap items-center gap-[10px] font-mono text-[13px] sm:text-[14px] font-medium text-[#D94A10]" style={{ color: '#D94A10' }}>
              <span className="size-[6px] shrink-0 rounded-full bg-[#D94A10]" style={{ backgroundColor: '#D94A10' }} />
              <span className="text-[#D94A10]" style={{ color: '#D94A10' }}>
                AI &amp; Robotics &middot; Embedded Systems &middot; Industrial Data Analytics
              </span>
            </div>

            {/* 4. Subhead Paragraph: (40px gap to button row) — order-4 */}
            <p className="order-4 mb-[40px] max-w-[480px] text-[17px] leading-[1.65] text-[#52525B]">
              Drones that see. Machines that sort.<br className="hidden sm:block" />
              Data that tells you what the factory floor won&apos;t.
            </p>

            {/* 5. Proof Strip & Orange Rule: order-5 on mobile, order-7 on desktop (20px top padding below divider) */}
            <div className="order-5 lg:order-7 w-full mb-0">
              <div className="w-full h-[2px] bg-[#F25C1F]" />

              <div className="w-full pt-[20px] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 font-mono">
                <div>
                  <span className="font-mono text-[11px] font-semibold text-[#8A8580] block">
                    Indian Army
                  </span>
                  <span className="font-mono text-[15px] font-medium text-[#1A1A1A] mt-1 block whitespace-nowrap">
                    octocopter demo
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] font-semibold text-[#8A8580] block">
                    Navratri 2025
                  </span>
                  <span className="font-mono text-[15px] font-medium text-[#1A1A1A] mt-1 block whitespace-nowrap">
                    5,000+ crowd, live
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] font-semibold text-[#8A8580] block">
                    Rishabh Instruments
                  </span>
                  <span className="font-mono text-[15px] font-medium text-[#1A1A1A] mt-1 block whitespace-nowrap">
                    11 dashboards live
                  </span>
                </div>
              </div>
            </div>

            {/* 6. Button Row: (32px gap to orange divider) */}
            <div className="order-6 lg:order-5 mb-[32px] flex flex-wrap items-center gap-6">
              {/* Primary button: Resume — solid orange #F25C1F, white text, FileText icon */}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-auto items-center justify-center gap-2 rounded-md bg-[#F25C1F] px-[24px] py-[14px] text-[15px] font-semibold text-white shadow-rest transition-all duration-200 ease-out hover:bg-[#D94A10] hover:shadow-hover hover:-translate-y-[1px] active:translate-y-0 active:shadow-press focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
              >
                <FileText className="size-4" />
                <span>Resume</span>
              </a>

              {/* Secondary button: Let's talk — white background, 1px border #E0DCD6 */}
              <Link
                href="/contact"
                className="inline-flex w-auto items-center justify-center gap-2 rounded-md border border-[#E0DCD6] bg-[#ffffff] px-[24px] py-[14px] text-[15px] font-semibold text-[#1A1A1A] shadow-none transition-all duration-200 ease-out hover:bg-[#1A1A1A] hover:text-[#F5F4F0] hover:border-[#1A1A1A] hover:shadow-rest active:scale-95 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
              >
                <Send className="size-4 text-[#F25C1F]" />
                <span>Let&apos;s talk</span>
              </Link>

              {/* GitHub ↗ and LinkedIn ↗ plain text links */}
              <div className="inline-flex items-center gap-5">
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

            {/* 7. Photo Mobile Position */}
            <div className="order-7 lg:hidden hidden md:block w-full max-w-[320px] mx-auto pt-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px] shadow-rest">
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

          </div>

          {/* RIGHT COLUMN — Photo Desktop Position */}
          <div className="order-2 hidden lg:block mx-auto w-full max-w-[380px] pt-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px] shadow-rest">
              <Image
                src="/images/prajal-headshot.jpg"
                alt="Prajal Jain — AI & Robotics Engineer"
                fill
                sizes="380px"
                className="object-cover object-center rounded-[4px]"
                priority
              />
            </div>
          </div>

        </div>

        {/* Bento Grid Section */}
        <BentoHeroGrid />
      </div>
    </section>
  )
}
