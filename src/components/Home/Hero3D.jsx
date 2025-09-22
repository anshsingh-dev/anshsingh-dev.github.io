import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

const Hero3D = () => {
  const meshRef = useRef()
  const lightRef = useRef()
  
  // Create particle system
  const particles = useMemo(() => {
    const count = 100
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }
    
    return positions
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Animate main sphere
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2
      meshRef.current.rotation.y = time * 0.3
      meshRef.current.position.y = Math.sin(time) * 0.1
    }
    
    // Animate light
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(time) * 2
      lightRef.current.position.z = Math.cos(time) * 2
    }
  })

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Point lights */}
      <pointLight ref={lightRef} position={[2, 2, 2]} intensity={1} color="#646cff" />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color="#747bff" />
      
      {/* Main distorted sphere */}
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#646cff"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      
      {/* Secondary floating spheres */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[3, 1, -2]} scale={0.5}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#747bff" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[-3, -1, -1]} scale={0.3}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#535bf2" metalness={0.7} roughness={0.1} />
        </mesh>
      </Float>
      
      {/* Particle system */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#646cff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
      
      {/* Torus ring */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[0, 0, -1]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[3, 0.1, 16, 100]} />
          <meshStandardMaterial
            color="#646cff"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>
    </>
  )
}

export default Hero3D