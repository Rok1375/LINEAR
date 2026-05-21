"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import { useRef } from "react";
import styles from "./prototype-3d-hero.module.css";

const sceneMetrics = [
  { label: "Geometry", value: "Procedural" },
  { label: "Runtime", value: "R3F" },
  { label: "Fallback", value: "Reduced motion" }
];

type RotatingGroup = {
  rotation: {
    x: number;
    y: number;
    z: number;
  };
};

type RotatingMesh = {
  rotation: {
    y: number;
  };
};

function PromptPrism({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<RotatingGroup | null>(null);
  const coreRef = useRef<RotatingMesh | null>(null);

  useFrame(({ pointer }, delta) => {
    if (!groupRef.current || reducedMotion) {
      return;
    }

    groupRef.current.rotation.y += delta * 0.16;
    groupRef.current.rotation.x += (pointer.y * 0.18 - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.z += (-pointer.x * 0.12 - groupRef.current.rotation.z) * 0.04;

    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.24;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={reducedMotion ? 0 : 1.2} rotationIntensity={reducedMotion ? 0 : 0.35} floatIntensity={reducedMotion ? 0 : 0.45}>
        <mesh ref={coreRef} castShadow receiveShadow>
          <icosahedronGeometry args={[1.18, 1]} />
          <meshStandardMaterial color="#d8eee8" roughness={0.38} metalness={0.18} />
        </mesh>

        <mesh rotation={[Math.PI / 2.6, 0.2, -0.4]}>
          <torusGeometry args={[1.48, 0.018, 12, 96]} />
          <meshStandardMaterial color="#246b5f" roughness={0.42} metalness={0.25} />
        </mesh>

        <mesh rotation={[0.35, Math.PI / 2.2, 0.1]}>
          <torusGeometry args={[1.72, 0.014, 12, 96]} />
          <meshStandardMaterial color="#f3c86b" roughness={0.5} metalness={0.12} />
        </mesh>

        <mesh position={[1.58, 0.42, 0.2]}>
          <sphereGeometry args={[0.1, 24, 24]} />
          <meshStandardMaterial color="#16443d" roughness={0.3} />
        </mesh>

        <mesh position={[-1.28, -0.86, 0.36]}>
          <boxGeometry args={[0.24, 0.24, 0.24]} />
          <meshStandardMaterial color="#ffffff" roughness={0.34} metalness={0.08} />
        </mesh>
      </Float>
    </group>
  );
}

function PrototypeScene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <Canvas shadows dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }} aria-label="Decorative 3D prompt prism">
      <PerspectiveCamera makeDefault position={[0, 0, 5.2]} fov={38} />
      <color attach="background" args={["#eef2f1"]} />
      <ambientLight intensity={1.25} />
      <directionalLight position={[4, 5, 6]} intensity={2.1} castShadow />
      <pointLight position={[-3, -2, 4]} intensity={1.1} color="#f3c86b" />
      <PromptPrism reducedMotion={reducedMotion} />
    </Canvas>
  );
}

export function Prototype3DHero() {
  const prefersReducedMotion = Boolean(useReducedMotion());

  return (
    <section className={styles.prototypeShell} aria-labelledby="prototype-3d-title">
      <div className={styles.heroPanel}>
        <div className={styles.copyColumn}>
          <p className="eyebrow">Prototype 2</p>
          <h2 id="prototype-3d-title" className={styles.title}>
            A lightweight 3D baseline for creative prompt work.
          </h2>
          <p className={styles.lede}>
            This isolated route tests React Three Fiber, Three.js, and a small Drei helper with procedural geometry instead of a heavy asset pipeline.
          </p>

          <div className={styles.actionRow}>
            <a className="primary-button" href="/library">
              Back to library
            </a>
            <a className="secondary-button" href="/prototype/motion">
              Motion baseline
            </a>
          </div>
        </div>

        <div className={styles.scenePanel}>
          <div className={styles.sceneFrame} aria-hidden="true">
            <PrototypeScene reducedMotion={prefersReducedMotion} />
          </div>
          <p className={styles.sceneFallback}>
            {prefersReducedMotion
              ? "Reduced motion is active, so the scene stays still."
              : "Move the pointer gently over the scene to test subtle response."}
          </p>
        </div>
      </div>

      <div className={styles.metricsGrid} aria-label="3D prototype baseline details">
        {sceneMetrics.map((metric) => (
          <article key={metric.label} className={styles.metricCard}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
