"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const etapas = [
  { num: "01", titulo: "Escuta",       desc: "Conversa profunda para entender sua historia, rotina, gostos e sonhos. Sem pressa. O projeto comeca aqui." },
  { num: "02", titulo: "Conceito",     desc: "Traducao das suas palavras em imagens, referencias e uma identidade visual unica para o seu projeto." },
  { num: "03", titulo: "Projeto",      desc: "Desenvolvimento tecnico completo: plantas, perspectivas 3D, especificacoes de materiais e orcamentos." },
  { num: "04", titulo: "Realizacao",   desc: "Acompanhamento da execucao, garantindo que cada detalhe do projeto seja fiel ao que foi planejado." },
];

export default function ProcessoSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);

  return (
    <section ref={ref} id="processo" style={{ padding: "10rem 0", background: "#F7F6F4", overflow: "hidden" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }} className="processo-grid">

          {/* Left: steps */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{ marginBottom: "4rem" }}
            >
              <span className="label" style={{ display: "block", marginBottom: "1rem" }}>Como trabalho</span>
              <h2 className="heading-lg"><em>Processo</em><br />transparente.</h2>
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {etapas.map((e, i) => (
                <motion.div
                  key={e.num}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, ease: EASE, delay: i * 0.1 }}
                  style={{ display: "grid", gridTemplateColumns: "4rem 1fr", gap: "1.5rem", padding: "2.5rem 0", borderTop: i === 0 ? "1px solid var(--color-nh-border)" : "none", position: "relative" }}
                >
                  {/* Connecting line */}
                  {i < etapas.length - 1 && (
                    <div style={{ position: "absolute", left: "1.8rem", top: "4.5rem", bottom: "-0.5rem", width: "1px", background: "linear-gradient(to bottom, rgba(10,10,10,0.15), transparent)" }} />
                  )}
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 300, color: "rgba(10,10,10,0.4)", paddingTop: "0.2rem" }}>
                    {e.num}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 400, color: "var(--color-nh-text)", marginBottom: "0.6rem" }}>{e.titulo}</h3>
                    <p className="body-text" style={{ fontSize: "0.9rem" }}>{e.desc}</p>
                  </div>
                </motion.div>
              ))}
              <div style={{ height: "1px", background: "var(--color-nh-border)" }} />
            </div>
          </div>

          {/* Right: image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            style={{ position: "relative", aspectRatio: "3/4", borderRadius: "2px", overflow: "hidden" }}
          >
            <motion.div style={{ position: "absolute", inset: "-10%", scale: imgScale }}>
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=85"
                alt="Processo de projeto"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)" }} />
            </motion.div>

            {/* Quote overlay */}
            <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem", zIndex: 2 }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>
                &ldquo;Um projeto bonito e aquele que voce sente antes de ver.&rdquo;
              </div>
              <div className="label" style={{ marginTop: "1rem", fontSize: "0.58rem", opacity: 0.6 }}>Nicole Hens</div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .processo-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
}
