'use client'

import { useState, useEffect } from 'react'
import { Cpu, Activity, Terminal, Volume2, VolumeX, ShieldCheck, Zap } from 'lucide-react'

interface HUDHeaderProps {
  onToggleTerminal?: () => void
  activeStation?: number
  onStationSelect?: (index: number) => void
}

export function HUDHeader({ onToggleTerminal, activeStation = 0, onStationSelect }: HUDHeaderProps) {
  const [muted, setMuted] = useState(true)
  const [fps, setFps] = useState(60)

  useEffect(() => {
    const interval = setInterval(() => {
      setFps(58 + Math.floor(Math.random() * 4))
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-[#050811]/80 backdrop-blur-md border-b border-cyan-500/20 text-white flex items-center justify-between">
      {/* Brand & System Status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 font-mono text-xs tracking-wider">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>SYS::ONLINE</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400 border-l border-slate-800 pl-3">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>ROBOTICS & AI KERNEL</span>
        </div>
      </div>

      {/* Quick Station Navigation */}
      <div className="hidden sm:flex items-center gap-1.5 bg-slate-950/70 p-1 rounded-full border border-slate-800">
        {[
          { label: '01 // MECHATRONICS', icon: Zap },
          { label: '02 // AI & ML', icon: Activity },
          { label: '03 // ANALYTICS', icon: ShieldCheck },
        ].map((st, idx) => {
          const Icon = st.icon
          const active = activeStation === idx
          return (
            <button
              key={idx}
              onClick={() => onStationSelect?.(idx)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[11px] transition-all ${
                active
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                  : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-900'
              }`}
            >
              <Icon className={`w-3 h-3 ${active ? 'text-cyan-400' : 'text-slate-500'}`} />
              <span>{st.label}</span>
            </button>
          )
        })}
      </div>

      {/* Controls & Telemetry */}
      <div className="flex items-center gap-3 font-mono text-xs">
        <div className="hidden lg:flex items-center gap-1.5 text-slate-400 text-[11px]">
          <span className="text-slate-500">FPS:</span>
          <span className="text-emerald-400 font-semibold">{fps}</span>
        </div>

        {/* Audio Toggle Simulation */}
        <button
          onClick={() => setMuted(!muted)}
          className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          title={muted ? 'Enable Ambient SFX' : 'Mute SFX'}
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
        </button>

        {/* CLI Terminal Toggle */}
        <button
          onClick={onToggleTerminal}
          className="flex items-center gap-2 px-3 py-1.5 rounded bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 transition-all shadow-[0_0_10px_rgba(0,240,255,0.15)]"
        >
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline font-mono text-xs">CLI CONSOLE</span>
        </button>
      </div>
    </header>
  )
}
