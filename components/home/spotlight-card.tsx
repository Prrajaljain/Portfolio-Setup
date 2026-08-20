'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

interface SpotlightCardProps {
  href: string
  children: React.ReactNode
  className?: string
  borderColor?: string
}

export function SpotlightCard({
  href,
  children,
  className = '',
  borderColor = 'rgba(59, 130, 246, 0.4)',
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <Link
      href={href}
      className={`group relative block rounded-[24px] border border-white/10 bg-[#111113] p-1.5 shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden ${className}`}
      style={{ borderColor: opacity ? borderColor : 'rgba(255,255,255,0.08)' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className="relative rounded-[18px] bg-[#0c0c0e] p-6 h-full flex flex-col justify-between overflow-hidden group-hover:bg-[#111115] transition-colors"
      >
        {/* Mouse Tracking Radial Spotlight Glow */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.18), transparent 80%)`,
          }}
        />

        {/* Card Inner Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </Link>
  )
}
