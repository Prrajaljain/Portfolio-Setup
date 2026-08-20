import { Hero } from '@/components/home/hero'
import { StatsBar } from '@/components/home/stats-bar'
import { SelectedWork } from '@/components/home/selected-work'
import { StatementSection } from '@/components/home/statement-section'
import { TechGrouping } from '@/components/home/tech-grouping'
import { CurrentlySection } from '@/components/home/currently-section'
import { ContactSection } from '@/components/home/contact-section'

export default function Page() {
  return (
    <div className="relative bg-[#f7f7f4] text-[#26251e] overflow-x-hidden min-h-screen">
      <div className="relative z-10 space-y-0">
        {/* 1. Hero Section — photo, name, statement, intro */}
        <Hero />

        {/* 2. Stats strip — numbers only */}
        <StatsBar />

        {/* 3. Selected work — three video-led cards */}
        <SelectedWork />

        {/* 4. Statement section — centered memorable quote */}
        <StatementSection />

        {/* 5. What I work with — grouped stack rows + marquee */}
        <TechGrouping />

        {/* 6. Currently — factual student/internship summary */}
        <CurrentlySection />

        {/* 7. Contact — Let's talk form */}
        <ContactSection />
      </div>
    </div>
  )
}
