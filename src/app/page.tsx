'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

import { projects, skills } from '@/lib/utils'

export default function Home() {
  return (
    <div className="flex mx-auto min-h-screen bg-background">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Mis Proyectos</h1>
        <div className="">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>
                Herramienta Club
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <div className="space-y-4">
                  <p>
                    Aplicación web completa para la gestión de un club cannábico, que permite a los usuarios realizar pedidos,
                    gestionar reservas y mantener comunicación directa con los administradores. El sistema incluye autenticación
                    segura mediante Telegram y un completo panel de administración.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects.map((proyect) => (
                      proyect.name === "Herramienta Club" && (
                        proyect.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))
                      )
                    ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Características para Usuarios</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Sistema de Autenticación: </span>
                        Inicio de sesión seguro mediante Telegram, verificación en dos pasos y perfil personalizado
                      </li>
                      <li>
                        <span className="font-medium">Gestión de Perfil:</span>
                        Registro de información personal, actualización de datos de contacto y vinculación con club
                      </li>
                      <li>
                        <span className="font-medium">Sistema de Pedidos: </span>
                        Catálogo de productos por categorías, carrito de compras y seguimiento de pedidos
                      </li>
                      <li>
                        <span className="font-medium">Reservas: </span>
                        Selección de fechas y horarios de entrega, gestión de reservas y cancelaciones
                      </li>
                      <li>
                        <span className="font-medium">Comunicación: </span>
                        Sistema de reportes de errores y comunicación directa con administradores
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Panel de Administración</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Gestión de Usuarios: </span>
                        Control completo de accesos, verificación de usuarios y gestión de permisos
                      </li>
                      <li>
                        <span className="font-medium">Gestión de Productos: </span>
                        CRUD completo de productos, categorías y control de inventario
                      </li>
                      <li>
                        <span className="font-medium">Gestión de Clubes: </span>
                        Administración de clubes, membresías y asignación de usuarios
                      </li>
                      <li>
                        <span className="font-medium">Sistema de Notificaciones: </span>
                        Comunicación automatizada vía Telegram con los usuarios
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tecnologías Utilizadas</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Frontend: </span>
                        Next.js, React, TailwindCSS, React Query
                      </li>
                      <li>
                        <span className="font-medium">Backend: </span>
                        API Routes de Next.js, Prisma ORM, PostgreSQL
                      </li>
                      <li>
                        <span className="font-medium">Autenticación: </span>
                        Firebase Auth, API de Telegram, JWT
                      </li>
                      <li>
                        <span className="font-medium">Infraestructura: </span>
                        Vercel, Firebase Admin SDK
                      </li>
                      <li>
                        <span className="font-medium">Características Adicionales: </span>
                        Tema claro/oscuro, diseño responsive, sistema de búsqueda y filtrado
                      </li>
                    </ul>
                  </div>
                </div>
              </CardDescription>
            </CardContent>
            <CardFooter>

            </CardFooter>
          </Card>

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