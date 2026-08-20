'use client'

import dynamic from 'next/dynamic'

export const ParticleCanvasWrapper = dynamic(
  () => import('./biabiany-particle-field').then((mod) => mod.BiabianyParticleField),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#09090b]" />,
  }
)
