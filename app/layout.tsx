import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mariñas Sound 2025 | Festival de Música Urbana en Galicia | Alvama Ice",
  description: "Festival Mariñas Sound 2025 en Galicia. Disfruta de Alvama Ice y los mejores artistas de música urbana en Betanzos (Pistas do Carregal) y Hermo (Discoteca Hermo). Compra entradas para el mejor festival de rap y trap en Galicia.",
  generator: "Next.js",
  applicationName: "Mariñas Sound",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Mariñas Sound",
    "Mariñas Sound 2025",
    "festival música urbana Galicia",
    "Alvama Ice",
    "Alvama Ice concierto",
    "festival Betanzos",
    "festival Hermo",
    "concierto Betanzos",
    "concierto Hermo",
    "música urbana Galicia",
    "rap Galicia",
    "trap Galicia",
    "festival música Galicia",
    "Pistas do Carregal",
    "Discoteca Hermo",
    "Muimenta",
    "entradas festival Galicia",
    "eventos Betanzos",
    "eventos Hermo",
    "festival diciembre 2025",
    "conciertos Galicia 2025",
    "festival música urbana España",
    "Alvama Ice Betanzos",
    "Alvama Ice Hermo",
    "DJs Galicia",
    "música urbana Coruña",
    "festival Coruña",
    "eventos música Galicia",
  ],
  authors: [{ name: "Mariñas Sound", url: "https://www.instagram.com/marinas.sound/" }],
  creator: "Mariñas Sound",
  publisher: "Mariñas Sound",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.marinassound.es"),
  alternates: {
    canonical: "https://www.marinassound.es",
    languages: {
      "es-ES": "https://www.marinassound.es",
    },
  },
  openGraph: {
    title: "Mariñas Sound 2025 | Festival de Música Urbana en Galicia",
    description: "Festival Mariñas Sound 2025 con Alvama Ice y los mejores artistas de música urbana. Betanzos (Pistas do Carregal) y Hermo (Discoteca Hermo). Compra tus entradas.",
    url: "https://www.marinassound.es",
    type: "website",
    locale: "es_ES",
    siteName: "Mariñas Sound",
    images: [
      {
        url: "/images/design-mode/LOGO%20MARIN%CC%83AS%20SOUND%20SIN%20FONDO.png",
        width: 1200,
        height: 630,
        alt: "Mariñas Sound Festival 2025 - Festival de música urbana en Galicia",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariñas Sound 2025 | Festival de Música Urbana en Galicia",
    description: "Festival Mariñas Sound 2025 con Alvama Ice y los mejores artistas de música urbana en Betanzos y Hermo. Compra tus entradas.",
    images: ["/images/design-mode/LOGO%20MARIN%CC%83AS%20SOUND%20SIN%20FONDO.png"],
    creator: "@marinas.sound",
    site: "@marinas.sound",
  },
  category: "music",
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
              alternateName: "Marinas Sound 2025",
              description: "Festival de música urbana en Galicia con Alvama Ice y los mejores artistas de rap y trap. Evento en Betanzos (Pistas do Carregal) y Hermo (Discoteca Hermo).",
              image: [
                "https://www.marinassound.es/images/design-mode/LOGO%20MARIN%CC%83AS%20SOUND%20SIN%20FONDO.png",
                "https://www.marinassound.es/@antonioaguiin-95.jpg",
                "https://www.marinassound.es/@antonioaguiin-137.jpg"
              ],
              startDate: "2025-12-06T20:00:00+01:00",
              endDate: "2025-12-07T06:00:00+01:00",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              location: [
                {
                  "@type": "Place",
                  name: "Pistas do Carregal",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Pistas do Carregal",
                    addressLocality: "Betanzos",
                    addressRegion: "A Coruña",
                    addressCountry: "ES",
                    postalCode: "15300"
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 43.2809,
                    longitude: -8.2106
                  }
                },
                {
                  "@type": "Place",
                  name: "Discoteca Hermo",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Discoteca Hermo",
                    addressLocality: "Muimenta, Hermo",
                    addressRegion: "A Coruña",
                    addressCountry: "ES"
                  }
                }
              ],
              performer: [
                {
                  "@type": "MusicGroup",
                  name: "Alvama Ice",
                  url: "https://www.instagram.com/alvamaice/",
                  sameAs: [
                    "https://www.instagram.com/alvamaice/",
                    "https://open.spotify.com/artist/alvamaice"
                  ]
                }
              ],
              organizer: {
                "@type": "Organization",
                name: "Mariñas Sound",
                url: "https://www.marinassound.es",
                sameAs: [
                  "https://www.instagram.com/marinas.sound/",
                  "https://www.marinassound.es"
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "marinassound@gmail.com",
                  contactType: "customer service"
                }
              },
              offers: {
                "@type": "Offer",
                url: "https://www.fourvenues.com/marinas-sound/MKEP",
                price: "TBD",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                validFrom: "2025-01-01",
                seller: {
                  "@type": "Organization",
                  name: "FourVenues"
                }
              },
              audience: {
                "@type": "Audience",
                audienceType: "Music fans, Urban music lovers, Young adults"
              },
              keywords: "música urbana, rap, trap, festival, Galicia, Betanzos, Hermo, Alvama Ice"
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
