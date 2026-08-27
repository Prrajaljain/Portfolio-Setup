'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Award, Sparkles, GraduationCap, CheckCircle2, ArrowUpRight, FileText, X, ExternalLink } from 'lucide-react'
import { education, certifications } from '@/lib/data'
import { SectionWrapper } from '@/components/section-wrapper'

export function EducationSection() {
  const [activeCert, setActiveCert] = useState<(typeof certifications)[0] | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!activeCert) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCert(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeCert])

  const certModalMarkup = activeCert ? (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10050] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop click to dismiss */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveCert(null)}
          className="fixed inset-0 bg-[#16150F]/75 backdrop-blur-sm"
        />

        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className="relative z-[10060] my-auto flex flex-col rounded-[16px] border border-[#E8E4DE] bg-[#FFFFFF] p-5 sm:p-6 text-[#1A1A1A] shadow-2xl focus:outline-none max-w-4xl w-full max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E8E4DE]">
            <div className="flex items-center gap-3">
              <div className="relative flex size-10 items-center justify-center rounded-[10px] border border-[#E8E4DE] bg-[#FAF8F5] p-1.5 shrink-0">
                {activeCert.logoUrl ? (
                  <Image
                    src={activeCert.logoUrl}
                    alt={activeCert.issuer}
                    width={28}
                    height={28}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <Award className="size-5 text-[#D94A10]" />
                )}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] leading-snug">
                  {activeCert.title}
                </h3>
                <p className="text-xs text-[#4A4744] font-medium mt-0.5">
                  {activeCert.issuer} &middot; Issued {activeCert.date} &middot; Credential ID: {activeCert.credentialId}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveCert(null)}
              aria-label="Close certificate viewer"
              className="flex size-9 items-center justify-center rounded-full bg-[#FAF8F5] text-[#1A1A1A] border border-[#E8E4DE] hover:bg-[#FDF3EE] hover:text-[#D94A10] transition-colors cursor-pointer shrink-0"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Certificate PDF Viewer Container */}
          <div className="my-4 relative flex-1 min-h-[50vh] sm:min-h-[60vh] w-full overflow-hidden rounded-[10px] border border-[#E8E4DE] bg-[#F5F4F0]">
            <iframe
              src={`${activeCert.credentialUrl}#toolbar=0`}
              title={activeCert.title}
              className="w-full h-full min-h-[50vh] sm:min-h-[60vh] rounded-[10px]"
            />
          </div>

          {/* Modal Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E8E4DE]">
            <div className="text-xs text-[#4A4744] font-medium">
              {activeCert.detail}
            </div>

            <div className="flex items-center gap-2.5">
              {activeCert.verifyUrl && (
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#E8E4DE] bg-[#FAF8F5] px-4 py-2 text-xs font-semibold text-[#1A1A1A] transition-all hover:border-[#D94A10] hover:text-[#D94A10]"
                >
                  <ExternalLink className="size-3.5 text-[#D94A10]" />
                  <span>Verify on {activeCert.issuer}</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  ) : null

  return (
    <SectionWrapper className="relative border-t border-[#E8E4DE] bg-[#F5F4F0]">
      <div className="mx-auto max-w-6xl px-6 py-16 text-left">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <span className="font-mono text-xs font-semibold text-[#4A4744] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="size-3.5 text-[#D94A10]" />
            ACADEMIC FOUNDATION &amp; CREDENTIALS
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Education &amp; <span className="font-bold text-[#F25C1F]">Certifications</span>
          </h2>
        </div>

        {/* Alternating Education Timeline Layout */}
        <div className="relative mb-16">
          {/* Central Vertical Timeline Line (Desktop) */}
          <div className="absolute left-[50%] top-6 bottom-6 w-[2px] -translate-x-[50%] bg-[#E8E4DE] hidden lg:block" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {education.map((item, idx) => {
              const isEven = idx % 2 === 0
              const Icon = idx === 0 ? GraduationCap : BookOpen

              return (
                <div
                  key={item.degree}
                  className="relative grid grid-cols-1 lg:grid-cols-[1fr_64px_1fr] items-center gap-6 lg:gap-8"
                >
                  {/* Left Column Card (B.Tech AI on Left) */}
                  <div
                    className={`w-full ${
                      isEven ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-3 lg:row-start-1'
                    }`}
                  >
                    <div className="group relative rounded-[16px] border border-[#E8E4DE] bg-[#FFFFFF] p-6 sm:p-8 shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover">
                      {/* Header: Icon + Academic Foundation Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex size-12 items-center justify-center rounded-[12px] border border-[#E8E4DE] bg-[#FAF8F5] text-[#D94A10] shadow-inner transition-transform group-hover:scale-105">
                          <Icon className="size-6 text-[#D94A10]" />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-semibold text-[#D94A10]">
                            Academic Foundation {idx + 1}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
                            Education
                          </h3>
                        </div>
                      </div>

                      {/* 2x2 Bento Box Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {/* Box 1: DEGREE */}
                        <div className="rounded-[12px] border border-[#E8E4DE] bg-[#FAF8F5] p-4 sm:p-4.5 transition-colors group-hover:border-[#D94A10]/30">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#4A4744] block mb-1">
                            DEGREE
                          </span>
                          <p className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                            {item.degree}
                          </p>
                        </div>

                        {/* Box 2: INSTITUTION */}
                        <div className="rounded-[12px] border border-[#E8E4DE] bg-[#FAF8F5] p-4 sm:p-4.5 transition-colors group-hover:border-[#D94A10]/30">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#4A4744] block mb-1">
                            INSTITUTION
                          </span>
                          <p className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                            {item.school}
                          </p>
                        </div>

                        {/* Box 3: TIMELINE */}
                        <div className="rounded-[12px] border border-[#E8E4DE] bg-[#FAF8F5] p-4 sm:p-4.5 transition-colors group-hover:border-[#D94A10]/30">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#4A4744] block mb-1">
                            TIMELINE
                          </span>
                          <p className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                            {item.period}
                          </p>
                        </div>

                        {/* Box 4: SCORE / CGPA */}
                        <div className="rounded-[12px] border border-[#F25C1F]/25 bg-[#FDF3EE] p-4 sm:p-4.5 transition-colors">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D94A10] block mb-1">
                            SCORE / CGPA
                          </span>
                          <p className="text-sm sm:text-base font-bold text-[#D94A10]">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Column Timeline Node (Desktop) */}
                  <div className="hidden lg:flex flex-col items-center justify-center lg:col-start-2 lg:row-start-1 z-10">
                    <div className="relative flex size-12 items-center justify-center rounded-full border-2 border-[#D94A10] bg-[#FFFFFF] shadow-hover ring-4 ring-[#FDF3EE] transition-transform duration-200 hover:scale-110">
                      <Icon className="size-5 text-[#D94A10]" />
                    </div>
                    <span className="mt-2.5 rounded-full border border-[#E8E4DE] bg-[#FFFFFF] px-3 py-1 font-mono text-[11px] font-semibold text-[#D94A10] shadow-rest whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  {/* Empty Balance Column for 2-column alignment */}
                  <div
                    className={`hidden lg:block ${
                      isEven ? 'lg:col-start-3' : 'lg:col-start-1'
                    }`}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Industry Certifications Grid matching Mockup Design */}
        <div className="mt-8 border-t border-[#E8E4DE] pt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex size-9 items-center justify-center rounded-[8px] bg-[#FDF3EE] text-[#D94A10]">
              <Award className="size-5 text-[#D94A10]" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A]">
              Industry Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                onClick={() => setActiveCert(cert)}
                className="group relative flex flex-col justify-between rounded-[14px] border border-[#E8E4DE] bg-[#FFFFFF] p-5 shadow-rest transition-all duration-200 hover:border-[#D94A10] hover:shadow-hover cursor-pointer"
              >
                {/* Top Row: Issuer Logo & Verified Badge */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="relative flex size-11 items-center justify-center rounded-[12px] border border-[#E8E4DE] bg-[#FAF8F5] p-2 shadow-xs group-hover:border-[#D94A10]/40 transition-colors overflow-hidden">
                    {cert.logoUrl ? (
                      <Image
                        src={cert.logoUrl}
                        alt={`${cert.issuer} logo`}
                        width={32}
                        height={32}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <span className="font-mono text-sm font-bold text-[#D94A10]">
                        {cert.issuer.charAt(0)}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#15803d]">
                    <CheckCircle2 className="size-3 text-[#15803d]" />
                    Verified
                  </span>
                </div>

                {/* Main Title & Issuer/Date */}
                <div className="mb-4">
                  <h4 className="text-base font-bold text-[#1A1A1A] leading-snug tracking-tight group-hover:text-[#D94A10] transition-colors">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-[#4A4744]">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>

                {/* Bottom Action Buttons Row */}
                <div className="flex items-center gap-2 border-t border-[#E8E4DE] pt-3.5" onClick={(e) => e.stopPropagation()}>
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-[#E8E4DE] bg-[#FAF8F5] py-2 px-3 text-xs font-semibold text-[#1A1A1A] transition-all hover:border-[#D94A10] hover:bg-[#FDF3EE] hover:text-[#D94A10]"
                      title="Verify Credential"
                    >
                      <ArrowUpRight className="size-3.5 text-[#D94A10]" />
                      <span>Verify</span>
                    </a>
                  ) : (
                    <div className="flex-1" />
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-[#E8E4DE] bg-[#FAF8F5] py-2 px-3.5 text-xs font-semibold text-[#4A4744] transition-all hover:border-[#D94A10] hover:text-[#D94A10] cursor-pointer"
                  >
                    <FileText className="size-3.5 text-[#4A4744]" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portaled Certificate Viewer Modal */}
      {mounted && certModalMarkup && createPortal(certModalMarkup, document.body)}
    </SectionWrapper>
  )
}
