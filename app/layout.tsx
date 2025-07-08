import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TimeWise AI - Smart Learning Platform",
  description:
    "Transform your academic journey with AI-powered tutoring, smart scheduling, and collaborative learning tools.",
  generator: "v0.dev",
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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  <Brain className="h-8 w-8 text-blue-600" />
                  <span className="text-xl font-bold text-gray-900">TimeWise AI</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <Link
                    href="/dashboard"
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/ai-assistant"
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    AI Tutor
                  </Link>
                  <Link
                    href="/calendar"
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Calendar
                  </Link>
                  <Link
                    href="/study-groups"
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Study Groups
                  </Link>
                  <Link
                    href="/grades"
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Grades
                  </Link>
                </div>
              </div>

              {/* Desktop Auth Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Link href="/dashboard">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex flex-col space-y-4 mt-8">
                      <Link
                        href="/dashboard"
                        className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/ai-assistant"
                        className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                      >
                        AI Tutor
                      </Link>
                      <Link
                        href="/calendar"
                        className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Calendar
                      </Link>
                      <Link
                        href="/study-groups"
                        className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Study Groups
                      </Link>
                      <Link
                        href="/grades"
                        className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Grades
                      </Link>
                      <div className="border-t pt-4 space-y-2">
                        <Button variant="ghost" className="w-full justify-start">
                          Sign In
                        </Button>
                        <Link href="/dashboard" className="block">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
