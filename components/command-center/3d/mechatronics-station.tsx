'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface MechatronicsStationProps {
  position?: [number, number, number]
  scale?: number
}

export function MechatronicsStation({ position = [-4, 0, 0], scale = 1 }: MechatronicsStationProps) {
  const outerRingRef = useRef<THREE.Group>(null)
  const middleRingRef = useRef<THREE.Group>(null)
  const innerCoreRef = useRef<THREE.Mesh>(null)
  const laserRingRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x += delta * 0.4
      outerRingRef.current.rotation.y += delta * 0.6
    }
    if (middleRingRef.current) {
      middleRingRef.current.rotation.y -= delta * 0.8
      middleRingRef.current.rotation.z += delta * 0.5
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.x += delta * 1.2
      innerCoreRef.current.rotation.y += delta * 1.0
    }
    if (laserRingRef.current) {
      laserRingRef.current.rotation.z -= delta * 0.3
    }
  })

  return (
    <group position={position} scale={scale}>
      {/* Outer Metallic Gimbal Ring */}
      <group ref={outerRingRef}>
        <mesh>
          <torusGeometry args={[2.2, 0.08, 16, 64]} />
          <meshStandardMaterial
            color="#00f0ff"
            metalness={0.9}
            roughness={0.1}
            emissive="#00f0ff"
            emissiveIntensity={0.4}
          />
        </mesh>
        {/* Ring Hardware Pins */}
        {[0, 90, 180, 270].map((deg, i) => (
          <mesh key={i} position={[2.2 * Math.cos((deg * Math.PI) / 180), 2.2 * Math.sin((deg * Math.PI) / 180), 0]}>
            <boxGeometry args={[0.2, 0.2, 0.3]} />
            <meshStandardMaterial color="#7000ff" metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
      </group>

      {/* Middle Rotating Mechanical Gear Ring */}
      <group ref={middleRingRef}>
        <mesh>
          <torusGeometry args={[1.6, 0.06, 16, 48]} />
          <meshStandardMaterial
            color="#7000ff"
            metalness={0.95}
            roughness={0.15}
            emissive="#7000ff"
            emissiveIntensity={0.5}
          />
        </mesh>
        {/* Gear Teeth */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          return (
            <mesh
              key={i}
              position={[1.6 * Math.cos(angle), 1.6 * Math.sin(angle), 0]}
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[0.15, 0.1, 0.15]} />
              <meshStandardMaterial color="#00f0ff" metalness={0.9} roughness={0.1} />
            </mesh>
          )
        })}
      </group>

      {/* Laser Scanning Line Ring */}
      <group ref={laserRingRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.6, 2.65, 64]} />
          <meshBasicMaterial color="#00f0ff" side={THREE.DoubleSide} transparent opacity={0.6} />
        </mesh>
      </group>

      {/* Central Kinetic Robotic Core */}
      <mesh ref={innerCoreRef}>
        <octahedronGeometry args={[0.9, 2]} />
        <meshStandardMaterial
          color="#00f0ff"
          wireframe
          emissive="#00f0ff"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Inner Glowing Energy Lens */}
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={1.5}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>

      {/* Station Pedestal Platform Base */}
      <mesh position={[0, -2.8, 0]}>
        <cylinderGeometry args={[2.4, 2.8, 0.4, 32]} />
        <meshStandardMaterial
          color="#0b1120"
          metalness={0.9}
          roughness={0.2}
          emissive="#00f0ff"
          emissiveIntensity={0.15}
        />
      </mesh>
      <mesh position={[0, -2.58, 0]}>
        <ringGeometry args={[1.8, 2.4, 32]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.7} side={THREE.DoubleSide} />
      </mesh>

      {/* Ambient Point Light */}
      <pointLight color="#00f0ff" intensity={3} distance={8} />
    </group>
  )
}
