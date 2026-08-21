import Image from 'next/image'
import { MapPin, Mail, Download, Sparkles } from 'lucide-react'
import { profile } from '@/lib/data'
import { SectionWrapper } from '@/components/section-wrapper'

export function AboutHero() {
  return (
    <SectionWrapper id="about" className="relative overflow-hidden border-b border-[#E8E4DE] bg-[#F5F4F0] text-[#1A1A1A] py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_340px] lg:items-center lg:gap-14">
        <div className="flex flex-col gap-5 text-left">
          <span className="inline-flex w-fit items-center gap-2 rounded-sm border border-[#E8E4DE] bg-[#FFFFFF] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#8A8580] shadow-rest">
            <Sparkles className="size-3.5 text-[#D94A10]" />
            ENGINEERING PROFILE &amp; BACKGROUND
          </span>

          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl text-[#1A1A1A]">
            Making machine learning run on{' '}
            <span className="font-bold text-[#F25C1F]">
              real hardware
            </span>
          </h1>

          <div className="space-y-4 text-base leading-relaxed text-[#52525B]">
            <p>
              AI &amp; Robotics engineering student with a mechatronics background. I build computer vision systems that run on embedded boards &mdash; Raspberry Pi, Arduino &mdash; where the model has to work inside real power, timing and thermal limits, not just in a notebook.
            </p>
            <p>
              Diploma in Mechatronics from Indo-German Tool Room, now finishing a B.Tech in Artificial Intelligence at Vishwakarma University.
            </p>
            <p>
              Most AI students have never wired an IMU. Most mechatronics graduates have never trained a model. When a vision system fails in the field, I can tell whether it&apos;s the model, the lighting, or the mounting &mdash; and that&apos;s usually the difference between a demo and a deployment.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 font-mono text-xs text-[#52525B] pt-2">
            <span className="inline-flex items-center gap-1.5 rounded-sm border border-[#E8E4DE] bg-[#FFFFFF] px-3.5 py-1.5 text-[#1A1A1A] shadow-rest">
              <MapPin className="size-3.5 text-[#D94A10]" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded-sm border border-[#E8E4DE] bg-[#FFFFFF] px-3.5 py-1.5 text-[#1A1A1A] shadow-rest transition-all duration-200 hover:border-[#D94A10] hover:text-[#D94A10] hover:shadow-hover focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
            >
              <Mail className="size-3.5 text-[#D94A10]" />
              {profile.email}
            </a>
          </div>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-[#F25C1F] px-6 py-3 text-xs font-semibold text-white shadow-rest transition-all duration-200 ease-out hover:bg-[#D94A10] hover:shadow-hover hover:-translate-y-[1px] active:translate-y-0 active:shadow-press focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <Download className="size-4" />
            <span>Download Official Resume</span>
          </a>
        </div>

        {/* Profile Card Frame */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-2 shadow-rest">
          <div className="relative h-full w-full overflow-hidden rounded-[4px] bg-[#FAF8F5]">
            <Image
              src="/images/prajal-headshot.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="320px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5F4F0]/90 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 rounded-sm border border-[#E8E4DE] bg-[#FFFFFF]/95 p-3 backdrop-blur-md shadow-rest">
              <p className="text-xs font-bold text-[#1A1A1A]">{profile.name}</p>
              <p className="text-[11px] text-[#D94A10] font-mono">{profile.title}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
