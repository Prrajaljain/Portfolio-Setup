'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Search, ExternalLink, Cpu, Brain, LineChart, Shield, X, Code2 } from 'lucide-react'

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export interface ProjectItem {
  id: string
  title: string
  category: 'mechatronics' | 'ai-ml' | 'analytics'
  desc: string
  longDesc: string
  tags: string[]
  metrics: string
  githubUrl?: string
  liveUrl?: string
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'robotic-arm-kinematics',
    title: '6-DoF Kinematic Robotic Arm',
    category: 'mechatronics',
    desc: 'Real-time multi-axis robotic manipulator with Ros2 controller and STM32 motor driver.',
    longDesc: 'Designed mechanical linkages and inverse kinematics algorithms for precision pick-and-place automation. Built custom CAN bus motor control hardware running RTOS firmware.',
    tags: ['ROS 2', 'STM32', 'C++', 'Kinematics', 'CAN Bus'],
    metrics: '< 2ms Joint Sync Latency',
    githubUrl: 'https://github.com',
  },
  {
    id: 'ai-waste-sorter',
    title: 'AI Video-Based Waste Sorter',
    category: 'ai-ml',
    desc: 'High-speed computer vision pipeline classifying recyclable materials on fast conveyor belts.',
    longDesc: 'Trained custom YOLOv8 detection model on 50,000 industrial waste frames. Integrated real-time object tracking with pneumatic sorting actuators.',
    tags: ['PyTorch', 'YOLOv8', 'OpenCV', 'Python', 'CUDA'],
    metrics: '98.4% Accuracy @ 60 FPS',
    githubUrl: 'https://github.com',
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Machinery Analytics',
    category: 'analytics',
    desc: 'IoT vibration FFT telemetry pipeline for early equipment fault diagnosis.',
    longDesc: 'Built real-time time-series anomaly detector analyzing tri-axial accelerometer data. Predicts gear tooth pitting and bearing wear 48 hours before failure.',
    tags: ['Python', 'Pandas', 'TimescaleDB', 'Scikit-Learn', 'IoT'],
    metrics: '99.1% Anomaly Recall',
    githubUrl: 'https://github.com',
  },
  {
    id: 'autonomous-mobile-robot',
    title: 'Autonomous Mobile Robot (AMR)',
    category: 'mechatronics',
    desc: 'LiDAR-guided warehouse delivery cart with adaptive obstacle avoidance.',
    longDesc: 'Implemented SLAM (Simultaneous Localization and Mapping) with adaptive Monte Carlo localization. Integrated motor encoders with ROS 2 Nav2 stack.',
    tags: ['ROS 2', 'LiDAR', 'SLAM', 'ESP32', 'Python'],
    metrics: '± 5mm Docking Precision',
    githubUrl: 'https://github.com',
  },
  {
    id: 'edge-vision-inspector',
    title: 'NVIDIA Jetson Flaw Detector',
    category: 'ai-ml',
    desc: 'INT8 quantized deep learning inspection system for high-speed manufacturing lines.',
    longDesc: 'Engineered lightweight convolutional neural net deployed on Jetson Orin via TensorRT. Real-time micro-crack identification in metal stamping.',
    tags: ['TensorRT', 'C++', 'CUDA', 'NVIDIA Jetson', 'Deep Learning'],
    metrics: '120 FPS Inference Speed',
    githubUrl: 'https://github.com',
  },
  {
    id: 'sensor-fusion-hub',
    title: 'Industrial Sensor Fusion Hub',
    category: 'analytics',
    desc: 'Multi-channel telemetry aggregator blending IMU, thermal, and acoustic sensors.',
    longDesc: 'Architected high-throughput message bus parsing 50,000 telemetry events/sec. Integrated Extended Kalman Filtering for noisy sensor fusion.',
    tags: ['Kafka', 'Next.js', 'Sensor Fusion', 'TimescaleDB', 'Grafana'],
    metrics: '50,000 Events/sec Ingest',
    githubUrl: 'https://github.com',
  },
]

export function ProjectMatrix() {
  const [filter, setFilter] = useState<'all' | 'mechatronics' | 'ai-ml' | 'analytics'>('all')
  const [search, setSearch] = useState('')
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const filteredProjects = PROJECTS_LIST.filter((p) => {
    const matchesFilter = filter === 'all' || p.category === filter
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <section id="project-matrix" className="relative py-16 px-4 max-w-6xl mx-auto z-30">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 font-mono text-xs tracking-widest uppercase">
          <Code2 className="w-3.5 h-3.5" />
          <span>PORTFOLIO MATRIX // DEPLOYED PROJECTS</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Robotics, AI & Analytics Systems
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Explore multi-disciplinary hardware controllers, deep learning vision models, and telemetry data engines.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8 p-3 rounded-2xl cyber-glass border border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {[
            { id: 'all', label: 'ALL MODULES', icon: Filter },
            { id: 'mechatronics', label: 'MECHATRONICS', icon: Cpu },
            { id: 'ai-ml', label: 'AI & ML', icon: Brain },
            { id: 'analytics', label: 'ANALYTICS', icon: LineChart },
          ].map((tab) => {
            const Icon = tab.icon
            const active = filter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs transition-all ${
                  active
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stack or tags..."
            className="w-full pl-9 pr-4 py-1.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 font-mono"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(p)}
              className="group cursor-pointer rounded-2xl cyber-glass p-5 border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-2">
                  <span className="uppercase tracking-wider">[{p.category}]</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    {p.metrics}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{p.desc}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 pt-2 border-t border-slate-800/60">
                  <span>INSPECT SPECS</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-2xl rounded-2xl cyber-glass p-6 md:p-8 border border-cyan-500/40 shadow-[0_0_40px_rgba(0,240,255,0.3)] space-y-6"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-400"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-1">
                  MODULE SPECIFICATION // {selectedProject.category}
                </div>
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                <div className="mt-2 inline-block px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 font-mono text-xs text-cyan-300">
                  {selectedProject.metrics}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider">System Architecture</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.longDesc}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-800">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono text-xs hover:border-cyan-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
