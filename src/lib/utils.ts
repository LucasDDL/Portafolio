import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const projects = [
  {
    id: 1,
    name: "Vinilero",
    description: "Una aplicación para gestionar tu colección de vinilos",
    image: "/placeholder.svg?height=100&width=200",
    technologies: ["React", "Node.js", "PrismaORM", "MySQL", "TailwindCSS", "Next.js", "Shadcn/ui"]
  },
  {
    id: 2,
    name: "Herramienta Club",
    description: "Características para Usuarios\nSistema de Autenticación\nInicio de sesión mediante Telegram\nVerificación en dos pasos\nPerfil de usuario personalizado\nSistema de onboarding para nuevos usuarios",
    image: "/placeholder.svg?height=100&width=200",
    technologies: [
      "Next.js",
      "React",
      "TailwindCSS",
      "React Query",
      "Prisma",
      "PostgreSQL",
      "Firebase",
      "Telegram API",
      "JWT",
      "Vercel",
      "Firebase Admin",
      "Shadcn/ui"
    ]
  },
  {
    id: 3,
    name: "Proyecto 3",
    description: "Descripción breve del proyecto 3",
    image: "/placeholder.svg?height=100&width=200",
    technologies: ["Angular", "MongoDB"]
  },
]

export const frameworks = ["Next.js", "React", "Node.js", "PrismaORM", "TailwindCSS", "Nest.js"]

export const skills = {
  frontend: [
    "Next.js",
    "React",
    "TailwindCSS",
    "Shadcn/ui",
    "React Query",
    "Optimistic UI"
  ],
  backend: [
    "Prisma ORM",
    "PostgreSQL",
    "Next.js API Routes"
  ],
  autenticacion: [
    "Auth.js",
    "Firebase Auth",
    "Firebase Admin SDK",
    "JWT",
    "OAuth"
  ],
  apisYServicios: [
    "Discogs API",
    "Cloudinary"
  ],
  caracteristicasAdicionales: [
    "Fuse.js"
  ],
  infraestructura: [
    "Vercel"
  ]
}

export const nombresDeCategorias = {
  frontend: "Frontend:",
  backend: "Backend:",
  apisYServicios: "APIs y Servicios:",
  caracteristicasAdicionales: "Características Adicionales:",
  autenticacion: "Autenticación:",
  infraestructura: "Infraestructura:"
}

// ... existing code ...