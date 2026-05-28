import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicole Hens Arquitetura — Catalão, GO",
  description: "Espaços que refletem histórias, valores e emoções. Projetos de Arquitetura e Interiores de alto padrão em Catalão.",
  openGraph: {
    title: "Nicole Hens Arquitetura",
    description: "Espaços que refletem histórias, valores e emoções.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
