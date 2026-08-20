"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Case Studies", href: "/case-studies" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#09090b]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        {/* Name / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-zinc-100 transition-colors hover:text-emerald-400"
          id="nav-logo"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 transition-transform group-hover:scale-125" />
          <span className="text-zinc-100 group-hover:text-zinc-50">{portfolioData.personal.name}</span>
          <span className="hidden text-xs text-zinc-500 sm:inline">/ AI & Mechatronics</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-emerald-400 font-semibold"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-emerald-400" />
                )}
              </Link>
            );
          })}

          {/* Standout CTA Button */}
          <Link
            href="/contact"
            id="nav-cta-contact"
            className="ml-2 inline-flex items-center gap-1.5 rounded-sm border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 transition-all duration-150 hover:border-emerald-400 hover:bg-emerald-500 hover:text-black"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/[0.08] text-zinc-400 hover:text-zinc-100 md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between bg-[#09090b]/98 px-6 py-8 backdrop-blur-lg md:hidden border-t border-white/[0.08]">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Navigation</span>
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between text-base font-medium transition-colors ${
                      isActive ? "text-emerald-400 font-semibold" : "text-zinc-300 hover:text-zinc-100"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.08]">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-sm border border-emerald-500/40 bg-emerald-500/10 py-3 text-sm font-medium text-emerald-300 hover:bg-emerald-500 hover:text-black transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="text-center font-mono text-xs text-zinc-500">
              {portfolioData.personal.email}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
