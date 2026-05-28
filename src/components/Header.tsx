"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const links = [
  { label: "Sobre",    href: "#sobre"    },
  { label: "Projetos", href: "#projetos" },
  { label: "Servicos", href: "#servicos" },
  { label: "Processo", href: "#processo" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: "var(--header-h)",
        display: "flex", alignItems: "center",
        padding: "0 3rem",
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(10,10,10,0.08)" : "1px solid transparent",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Logo NH */}
      <a href="/" style={{ flex: 1, display: "flex", alignItems: "center", gap: "0.9rem" }}>
        {/* NH monogram */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <text x="0" y="28" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="30" fontWeight="600" fill="#0A0A0A">N</text>
            <text x="16" y="28" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="30" fontWeight="300" fill="#0A0A0A">H</text>
          </svg>
          <div style={{ width: 1, height: 32, background: "rgba(10,10,10,0.2)" }} />
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: 400, letterSpacing: "0.18em", color: "#0A0A0A", textTransform: "uppercase", lineHeight: 1 }}>
            Nicole Hens
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: "0.55rem", fontWeight: 400, letterSpacing: "0.25em", color: "rgba(10,10,10,0.45)", textTransform: "uppercase", marginTop: "3px" }}>
            Arquitetura
          </div>
        </div>
      </a>

      {/* Nav desktop */}
      <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="nav-desktop">
        {links.map((l) => (
          <motion.a
            key={l.href}
            href={l.href}
            style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(10,10,10,0.5)" }}
            whileHover={{ color: "#0A0A0A" }}
            transition={{ duration: 0.15 }}
          >
            {l.label}
          </motion.a>
        ))}
        <motion.a
          href="#contato"
          style={{
            fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase",
            padding: "0.65rem 1.75rem", border: "1px solid #0A0A0A",
            color: "#0A0A0A",
          }}
          whileHover={{ backgroundColor: "#0A0A0A", color: "#FFFFFF" }}
          transition={{ duration: 0.2 }}
        >
          Contato
        </motion.a>
      </nav>

      {/* Hamburger mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-mobile-btn"
        aria-label="Menu"
        style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "none" }}
      >
        <div style={{ width: "22px", display: "flex", flexDirection: "column", gap: "5px" }}>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={menuOpen ? (i === 0 ? { rotate: 45, y: 7 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -7 }) : { rotate: 0, y: 0, opacity: 1 }}
              style={{ display: "block", height: "1px", background: "#0A0A0A" }}
              transition={{ duration: 0.25 }}
            />
          ))}
        </div>
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{ position: "fixed", top: "var(--header-h)", left: 0, right: 0, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", padding: "2rem 1.5rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem", borderBottom: "1px solid rgba(10,10,10,0.08)" }}
          >
            {[...links, { label: "Contato", href: "#contato" }].map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A0A0A" }}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
