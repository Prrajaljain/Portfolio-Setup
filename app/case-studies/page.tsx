import type { Metadata } from 'next'
import { Sparkles, ArrowRight } from 'lucide-react'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Case Studies — Prajal Jain',
  description: 'In-depth architectural breakdowns of real-time computer vision and embedded AI infrastructure.',
}

const caseStudies = [
  {
    slug: 'ai-powered-payload-octocopter',
    title: 'AI-Powered Payload Octocopter & CNN Safety Layer',
    subtitle: '8-Rotor Heavy-Lift · Raspberry Pi CNN · Failsafe Control',
    category: 'Robotics & UAV',
    metrics: ['100kg Payload Class', 'Independent Safety Layer', 'Army Southern Command Demo'],
    overview:
      'Designed and built an 8-rotor heavy-lift octocopter with onboard obstacle detection for field demonstration. Perception runs on an independent Raspberry Pi using a lightweight CNN, keeping flight control decoupled from perception failures.',
    outcomes: [
      'Engineered an independent Raspberry Pi safety layer to prevent perception stalls from affecting stabilization.',
      'Trained custom CNN collision avoidance models for real-time onboard inference.',
      'Successfully flight-demonstrated to Indian Army Southern Command.',
    ],
    tech: ['Python', 'CNN', 'Raspberry Pi', 'Computer Vision'],
  },
  {
    slug: 'shri-mahalaxmi-crowd-monitor',
    title: 'Real-Time Crowd Detection & Safety Alert System',
    subtitle: 'YOLOv8 · Rolling Window Smoothing · Automated Email Alerts',
    category: 'Computer Vision',
    metrics: ['5,000+ Peak Crowd', 'Live Navratri 2025 Deployment', 'Sub-Second Alerts'],
    overview:
      'Live headcount estimation and automated safety alerts deployed at Shri Mahalaxmi Temple, Pune during Navratri 2025 with peak crowds exceeding 5,000 visitors.',
    outcomes: [
      'Implemented multi-frame rolling window smoothing to eliminate per-frame detection jitter.',
      'Engineered debounced threshold alert logic that re-arms automatically after crowds disperse.',
      'Deployed automated email alert notification system for security and safety teams.',
    ],
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Real-Time Systems'],
  },
  {
    slug: 'ai-waste-sorting-rig',
    title: 'On-Device AI Waste Segregation System',
    subtitle: 'Embedded TFLite · Multi-Threaded Vision & Servo Control',
    category: 'Embedded AI',
    metrics: ['92–96% Class Accuracy', 'Zero Cloud Infrastructure', 'Indo-German Tool Room Demo'],
    overview:
      'On-device waste sorting prototype built at Indo-German Tool Room, Chh. Sambhajinagar. A hopper camera classifies waste items and actuates a rotating drum to position the correct bin.',
    outcomes: [
      'Optimized TFLite model running locally on Raspberry Pi with zero cloud dependency.',
      'Built a dual-threaded Python architecture separating camera inference from servo actuation.',
      'Achieved 92–96% classification accuracy across metal, paper, and plastic waste categories.',
    ],
    tech: ['Python', 'MediaPipe', 'TFLite', 'Raspberry Pi', 'OpenCV'],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-24">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#E2703A]">
            <Sparkles className="size-3.5" />
            Engineering Case Studies
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Architectural Deep Dives
          </h1>
          <p className="max-w-2xl text-base text-[#4A4744] sm:text-lg">
            Detailed breakdowns of hardware integration, vision pipelines, and embedded safety layers built and deployed in field environments.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="flex flex-col gap-10">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="flex flex-col gap-6 rounded-[20px] border border-[#E5E2D9] bg-[#FFFFFF] p-8 shadow-xs transition-all duration-200 hover:border-[#E2703A]/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-[#E2703A]">
                  {study.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full bg-[#E2703A]/10 px-3 py-1 font-mono text-xs font-bold text-[#E2703A]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-[#1A1A1A]">{study.title}</h2>
                <p className="font-mono text-xs text-[#4A4744]">{study.subtitle}</p>
              </div>

              <p className="text-base text-[#4A4744] leading-relaxed">{study.overview}</p>

              <div className="flex flex-col gap-2">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
                  Key Outcomes & Architecture
                </h3>
                <ul className="flex flex-col gap-1.5 pl-4 list-disc text-sm text-[#4A4744]">
                  {study.outcomes.map((outcome, i) => (
                    <li key={i}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#F0EEE8] pt-4">
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[#E5E2D9] bg-[#FAF9F6] px-2.5 py-1 font-mono text-xs text-[#4A4744]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <CtaBanner />
      </div>
    </div>
  )
}
