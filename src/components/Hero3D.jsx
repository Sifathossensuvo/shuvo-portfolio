import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function DistortCore({ scrollRef }) {
  const meshRef = useRef()
  useFrame((state, delta) => {
    if (!meshRef.current) return
    const s = scrollRef?.current ?? 0
    meshRef.current.rotation.y += delta * 0.12
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, s * 1.4, 0.04)
    const targetScale = 1.5 - s * 0.6
    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.06))
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, -s * 1.2, 0.05)
  })

  return (
    <Sphere ref={meshRef} args={[1.3, 128, 128]}>
      <MeshDistortMaterial
        color="#5cff8a"
        attach="material"
        distort={0.42}
        speed={1.6}
        roughness={0.15}
        metalness={0.1}
        transparent
        opacity={0.9}
        wireframe
      />
    </Sphere>
  )
}

function ParticleCloud({ scrollRef }) {
  const ref = useRef()
  const count = 1100
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 7 * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return
    const s = scrollRef?.current ?? 0
    ref.current.rotation.y += delta * 0.025
    const px = state.pointer.x
    const py = state.pointer.y
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, px * 0.5, 0.02)
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, py * 0.25 - s * 0.6, 0.02)
    ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, s * 0.3, 0.04)
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#5cff8a"
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  )
}

function Rig({ scrollRef }) {
  useFrame((state) => {
    const s = scrollRef?.current ?? 0
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 9 - s * 2.5, 0.05)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Hero3D({ scrollRef }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#5cff8a" />
        <DistortCore scrollRef={scrollRef} />
        <ParticleCloud scrollRef={scrollRef} />
        <Rig scrollRef={scrollRef} />
      </Canvas>
    </div>
  )
}
