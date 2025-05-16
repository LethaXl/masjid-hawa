import type { Metadata } from "next";
import { Lateef, Amiri, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const displayFont = Lateef({
  variable: "--font-display",
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
});

const bodyFont = Libre_Baskerville({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const accentFont = Amiri({
  variable: "--font-accent",
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Masjid Hawa - Scarborough Mosque",
  description: "Masjid Hawa is a mosque serving the Muslim community in Scarborough with daily prayers, Quran classes, and community services.",
  keywords: ["Masjid", "Mosque", "Scarborough", "Prayer Times", "Quran Classes", "Islamic Center"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
