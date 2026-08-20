'use client'

import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import { CommandCenterScene } from './command-center-scene'
import { Suspense } from 'react'

function LoaderHUD() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050811] text-cyan-400 z-50">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin"></div>
        <div className="w-10 h-10 border-2 border-purple-500/30 border-b-purple-400 rounded-full animate-spin absolute" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      <div className="mt-4 font-mono text-xs tracking-widest text-cyan-400 uppercase animate-pulse">
        INITIALIZING COMMAND CENTER 3D KERNEL...
      </div>
    </div>
  )
}

export function CanvasContainer() {
  return (
    <div className="relative w-full h-full min-h-screen bg-[#050811]">
      <Suspense fallback={<LoaderHUD />}>
        <Canvas
          shadows
          camera={{ position: [0, 1.2, 12], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full"
        >
          <ScrollControls pages={3} damping={0.2}>
            <CommandCenterScene />
          </ScrollControls>
        </Canvas>
      </Suspense>
    </div>
  )
}
