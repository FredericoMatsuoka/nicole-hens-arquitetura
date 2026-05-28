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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/*
          Script síncrono: roda ANTES do primeiro paint do browser.
          Esconde o conteúdo da página enquanto a IntroScreen não monta,
          eliminando o flash do conteúdo antes da intro aparecer.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-intro','loading');`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
