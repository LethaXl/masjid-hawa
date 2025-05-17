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
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicon_io/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicon_io/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
