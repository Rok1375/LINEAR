import type { Metadata } from "next";
import PrototypeMotionSection from "@/components/prototypes/prototype-motion-section";

export const metadata: Metadata = {
  title: "Motion Systems Lab | Prompt Library",
  description: "A sandbox environment to validate high-performance viewport animations, micro-interaction states, and typography choreography.",
};

export default function MotionPrototypePage() {
  return (
    <main style={{ paddingBottom: "40px" }}>
      <PrototypeMotionSection />
    </main>
  );
}
