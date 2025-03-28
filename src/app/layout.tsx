import type { Metadata } from "next";
import { montserrat } from "../fonts/Fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karuma © | The revolution of webcomics and web novels",
  description: "Discover Karuma, the Web3 platform where creators have full freedom, earn directly from their audience, and readers support them with unique rewards. Join the new era of digital content.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-light.png",
        href: "/images/favicon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-dark.png",
        href: "/images/favicon-dark.png",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} antialiased bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
