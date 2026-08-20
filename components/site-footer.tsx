import { profile } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="relative z-20 border-t border-[#e6e5e0] bg-[#f7f7f4] py-8 text-xs text-[#5a5852]">
      <div className="w-full flex flex-col items-center justify-between gap-4 px-6 sm:px-10 lg:px-16 sm:flex-row">
        {/* Copyright Text */}
        <p className="text-center sm:text-left font-mono">
          &copy; 2026 {profile.name} &mdash; All Rights Reserved
        </p>

        {/* Social Buttons */}
        <div className="flex items-center gap-2.5 font-mono">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex size-8 items-center justify-center rounded-sm border border-[#e6e5e0] bg-[#ffffff] text-[#26251e] transition-colors hover:border-[#cfcdc4] hover:text-[#f54e00]"
            >
              <span className="text-[10px] font-bold">{s.label === 'GitHub' ? 'GH' : 'IN'}</span>
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex size-8 items-center justify-center rounded-sm border border-[#e6e5e0] bg-[#ffffff] text-[#26251e] transition-colors hover:border-[#cfcdc4] hover:text-[#f54e00]"
          >
            <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
