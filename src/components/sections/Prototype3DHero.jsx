'use client'; // Ensure it runs on client for Next.js if necessary

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import PrototypeHeroScene from '../three/PrototypeHeroScene';
import './Prototype3DHero.css';

export default function Prototype3DHero() {
  return (
    <section className="prototype-3d-hero-container" aria-label="3D Hero Prototype">
      {/* 3D Canvas Background */}
      <div className="prototype-canvas-wrapper" aria-hidden="true">
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 2]} // Support high DPI displays
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <PrototypeHeroScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="prototype-3d-hero-content">
        <h1 className="prototype-3d-hero-headline">
          Designing motion systems that feel alive.
        </h1>
        <p className="prototype-3d-hero-subtext">
          A focused 3D baseline for premium interactive websites, built to test depth, performance, and motion quality before production.
        </p>
        <div className="prototype-3d-hero-cta-group">
          <button className="prototype-btn prototype-btn-primary">
            View prototype
          </button>
          <button className="prototype-btn prototype-btn-secondary">
            Check performance
          </button>
        </div>
      </div>
    </section>
  );
}
