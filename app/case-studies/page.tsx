import type { Metadata } from 'next'
import { Sparkles, Cpu, Activity, ShieldCheck, ArrowRight } from 'lucide-react'
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
    <>
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-card/30 to-background pt-16 pb-20">
        <div className="absolute left-10 top-10 size-72 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
        <div className="absolute right-10 bottom-10 size-72 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Sparkles className="size-3.5" />
            Engineering Deep-Dives
          </span>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            System <span className="text-gradient-purple">Case Studies</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            In-depth architectural breakdowns of production AI pipelines, ROS2 navigation stacks, and edge hardware deployments.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="flex flex-col gap-12">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/80 p-8 shadow-2xl backdrop-blur-xl card-elevation-2 transition-all duration-300 hover:border-purple-500/40 sm:p-10"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 pb-4">
                  <div>
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-bold text-purple-300">
                      {cs.category}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                      {cs.title}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-muted-foreground font-mono">
                      {cs.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-emerald-400"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Overview</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {cs.overview}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">Engineering Highlights</h3>
                    <ul className="mt-3 flex flex-col gap-2">
                      {cs.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-xs leading-relaxed text-foreground/90">
                          <span className="mt-1 size-1.5 rounded-full bg-purple-400 shrink-0" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {cs.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/50 bg-secondary/80 px-3 py-1 font-mono text-xs font-semibold text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <span>Discuss Similar Architecture</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
