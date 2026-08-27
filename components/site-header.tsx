'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navItems, profile } from '@/lib/data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('home')

  useEffect(() => {
    let currentHash = ''

    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      if (pathname === '/') {
        const sections = [
          { id: 'projects' },
          { id: 'how-i-build' },
          { id: 'experience' },
          { id: 'about' },
          { id: 'tech-stack' },
          { id: 'contact' },
        ]

        let newActiveSection = 'home'

        if (window.scrollY < 200) {
          newActiveSection = 'home'
        } else {
          const scrollPosition = window.scrollY + 220

          for (let i = sections.length - 1; i >= 0; i--) {
            const sectionEl = document.getElementById(sections[i].id)
            if (sectionEl) {
              const top = sectionEl.offsetTop
              if (scrollPosition >= top) {
                newActiveSection = sections[i].id
                break
              }
            }
          }
        }

        setActiveSection(newActiveSection)

        // Dynamically sync address bar URL hash as user scrolls up/down
        const targetHash = newActiveSection === 'home' ? '' : `#${newActiveSection}`
        if (currentHash !== targetHash) {
          currentHash = targetHash
          const newUrl = newActiveSection === 'home' ? window.location.pathname : `${window.location.pathname}#${newActiveSection}`
          window.history.replaceState(null, '', newUrl)
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const isItemActive = (itemHref: string) => {
    if (pathname === '/') {
      if (itemHref === '/') {
        return activeSection === 'home'
      }
      const sectionId = itemHref.replace('/#', '')
      return activeSection === sectionId
    }
    return pathname === itemHref
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-[#E8E4DE] transition-all duration-200 ease-out',
        scrolled
          ? 'bg-[#F5F4F0]/90 backdrop-blur-[12px] shadow-xs'
          : 'bg-[#F5F4F0] shadow-none'
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          onClick={() => setOpen(false)}
        >
          <div className="flex size-9 items-center justify-center rounded-[7px] bg-[#1A1A1A] font-mono text-sm font-bold text-[#ffffff] transition-transform duration-150 group-hover:scale-105">
            {profile.initials}
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-[#1A1A1A] transition-colors duration-150 group-hover:text-[#E2703A]">
            {profile.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 sm:gap-2 md:flex">
          {navItems.map((item) => {
            const active = isItemActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-3.5 py-2 text-[14px] sm:text-[15px] font-medium transition-all duration-200 rounded-lg focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]',
                  active
                    ? 'text-[#E2703A] font-semibold bg-[#ffffff] border border-[#E5E2D9] shadow-xs'
                    : 'text-[#4A4744] hover:text-[#1A1A1A] hover:bg-[#ffffff]/60'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Action CTA Button — "Get in touch" */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#E2703A] px-4.5 py-2 text-[14px] sm:text-[15px] font-semibold text-white shadow-xs transition-all duration-200 ease-out hover:bg-[#D94A10] hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-[#1A1A1A] hover:bg-[#e6e5e0]/50 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
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
        <nav className="border-t border-[#E8E4DE] bg-[#F5F4F0] px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isItemActive(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-md px-4 py-3 text-base font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]',
                      active
                        ? 'bg-[#ffffff] text-[#E2703A] font-semibold border border-[#E8E4DE] shadow-xs'
                        : 'text-[#5a5852] hover:bg-[#ffffff]/60 hover:text-[#1A1A1A]'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#E2703A] px-4 py-3 text-base font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#D94A10] active:translate-y-0"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="size-5" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
