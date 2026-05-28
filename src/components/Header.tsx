"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: "var(--header-h)",
        display: "flex", alignItems: "center",
        padding: "0 3rem",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
        background: scrolled ? "rgba(12,11,9,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,168,130,0.08)" : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <a href="/" style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px" }}>
        <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 400, letterSpacing: "0.06em", color: "var(--color-nh-text)", lineHeight: 1 }}>
          Nicole Hens
        </span>
        <span className="label" style={{ fontSize: "0.58rem", letterSpacing: "0.25em" }}>Arquitetura</span>
      </a>

      {/* Nav desktop */}
      <nav style={{ display: "flex", gap: "3rem", alignItems: "center" }} className="nav-desktop">
        {links.map((l) => (
          <motion.a
            key={l.href}
            href={l.href}
            className="label"
            style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "var(--color-nh-muted)", transition: "color 0.2s" }}
            whileHover={{ color: "var(--color-nh-gold)" }}
          >
            {l.label}
          </motion.a>
        ))}
        <motion.a
          href="#contato"
          style={{
            fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase",
            padding: "0.65rem 1.6rem", border: "1px solid rgba(196,168,130,0.35)", borderRadius: "2px",
            color: "var(--color-nh-gold)", transition: "all 0.2s",
          }}
          whileHover={{ borderColor: "rgba(196,168,130,0.8)", backgroundColor: "rgba(196,168,130,0.06)" }}
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
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} style={{ display: "block", height: "1px", background: "var(--color-nh-text)" }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} style={{ display: "block", height: "1px", background: "var(--color-nh-text)" }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} style={{ display: "block", height: "1px", background: "var(--color-nh-text)" }} />
        </div>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{ position: "fixed", top: "var(--header-h)", left: 0, right: 0, background: "rgba(12,11,9,0.97)", backdropFilter: "blur(20px)", padding: "2rem 3rem 3rem", display: "flex", flexDirection: "column", gap: "2rem", borderBottom: "1px solid rgba(196,168,130,0.1)" }}
        >
          {[...links, { label: "Contato", href: "#contato" }].map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="label" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-nh-text)" }}>{l.label}</a>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
