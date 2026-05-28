"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const servicos = [
  {
    num: "01",
    titulo: "Arquitetura Residencial",
    desc: "Projetos completos de casas e apartamentos, do conceito à entrega. Cada espaço é planejado para refletir a identidade e o estilo de vida do cliente.",
    itens: ["Projeto arquitetônico", "Aprovação em prefeitura", "Acompanhamento de obra", "Interiores integrados"],
  },
  {
    num: "02",
    titulo: "Design de Interiores",
    desc: "Curadoria completa de ambientes internos — layout, mobiliário, iluminação, revestimentos e objetos de arte. Harmonioso, funcional e absolutamente seu.",
    itens: ["Layout e fluxo espacial", "Especificação de materiais", "Projeto de iluminação", "Styling e ambientação"],
  },
  {
    num: "03",
    titulo: "Consultoria e Reforma",
    desc: "Para quem quer renovar sem sair do lugar. Análise crítica do espaço existente com soluções precisas, dentro do orçamento e do prazo.",
    itens: ["Análise do espaço atual", "Proposta de intervenção", "Gestão de fornecedores", "Acompanhamento executivo"],
  },
];

export default function ServicosSection() {
  return (
    <section id="servicos" style={{ padding: "10rem 0", background: "var(--color-nh-bg)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ marginBottom: "6rem" }}
        >
          <span className="label" style={{ display: "block", marginBottom: "1rem" }}>O que ofereço</span>
          <h2 className="heading-lg" style={{ maxWidth: "500px" }}>Serviços<br /><em>sob medida.</em></h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {servicos.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: EASE, delay: i * 0.1 }}
              style={{ display: "grid", gridTemplateColumns: "8rem 1fr 1fr", gap: "4rem", alignItems: "start", padding: "3.5rem 0", borderTop: "1px solid var(--color-nh-border)" }}
              className="servico-row"
            >
              {/* Number */}
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "3.5rem", fontWeight: 300, color: "rgba(10,10,10,0.18)", lineHeight: 1 }}>
                {s.num}
              </div>

              {/* Title + desc */}
              <div>
                <h3 className="heading-md" style={{ marginBottom: "1rem" }}>{s.titulo}</h3>
                <p className="body-text">{s.desc}</p>
              </div>

              {/* List */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {s.itens.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                    <span style={{ width: "20px", height: "1px", background: "rgba(10,10,10,0.35)", flexShrink: 0 }} />
                    <span className="body-text" style={{ fontSize: "0.9rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <div style={{ height: "1px", background: "var(--color-nh-border)" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .servico-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
