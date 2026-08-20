import type { Metadata } from 'next'
import { Sparkles, ArrowRight } from 'lucide-react'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Case Studies — Prajal Jain',
  description: 'In-depth architectural breakdowns of real-time autonomous systems and computer vision infrastructure.',
}

const caseStudies = [
  {
    slug: 'autonomous-uav-perception-stack',
    title: 'Vision-Based Autonomous UAV Navigation & Tracking Stack',
    subtitle: 'Edge Vision • Kalman Filters • PID Flight Control',
    category: 'Robotics & UAV',
    metrics: ['Sub-10ms Vision Latency', '94% Tracking Stability', 'Raspberry Pi / Jetson Deployed'],
    overview:
      'Designed and deployed an end-to-end vision-guided autonomous flight navigation stack for UAVs. Integrated MediaPipe pose estimation and Kalman filters to stabilize tracking during high-speed maneuvering.',
    outcomes: [
      'Engineered real-time object localization at 60+ FPS on edge computing hardware.',
      'Developed Kalman filter-based state estimation to eliminate trajectory drift.',
      'Implemented hardware failsafe routines and PID loop tuning for robust disturbance rejection.',
    ],
    tech: ['MediaPipe', 'Kalman Filters', 'Embedded C++', 'OpenCV', 'ROS2'],
  },
  {
    slug: 'jetson-yolov8-quantization-pipeline',
    title: 'High-Throughput INT8 Quantized Computer Vision Pipeline',
    subtitle: 'YOLOv8 • TensorRT • Jetson Orin Nano',
    category: 'Computer Vision',
    metrics: ['60+ FPS Real-Time', '96%+ Model Accuracy', '2.5s Latency Reduction'],
    overview:
      'Engineered a high-performance computer vision inference pipeline for autonomous mobile robots (AMRs). Quantized YOLOv8 models to INT8 precision using TensorRT for deployment on NVIDIA Jetson hardware.',
    outcomes: [
      'Achieved 60+ FPS real-time object detection and collision avoidance.',
      'Reduced memory footprint by 65% while maintaining 96%+ mAP in production conditions.',
      'Standardized CI/CD automated model evaluation using mAP and IoU metrics.',
    ],
    tech: ['YOLOv8', 'TensorRT', 'INT8 Quantization', 'NVIDIA Jetson', 'Python'],
  },
  {
    slug: 'industrial-ai-waste-sorter',
    title: 'Industrial TinyML Defect & Sort Telemetry Pipeline',
    subtitle: 'Industry 4.0 • STM32 TinyML • SCADA / PLC',
    category: 'Embedded AI',
    metrics: ['100% Deterministic Motor Response', 'MQTT Telemetry Integration'],
    overview:
      'Architected an Industry 4.0 real-time waste sorting and defect identification pipeline combining edge CNN vision models with STM32 microcontrollers and PLC/SCADA industrial controllers.',
    outcomes: [
      'Deployed TinyML CNN models to STM32 MCUs for microsecond motor actuation.',
      'Integrated real-time MQTT telemetry streaming to industrial SCADA dashboards.',
      'Constructed closed-loop motor control hardware interface for continuous sorting.',
    ],
    tech: ['STM32', 'TinyML', 'TensorFlow', 'PLC / SCADA', 'OpenCV'],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen bg-[#f7f7f4] text-[#26251e]">
      <section className="relative overflow-hidden border-b border-[#e6e5e0] bg-[#f7f7f4] pt-16 pb-16">
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-left">
          <span className="mb-4 inline-flex items-center gap-2 rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#5a5852]">
            <Sparkles className="size-3.5 text-[#f54e00]" />
            ENGINEERING DEEP-DIVES
          </span>
          <h1 className="mb-4 text-4xl font-normal tracking-tight text-[#26251e] sm:text-6xl">
            System <span className="font-semibold text-[#f54e00]">Case Studies</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#5a5852]">
            In-depth architectural breakdowns of production AI pipelines, ROS2 navigation stacks, and edge hardware deployments.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="group relative overflow-hidden rounded-md border border-[#e6e5e0] bg-[#ffffff] p-6 transition-all duration-200 hover:border-[#cfcdc4] sm:p-8"
            >
              <div className="nvidia-corner-square" />
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e6e5e0] pb-4">
                  <div>
                    <span className="rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-3 py-1 font-mono text-xs font-semibold text-[#f54e00]">
                      {cs.category}
                    </span>
                    <h2 className="mt-3 text-xl font-semibold text-[#26251e] sm:text-2xl">
                      {cs.title}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-[#5a5852] font-mono">
                      {cs.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {cs.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-2.5 py-1 text-[#76b900]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                  <div>
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#26251e]">Overview</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a5852]">
                      {cs.overview}
                    </p>
                  </div>

                  <div className="rounded-sm border border-[#e6e5e0] bg-[#fafaf7] p-4">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#76b900]">Engineering Highlights</h3>
                    <ul className="mt-2.5 flex flex-col gap-2 font-mono text-xs">
                      {cs.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-[#5a5852] leading-relaxed">
                          <span className="mt-1 size-1.5 rounded-full bg-[#76b900] shrink-0" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#e6e5e0] pt-4 font-mono text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-sm border border-[#e6e5e0] bg-[#fafaf7] px-2 py-0.5 text-[#26251e]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1 font-semibold text-[#f54e00] hover:text-[#d04200] transition-colors"
                  >
                    <span>Discuss Similar Architecture</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
