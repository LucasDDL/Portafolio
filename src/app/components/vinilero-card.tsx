import { projects } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function VinileroCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          Vinilero
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <div className="space-y-4">
            <p>
              Aplicación web para coleccionistas de vinilos que permite gestionar y organizar colecciones de discos,
              realizar búsquedas en la base de datos de Discogs, y compartir colecciones con otros usuarios.
              Incluye características avanzadas de gestión y seguimiento de inversiones en vinilos.
            </p>
            <div className="flex flex-wrap gap-2">
              {projects.map((project) => (
                project.name === "Vinilero" && (
                  project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))
                )
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Características Principales</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Gestión de Colecciones: </span>
                  Crear, editar y eliminar colecciones personalizadas de vinilos
                </li>
                <li>
                  <span className="font-medium">Integración con Discogs: </span>
                  Búsqueda y agregado de vinilos desde la base de datos de Discogs
                </li>
                <li>
                  <span className="font-medium">Seguimiento de Inversiones: </span>
                  Control de precios y valor total de la colección
                </li>
                <li>
                  <span className="font-medium">Gestión de Fotos: </span>
                  Subida y visualización de fotos personalizadas de los vinilos
                </li>
                <li>
                  <span className="font-medium">Notas Personalizadas: </span>
                  Agregar y gestionar notas para cada vinilo
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Funcionalidades de Usuario</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Autenticación: </span>
                  Inicio de sesión seguro con Google
                </li>
                <li>
                  <span className="font-medium">Búsqueda y Filtrado: </span>
                  Sistema avanzado de búsqueda por título, artista y género
                </li>
                <li>
                  <span className="font-medium">Compartir Colecciones: </span>
                  Opción para hacer públicas las colecciones y compartirlas
                </li>
                <li>
                  <span className="font-medium">Interfaz Adaptativa: </span>
                  Diseño responsive y modo oscuro/claro
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Tecnologías Utilizadas</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Frontend: </span>
                  Next.js 14, React, TailwindCSS, Shadcn/ui
                </li>
                <li>
                  <span className="font-medium">Backend: </span>
                  Next.js API Routes, Prisma ORM, PostgreSQL
                </li>
                <li>
                  <span className="font-medium">Autenticación: </span>
                  NextAuth.js con proveedor de Google
                </li>
                <li>
                  <span className="font-medium">APIs Externas: </span>
                  Discogs API, Cloudinary para almacenamiento de imágenes
                </li>
                <li>
                  <span className="font-medium">Características Adicionales: </span>
                  React Query para gestión de estado, Fuse.js para búsqueda avanzada
                </li>
              </ul>
            </div>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  )
}