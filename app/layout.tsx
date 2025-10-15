import type React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ambbar Recepções - Espaço para Eventos e Festas em [Cidade]",
  description:
    "Ambbar Recepções: espaço sofisticado e versátil para casamentos, aniversários, eventos corporativos e celebrações inesquecíveis. Agende sua visita!",
  keywords: [
    "salão de festas",
    "espaço para eventos",
    "casamentos",
    "aniversários",
    "eventos corporativos",
    "ambbar recepções",
    "festas",
    "celebrações",
    "recepções",
  ],
  authors: [{ name: "Ambbar Recepções" }],
  creator: "Ambbar Recepções",
  publisher: "Ambbar Recepções",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ambbar.com.br",
    siteName: "Ambbar Recepções",
    title: "Ambbar Recepções - Onde seus sonhos se tornam realidade",
    description:
      "Um espaço sofisticado e versátil para celebrações inesquecíveis. Casamentos, aniversários, eventos corporativos e muito mais.",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Ambbar Recepções - Espaço para Eventos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambbar Recepções - Onde seus sonhos se tornam realidade",
    description:
      "Um espaço sofisticado e versátil para celebrações inesquecíveis. Casamentos, aniversários, eventos corporativos e muito mais.",
    images: ["/banner.jpg"],
  },
  verification: {
    // Add your verification tokens here when available
    // google: "your-google-site-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
