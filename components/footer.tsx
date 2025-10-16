"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Instagram, Mail } from "lucide-react"

interface ContactData {
  email: string
  instagram: string
}

interface FooterData {
  contacto: ContactData
  urlEntradasGeneral: string
  urlAutorizacionMenores: string
}

export function Footer() {
  const [data, setData] = useState<FooterData | null>(null)

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setData({
          contacto: jsonData.contacto,
          urlEntradasGeneral: jsonData.urlEntradasGeneral,
          urlAutorizacionMenores: jsonData.urlAutorizacionMenores,
        })
      })
      .catch((error) => console.error("[v0] Error loading footer data:", error))
  }, [])

  return (
    <footer
      id="contacto"
      className="bg-secondary/80 backdrop-blur-md text-secondary-foreground py-12 md:py-16 border-t border-primary/20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/design-mode/LOGO%20MARIN%CC%83AS%20SOUND%20BLANCO%20SIN%20FONDO.png"
              alt="Mariñas Sound Logo"
              width={200}
              height={100}
              className="h-20 w-auto mb-4 drop-shadow-lg"
            />
            <p className="text-foreground/70 text-center md:text-left font-medium">
              El festival de música más esperado de Galicia
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-bold text-xl mb-4 font-display tracking-wide text-primary">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#lineup"
                  className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                >
                  Line-up
                </a>
              </li>
              <li>
                <a
                  href="#eventos"
                  className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                >
                  Eventos
                </a>
              </li>
              {data?.urlEntradasGeneral && (
                <li>
                  <a
                    href={data.urlEntradasGeneral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                  >
                    Entradas
                  </a>
                </li>
              )}
              {data?.urlAutorizacionMenores && (
                <li>
                  <a
                    href={data.urlAutorizacionMenores}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                  >
                    Autorización de Menores
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-xl mb-4 font-display tracking-wide text-primary">Contacto</h4>
            {data?.contacto && (
              <div className="space-y-4">
                <a
                  href={`mailto:${data.contacto.email}`}
                  className="flex items-center justify-center md:justify-end gap-2 text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                >
                  <Mail className="w-5 h-5" />
                  {data.contacto.email}
                </a>
                <a
                  href={data.contacto.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-end gap-2 text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                >
                  <Instagram className="w-5 h-5" />
                  @marinas.sound
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/10 pt-8 text-center text-foreground/50 text-sm">
          <p className="font-medium">&copy; {new Date().getFullYear()} Mariñas Sound. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
