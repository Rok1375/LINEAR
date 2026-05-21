import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';

export default function PrototypeHeroScene() {
  const meshRef = useRef();
  
  // Subtle rotation based on mouse or time
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      // Add subtle mouse reaction
      meshRef.current.rotation.y += (state.pointer.x * 0.2 - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += (-state.pointer.y * 0.2 - meshRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <>
      <Environment preset="studio" />
      
      {/* Studio Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <spotLight position={[-10, -10, -10]} intensity={1} color="#4a90e2" />
      <spotLight position={[10, 0, -10]} intensity={2} color="#e24a8d" />

      {/* Floating Geometry (Abstract/Premium shape) */}
      <Float
        speed={1.5}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
          <icosahedronGeometry args={[1, 1]} />
          <meshPhysicalMaterial 
            color="#222222"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1}
            clearcoat={0.8}
            clearcoatRoughness={0.2}
            wireframe={true}
          />
        </mesh>
      </Float>

      {/* Ground shadow for depth */}
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4} 
        color="#000000" 
      />
    </>
  );
}
