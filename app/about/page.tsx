import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/about-hero'
import { SkillsSection } from '@/components/about/skills-section'
import { ApproachSection } from '@/components/about/approach-section'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'About — Prajal Jain',
  description:
    'Learn more about Prajal Jain, an AI & Robotics Engineer building computer vision systems on embedded hardware and edge AI.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SkillsSection />
      <ApproachSection />
      <CtaBanner />
    </>
  )
}
