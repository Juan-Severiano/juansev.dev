import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata: Metadata = {
  title: "Francisco Juan Severiano — iOS & Full-Stack Developer",
  description: "Desenvolvedor iOS e Full-Stack especializado em React, React Native, Swift e Node.js.",
  metadataBase: new URL("https://juansev.dev"),
  openGraph: {
    title: "Francisco Juan — Full-stack & native product engineering",
    description: "Produtos nativos, mobile, web e infraestrutura de produção.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
