'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles } from 'lucide-react'

interface CommandTerminalProps {
  isOpen: boolean
  onClose: () => void
}

interface LogItem {
  type: 'input' | 'output' | 'error' | 'system'
  text: string
}

export function CommandTerminal({ isOpen, onClose }: CommandTerminalProps) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<LogItem[]>([
    { type: 'system', text: 'AUTONOMOUS KERNEL CLI v3.8 [ONLINE]' },
    { type: 'system', text: 'Type "help" to view available terminal commands.' },
  ])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    const newLogs: LogItem[] = [...history, { type: 'input', text: cmd }]

    switch (trimmed) {
      case 'help':
        newLogs.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help      - Display available system commands
  status    - View core telemetry & node status
  skills    - List mechatronics, AI/ML, and analytics capabilities
  projects  - Show active autonomous robotics projects
  whoami    - Display engineer profile summary
  clear     - Wipe terminal output log
  exit      - Close CLI console`,
        })
        break
      case 'status':
        newLogs.push({
          type: 'output',
          text: `[SYSTEM STATUS]
  Core Node: ONLINE
  Rendering Engine: Three.js / WebGL 2.0 (Turbopack)
  Active Stations: 01 (Mechatronics), 02 (AI/ML), 03 (Data Analytics)
  Latency: 1.8ms | Memory: 32MB WebGL Buffer | Status: NOMINAL`,
        })
        break
      case 'skills':
        newLogs.push({
          type: 'output',
          text: `[ENGINEERING CAPABILITIES]
  * Mechatronics: ROS 2, STM32, ESP32, Kinematics, CAN Bus, SolidWorks
  * AI & ML: PyTorch, YOLOv8, TensorRT, OpenCV, CUDA, Reinforcement Learning
  * Data Analytics: Sensor Fusion, Kalman Filters, TimescaleDB, Kafka, Grafana`,
        })
        break
      case 'projects':
        newLogs.push({
          type: 'output',
          text: `[DEPLOYED MODULES]
  1. 6-DoF Kinematic Robotic Arm (ROS 2 / C++)
  2. AI Video-Based Waste Sorter (PyTorch / YOLOv8)
  3. Predictive Machinery Analytics (TimescaleDB / Python)
  4. Autonomous Mobile Robot AMR (LiDAR / SLAM)`,
        })
        break
      case 'whoami':
        newLogs.push({
          type: 'output',
          text: 'PRAJA L JAIN — AI, Mechatronics & Data Analysis Engineer building autonomous cyber-physical systems.',
        })
        break
      case 'clear':
        setHistory([])
        return
      case 'exit':
        onClose()
        return
      case '':
        break
      default:
        newLogs.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`,
        })
    }

    setHistory(newLogs)
    setInput('')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-[500px] z-50 rounded-2xl cyber-glass border border-cyan-500/40 shadow-[0_0_30px_rgba(0,240,255,0.25)] overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/90 border-b border-slate-800">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
              <TerminalIcon className="w-4 h-4 text-cyan-400" />
              <span>CLI CONSOLE // AUTONOMOUS_SHELL</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Console Output Body */}
          <div
            ref={scrollRef}
            className="p-4 h-64 overflow-y-auto font-mono text-xs space-y-2 bg-[#050811]/90 text-slate-300"
          >
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'input' && (
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span className="text-cyan-500">prajal@auton-node:~$</span>
                    <span>{item.text}</span>
                  </div>
                )}
                {item.type === 'output' && (
                  <pre className="text-slate-300 whitespace-pre-wrap font-mono leading-relaxed pl-4 border-l-2 border-cyan-500/40">
                    {item.text}
                  </pre>
                )}
                {item.type === 'system' && <div className="text-purple-400 italic">{item.text}</div>}
                {item.type === 'error' && <div className="text-rose-400 font-semibold">{item.text}</div>}
              </div>
            ))}
          </div>

          {/* Prompt Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleCommand(input)
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-950/90 border-t border-slate-800"
          >
            <span className="font-mono text-xs text-cyan-400">prajal@auton-node:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type command (e.g. help)..."
              className="flex-1 bg-transparent font-mono text-xs text-cyan-200 focus:outline-none placeholder-slate-600"
              autoFocus
            />
            <button type="submit" className="text-cyan-400 hover:text-cyan-200">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
