import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/app/components/LayoutWrapper";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  // metadataBase: new URL('https://example-domain.com'),
  title: {
    default: "Healthy | A Healthy Lifestyle Platform",
    template: "%s | Healthy",
  },
  description:
    "Your comprehensive platform for tracking health, fitness, and maintaining a healthy lifestyle with personalized recommendations and tracking tools.",
  keywords: [
    "healthy lifestyle",
    "fitness tracking",
    "health monitoring",
    "diet planning",
    "exercise tracking",
  ],
  authors: [{ name: "Arent Company" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "Healthy | A Healthy Lifestyle Platform",
    description:
      "Your comprehensive platform for tracking health, fitness, and maintaining a healthy lifestyle.",
    siteName: "Healthy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healthy Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy | A Healthy Lifestyle Platform",
    description:
      "Your comprehensive platform for tracking health, fitness, and maintaining a healthy lifestyle.",
    images: ["/og-image.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="font-sans antialiased">
        <Toaster position="top-right" richColors />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
