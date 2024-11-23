import { Badge } from "@/components/ui/badge"
import { Mail, Phone } from 'lucide-react'

import { nombresDeCategorias, skills } from '@/lib/utils'
import HerramientaClubCard from "./components/herramienta-club-card"
import VinileroCard from "./components/vinilero-card"

export default function Home() {
  return (
    <div className="flex mx-auto min-h-screen bg-background">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Mis Proyectos</h1>
        <div className="flex flex-col gap-4">
          <VinileroCard />
          <HerramientaClubCard />
        </div>
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {<div className="space-y-4">
              {Object.entries(skills).map(([category, technologies]) => (
                <div key={category} className="space-y-2">
                  <h3 className="text-sm font-semibold capitalize">{
                    nombresDeCategorias[category as keyof typeof nombresDeCategorias]
                  }</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            }
          </div>
        </section>
        <footer className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <div className="flex flex-col space-x-2">
            <a href="mailto:dante.dylangg@gmail.com" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>dante.dylangg@gmail.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </footer>
      </main>
    </div>
  )
}