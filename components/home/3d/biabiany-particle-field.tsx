'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleNodes() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const pointerTarget = useRef(new THREE.Vector2(0, 0))

  const count = 120

  const { positions, linePositions } = useMemo(() => {
    const coords: number[] = []
    const lineCoords: number[] = []

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 16
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 8
      coords.push(x, y, z)
    }

    for (let i = 0; i < count; i++) {
      const x1 = coords[i * 3]
      const y1 = coords[i * 3 + 1]
      const z1 = coords[i * 3 + 2]

      for (let j = i + 1; j < count; j++) {
        const x2 = coords[j * 3]
        const y2 = coords[j * 3 + 1]
        const z2 = coords[j * 3 + 2]

        const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2)
        if (dist < 2.2) {
          lineCoords.push(x1, y1, z1)
          lineCoords.push(x2, y2, z2)
        }
      }
    }

    return {
      positions: new Float32Array(coords),
      linePositions: new Float32Array(lineCoords),
    }
  }, [])

  useFrame((state, delta) => {
    // Lerp pointer target smoothly
    pointerTarget.current.x = THREE.MathUtils.lerp(pointerTarget.current.x, state.pointer.x * 0.8, 0.05)
    pointerTarget.current.y = THREE.MathUtils.lerp(pointerTarget.current.y, state.pointer.y * 0.8, 0.05)

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05
      pointsRef.current.rotation.x = pointerTarget.current.y * 0.2
      pointsRef.current.rotation.y += pointerTarget.current.x * 0.02
    }

    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.05
      linesRef.current.rotation.x = pointerTarget.current.y * 0.2
      linesRef.current.rotation.y += pointerTarget.current.x * 0.02
    }
  })

  return (
    <group>
      {/* Particle Dots */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#3b82f6"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Network Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  )
}

export function BiabianyParticleField() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <ParticleNodes />
      </Canvas>
    </div>
  )
}
