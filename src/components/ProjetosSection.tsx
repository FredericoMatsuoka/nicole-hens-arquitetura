"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const categorias = ["Todos", "Residencial", "Interiores", "Comercial"];

const projetos = [
  { id: 1, titulo: "Casa Serenidade",    categoria: "Residencial", local: "Catalao, GO", area: "340m²", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", destaque: true  },
  { id: 2, titulo: "Apartamento Ouro",   categoria: "Interiores",  local: "Goiania, GO", area: "180m²", img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80", destaque: false },
  { id: 3, titulo: "Residencia Cerrado", categoria: "Residencial", local: "Catalao, GO", area: "520m²", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", destaque: false },
  { id: 4, titulo: "Suite Zen",          categoria: "Interiores",  local: "Catalao, GO", area: "45m²",  img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", destaque: false },
  { id: 5, titulo: "Studio Minimal",     categoria: "Comercial",   local: "Catalao, GO", area: "90m²",  img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", destaque: false },
  { id: 6, titulo: "Casa Horizonte",     categoria: "Residencial", local: "Ipameri, GO", area: "410m²", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", destaque: false },
];

export default function ProjetosSection() {
  const [ativo, setAtivo] = useState("Todos");
  const [hover, setHover] = useState<number | null>(null);

  const filtrados = ativo === "Todos" ? projetos : projetos.filter((p) => p.categoria === ativo);

  return (
    <section id="projetos" style={{ padding: "10rem 0", background: "var(--color-nh-surface)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem", flexWrap: "wrap", gap: "2rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="label" style={{ display: "block", marginBottom: "1rem" }}>Portfolio</span>
            <h2 className="heading-lg">Nossos Projetos</h2>
          </motion.div>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}
          >
            {categorias.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setAtivo(cat)}
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase",
                  padding: "0.55rem 1.4rem", borderRadius: "2px", cursor: "pointer",
                  border: ativo === cat ? "1px solid var(--color-nh-gold)" : "1px solid var(--color-nh-border)",
                  background: ativo === cat ? "rgba(196,168,130,0.1)" : "transparent",
                  color: ativo === cat ? "var(--color-nh-gold)" : "var(--color-nh-muted)",
                  transition: "all 0.2s",
                }}
                whileHover={{ borderColor: "rgba(196,168,130,0.5)" }}
                whileTap={{ scale: 0.96 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={ativo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
            className="projetos-grid"
          >
            {filtrados.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: EASE, delay: i * 0.08 }}
                onHoverStart={() => setHover(p.id)}
                onHoverEnd={() => setHover(null)}
                style={{
                  position: "relative", overflow: "hidden", borderRadius: "2px", cursor: "pointer",
                  aspectRatio: p.destaque ? "auto" : "3/4",
                  gridColumn: p.destaque ? "span 2" : "span 1",
                  gridRow: p.destaque ? "span 2" : "span 1",
                  border: "1px solid var(--color-nh-border)",
                }}
              >
                <motion.div
                  style={{ position: "absolute", inset: 0 }}
                  animate={{ scale: hover === p.id ? 1.05 : 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image src={p.img} alt={p.titulo} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
                </motion.div>

                {/* Overlay */}
                <motion.div
                  style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,9,0.9) 0%, rgba(12,11,9,0.2) 60%, transparent 100%)" }}
                  animate={{ opacity: hover === p.id ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Info */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem" }}>
                  <span className="label" style={{ fontSize: "0.58rem", marginBottom: "0.6rem", display: "block" }}>{p.categoria}</span>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: p.destaque ? "2.2rem" : "1.4rem", fontWeight: 400, color: "var(--color-nh-text)", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                    {p.titulo}
                  </h3>
                  <motion.div
                    style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
                    animate={{ opacity: hover === p.id ? 1 : 0, y: hover === p.id ? 0 : 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="body-text" style={{ fontSize: "0.8rem" }}>{p.local}</span>
                    <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--color-nh-gold)" }} />
                    <span className="body-text" style={{ fontSize: "0.8rem" }}>{p.area}</span>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: "5rem" }}
        >
          <motion.a
            href="#contato"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-nh-gold)", borderBottom: "1px solid rgba(196,168,130,0.3)", paddingBottom: "2px" }}
            whileHover={{ borderColor: "var(--color-nh-gold)" }}
          >
            Iniciar meu projeto
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projetos-grid { grid-template-columns: 1fr !important; }
          .projetos-grid article { grid-column: span 1 !important; grid-row: span 1 !important; aspect-ratio: 4/3 !important; }
        }
      `}</style>
    </section>
  );
}
