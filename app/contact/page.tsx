import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, Sparkles, ArrowLeft, ExternalLink } from 'lucide-react'
import { profile } from '@/lib/data'
import { ContactForm } from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'Let\'s Connect — Prajal Jain',
  description: 'Whether you\'re working on embedded systems, robotics, or just want to chat about edge AI—my inbox is open.',
}

const infoItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: 'Location', value: profile.location },
]

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#F5F4F0] text-[#1A1A1A] py-12 px-6">
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Navigation Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-[#E8E4DE] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#1A1A1A] shadow-rest transition-all hover:border-[#D94A10] hover:text-[#D94A10] hover:shadow-hover"
          >
            <ArrowLeft className="size-4 text-[#D94A10]" />
            <span>Back to Full Portfolio</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-[#4A4744]">
            <span>Explore:</span>
            <Link href="/#projects" className="hover:text-[#D94A10] underline">Projects</Link> &middot; 
            <Link href="/#experience" className="hover:text-[#D94A10] underline">Experience</Link> &middot; 
            <Link href="/#about" className="hover:text-[#D94A10] underline">About</Link>
          </div>
        </div>

        {/* Header Title & Subtitle */}
        <div className="text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 rounded-sm border border-[#E8E4DE] bg-[#FFFFFF] px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#4A4744]">
            <Sparkles className="size-3.5 text-[#D94A10]" />
            GET IN TOUCH
          </span>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-tight max-w-3xl mx-auto">
            Let&apos;s <span className="font-bold text-[#F25C1F]">Connect</span>
          </h1>

          <p className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-[#2D2B28]">
            Most interested in computer vision, robotics and embedded systems. Send me a message below or email directly.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr] items-start">
          {/* Info Column */}
          <div className="flex flex-col gap-4">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-5 shadow-rest transition-all duration-200 hover:border-[#D94A10] hover:shadow-hover"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-[#FDF3EE] text-[#D94A10] border border-[#E8E4DE]">
                  <item.icon className="size-4 text-[#D94A10]" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#4A4744] font-semibold">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-mono text-xs font-semibold text-[#1A1A1A] transition-colors hover:text-[#D94A10]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-[#1A1A1A]">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Direct Social Profiles */}
            <div className="flex flex-col gap-3 rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-5 shadow-rest">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#F25C1F] font-semibold">
                Direct Profiles
              </span>
              <div className="flex flex-wrap gap-2">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-sm border border-[#E8E4DE] bg-[#FAF8F5] px-3 py-1.5 font-mono text-xs font-semibold text-[#2D2B28] transition-all hover:border-[#D94A10] hover:text-[#D94A10]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div className="rounded-[12px] border border-[#E8E4DE] bg-[#FFFFFF] p-6 sm:p-8 shadow-rest">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] mb-2">Send a Message</h2>
            <p className="text-xs sm:text-sm text-[#2D2B28] mb-6 leading-relaxed">
              Fill out your details below and I&apos;ll get back to you directly.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
