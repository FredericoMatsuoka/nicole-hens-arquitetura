"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ContatoSection() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section id="contato" style={{ padding: "10rem 0", background: "#FFFFFF" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "start" }} className="contato-grid">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="label" style={{ display: "block", marginBottom: "1rem" }}>Contato</span>
            <div className="divider" style={{ marginBottom: "2.5rem" }} />
            <h2 className="heading-lg" style={{ marginBottom: "1.5rem" }}>
              Vamos criar<br /><em>algo juntos?</em>
            </h2>
            <p className="body-text" style={{ maxWidth: "380px", marginBottom: "4rem" }}>
              Conte-me sobre o seu espaco, o seu estilo de vida e os seus sonhos. O primeiro passo e uma conversa — sem compromisso.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                { label: "E-mail",        value: "nicolehens.arq@gmail.com",    href: "mailto:nicolehens.arq@gmail.com" },
                { label: "WhatsApp",      value: "(64) 99960-7494",             href: "https://wa.me/5564999607494" },
                { label: "Instagram",     value: "@nicolehens.arquitetura",     href: "https://www.instagram.com/nicolehens.arquitetura" },
                { label: "Localizacao",   value: "Catalao, Goias — Brasil",     href: "#" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="label" style={{ fontSize: "0.58rem", marginBottom: "0.4rem", color: "rgba(10,10,10,0.35)" }}>{item.label}</div>
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "rgba(10,10,10,0.65)", borderBottom: "1px solid transparent" }}
                    whileHover={{ color: "#0A0A0A", borderColor: "rgba(10,10,10,0.3)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.value}
                  </motion.a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          >
            {enviado ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: "4rem 3rem", border: "1px solid rgba(10,10,10,0.1)", borderRadius: "2px", textAlign: "center" }}
              >
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", color: "#0A0A0A", marginBottom: "1rem" }}>Obrigada.</div>
                <p className="body-text">Em breve entrarei em contato para conversarmos sobre o seu projeto.</p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {[
                  { name: "nome",     label: "Seu nome",     type: "text",  required: true  },
                  { name: "email",    label: "E-mail",       type: "email", required: true  },
                  { name: "telefone", label: "WhatsApp",     type: "tel",   required: false },
                ].map((field) => (
                  <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    <label htmlFor={field.name} className="label" style={{ fontSize: "0.58rem", color: "rgba(10,10,10,0.35)" }}>{field.label}</label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={form[field.name as keyof typeof form]}
                      onChange={onChange}
                      style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(10,10,10,0.15)", color: "#0A0A0A", fontFamily: "var(--font-body)", fontSize: "0.95rem", padding: "0.8rem 0", outline: "none", transition: "border-color 0.2s" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.15)")}
                    />
                  </div>
                ))}

                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <label htmlFor="mensagem" className="label" style={{ fontSize: "0.58rem", color: "rgba(10,10,10,0.35)" }}>Fale sobre seu projeto</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={form.mensagem}
                    onChange={onChange}
                    style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(10,10,10,0.15)", color: "#0A0A0A", fontFamily: "var(--font-body)", fontSize: "0.95rem", padding: "0.8rem 0", outline: "none", resize: "none", transition: "border-color 0.2s" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.15)")}
                  />
                </div>

                <motion.button
                  type="submit"
                  style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "0.8rem", fontFamily: "var(--font-body)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#FFFFFF", background: "#0A0A0A", padding: "1rem 2.5rem", borderRadius: "2px", border: "none", cursor: "pointer" }}
                  whileHover={{ scale: 1.03, opacity: 0.88 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  Enviar mensagem
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contato-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
}
