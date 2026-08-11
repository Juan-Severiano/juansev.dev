import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seu Nome — Designer independente",
  description: "Portfólio de Seu Nome, designer independente no Brasil.",
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
      <body>{children}</body>
    </html>
  );
}
