"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY    = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} style={{ position: "relative", height: "100svh", minHeight: "600px", overflow: "hidden" }}>

      {/* Background image with parallax */}
      <motion.div style={{ position: "absolute", inset: "-10%", y: imgY }}>
        <Image
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1800&q=85"
          alt="Nicole Hens Arquitetura"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(12,11,9,0.55) 0%, rgba(12,11,9,0.3) 50%, rgba(12,11,9,0.75) 100%)" }} />
      </motion.div>

      {/* Gold grain overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")", opacity: 0.4, pointerEvents: "none", zIndex: 2 }} />

      {/* Content */}
      <motion.div
        style={{ position: "relative", zIndex: 3, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 3rem 5rem", y: textY, opacity }}
      >
        <motion.span
          className="label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          style={{ marginBottom: "1.8rem", display: "block" }}
        >
          Arquitetura &amp; Interiores — Catalao, GO
        </motion.span>

        <div style={{ overflow: "hidden" }}>
          <motion.h1
            className="heading-xl"
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: EASE, delay: 0.45 }}
            style={{ fontStyle: "italic" }}
          >
            Espacos que
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            className="heading-xl"
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: EASE, delay: 0.58 }}
          >
            refletem voce.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
          style={{ display: "flex", alignItems: "center", gap: "3rem", marginTop: "3.5rem", flexWrap: "wrap" }}
        >
          <motion.a
            href="#projetos"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.8rem",
              fontFamily: "var(--font-body)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--color-nh-bg)", background: "var(--color-nh-gold)",
              padding: "1rem 2.2rem", borderRadius: "2px",
            }}
            whileHover={{ scale: 1.03, filter: "brightness(1.08)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Ver Projetos
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>

          <motion.a
            href="#contato"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-nh-text)", borderBottom: "1px solid rgba(232,226,214,0.3)", paddingBottom: "2px" }}
            whileHover={{ borderColor: "var(--color-nh-gold)", color: "var(--color-nh-gold)" }}
            transition={{ duration: 0.2 }}
          >
            Fale Comigo
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{ position: "absolute", right: "3rem", bottom: "3rem", zIndex: 4, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "1px", height: "50px", background: "linear-gradient(to bottom, rgba(196,168,130,0), rgba(196,168,130,0.6))" }}
        />
      </motion.div>
    </section>
  );
}
