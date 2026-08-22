import React from 'react'

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
  return (
    <Component
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}
