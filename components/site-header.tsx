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
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
          {/* Brand Wordmark: Exact [ PJ ] Prajal Jain format */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 rounded-sm focus-visible:outline-none"
            onClick={() => setOpen(false)}
          >
            <div className="flex size-7 items-center justify-center rounded-[6px] bg-[#1A1A1A] font-mono text-xs font-bold text-[#ffffff]">
              {profile.initials}
            </div>
            <span className="text-sm font-bold tracking-tight text-[#1A1A1A] transition-colors group-hover:text-[#F25C1F]">
              {profile.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1.5 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-3.5 py-2 text-sm font-medium transition-all rounded-md',
                    active
                      ? 'text-[#F25C1F] font-semibold bg-[#ffffff] border border-[#e6e5e0]'
                      : 'text-[#5a5852] hover:text-[#1A1A1A] hover:bg-[#ffffff]/70',
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
              className="inline-flex items-center gap-1.5 rounded-md bg-[#F25C1F] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#d04200] active:scale-95"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#1A1A1A] hover:bg-[#e6e5e0]/50 transition-colors"
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
          <nav className="border-t border-[#e6e5e0] bg-[#F5F4F0] px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-md px-3.5 py-2.5 text-sm font-medium transition-colors',
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
                  className="block rounded-md bg-[#F25C1F] px-4 py-2.5 text-center text-sm font-medium text-white"
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
