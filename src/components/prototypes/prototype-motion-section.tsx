"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";

import styles from "./prototype-motion-section.module.css";

const CARDS = [
  {
    title: "Scroll-driven Hero Reveal",
    description:
      "Intro panel reveals with cinematic timing, subtle glow ramps, and reduced-motion-safe fallbacks.",
  },
  {
    title: "Elegant Motion Trails",
    description:
      "Layered translucent gradients create anatomy-like depth while preserving readability and contrast.",
  },
  {
    title: "Responsive Interactions",
    description:
      "Cards scale gently on hover/tap using Motion for predictable component-level interactions.",
  },
];

export function PrototypeMotionSection() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.hero}`,
        { opacity: 0, y: 28, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power2.out" },
      );

      gsap.fromTo(
        `.${styles.card}`,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, delay: 0.2, ease: "power2.out" },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.page} ref={containerRef}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Prototype · SOR-52</p>
        <h1>Motion Baseline for Prompt Library</h1>
        <p>
          A dark-mode cinematic baseline using GSAP for reveal timing and Motion for expressive card
          interactions.
        </p>
      </section>

      <section className={styles.grid}>
        {CARDS.map((card) => (
          <motion.article
            className={styles.card}
            key={card.title}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
