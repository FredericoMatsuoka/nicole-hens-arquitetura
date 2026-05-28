"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EXIT_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

function lockScroll() {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

function unlockScroll() {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  // Garante que a página abre no topo da hero, ignorando scroll restoration do browser
  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
}

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Remove o atributo que escondia o conteúdo antes da hydration
    document.documentElement.removeAttribute("data-intro");
    // Desativa scroll restoration automático do browser
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    lockScroll();
    const t = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={unlockScroll}>
      {visible && (
        <motion.div
          key="intro"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.05, ease: EXIT_EASE }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* NH Monogram */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.15 }}
          >
            <svg width="88" height="60" viewBox="0 0 88 60" fill="none">
              <text x="0" y="52" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="56" fontWeight="600" fill="#0A0A0A">N</text>
              <text x="40" y="52" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="56" fontWeight="300" fill="#0A0A0A">H</text>
            </svg>
          </motion.div>

          {/* Expanding line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.6 }}
            style={{
              width: "48px",
              height: "1px",
              background: "rgba(10,10,10,0.2)",
              marginTop: "1.75rem",
              transformOrigin: "left center",
            }}
          />

          {/* Nicole Hens — mask reveal */}
          <div style={{ overflow: "hidden", marginTop: "1.5rem" }}>
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
                fontWeight: 300,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#0A0A0A",
                margin: 0,
              }}
            >
              Nicole Hens
            </motion.p>
          </div>

          {/* Arquitetura */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: EASE, delay: 1.2 }}
            style={{
              fontFamily: "DM Sans, system-ui, sans-serif",
              fontSize: "0.52rem",
              fontWeight: 400,
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.35)",
              marginTop: "0.9rem",
            }}
          >
            Arquitetura &amp; Interiores
          </motion.span>

          {/* Location */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: EASE, delay: 1.6 }}
            style={{
              fontFamily: "DM Sans, system-ui, sans-serif",
              fontSize: "0.48rem",
              fontWeight: 300,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.18)",
              marginTop: "0.5rem",
            }}
          >
            Catalão — Goiás
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
