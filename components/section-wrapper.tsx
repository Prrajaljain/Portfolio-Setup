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
  const Element = Component as any
  return (
    <Element
      className={className}
      {...props}
    >
      {children}
    </Element>
  )
}
