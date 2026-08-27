import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Timeline } from '@/components/experience/timeline'
import { EducationSection } from '@/components/experience/education-section'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Experience — Prajal Jain',
  description: 'Work history, education, and certifications of Prajal Jain.',
}

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I've built things"
        description="From embedded ML pipelines to real-time systems — a look at the systems I've built and the training behind them."
      />
      <Timeline />
      <EducationSection />
      <CtaBanner />
    </>
  )
}
