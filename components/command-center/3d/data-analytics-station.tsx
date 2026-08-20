'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface DataAnalyticsStationProps {
  position?: [number, number, number]
  scale?: number
}

export function DataAnalyticsStation({ position = [4, 0, 0], scale = 1 }: DataAnalyticsStationProps) {
  const ring1Ref = useRef<THREE.Group>(null)
  const ring2Ref = useRef<THREE.Group>(null)
  const ring3Ref = useRef<THREE.Group>(null)
  const barsRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.4
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.6
    if (ring3Ref.current) ring3Ref.current.rotation.x += delta * 0.3
    if (barsRef.current) {
      barsRef.current.children.forEach((bar, i) => {
        const height = 0.5 + Math.abs(Math.sin(state.clock.elapsedTime * 2 + i)) * 1.2
        bar.scale.y = height
      })
    }
  })

  return (
    <group position={position} scale={scale}>
      {/* Outer Hologram Ring 1 */}
      <group ref={ring1Ref}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[2.2, 2.35, 64]} />
          <meshBasicMaterial color="#00ffaa" side={THREE.DoubleSide} transparent opacity={0.8} />
        </mesh>
        {/* Hologram Data Markers */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <mesh
            key={i}
            position={[2.27 * Math.cos((deg * Math.PI) / 180), 2.27 * Math.sin((deg * Math.PI) / 180), 0]}
          >
            <boxGeometry args={[0.15, 0.15, 0.15]} />
            <meshStandardMaterial color="#00ffaa" emissive="#00ffaa" emissiveIntensity={1} />
          </mesh>
        ))}
      </group>

      {/* Hologram Ring 2 */}
      <group ref={ring2Ref}>
        <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <ringGeometry args={[1.7, 1.82, 48]} />
          <meshBasicMaterial color="#00f0ff" side={THREE.DoubleSide} transparent opacity={0.7} />
        </mesh>
      </group>

      {/* Hologram Ring 3 */}
      <group ref={ring3Ref}>
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <torusGeometry args={[1.3, 0.03, 16, 48]} />
          <meshStandardMaterial color="#7000ff" emissive="#7000ff" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Floating Dynamic Holographic Metric Bars */}
      <group ref={barsRef} position={[0, -0.4, 0]}>
        {Array.from({ length: 9 }).map((_, i) => {
          const xPos = (i - 4) * 0.32
          return (
            <mesh key={i} position={[xPos, 0, 0]}>
              <boxGeometry args={[0.18, 1, 0.18]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? '#00ffaa' : '#00f0ff'}
                emissive={i % 2 === 0 ? '#00ffaa' : '#00f0ff'}
                emissiveIntensity={0.9}
                roughness={0.2}
              />
            </mesh>
          )
        })}
      </group>

      {/* Central Matrix Core */}
      <mesh position={[0, 0.8, 0]}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color="#00ffaa"
          emissive="#00ffaa"
          emissiveIntensity={1.5}
          wireframe
        />
      </mesh>

      {/* Station Pedestal Base */}
      <mesh position={[0, -2.8, 0]}>
        <cylinderGeometry args={[2.4, 2.8, 0.4, 32]} />
        <meshStandardMaterial
          color="#0b1120"
          metalness={0.9}
          roughness={0.2}
          emissive="#00ffaa"
          emissiveIntensity={0.15}
        />
      </mesh>
      <mesh position={[0, -2.58, 0]}>
        <ringGeometry args={[1.8, 2.4, 32]} />
        <meshBasicMaterial color="#00ffaa" transparent opacity={0.7} side={THREE.DoubleSide} />
      </mesh>

      {/* Point Light */}
      <pointLight color="#00ffaa" intensity={3.5} distance={8} />
    </group>
  )
}
