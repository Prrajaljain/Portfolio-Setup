'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface AINeuralStationProps {
  position?: [number, number, number]
  scale?: number
}

export function AINeuralStation({ position = [0, 0, 0], scale = 1 }: AINeuralStationProps) {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const coreRef = useRef<THREE.Mesh>(null)

  // Generate neural network nodes and synaptic connection line segments
  const { nodePositions, linePositions } = useMemo(() => {
    const count = 45
    const positions: number[] = []
    const lineCoords: number[] = []

    // Seed nodes in a spherical cluster
    for (let i = 0; i < count; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = 1.2 + Math.random() * 1.2

      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)

      positions.push(x, y, z)
    }

    // Connect nodes within a distance threshold
    for (let i = 0; i < count; i++) {
      const x1 = positions[i * 3]
      const y1 = positions[i * 3 + 1]
      const z1 = positions[i * 3 + 2]

      for (let j = i + 1; j < count; j++) {
        const x2 = positions[j * 3]
        const y2 = positions[j * 3 + 1]
        const z2 = positions[j * 3 + 2]

        const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2)
        if (dist < 1.6) {
          lineCoords.push(x1, y1, z1)
          lineCoords.push(x2, y2, z2)
        }
      }
    }

    return {
      nodePositions: new Float32Array(positions),
      linePositions: new Float32Array(lineCoords),
    }
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15
    }
    if (coreRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.08
      coreRef.current.scale.set(pulse, pulse, pulse)
    }
  })

  return (
    <group position={position} scale={scale}>
      <group ref={groupRef}>
        {/* Synaptic Particles Nodes */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[nodePositions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.12}
            color="#00f0ff"
            transparent
            opacity={0.9}
            blending={THREE.AdditiveBlending}
          />
        </points>

        {/* Synaptic Connection Lines */}
        <lineSegments ref={linesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[linePositions, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#7000ff"
            transparent
            opacity={0.5}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>

        {/* Pulsing AI Energy Core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.7, 3]} />
          <meshStandardMaterial
            color="#7000ff"
            emissive="#00f0ff"
            emissiveIntensity={1.2}
            wireframe
            roughness={0.1}
          />
        </mesh>

        {/* Outer Orbital Glowing Rings */}
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[2.5, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.6}
            transparent
            opacity={0.7}
          />
        </mesh>
        <mesh rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
          <torusGeometry args={[2.2, 0.02, 16, 64]} />
          <meshStandardMaterial
            color="#7000ff"
            emissive="#7000ff"
            emissiveIntensity={0.8}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>

      {/* Station Pedestal Base */}
      <mesh position={[0, -2.8, 0]}>
        <cylinderGeometry args={[2.4, 2.8, 0.4, 32]} />
        <meshStandardMaterial
          color="#0b1120"
          metalness={0.9}
          roughness={0.2}
          emissive="#7000ff"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0, -2.58, 0]}>
        <ringGeometry args={[1.8, 2.4, 32]} />
        <meshBasicMaterial color="#7000ff" transparent opacity={0.7} side={THREE.DoubleSide} />
      </mesh>

      {/* Point Light */}
      <pointLight color="#7000ff" intensity={4} distance={9} />
    </group>
  )
}
