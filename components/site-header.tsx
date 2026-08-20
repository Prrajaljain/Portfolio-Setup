'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navItems, profile } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ScrollProgress } from '@/components/scroll-progress'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <ScrollProgress />
      <header className="sticky top-0 z-50 border-b border-[#e6e5e0] bg-[#f7f7f4]/95 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 rounded-sm focus-visible:outline-none"
            onClick={() => setOpen(false)}
          >
            <div className="flex size-7 items-center justify-center rounded-sm bg-[#26251e] font-mono text-xs font-bold text-[#f7f7f4]">
              {profile.initials}
            </div>
            <span className="text-sm font-semibold tracking-tight text-[#26251e] transition-colors group-hover:text-[#f54e00]">
              {profile.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-3.5 py-1.5 text-xs font-medium transition-all rounded-md',
                    active
                      ? 'text-[#f54e00] font-semibold bg-[#ffffff] border border-[#e6e5e0]'
                      : 'text-[#5a5852] hover:text-[#26251e] hover:bg-[#ffffff]/60',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-md bg-[#f54e00] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#d04200] active:scale-95"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#26251e] hover:bg-[#e6e5e0]/50 transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <nav className="border-t border-[#e6e5e0] bg-[#f7f7f4] px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-md px-3.5 py-2.5 text-xs font-semibold transition-colors',
                      pathname === item.href
                        ? 'bg-[#ffffff] text-[#f54e00] border border-[#e6e5e0]'
                        : 'text-[#5a5852] hover:bg-[#ffffff]/60 hover:text-[#26251e]',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-md bg-[#f54e00] px-4 py-2.5 text-center text-xs font-semibold text-white"
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}
