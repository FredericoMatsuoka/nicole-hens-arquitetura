"use client";

import { motion } from "framer-motion";
import InteractiveSelector from "@/components/ui/interactive-selector";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const projetos = [
  {
    title: "Suite Master",
    description: "Residencia Privada — Quarto principal",
    image: "/projects/suite-master.jpg",
    tag: "Residencial",
  },
  {
    title: "Sala de Estar",
    description: "Residencia Privada — Living integrado",
    image: "/projects/sala-estar.jpg",
    tag: "Interiores",
  },
  {
    title: "Sala de Jantar",
    description: "Residencia Privada — Pedra + madeira",
    image: "/projects/jantar.jpg",
    tag: "Interiores",
  },
  {
    title: "Escritorio",
    description: "Projeto Corporativo — Home office premium",
    image: "/projects/escritorio.jpg",
    tag: "Corporativo",
  },
  {
    title: "Sala TV",
    description: "Residencia Privada — Painel em madeira",
    image: "/projects/sala-tv.jpg",
    tag: "Interiores",
  },
  {
    title: "Suite Casal",
    description: "Residencia Privada — Decoracao aconchegante",
    image: "/projects/suite-2.jpg",
    tag: "Residencial",
  },
];

const galeria = [
  { src: "/projects/sala-sofa.jpg",    alt: "Sala com sofa bege" },
  { src: "/projects/quarto-estudo.jpg", alt: "Quarto com estudo integrado" },
  { src: "/projects/quarto-casal.jpg",  alt: "Suite casal com forro em madeira" },
  { src: "/projects/quarto-tv.jpg",     alt: "Quarto com painel TV" },
  { src: "/projects/quarto-fem.jpg",    alt: "Quarto feminino com espelho" },
  { src: "/projects/quarto-inf.jpg",    alt: "Quarto infantil com bicama" },
  { src: "/projects/moodboard.jpg",     alt: "Moodboard de materiais" },
];

export default function ProjetosSection() {
  return (
    <section id="projetos" style={{ background: "#FFFFFF", paddingBottom: "6rem" }}>
      {/* Section label */}
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: EASE }}
        style={{ paddingTop: "6rem", paddingBottom: "3rem" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          <span className="divider" />
          <span className="label">Projetos Selecionados</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <h2 className="heading-lg" style={{ color: "#0A0A0A" }}>
            Criando espacos<br />
            <em style={{ color: "rgba(10,10,10,0.35)" }}>que inspiram</em>
          </h2>
          <p className="body-text" style={{ maxWidth: "320px" }}>
            Cada projeto e uma historia unica — concebida a partir da identidade e do estilo de vida de cada cliente.
          </p>
        </div>
      </motion.div>

      {/* Interactive selector */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <InteractiveSelector options={projetos} />
      </motion.div>

      {/* Photo grid — remaining images */}
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{ marginTop: "1.5px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5px",
          }}
        >
          {galeria.map((img, i) => (
            <motion.div
              key={i}
              style={{
                position: "relative",
                aspectRatio: i === 0 ? "2 / 1.2" : "1 / 1",
                overflow: "hidden",
                gridColumn: i === 0 ? "span 2" : "span 1",
              }}
              whileHover="hover"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src={img.src}
                alt={img.alt}
                variants={{ hover: { scale: 1.06 } }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.3)", display: "flex", alignItems: "flex-end", padding: "1.25rem" }}
              >
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>
                  {img.alt}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
