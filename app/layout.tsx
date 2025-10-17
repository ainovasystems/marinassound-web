import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Marinas Sound | Festival de música urbana en Galicia",
  description: "Vive Marinas Sound, el festival de música urbana en Galicia con Alvama Ice y los mejores DJs. Betanzos y La Hermo, verano 2025.",
  generator: "v0.app",
  keywords: [
    "música urbana",
    "festival Galicia",
    "Alvama Ice",
    "Betanzos",
    "La Hermo",
    "rap",
    "trap",
    "DJs",
    "Marinas Sound",
    "Mariñas Sound",
    "festival Betanzos",
    "festival Hermo",
    "concierto Betanzos",
    "concierto Hermo",
    "Pistas do Carregal",
    "Discoteca Hermo",
    "Muimenta",
    "entradas festival Galicia",
    "eventos Betanzos",
    "eventos Hermo",
    "festival diciembre 2025",
    "conciertos Galicia 2025",
  ],
  authors: [{ name: "Mariñas Sound" }],
  alternates: {
    canonical: "https://www.marinassound.es",
  },
  openGraph: {
    title: "Marinas Sound - Festival de música urbana en Galicia",
    description: "Vive la experiencia del festival Marinas Sound con Alvama Ice y los mejores DJs de música urbana en Betanzos y La Hermo.",
    url: "https://www.marinassound.es",
    type: "website",
    locale: "es_ES",
    siteName: "Marinas Sound",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Mariñas Sound Festival 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marinas Sound - Festival de música urbana en Galicia",
    description: "Vive la experiencia del festival Marinas Sound con Alvama Ice y los mejores DJs de música urbana en Betanzos y La Hermo.",
    images: ["/images/logo.png"],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicEvent",
              name: "Mariñas Sound 2025",
              description: "Festival de música urbana en Galicia con Alvama Ice y más artistas",
              image: "/images/logo.png",
              startDate: "2025-12-06",
              endDate: "2025-12-06",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              location: [
                {
                  "@type": "Place",
                  name: "Pistas do Carregal",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Betanzos",
                    addressRegion: "Galicia",
                    addressCountry: "ES",
                  },
                },
                {
                  "@type": "Place",
                  name: "Discoteca Hermo",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Muimenta, Hermo",
                    addressRegion: "Galicia",
                    addressCountry: "ES",
                  },
                },
              ],
              performer: [
                {
                  "@type": "MusicGroup",
                  name: "Alvama Ice",
                },
              ],
              organizer: {
                "@type": "Organization",
                name: "Mariñas Sound",
                url: "https://www.instagram.com/marinas.sound/",
              },
              offers: {
                "@type": "Offer",
                url: "https://forvenues.link/aqui",
                price: "TBD",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                validFrom: "2025-01-01",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
