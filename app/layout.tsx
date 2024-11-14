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
  title: "Healthy | A Healthy Lifestyle",
  description: "A Healthy Lifestyle",
  icons: {
    icon: [
      { url: "/favicon/favicon.icon", type: "image/x-icon" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    // apple: [
    //   {
    //     url: "/favicon/apple-touch-icon.png",
    //     sizes: "180x180",
    //     type: "image/png",
    //   },
    // ],
    // other: [
    //   {
    //     rel: "mask-icon",
    //     url: "/favicon/maskable-512x512.png",
    //   },
    // ],
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
