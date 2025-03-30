import { Analytics } from "@vercel/analytics/react";
import { type Viewport, type Metadata } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";

import { SiteConfig } from "~/features/config/config";

import "~/features/style/main.css";

const fredokaFont = Fredoka({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const nunitoSansFont = Nunito_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SiteConfig.baseUrl),
  title: {
    default: SiteConfig.title,
    template: `%s | ${SiteConfig.title}`,
  },
  description: SiteConfig.description,
  alternates: {
    canonical: SiteConfig.baseUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    url: SiteConfig.baseUrl,
    title: SiteConfig.title,
    description: SiteConfig.description,
    images: [{ url: "/share-image.png" }],
  },

  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon-96x96.png", sizes: "96x96" }],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredokaFont.variable} ${nunitoSansFont.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
