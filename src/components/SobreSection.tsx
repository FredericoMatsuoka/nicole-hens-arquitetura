"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stats = [
  { value: "42+",  label: "Projetos realizados" },
  { value: "5+",   label: "Anos de experiência" },
  { value: "100%", label: "Personalizados"      },
];

export default function SobreSection() {
  return (
    <section id="sobre" style={{ padding: "10rem 0", background: "var(--color-nh-bg)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }} className="sobre-grid">

          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ position: "relative" }}
          >
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: "2px", overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85"
                alt="Projeto Nicole Hens Arquitetura"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.15) 0%, transparent 60%)" }} />
            </div>

            {/* Accent line */}
            <div style={{ position: "absolute", left: "-2rem", top: "3rem", bottom: "3rem", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(10,10,10,0.2), transparent)" }} />

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
              style={{ position: "absolute", bottom: "-2rem", right: "-2rem", background: "#FFFFFF", border: "1px solid rgba(10,10,10,0.1)", padding: "2rem 2.5rem", borderRadius: "2px" }}
            >
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: 300, color: "#0A0A0A", lineHeight: 1 }}>42+</div>
              <div className="label" style={{ marginTop: "0.5rem", fontSize: "0.6rem" }}>Projetos entregues</div>
            </motion.div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            <span className="label" style={{ display: "block", marginBottom: "1.5rem" }}>Sobre</span>
            <div className="divider" style={{ marginBottom: "2.5rem" }} />

            <h2 className="heading-lg" style={{ marginBottom: "2rem" }}>
              Criando<br /><em>espaços com alma.</em>
            </h2>

            <p className="body-text" style={{ marginBottom: "1.5rem" }}>
              Nicole Hens é arquiteta especializada em projetos residenciais e de interiores de alto padrão. Com sede em Catalão, Goiás, desenvolve projetos que vão além da estética — espaços que contam histórias, refletem valores e despertam emoções.
            </p>
            <p className="body-text" style={{ marginBottom: "3rem" }}>
              Cada projeto é tratado como único: um processo de escuta profunda, curadoria de materiais e atenção absoluta aos detalhes. O resultado é um ambiente que é, acima de tudo, seu.
            </p>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", paddingTop: "2.5rem", borderTop: "1px solid var(--color-nh-border)" }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.3 + i * 0.1 }}
                >
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.4rem", fontWeight: 300, color: "#0A0A0A", lineHeight: 1 }}>{s.value}</div>
                  <div className="label" style={{ marginTop: "0.5rem", fontSize: "0.58rem", color: "var(--color-nh-muted)" }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sobre-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
}
