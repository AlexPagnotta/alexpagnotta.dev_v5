import type { Metadata } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredokaFont.variable} ${nunitoSansFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
