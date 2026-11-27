import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AcquaFit Academia",
  description: "Academia em Dracena e Tupi Paulista.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
