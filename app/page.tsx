import { HeroSection } from "@/components/hero-section"
import { LineupSection } from "@/components/lineup-section"
import { EventsSection } from "@/components/events-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mariñas Sound 2025 | Festival Betanzos y Hermo | Alvama Ice",
  description:
    "Descubre el line-up completo de Mariñas Sound 2025. Alvama Ice confirmado. Festival de música urbana en Betanzos (6 diciembre) y Hermo. Compra entradas.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <LineupSection />
      <EventsSection />
      <Footer />
    </main>
  )
}
