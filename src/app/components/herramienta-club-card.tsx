import { projects } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function HerramientaClubCard() {
  return (
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
    </Card>
  )
}