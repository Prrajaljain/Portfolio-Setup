'use client'

import { motion } from 'framer-motion'
import { Cpu, Brain, LineChart, Wrench, ArrowRight, ExternalLink, Layers, Database } from 'lucide-react'

export interface StationData {
  id: string
  title: string
  subtitle: string
  stationNum: string
  color: string
  icon: any
  tags: string[]
  metrics: { label: string; value: string }[]
  highlights: string[]
  projects: { name: string; desc: string; tech: string }[]
}

export const STATIONS: StationData[] = [
  {
    id: 'mechatronics',
    stationNum: 'STATION 01',
    title: 'Mechatronics & Autonomous Hardware',
    subtitle: 'Kinematic Solvers, Embedded Robotics & Automation',
    color: '#00f0ff',
    icon: Cpu,
    tags: ['ROS 2', 'STM32', 'ESP32', 'CAD / CAM', 'Kinematics', 'Actuators', 'CAN Bus'],
    metrics: [
      { label: 'Control Latency', value: '< 2.4 ms' },
      { label: 'Kinematic DoF', value: '6-Axis Arm' },
      { label: 'Bus Protocol', value: 'CAN / EtherCAT' },
    ],
    highlights: [
      'Multi-axis inverse kinematics calculation for precision robotic manipulators',
      'Embedded RTOS firmware development for real-time motor control loops',
      'SolidWorks & Fusion 360 CAD enclosure & PCB schematic designing',
    ],
    projects: [
      { name: '6-DoF Robotic Arm Controller', desc: 'Real-time ROS 2 inverse kinematics solver with dynamic payload balancing.', tech: 'C++ / ROS 2 / STM32' },
      { name: 'Autonomous Mobile Robot (AMR)', desc: 'LiDAR-driven slam navigation cart with custom motor drive circuitry.', tech: 'Python / ROS 2 / ESP32' },
    ],
  },
  {
    id: 'ai-ml',
    stationNum: 'STATION 02',
    title: 'AI & Neural Vision Systems',
    subtitle: 'Deep Learning, Computer Vision & Autonomous Perception',
    color: '#7000ff',
    icon: Brain,
    tags: ['PyTorch', 'YOLOv8', 'TensorRT', 'OpenCV', 'Deep Learning', 'RL', 'CUDA'],
    metrics: [
      { label: 'Inference Speed', value: '120 FPS' },
      { label: 'Vision Accuracy', value: '98.4% mAP' },
      { label: 'Optimization', value: 'INT8 Quantized' },
    ],
    highlights: [
      'Real-time edge computer vision pipeline deployed on NVIDIA Jetson Orin',
      'YOLOv8 object detection tuned for waste sorting and defect inspection',
      'Deep Reinforcement Learning agents trained for autonomous path planning',
    ],
    projects: [
      { name: 'AI Video Waste Sorting System', desc: 'High-speed conveyor object recognition and robotic sorting trigger.', tech: 'PyTorch / YOLOv8 / OpenCV' },
      { name: 'Edge Vision Anomaly Detector', desc: 'Real-time industrial surface flaw detection using quantized neural nets.', tech: 'TensorRT / C++ / CUDA' },
    ],
  },
  {
    id: 'analytics',
    stationNum: 'STATION 03',
    title: 'Data Analytics & Telemetry Engine',
    subtitle: 'Predictive Pipelines, Sensor Fusion & Holographic Dashboards',
    color: '#00ffaa',
    icon: LineChart,
    tags: ['Python', 'Pandas', 'TimescaleDB', 'Grafana', 'Sensor Fusion', 'Scikit-Learn', 'Kafka'],
    metrics: [
      { label: 'Data Ingestion', value: '50k msg/sec' },
      { label: 'Predictive Horizon', value: '99.1% R²' },
      { label: 'Sensor Nodes', value: '128 Sensors' },
    ],
    highlights: [
      'Multi-modal sensor data ingestion pipeline with Kalman filter noise reduction',
      'Predictive maintenance algorithm for motor vibration & thermal anomaly alert',
      'Interactive executive analytics dashboard with live stream telemetry',
    ],
    projects: [
      { name: 'Predictive Machine Maintenance', desc: 'Vibration FFT analysis model predicting gear failure 48 hours prior.', tech: 'Python / Scikit-Learn / Timescale' },
      { name: 'Industrial IoT Telemetry Hub', desc: 'High-throughput stream analytics dashboard aggregating 100+ sensors.', tech: 'Next.js / Tailwind / Kafka' },
    ],
  },
]

interface StationCardsProps {
  activeStationIndex: number
  onSelectStation: (index: number) => void
}

export function StationCards({ activeStationIndex, onSelectStation }: StationCardsProps) {
  const station = STATIONS[activeStationIndex] || STATIONS[0]
  const Icon = station.icon

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-8 pointer-events-auto">
      {/* Station Selector Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {STATIONS.map((s, idx) => {
          const isSelected = activeStationIndex === idx
          const StIcon = s.icon
          return (
            <button
              key={s.id}
              onClick={() => onSelectStation(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs transition-all border ${
                isSelected
                  ? 'bg-slate-900/90 text-white border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-105'
                  : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-cyan-500/40 hover:text-slate-200'
              }`}
            >
              <StIcon className="w-4 h-4" style={{ color: s.color }} />
              <span>{s.stationNum}</span>
              <span className="opacity-60 hidden sm:inline">| {s.title.split('&')[0]}</span>
            </button>
          )
        })}
      </div>

      {/* Main Glassmorphism HUD Card Overlay */}
      <motion.div
        key={station.id}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative rounded-2xl cyber-glass p-6 md:p-8 overflow-hidden border border-cyan-500/30"
      >
        {/* Ambient Top Glow Line */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, transparent, ${station.color}, transparent)` }}
        />

        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {/* Left Column: Overview & Tech Stack */}
          <div className="flex-1 space-y-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-1">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: station.color }} />
                {station.stationNum} // CORE DISCIPLINE
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <Icon className="w-7 h-7" style={{ color: station.color }} />
                <span>{station.title}</span>
              </h2>
              <p className="text-slate-400 text-sm mt-1">{station.subtitle}</p>
            </div>

            {/* Metrics HUD Row */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              {station.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs font-mono text-slate-500">{m.label}</div>
                  <div className="text-base md:text-lg font-mono font-bold text-cyan-300 mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Key Technical Capabilities */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Engine Highlights</span>
              </h4>
              <ul className="space-y-2">
                {station.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {station.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/30"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Projects */}
          <div className="lg:w-80 space-y-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8">
            <h3 className="font-mono text-xs text-cyan-400 tracking-wider uppercase flex items-center gap-2">
              <Wrench className="w-4 h-4 text-cyan-400" />
              <span>DEPLOYED MODULES</span>
            </h3>

            <div className="space-y-3">
              {station.projects.map((p, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">{p.name}</h5>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{p.desc}</p>
                  <div className="mt-2 font-mono text-[10px] text-cyan-400/80 bg-cyan-950/40 px-2 py-0.5 rounded w-fit border border-cyan-500/20">
                    {p.tech}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('project-matrix')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 font-mono text-xs hover:bg-cyan-500/30 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <span>EXPLORE ALL MODULES</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
