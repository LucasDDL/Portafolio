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
    technologies: ["React", "Node.js", "PrismaORM", "MySQL", "TailwindCSS", "Next.js"]
  },
  {
    id: 2,
    name: "Proyecto 2",
    description: "Descripción breve del proyecto 2",
    image: "/placeholder.svg?height=100&width=200",
    technologies: ["Vue", "Express"]
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

export const skills = ["HTML", "CSS", "TypeScript", "JavaScript", "React", "Node.js", "PrismaORM", "TailwindCSS", "Next.js", "Git"]
