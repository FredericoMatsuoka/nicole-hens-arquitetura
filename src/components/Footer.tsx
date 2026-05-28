"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--color-nh-card)", borderTop: "1px solid var(--color-nh-border)", padding: "4rem 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}
        >
          {/* Logo */}
          <div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 400, letterSpacing: "0.04em", color: "var(--color-nh-text)", lineHeight: 1 }}>
              Nicole Hens
            </div>
            <div className="label" style={{ fontSize: "0.55rem", marginTop: "3px", letterSpacing: "0.2em" }}>Arquitetura</div>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", gap: "2.5rem" }}>
            {[
              { label: "Sobre",    href: "#sobre"    },
              { label: "Projetos", href: "#projetos" },
              { label: "Servicos", href: "#servicos" },
              { label: "Contato",  href: "#contato"  },
            ].map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="label"
                style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--color-nh-muted)" }}
                whileHover={{ color: "var(--color-nh-gold)" }}
                transition={{ duration: 0.2 }}
              >
                {l.label}
              </motion.a>
            ))}
          </div>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/nicolehens.arquitetura"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--color-nh-muted)" }}
            whileHover={{ color: "var(--color-nh-gold)" }}
            transition={{ duration: 0.2 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span className="label" style={{ fontSize: "0.58rem" }}>@nicolehens.arquitetura</span>
          </motion.a>
        </motion.div>

        {/* Bottom line */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--color-nh-border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span className="label" style={{ fontSize: "0.55rem", color: "rgba(232,226,214,0.25)", letterSpacing: "0.12em" }}>
            Nicole Hens Arquitetura {ano} — Catalao, Goias
          </span>
          <span className="label" style={{ fontSize: "0.55rem", color: "rgba(232,226,214,0.2)", letterSpacing: "0.12em" }}>
            Espacos que refletem historias, valores e emocoes.
          </span>
        </div>
      </div>
    </footer>
  );
}
