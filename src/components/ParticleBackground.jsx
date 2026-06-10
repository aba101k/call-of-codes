import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Network() {
  const group = useRef()
  const count = 120
  const connectionDist = 1.8

  const { positions, lineGeo } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }

    const pts = []
    for (let i = 0; i < count; i++) {
      const ax = pos[i * 3], ay = pos[i * 3 + 1], az = pos[i * 3 + 2]
      for (let j = i + 1; j < count; j++) {
        const bx = pos[j * 3], by = pos[j * 3 + 1], bz = pos[j * 3 + 2]
        const d = Math.hypot(ax - bx, ay - by, az - bz)
        if (d < connectionDist) {
          pts.push(ax, ay, az, bx, by, bz)
        }
      }
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3))
    return { positions: pos, lineGeo: geo }
  }, [])

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.04
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.1
    }
  })

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#00FF88" transparent opacity={0.9} sizeAttenuation />
      </points>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#00FF88" transparent opacity={0.12} />
      </lineSegments>
    </group>
  )
}

export default function ParticleBackground() {
  return (
    <div className="particle-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.2} />
        <Network />
      </Canvas>
    </div>
  )
}
