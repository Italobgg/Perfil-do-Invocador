// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Summoner Insights',
  description: 'Find summoner data and match history',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Adicionando a classe 'dark' para forçar o tema escuro
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}