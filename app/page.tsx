import { Hero } from '@/components/home/hero'
import { StatsBar } from '@/components/home/stats-bar'
import { CtaBanner } from '@/components/cta-banner'

export default function Page() {
  return (
    <div className="relative bg-[#f7f7f4] text-[#26251e] overflow-x-hidden min-h-screen">
      <div className="relative z-10">
        <Hero />
        <StatsBar />
        <CtaBanner />
      </div>
    </div>
  )
}
