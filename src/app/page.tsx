'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

// Datos de ejemplo - reemplaza con tus propios datos
const projects = [
  { id: 1, name: "Proyecto 1", description: "Descripción breve del proyecto 1", image: "/placeholder.svg?height=100&width=200", technologies: ["React", "Node.js"] },
  { id: 2, name: "Proyecto 2", description: "Descripción breve del proyecto 2", image: "/placeholder.svg?height=100&width=200", technologies: ["Vue", "Express"] },
  { id: 3, name: "Proyecto 3", description: "Descripción breve del proyecto 3", image: "/placeholder.svg?height=100&width=200", technologies: ["Angular", "MongoDB"] },
]

const skills = ["JavaScript", "React", "Node.js", "Python", "SQL", "Git"]

export default function Home() {
  return (
    <div className="flex mx-auto min-h-screen bg-background">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Mis Proyectos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image src={project.image} alt={project.name} width={200} height={100} className="mb-4 rounded-md" />
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline">{skill}</Badge>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <div className="flex flex-col space-y-2">
            <Link href="mailto:tu@email.com" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>tu@email.com</span>
            </Link>
            <Link href="tel:+1234567890" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (234) 567-890</span>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  )
}