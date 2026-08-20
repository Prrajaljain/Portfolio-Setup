import Image from 'next/image'
import { MapPin, Mail, Download, Sparkles } from 'lucide-react'
import { profile } from '@/lib/data'

export function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#e6e5e0] bg-[#f7f7f4] text-[#26251e] py-16">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[1fr_340px] lg:items-center lg:gap-14">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#5a5852]">
            <Sparkles className="size-3.5 text-[#f54e00]" />
            Engineering Profile &amp; Background
          </span>

          <h1 className="text-balance text-3xl font-normal leading-tight tracking-tight sm:text-5xl text-[#26251e]">
            Deploying Machine Learning to{' '}
            <span className="font-semibold text-[#f54e00]">
              Real-Time Autonomous Hardware
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-[#5a5852]">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-3 font-mono text-xs text-[#5a5852]">
            <span className="inline-flex items-center gap-1.5 rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3.5 py-1.5 text-[#26251e]">
              <MapPin className="size-3.5 text-[#76b900]" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3.5 py-1.5 text-[#26251e] transition-colors hover:border-[#cfcdc4] hover:text-[#f54e00]"
            >
              <Mail className="size-3.5 text-[#76b900]" />
              {profile.email}
            </a>
          </div>

          <a
            href={profile.resumeUrl}
            download
            className="inline-flex w-fit items-center gap-2 rounded-md bg-[#f54e00] px-6 py-3 text-xs font-semibold text-white transition-all hover:bg-[#d04200]"
          >
            <Download className="size-4" />
            <span>Download Official Resume</span>
          </a>
        </div>

        {/* Profile Card Frame */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-md border border-[#e6e5e0] bg-[#ffffff] p-2 shadow-sm">
          <div className="nvidia-corner-square" />
          <div className="relative h-full w-full overflow-hidden rounded-sm">
            <Image
              src="/images/profile-portrait.png"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="320px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f7f7f4]/90 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 rounded-sm border border-[#e6e5e0] bg-[#ffffff]/95 p-3 backdrop-blur-md">
              <p className="text-xs font-semibold text-[#26251e]">{profile.name}</p>
              <p className="text-[11px] text-[#f54e00] font-mono">{profile.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
