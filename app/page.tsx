import { Hero } from '@/components/home/hero'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { Timeline } from '@/components/experience/timeline'
import { EducationSection } from '@/components/experience/education-section'
import { AboutHero } from '@/components/about/about-hero'
import { SkillsSection } from '@/components/about/skills-section'
import { ContactSection } from '@/components/home/contact-section'

export default function Page() {
  return (
    <div className="relative bg-[#F5F4F0] text-[#1A1A1A] overflow-x-hidden min-h-screen">
      <div className="relative z-10 space-y-0">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Projects Section */}
        <div id="projects">
          <FeaturedProjects />
        </div>

        {/* 3. Experience Section */}
        <div id="experience">
          <Timeline />
          <EducationSection />
        </div>

        {/* 4. About Section */}
        <div id="about">
          <AboutHero />
        </div>

        {/* 5. Tech Stack Section */}
        <div id="tech-stack">
          <SkillsSection />
        </div>

        {/* 6. Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </div>
  )
}
