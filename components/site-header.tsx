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
      <header className="sticky top-0 z-50 border-b border-[#e6e5e0] bg-[#F5F4F0]/95 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8">
          {/* Brand Wordmark: Enhanced larger [ PJ ] Prajal Jain format */}
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-sm focus-visible:outline-none"
            onClick={() => setOpen(false)}
          >
            <div className="flex size-9 items-center justify-center rounded-[7px] bg-[#1A1A1A] font-mono text-sm font-bold text-[#ffffff] transition-transform group-hover:scale-105">
              {profile.initials}
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#1A1A1A] transition-colors group-hover:text-[#F25C1F]">
              {profile.name}
            </span>
          </Link>

          {/* Desktop Navigation: Larger, spacious text and pills */}
          <nav className="hidden items-center gap-2 sm:gap-3 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2.5 text-[15px] sm:text-[16px] font-medium transition-all rounded-md',
                    active
                      ? 'text-[#F25C1F] font-semibold bg-[#ffffff] border border-[#e6e5e0] shadow-sm'
                      : 'text-[#5a5852] hover:text-[#1A1A1A] hover:bg-[#ffffff]/70',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Action CTA Button: Prominent & clear */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#F25C1F] px-5 py-2.5 text-[15px] font-semibold text-white transition-all hover:bg-[#d04200] active:scale-95 shadow-sm"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="size-4.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-[#1A1A1A] hover:bg-[#e6e5e0]/50 transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <nav className="border-t border-[#e6e5e0] bg-[#F5F4F0] px-6 py-5 md:hidden">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-md px-4 py-3 text-base font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-[#ffffff] text-[#F25C1F] border border-[#e6e5e0]'
                        : 'text-[#5a5852] hover:bg-[#ffffff]/60 hover:text-[#1A1A1A]',
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
                  className="block rounded-md bg-[#F25C1F] px-5 py-3 text-center text-base font-semibold text-white"
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
