"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "motion/react";
import styles from "./prototype-motion-section.module.css";

interface CardData {
  id: string;
  title: string;
  category: string;
  description: string;
  demoType: "dots" | "progress" | "spring" | "feedback";
}

const CARDS: CardData[] = [
  {
    id: "scroll-choreography",
    category: "Choreography",
    title: "Scroll choreography",
    description:
      "Fade, stagger, and scale. Viewport-anchored timelines that trigger smooth, progressive reveals of complex prompt structures without layout shifts.",
    demoType: "dots",
  },
  {
    id: "prompt-workflow-polish",
    category: "Workflow",
    title: "Prompt workflow polish",
    description:
      "Frictionless micro-animations for prompt saving, generation loading, and refinement. Fluid layout morphing when expanding metadata blocks.",
    demoType: "progress",
  },
  {
    id: "interaction-states",
    category: "Tactility",
    title: "Interaction states",
    description:
      "Subtle and organic spring-driven feedback on click, hover, and drag. Provides instant response and natural deceleration curves.",
    demoType: "spring",
  },
  {
    id: "review-ready-output",
    category: "Feedback",
    title: "Review-ready output",
    description:
      "Polished entrance triggers for optimized prompts, diff visualizers that highlight additions, and clean export checkmarks.",
    demoType: "feedback",
  },
];

