import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata: Metadata = {
  title: "Francisco Juan Severiano - Engenheiro de software: IA, backend e mobile",
  description: "Engenheiro de software com foco em IA aplicada, backend (Java, Spring Boot) e mobile (React Native, Swift). Labs públicos de IA com métrica, custo e limites.",
  metadataBase: new URL("https://juansev.dev"),
  openGraph: {
    title: "Francisco Juan - IA aplicada, backend e mobile",
    description: "Labs públicos de IA com número e limites, ERP e SaaS na JVM e apps de delivery em React Native e Swift.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/images/ce-dev.png",
    shortcut: "/images/ce-dev.png",
    apple: "/images/ce-dev.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
