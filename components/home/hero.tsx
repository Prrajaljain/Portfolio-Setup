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
    <div className="mt-14 w-full text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {/* Left Column: 2 Cards Stacked Vertically */}
        <div className="flex flex-col gap-4 justify-between">
          {/* Card 1: Background & Journey */}
          <Link
            href="/about"
            className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 h-full transition-all duration-150 hover:border-[#cfcdc4] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#1A1A1A]">
                  <User className="size-4 text-[#76b900]" />
                </div>
                <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#D94A10] transition-colors duration-150" />
              </div>
              <h2 className="text-[18px] font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#D94A10] transition-colors duration-150">
                Background &amp; Journey
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5a5852]">
                My education in AI &amp; Mechatronics engineering, core background, and journey.
              </p>
            </div>
          </Link>

          {/* Card 2: Hands-On Experience */}
          <Link
            href="/experience"
            className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 h-full transition-all duration-150 hover:border-[#cfcdc4] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#1A1A1A]">
                  <Briefcase className="size-4 text-[#76b900]" />
                </div>
                <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#D94A10] transition-colors duration-150" />
              </div>
              <h2 className="text-[18px] font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#D94A10] transition-colors duration-150">
                Hands-On Experience
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5a5852]">
                Industry experience in computer vision, edge deployment &amp; embedded AI systems.
              </p>
            </div>
          </Link>
        </div>

        {/* Center Column: 1 Tall Card Spanning Height */}
        <Link
          href="/about#skills"
          className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 transition-all duration-150 hover:border-[#cfcdc4] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
        >
          <div>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#1A1A1A]">
                <Code2 className="size-4 text-[#76b900]" />
              </div>
              <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#D94A10] transition-colors duration-150" />
            </div>

            <h2 className="text-[18px] font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#D94A10] transition-colors duration-150">
              Tech Stack &amp; Tools
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5a5852]">
              Technologies and tools I use to build innovative AI &amp; robotics solutions.
            </p>

            {/* 4x2 Icon Grid */}
            <div className="mt-5 grid grid-cols-4 gap-2 font-mono text-[11px]">
              {techBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex flex-col items-center justify-center rounded-sm border border-[#e6e5e0] bg-[#fafaf7] p-2 text-[#1A1A1A] transition-colors duration-150 group-hover:border-[#cfcdc4]"
                >
                  <span className="font-bold text-[#5a5852]">{badge.tag || badge.fontTag}</span>
                  <span className="mt-1 text-[11px] text-[#5a5852] font-sans leading-tight text-center w-full block">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-[#e6e5e0] pt-4 text-[12px] font-mono text-[#807d72] flex items-center justify-between group-hover:text-[#D94A10]">
            <span className="font-medium">Explore all tools</span>
            <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-1" />
          </div>
        </Link>

        {/* Right Column: 2 Cards Stacked Vertically */}
        <div className="flex flex-col gap-4 justify-between">
          {/* Card 4: Applied AI & Systems */}
          <Link
            href="/projects"
            className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 h-full transition-all duration-150 hover:border-[#cfcdc4] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#1A1A1A]">
                  <Cpu className="size-4 text-[#76b900]" />
                </div>
                <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#D94A10] transition-colors duration-150" />
              </div>
              <h2 className="text-[18px] font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#D94A10] transition-colors duration-150">
                Applied AI &amp; Systems
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5a5852]">
                Computer vision on embedded hardware, payload drones, and industrial analytics.
              </p>
            </div>
          </Link>

          {/* Card 5: Work With Me */}
          <Link
            href="/contact"
            className="group relative flex flex-col justify-between rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 h-full transition-all duration-150 hover:border-[#cfcdc4] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-sm bg-[#fafaf7] border border-[#e6e5e0] text-[#1A1A1A]">
                  <ArrowUpRight className="size-4 text-[#76b900]" />
                </div>
                <ArrowUpRight className="size-4 text-[#807d72] group-hover:text-[#D94A10] transition-colors duration-150" />
              </div>
              <h2 className="text-[18px] font-semibold tracking-tight text-[#1A1A1A] group-hover:text-[#D94A10] transition-colors duration-150">
                Work With Me
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5a5852]">
                Available for AI &amp; Autonomous Systems engineering projects worldwide.
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
    <section className="relative bg-[#F5F4F0] text-[#1A1A1A] overflow-hidden pt-16 pb-[90px]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] items-start gap-10 lg:gap-14">
          
          {/* LEFT COLUMN / MOBILE CONTENT CONTAINER */}
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

            {/* 3. Subtitle / Role Line: Literal #D94A10 color & 6px bullet circle with 10px gap — order-3 */}
            <div className="order-3 mb-[16px] flex flex-wrap items-center gap-[10px] font-mono text-[13px] sm:text-[14px] font-medium text-[#D94A10]">
              <span className="size-[6px] shrink-0 rounded-full bg-[#D94A10]" />
              <span>AI &amp; Robotics &middot; Embedded Systems &middot; Industrial Data Analytics</span>
            </div>

            {/* 4. Subhead Paragraph — order-4 */}
            <p className="order-4 mb-[32px] lg:mb-[40px] max-w-[480px] text-[17px] leading-[1.65] text-[#52525B]">
              Drones that see. Machines that sort.<br className="hidden sm:block" />
              Data that tells you what the factory floor won&apos;t.
            </p>

            {/* 5. Proof Strip & Orange Rule: order-5 on mobile (below subhead), order-7 on desktop (below buttons) */}
            <div className="order-5 lg:order-7 w-full mb-[40px] lg:mb-0">
              <div className="w-full h-[2px] bg-[#F25C1F]" />

              <div className="w-full pt-[20px] flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-12 font-mono">
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

            {/* 6. Button Row: Resume is primary solid orange #F25C1F, Let's talk is secondary white with #E0DCD6 border */}
            <div className="order-6 lg:order-5 mb-[40px] lg:mb-[48px] flex flex-wrap items-center gap-4">
              {/* Primary button: Resume — solid orange #F25C1F, white text, FileText icon, no arrow */}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#F25C1F] px-5 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#D94A10] active:scale-95 shadow-sm focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
              >
                <FileText className="size-4" />
                <span>Resume</span>
              </a>

              {/* Secondary button: Let's talk — white background, 1px border #E0DCD6, dark text, Send icon */}
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#E0DCD6] bg-[#ffffff] px-5 text-[15px] font-semibold text-[#1A1A1A] transition-colors duration-150 hover:bg-[#1A1A1A] hover:text-[#F5F4F0] hover:border-transparent active:scale-95 shadow-sm focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
              >
                <Send className="size-4 text-[#F25C1F]" />
                <span>Let&apos;s talk</span>
              </Link>

              {/* GitHub ↗ and LinkedIn ↗ plain text links */}
              <div className="inline-flex h-11 items-center gap-5">
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
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px]">
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
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px]">
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

        {/* Section Bleed at Bottom */}
        <BentoHeroGrid />
      </div>
    </section>
  )
}
