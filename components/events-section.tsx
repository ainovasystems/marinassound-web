"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Ticket, Clock } from "lucide-react"
import Image from "next/image"

interface Event {
  nombre: string
  fecha: string
  estado: string
  entradas: string
  localizacion: string
  sublocalizacion?: string
  hora?: string
  imagen?: string
}

export function EventsSection() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.eventos) {
          setEvents(data.eventos)
        }
      })
      .catch((error) => console.error("[v0] Error loading events:", error))
  }, [])

  return (
    <section id="eventos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary mb-4 text-balance font-display tracking-wider drop-shadow-[0_0_30px_rgba(0,102,204,0.5)]">
            EVENTOS
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,204,0.4)] group bg-card/60 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Event Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-secondary to-primary/30">
                {event.imagen ? (
                  <Image
                    src={event.imagen || "/placeholder.svg"}
                    alt={event.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary/30" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  {event.estado === "entradas disponibles" ? (
                    <span className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold font-display shadow-lg">
                      Entradas Disponibles
                    </span>
                  ) : (
                    <span className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-bold font-display shadow-lg">
                      Próximamente
                    </span>
                  )}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-display tracking-wide">
                  {event.nombre}
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-foreground/80">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-medium">{event.localizacion}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">
                      {event.fecha
                        ? new Date(event.fecha).toLocaleDateString("es-ES", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        : "Próximamente"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{event.hora || "Por confirmar"}</span>
                  </div>
                </div>

                {event.entradas ? (
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-lg hover:shadow-xl transition-all font-display tracking-wide"
                  >
                    <a
                      href={event.entradas}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Ticket className="w-5 h-5" />
                      Comprar Entradas
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="outline"
                    disabled
                    className="w-full border-2 border-muted text-muted-foreground font-bold text-lg bg-transparent font-display tracking-wide"
                  >
                    Próximamente
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
