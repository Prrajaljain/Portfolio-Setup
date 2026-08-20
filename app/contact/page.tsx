import type { Metadata } from 'next'
import { Mail, MapPin, Clock, Sparkles } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'
import { profile } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Let\'s Connect — Prajal Jain',
  description: 'Whether you\'re working on embedded systems, robotics, or just want to chat about edge AI—my inbox is open.',
}

const infoItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: Clock, label: 'Response time', value: 'Within 24 business hours' },
]

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#f7f7f4] text-[#26251e] py-16 px-6">
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header Title & Subtitle */}
        <div className="text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#5a5852]">
            <Sparkles className="size-3.5 text-[#f54e00]" />
            GET IN TOUCH
          </span>

          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#26251e] leading-tight max-w-3xl mx-auto">
            Let&apos;s <span className="font-semibold text-[#f54e00]">Connect</span>
          </h1>

          <p className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-[#5a5852]">
            Whether you&apos;re working on embedded systems, robotics, or just want to chat about edge AI&mdash;my inbox is open.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr] items-start">
          {/* Info Column */}
          <div className="flex flex-col gap-4">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5 transition-all duration-200 hover:border-[#cfcdc4]"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-[#fafaf7] text-[#26251e] border border-[#e6e5e0]">
                  <item.icon className="size-4 text-[#76b900]" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#807d72]">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-mono text-xs font-semibold text-[#26251e] transition-colors hover:text-[#f54e00]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-[#26251e]">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Direct Social Profiles */}
            <div className="flex flex-col gap-3 rounded-md border border-[#e6e5e0] bg-[#ffffff] p-5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#f54e00] font-semibold">
                Direct Profiles
              </span>
              <div className="flex flex-wrap gap-2">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-3 py-1.5 font-mono text-xs font-semibold text-[#26251e] transition-all hover:border-[#cfcdc4] hover:text-[#f54e00]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="rounded-md border border-[#e6e5e0] bg-[#ffffff] p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
