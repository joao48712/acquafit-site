import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/content/site";
import "./globals.css";

const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const heavy = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-heavy" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AcquaFit | Academia em Dracena e Tupi Paulista",
    template: "%s | AcquaFit",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    images: ["/images/tupi-paulista/fachada.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1c",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${body.variable} ${heavy.variable} ${serif.variable}`}
    >
      <body>
        <a
          href="#conteudo"
          className="btn btn-primary fixed top-3 left-3 z-[60] -translate-y-24 focus-visible:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
