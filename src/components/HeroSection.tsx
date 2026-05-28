"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const textOpacity = useTransform(scrollY, [0, 320], [1, 0]);
  const textY       = useTransform(scrollY, [0, 320], [0, -28]);

  return (
    <section style={{ position: "relative", background: "#FFFFFF" }}>
      {/* Text overlay */}
      <motion.div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          zIndex: 10,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          pointerEvents: "none",
          opacity: textOpacity,
          y: textY,
        }}
      >
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: EASE }}
          style={{ paddingBottom: "5rem", pointerEvents: "auto" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span style={{ width: 32, height: 1, background: "#0A0A0A", opacity: 0.4 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A0A0A" }}>
              Arquitetura &amp; Interiores
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <div style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.7, duration: 0.9, ease: EASE }}
                  style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3.5rem, 8vw, 8rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.02em", color: "#0A0A0A" }}
                >
                  Nicole Hens
                </motion.h1>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.p
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.85, duration: 0.9, ease: EASE }}
                  style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3.5rem, 8vw, 8rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.02em", color: "#FFFFFF", fontStyle: "italic" }}
                >
                  Arquitetura
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
            >
              <motion.a
                href="#projetos"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0A0A0A" }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                Ver Projetos
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Clip-path parallax hero — starts full, shrinks on scroll */}
      <SmoothScrollHero
        scrollHeight={750}
        desktopImage="/projects/suite-master.jpg"
        mobileImage="/projects/quarto-casal.jpg"
        initialClipPercentage={22}
        finalClipPercentage={78}
      />
    </section>
  );
}
