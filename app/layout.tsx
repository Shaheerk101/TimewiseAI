import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TimeWiseAI - AI-Powered Learning Platform",
  description:
    "Transform your academic journey with AI tutoring, smart scheduling, and personalized learning paths designed for student success.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">TimeWiseAI</span>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <Link href="/ai-assistant" className="text-gray-600 hover:text-blue-600 transition-colors">
                  AI Assistant
                </Link>
                <Link href="/flashcards" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Flashcards
                </Link>
                <Link href="/peer-tutoring" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Tutoring
                </Link>
                <Link href="/community" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Community
                </Link>
                <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Dashboard
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <Link href="/subscribe">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Upgrade
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
