import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wayra Tours | Vive Lambayeque - Turismo Responsable en Perú',
  description: 'Descubre Lambayeque con Wayra Tours: circuito turístico Full Day que incluye Museo Tumbas Reales de Sipán, playas paradisíacas, cataratas y naturaleza. Turismo responsable y auténtico.',
  generator: 'v0.app',
  keywords: [
    'Wayra Tours',
    'Lambayeque turismo',
    'turismo Perú',
    'Sipán',
    'arqueología Moche',
    'playas Lambayeque',
    'circuito turístico',
    'viajes aventura',
    'turismo responsable',
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
