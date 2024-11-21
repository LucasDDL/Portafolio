"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { useTheme } from "next-themes";


export function AppSidebar() {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <Sidebar className={`transition-all duration-300 ease-in-out overflow-hidden border-r`}>
        <div className="flex flex-col items-center p-4 space-y-4">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Tu foto"
            width={150}
            height={150}
            className="rounded-full"
          />
          <h2 className="text-xl font-bold">Lucas Caballero</h2>
          <p className="text-center text-sm text-muted-foreground">Desarrollador de Software Junior apasionado por crear soluciones innovadoras</p>
          <div className="flex space-x-2">
            <Link href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost"><Github className="h-4 w-4" /></Button>
            </Link>
            <Link href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost"><Linkedin className=" h-4 w-4" /></Button>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <ModeToggle />
            <span className="text-sm text-muted-foreground ">{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
          </div>
        </div>
      </Sidebar>

    </div>
  )
}
