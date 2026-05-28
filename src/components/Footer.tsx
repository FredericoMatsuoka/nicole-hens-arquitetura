"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer style={{ background: "#F7F6F4", borderTop: "1px solid rgba(10,10,10,0.08)", padding: "4rem 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "3rem", alignItems: "start", flexWrap: "wrap" }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 400, letterSpacing: "0.1em", color: "#0A0A0A", textTransform: "uppercase" }}>
                Nicole Hens
              </div>
              <div style={{ width: 1, height: 16, background: "rgba(10,10,10,0.2)" }} />
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.55rem", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(10,10,10,0.4)" }}>
                Arquitetura
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(10,10,10,0.45)", maxWidth: "280px", marginBottom: "1.5rem" }}>
              Espaços que traduzem identidade, elegância e funcionalidade em cada detalhe. Catalão, Goiás.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <motion.a
                href="mailto:nicolehens.arq@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 300, color: "rgba(10,10,10,0.6)" }}
                whileHover={{ color: "#0A0A0A" }}
                transition={{ duration: 0.15 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                nicolehens.arq@gmail.com
              </motion.a>
              <motion.a
                href="https://wa.me/5564999607494"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 300, color: "rgba(10,10,10,0.6)" }}
                whileHover={{ color: "#0A0A0A" }}
                transition={{ duration: 0.15 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                (64) 99960-7494
              </motion.a>
              <motion.a
                href="https://www.instagram.com/nicolehens.arquitetura"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 300, color: "rgba(10,10,10,0.6)" }}
                whileHover={{ color: "#0A0A0A" }}
                transition={{ duration: 0.15 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                @nicolehens.arquitetura
              </motion.a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(10,10,10,0.35)", marginBottom: "1.25rem" }}>
              Menu
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Sobre",    href: "#sobre" },
                { label: "Projetos", href: "#projetos" },
                { label: "Serviços", href: "#servicos" },
                { label: "Processo", href: "#processo" },
                { label: "Contato",  href: "#contato" },
              ].map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 300, color: "rgba(10,10,10,0.5)" }}
                  whileHover={{ color: "#0A0A0A", x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Especialidades */}
          <div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(10,10,10,0.35)", marginBottom: "1.25rem" }}>
              Especialidades
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Projetos Residenciais", "Interiores Corporativos", "Design de Ambientes", "Consultoria de Materiais", "Projetos 3D"].map((s) => (
                <div key={s} style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 300, color: "rgba(10,10,10,0.45)" }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(10,10,10,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 300, color: "rgba(10,10,10,0.3)", letterSpacing: "0.08em" }}>
            Nicole Hens Arquitetura {ano} — Catalão, Goiás
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 300, color: "rgba(10,10,10,0.25)", letterSpacing: "0.05em" }}>
            Espaços que refletem histórias, valores e emoções.
          </span>
        </div>
      </div>
    </footer>
  );
}
