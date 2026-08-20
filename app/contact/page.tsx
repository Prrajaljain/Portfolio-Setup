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
    <div className="relative min-h-screen bg-[#09090b] text-[#fafafa] py-16 px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 size-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header Title & Subtitle */}
        <div className="text-center mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-purple-300">
            <Sparkles className="size-3.5" />
            Get In Touch
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#fafafa] leading-tight max-w-3xl mx-auto">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">Connect</span>
          </h1>

          <p className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-[#a1a1aa]">
            Whether you&apos;re working on embedded systems, robotics, or just want to chat about edge AI—my inbox is open.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] items-start">
          {/* Info Column */}
          <div className="flex flex-col gap-5">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0c0c0e] p-5 transition-all duration-300 hover:border-purple-500/40"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <item.icon className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa]">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-mono text-sm font-bold text-[#fafafa] transition-colors hover:text-purple-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-bold text-[#fafafa]">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Direct Social Profiles */}
            <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0c0c0e] p-6">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
                Direct Profiles
              </span>
              <div className="flex flex-wrap gap-2.5">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-[#141417] px-4 py-2 font-mono text-xs font-semibold text-[#fafafa] transition-all hover:border-purple-500/40 hover:bg-[#1a1a20]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="rounded-[28px] border border-white/10 bg-[#0c0c0e] p-7 sm:p-9 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
