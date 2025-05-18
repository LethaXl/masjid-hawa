import type { Metadata } from "next";
import { Lateef, Amiri, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import ErrorBoundary from '@/components/ErrorBoundary';

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
  metadataBase: new URL("https://masjidhawa.com"),
  title: "Masjid Hawa",
  description: "Masjid Hawa is a mosque serving the Muslim community in Scarborough with daily prayers, Quran classes, and community services. Join us for spiritual growth and community engagement.",
  keywords: [
    "Masjid",
    "Mosque",
    "Scarborough",
    "Prayer Times",
    "Quran Classes",
    "Islamic Center",
    "Muslim Community",
    "Islamic Education",
    "Daily Prayers",
    "Jummah Prayer",
    "Islamic Events",
    "Muslim Community Center"
  ],
  authors: [{ name: "Masjid Hawa" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://masjidhawa.com",
    title: "Masjid Hawa",
    description: "Masjid Hawa is a mosque serving the Muslim community in Scarborough with daily prayers, Quran classes, and community services.",
    siteName: "Masjid Hawa",
    images: [
      {
        url: "/images/main.jpg",
        width: 1200,
        height: 630,
        alt: "Masjid Hawa - Islamic Center in Scarborough"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Masjid Hawa",
    description: "Masjid Hawa is a mosque serving the Muslim community in Scarborough with daily prayers, Quran classes, and community services.",
    images: ["/images/main.jpg"]
  },
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
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
