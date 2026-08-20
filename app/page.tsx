import { Hero } from '@/components/home/hero'
import { ContactSection } from '@/components/home/contact-section'

export default function Page() {
  return (
    <div className="relative bg-[#f7f7f4] text-[#26251e] overflow-x-hidden min-h-screen">
      <div className="relative z-10 space-y-0">
        <Hero />
        <ContactSection />
      </div>
    </div>
  )
}
