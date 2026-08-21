'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function SectionWrapper({
  children,
  className,
  as: Component = 'section',
  ...props
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={ref}
      className={cn(
        'transition-all duration-[320ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-[12px]',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
