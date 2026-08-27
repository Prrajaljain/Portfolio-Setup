'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Code2, Cpu, Activity, ShieldCheck, Zap, X, ArrowRight, Layers, Terminal, Video, ExternalLink } from 'lucide-react'
import { projects, type Project } from '@/lib/data'

const icons = [Cpu, Activity, ShieldCheck, Layers, Terminal]

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const triggerButtonRef = useRef<HTMLButtonElement | null>(null)
  const videoModalContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Extract video properties from project if present
  const video = project.video
  const poster = project.poster
  const videoAriaLabel = project.videoAriaLabel

  // Lock body scroll when either modal is open
  useEffect(() => {
    if (isOpen || isVideoModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, isVideoModalOpen])

  // Open Video Modal Player
  const openVideoModal = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
      if (e.currentTarget) {
        triggerButtonRef.current = e.currentTarget as HTMLButtonElement
      }
    }
    setIsVideoModalOpen(true)
  }

  // Close Video Modal Player
  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
    setTimeout(() => {
      triggerButtonRef.current?.focus()
    }, 50)
  }

  // Handle Escape key & Focus Trap for Video Modal Player
  useEffect(() => {
    if (!isVideoModalOpen) return

    setTimeout(() => {
      videoModalContainerRef.current?.focus()
    }, 50)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeVideoModal()
      }
      if (event.key === 'Tab' && videoModalContainerRef.current) {
        const focusables = videoModalContainerRef.current.querySelectorAll<HTMLElement>(
          'button, video, [tabindex]:not([tabindex="-1"])'
        )
        if (focusables.length > 0) {
          const first = focusables[0]
          const last = focusables[focusables.length - 1]
          if (event.shiftKey && document.activeElement === first) {
            last.focus()
            event.preventDefault()
          } else if (!event.shiftKey && document.activeElement === last) {
            first.focus()
            event.preventDefault()
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVideoModalOpen])

  const Icon = icons[index % icons.length]

  const specBadges = project.specBadges

  const roleText = project.role || 'End-to-end engineering development and system architecture.'
  const contextText = project.context || project.description

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#1A1A1A]/75 backdrop-blur-md"
          />

          {/* System Details Modal Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative z-[10000] my-auto w-full max-w-4xl overflow-hidden rounded-[16px] border border-[#E8E4DE] bg-[#FFFFFF] p-6 sm:p-8 text-left shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            {/* Header Bar: Category Badges & Close Button */}
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-[#E8E4DE] pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[#F25C1F]/30 bg-[#FDF3EE] px-3 py-1 text-xs font-semibold text-[#D94A10]">
                  {project.category}
                </span>
                <span className="rounded-full border border-[#E8E4DE] bg-[#FAF8F5] px-3 py-1 text-xs font-semibold text-[#4A4744]">
                  {project.status}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex size-9 items-center justify-center rounded-full border border-[#E8E4DE] bg-[#FAF8F5] text-[#1A1A1A] transition-colors hover:border-[#D94A10] hover:text-[#D94A10] focus:outline-none shrink-0"
                aria-label="Close dialog"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Title & Top Overview */}
            <h2 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
              {project.title}
            </h2>
            <p className="mb-6 text-xs sm:text-sm leading-relaxed text-[#2D2B28]">
              {project.description}
            </p>

            {/* 2-Column Body Layout */}
            <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr] items-stretch mb-6">
              {/* Left Column: Visual Banner Box */}
              <div className="relative flex h-full min-h-[260px] flex-col items-center justify-center rounded-[12px] border border-[#E8E4DE] bg-gradient-to-br from-[#FAF8F5] via-[#FDF3EE] to-[#FAF8F5] p-6 text-center shadow-inner">
                <div className="absolute -right-8 -top-8 size-32 rounded-full border border-[#E8E4DE]/60 bg-white/40" />
                <div className="absolute -left-8 -bottom-8 size-32 rounded-full border border-[#E8E4DE]/60 bg-white/40" />

                <div className="relative z-10 my-auto flex flex-col items-center justify-center">
                  <div className="mb-5 flex size-20 items-center justify-center rounded-[20px] bg-[#F25C1F] text-white shadow-lg transition-transform hover:scale-105">
                    <Icon className="size-10 text-white" />
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
                    {specBadges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-[#E8E4DE] bg-[#FFFFFF]/90 px-3 py-1 font-medium text-[#1A1A1A] shadow-rest backdrop-blur-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: 3 Detail Cards */}
              <div className="flex flex-col gap-4">
                <div className="rounded-[10px] border border-[#E8E4DE] bg-[#FAF8F5] p-4 text-left">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4A4744] block mb-1.5">
                    MY ROLE
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#2D2B28]">
                    {roleText}
                  </p>
                </div>

                {project.impact && (
                  <div className="rounded-[10px] border border-[#F25C1F]/30 bg-[#FDF3EE] p-4 text-left">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D94A10] block mb-1.5 flex items-center gap-1.5">
                      ⚡ IMPACT
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#D94A10] leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                )}

                <div className="rounded-[10px] border border-[#E8E4DE] bg-[#FAF8F5] p-4 text-left">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4A4744] block mb-1.5">
                    CONTEXT
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#2D2B28]">
                    {contextText}
                  </p>
                </div>
              </div>
            </div>

            {/* Technology Stack Full Row */}
            <div className="mb-6 border-t border-[#E8E4DE] pt-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4A4744] block mb-3">
                TECHNOLOGY STACK
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E4DE] bg-[#FAF8F5] px-3.5 py-1 text-[#2D2B28] font-medium"
                  >
                    <Zap className="size-3 text-[#F25C1F]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Action Buttons Bar */}
            <div className="flex flex-wrap items-center justify-end gap-3 border-t border-[#E8E4DE] pt-4">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#F25C1F] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-rest transition-all hover:bg-[#D94A10] hover:shadow-hover"
                >
                  <ExternalLink className="size-4" />
                  <span>Live Demo</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}

              {video && (
                <button
                  type="button"
                  ref={triggerButtonRef}
                  onClick={(e) => openVideoModal(e)}
                  className="inline-flex items-center gap-2 rounded-md border border-[#E8E4DE] bg-[#FFFFFF] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#1A1A1A] shadow-rest transition-all hover:border-[#D94A10] hover:text-[#D94A10] hover:shadow-hover cursor-pointer"
                >
                  <Video className="size-4 text-[#F25C1F]" />
                  <span>Watch Video</span>
                </button>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#E8E4DE] bg-[#FFFFFF] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#1A1A1A] shadow-rest transition-all hover:border-[#D94A10] hover:text-[#D94A10] hover:shadow-hover"
                >
                  <Code2 className="size-4" />
                  <span>View Code</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )

  {/* Video Modal Player (Unmounted when closed) */}
  const videoModalMarkup =
    isVideoModalOpen && video ? (
      <AnimatePresence>
        <div className="fixed inset-0 z-[10050] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop rgba(22, 21, 15, 0.72) click to dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
            className="fixed inset-0 bg-[#16150F]/72 backdrop-blur-sm"
          />

          <motion.div
            ref={videoModalContainerRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={videoAriaLabel || 'Video player'}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative z-[10060] my-auto flex flex-col items-center justify-center rounded-[16px] bg-[#16150F] p-3 sm:p-4 text-white shadow-2xl focus:outline-none max-w-full"
          >
            <button
              type="button"
              onClick={closeVideoModal}
              aria-label="Close video player"
              className="absolute -top-3 -right-3 z-20 flex size-9 items-center justify-center rounded-full bg-[#16150F] text-white border border-white/20 shadow-lg hover:bg-[#E2703A] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              <X className="size-4" />
            </button>

            <video
              src={video}
              poster={poster}
              controls
              autoPlay
              playsInline
              className="modal-video"
            />
          </motion.div>
        </div>
      </AnimatePresence>
    ) : null

  return (
    <>
      {/* ─── INITIAL VIEW (Project Card Component) ─── */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(true)}
        className="group relative flex h-full flex-col overflow-hidden rounded-[12px] border border-[#E8E4DE] bg-[#FFFFFF] p-5 text-left shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover cursor-pointer"
      >
        {/* Top Visual Graphic Banner Box */}
        <div className="relative mb-4 flex min-h-[140px] flex-col items-center justify-center overflow-hidden rounded-[10px] border border-[#E8E4DE] bg-gradient-to-br from-[#FAF8F5] via-[#FDF3EE] to-[#FAF8F5] p-5 text-center shadow-inner">
          <div className="absolute -right-6 -top-6 size-24 rounded-full border border-[#E8E4DE]/60 bg-white/40" />
          <div className="absolute -left-6 -bottom-6 size-24 rounded-full border border-[#E8E4DE]/60 bg-white/40" />

          <div className="relative z-10 mb-3 flex size-14 items-center justify-center rounded-[14px] bg-[#F25C1F] text-white shadow-md transition-transform duration-200 group-hover:scale-105">
            <Icon className="size-6 text-white" />
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-1.5 text-xs">
            {specBadges.slice(0, 3).map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#E8E4DE] bg-[#FFFFFF]/90 px-2.5 py-0.5 font-medium text-[#1A1A1A] shadow-rest backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Badges Bar (Category & Status) */}
        <div className="mb-2.5 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#F25C1F]/30 bg-[#FDF3EE] px-2.5 py-0.5 text-xs font-semibold text-[#D94A10]">
            {project.category}
          </span>
          <span className="rounded-full border border-[#E8E4DE] bg-[#FAF8F5] px-2.5 py-0.5 text-xs font-semibold text-[#4A4744]">
            {project.status}
          </span>
          {project.featured && (
            <span className="rounded-full border border-[#f59e0b]/30 bg-[#fef3c7] px-2.5 py-0.5 text-xs font-semibold text-[#b45309]">
              Featured
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="mb-2 text-lg font-bold leading-snug tracking-tight text-[#1A1A1A] transition-colors group-hover:text-[#D94A10]">
          {project.title}
        </h3>

        {/* Project Short Description */}
        <p className="mb-3 text-xs sm:text-sm leading-relaxed text-[#2D2B28] line-clamp-3">
          {project.description}
        </p>

        {/* Highlighted Impact Callout Box */}
        {project.impact && (
          <div className="mb-4 rounded-[8px] border border-[#F25C1F]/25 bg-[#FDF3EE] p-3 text-xs font-semibold text-[#D94A10]">
            ⚡ <span className="text-[#1A1A1A] font-medium">{project.impact}</span>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mb-5 flex flex-wrap gap-1.5 text-xs">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full border border-[#E8E4DE] bg-[#FAF8F5] px-2.5 py-0.5 text-[#2D2B28] font-medium transition-colors group-hover:border-[#D94A10]/40"
            >
              <Zap className="size-3 text-[#F25C1F]" />
              {tag}
            </span>
          ))}
        </div>

        {/* Action Footer Row */}
        <div className="mt-auto flex items-center justify-between border-t border-[#E8E4DE] pt-3 text-xs font-semibold text-[#1A1A1A]">
          <div className="flex items-center gap-1.5 transition-colors group-hover:text-[#D94A10]">
            <span>View system details</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>

          <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#4A4744] hover:text-[#D94A10] transition-colors"
                title="View Source Repository"
              >
                <Code2 className="size-3.5" />
                <span>Code</span>
                <ArrowUpRight className="size-3" />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* ─── PORTALED SYSTEM DETAILS MODAL & VIDEO MODAL ─── */}
      {mounted && createPortal(modalContent, document.body)}
      {mounted && videoModalMarkup && createPortal(videoModalMarkup, document.body)}
    </>
  )
}