export default function PrototypeMotionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [progressVal, setProgressVal] = useState(0);
  const [springVal, setSpringVal] = useState(0);
  const [dotsActive, setDotsActive] = useState<boolean[]>(Array(9).fill(false));
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  const handleCardClick = (cardId: string) => {
    const nextDemo = activeDemo === cardId ? null : cardId;
    setActiveDemo(nextDemo);

    if (nextDemo !== "scroll-choreography") {
      setDotsActive(Array(9).fill(false));
    }

    if (nextDemo === "prompt-workflow-polish") {
      setProgressVal(0);
    }

    if (nextDemo !== "interaction-states") {
      setSpringVal(0);
    }
  };

  useEffect(() => {
    if (activeDemo === "scroll-choreography") {
      const interval = setInterval(() => {
        setDotsActive((prev) => {
          const next = [...prev];
          const randIdx = Math.floor(Math.random() * next.length);
          next[randIdx] = !next[randIdx];
          return next;
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [activeDemo]);

  useEffect(() => {
    if (activeDemo === "prompt-workflow-polish") {
      const interval = setInterval(() => {
        setProgressVal((v) => {
          if (v >= 100) {
            return 0;
          }

          return v + 2;
        });
      }, 40);

      return () => clearInterval(interval);
    }
  }, [activeDemo]);

  useEffect(() => {
    if (activeDemo === "interaction-states") {
      let phase = 0;
      const interval = setInterval(() => {
        phase += 0.1;
        const spring = Math.sin(phase) * Math.exp(-phase * 0.1) * 30;
        setSpringVal(spring);

        if (phase > 20) {
          phase = 0;
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [activeDemo]);

  const triggerFeedback = () => {
    if (isDemoRunning) return;

    setIsDemoRunning(true);
    setFeedbackSuccess(true);

    setTimeout(() => {
      setFeedbackSuccess(false);
      setIsDemoRunning(false);
    }, 2000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set([`.gsap-reveal-title`, `.gsap-reveal-lead`, `.gsap-reveal-card`], {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.fromTo(headerRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 });

      tl.fromTo(
        `.gsap-reveal-title`,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.6",
      );

      tl.fromTo(
        `.gsap-reveal-lead`,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6",
      );

      tl.fromTo(
        `.gsap-reveal-card`,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.8,
        },
        "-=0.5",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderDemo = (type: string) => {
    switch (type) {
      case "dots":
        return (
          <div className={styles.demoDotsGrid}>
            {dotsActive.map((active, idx) => (
              <div
                key={idx}
                className={`${styles.demoDot} ${active ? styles.demoDotActive : ""}`}
              />
            ))}
          </div>
        );
      case "progress":
        return (
          <div className={styles.demoProgressContainer}>
            <div className={styles.demoProgressBarWrapper}>
              <div className={styles.demoProgressBar} style={{ width: `${progressVal}%` }} />
            </div>
            <span className={styles.demoProgressText}>
              Refining prompts... {Math.round(progressVal)}%
            </span>
          </div>
        );
      case "spring":
        return (
          <div className={styles.demoSpringContainer}>
            <div
              className={styles.demoSpringObject}
              style={{ transform: `translateX(${springVal}px)` }}
            />
            <span className={styles.demoSpringLabel}>Dampened Spring Curve</span>
          </div>
        );
      case "feedback":
        return (
          <div className={styles.demoFeedbackContainer}>
            <button type="button" onClick={triggerFeedback} className={styles.demoFeedbackButton}>
              {feedbackSuccess ? "Optimizations Applied" : "Execute Refinement"}
            </button>
            <div className={styles.demoFeedbackIndicator}>
              {feedbackSuccess && <span className={styles.demoFeedbackPulse} />}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className={styles.motionPrototypeWrapper}>
      <header ref={headerRef} className={styles.motionHeader}>
        <div className={styles.badge}>
          <span className={styles.badgeLine} />
          Motion Systems Lab
        </div>

        <h1 className={`${styles.title} gsap-reveal-title`}>
          Motion systems for <br />
          <span className={styles.gradientText}>creative production</span>
        </h1>

        <p className={`${styles.lead} gsap-reveal-lead`}>
          A custom prototype route within the <code>prompt-library</code> environment to validate
          dark luxury styling, fluid viewport triggers, micro-animations, and spring-driven
          interaction physics.
        </p>
      </header>

      <section ref={cardsRef} className={styles.cardsGrid}>
        {CARDS.map((card, idx) => (
          <motion.div
            key={card.id}
            className={`${styles.card} gsap-reveal-card`}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(243, 198, 35, 0.45)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), 0 0 15px rgba(243, 198, 35, 0.08)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCardClick(card.id)}
            aria-expanded={activeDemo === card.id}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleCardClick(card.id);
              }
            }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardIndex}>0{idx + 1}</span>
              <span className={styles.cardCategory}>{card.category}</span>
            </div>

            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>

            <div className={styles.demoSection}>
              {activeDemo === card.id ? (
                <div className={styles.demoBoxActive}>{renderDemo(card.demoType)}</div>
              ) : (
                <div className={styles.demoBoxPlaceholder}>
                  <span className={styles.demoPlaceholderText}>Click to activate preview</span>
                  <div className={styles.demoPlayIcon}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.cardActionLabel}>
                {activeDemo === card.id ? "Minimize Preview" : "Launch Sandbox"}
              </span>
              <svg
                className={`${styles.cardArrow} ${activeDemo === card.id ? styles.cardArrowActive : ""}`}
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </motion.div>
        ))}
      </section>

      <motion.section
        className={styles.workbench}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className={styles.workbenchContent}>
          <p className={styles.workbenchLabel}>Motion Sandbox Workbench</p>
          <h2 className={styles.workbenchTitle}>Configure & Test Physics</h2>
          <p className={styles.workbenchText}>
            This environment isolates component-level mechanics before integrating them into the
            primary prompt workspace. Interactive sandbox components demonstrate spring stiffness,
            mass, and viewport boundaries.
          </p>

          <div className={styles.workbenchControls}>
            <div className={styles.controlGroup}>
              <span className={styles.controlName}>GSAP Status:</span>
              <span className={styles.controlStatusActive}>Active (Entrance)</span>
            </div>
            <div className={styles.controlGroup}>
              <span className={styles.controlName}>Motion:</span>
              <span className={styles.controlStatusActive}>Active (Physics Engine)</span>
            </div>
            <div className={styles.controlGroup}>
              <span className={styles.controlName}>Reduced Motion:</span>
              <span className={styles.controlStatusDynamic}>Auto-Fallback</span>
            </div>
          </div>
        </div>

        <div className={styles.workbenchDemo}>
          <motion.div
            className={styles.ambientOrb}
            animate={{
              scale: [1, 1.15, 0.9, 1],
              rotate: [0, 90, 180, 270, 360],
              x: [0, 20, -10, 0],
              y: [0, -15, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className={styles.workbenchVisualizer}>
            <span className={styles.visualizerOrbText}>Active Physics Orb</span>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
