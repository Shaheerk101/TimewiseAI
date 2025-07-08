import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"
import { Brain, Home, Users, BookOpen, Briefcase, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "TimeWiseAI - AI-Powered Academic Success Platform",
  description: "Transform your academic journey with AI tutoring, smart scheduling, and social features for students.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TimeWiseAI
                </span>
              </Link>

              <div className="hidden md:flex items-center space-x-1">
                <Link
                  href="/dashboard"
                  className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
                <Link
                  href="/learn"
                  className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Learn
                </Link>
                <Link
                  href="/ai-assistant"
                  className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <Brain className="h-4 w-4 mr-2" />
                  AI Assistant
                </Link>
                <Link
                  href="/flashcards"
                  className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <Brain className="h-4 w-4 mr-2" />
                  Flashcards
                </Link>
                <Link
                  href="/peer-tutoring"
                  className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Tutoring
                </Link>
                <Link
                  href="/community"
                  className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Community
                </Link>
                <Link
                  href="/career"
                  className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Career
                </Link>
              </div>

              <div className="md:hidden">
                <button className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
}
