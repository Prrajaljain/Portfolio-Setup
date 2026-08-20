'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Grid, Float, useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { MechatronicsStation } from './mechatronics-station'
import { AINeuralStation } from './ai-neural-station'
import { DataAnalyticsStation } from './data-analytics-station'

export function CommandCenterScene() {
  const scroll = useScroll()
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0))

  useFrame((state) => {
    // scroll.offset ranges from 0 to 1 as user scrolls
    const r1 = scroll ? scroll.offset : 0

    // Smoothly calculate target camera position based on scroll offset
    // 0.0 - 0.33 -> Overview / Mechatronics
    // 0.33 - 0.66 -> AI & Machine Learning
    // 0.66 - 1.0 -> Data Analytics
    let targetX = 0
    let targetY = 1.2
    let targetZ = 12

    if (r1 < 0.35) {
      // Focus Station 1: Mechatronics
      const t = r1 / 0.35
      targetX = THREE.MathUtils.lerp(-4.5, -4, t)
      targetY = THREE.MathUtils.lerp(0.8, 0.4, t)
      targetZ = THREE.MathUtils.lerp(12, 7.5, t)
      cameraTarget.current.set(-4, 0, 0)
    } else if (r1 < 0.7) {
      // Focus Station 2: AI & ML
      const t = (r1 - 0.35) / 0.35
      targetX = THREE.MathUtils.lerp(-4, 0, t)
      targetY = THREE.MathUtils.lerp(0.4, 0.5, t)
      targetZ = THREE.MathUtils.lerp(7.5, 7, t)
      cameraTarget.current.set(0, 0, 0)
    } else {
      // Focus Station 3: Data Analytics
      const t = (r1 - 0.7) / 0.3
      targetX = THREE.MathUtils.lerp(0, 4, t)
      targetY = THREE.MathUtils.lerp(0.5, 0.4, t)
      targetZ = THREE.MathUtils.lerp(7, 7.5, t)
      cameraTarget.current.set(4, 0, 0)
    }

    // Lerp camera position smoothly
    state.camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.05)
    state.camera.lookAt(cameraTarget.current)
  })

  return (
    <>
      {/* Dark Ambient & Cybernetic Spotlights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 15, 10]} intensity={1.5} color="#00f0ff" castShadow />
      <spotLight position={[-10, 12, 5]} intensity={2.5} color="#7000ff" angle={0.6} penumbra={0.8} />
      <pointLight position={[0, -2, 4]} intensity={2} color="#00ffaa" distance={15} />

      {/* Futuristic Cyber Reflective Grid Floor */}
      <Grid
        position={[0, -2.9, 0]}
        args={[50, 50]}
        cellSize={0.8}
        cellThickness={1}
        cellColor="#00f0ff"
        sectionSize={4}
        sectionThickness={1.5}
        sectionColor="#7000ff"
        fadeDistance={25}
        fadeStrength={1.5}
      />

      {/* Floating 3D Stations */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <MechatronicsStation position={[-4.5, 0, 0]} scale={0.9} />
      </Float>

      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.4}>
        <AINeuralStation position={[0, 0, 0]} scale={1.05} />
      </Float>

      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.3}>
        <DataAnalyticsStation position={[4.5, 0, 0]} scale={0.9} />
      </Float>
    </>
  )
}
