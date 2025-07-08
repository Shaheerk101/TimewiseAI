import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SyllabusUpload } from "@/components/syllabus-upload"
import { Brain, Calendar, Users, BookOpen, Target, Zap, Star, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">🚀 AI-Powered Learning Platform</Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Master Your Studies with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TimeWise AI
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Transform your academic journey with personalized AI tutoring, smart scheduling, and collaborative learning
            tools designed for modern students.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Learning Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/ai-assistant">
              <Button size="lg" variant="outline">
                Try AI Tutor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Syllabus Upload Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upload Your Syllabus</h2>
            <p className="text-lg text-gray-600">
              Get started by uploading your course syllabus. Our AI will analyze it and create a personalized study plan
              just for you.
            </p>
          </div>
          <SyllabusUpload />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Excel</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools powered by AI to help you study smarter, not harder.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/ai-assistant">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <Brain className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>AI Tutor</CardTitle>
                  <CardDescription>
                    Get instant help with personalized explanations and step-by-step solutions
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/calendar">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <Calendar className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>Smart Scheduling</CardTitle>
                  <CardDescription>
                    AI-optimized study schedules that adapt to your learning pace and deadlines
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/study-groups">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <Users className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle>Study Groups</CardTitle>
                  <CardDescription>Connect with classmates and form collaborative study groups</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/flashcards">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-orange-600 mb-4" />
                  <CardTitle>Smart Flashcards</CardTitle>
                  <CardDescription>Spaced repetition flashcards that adapt to your memory patterns</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/grades">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <Target className="h-12 w-12 text-red-600 mb-4" />
                  <CardTitle>Goal Tracking</CardTitle>
                  <CardDescription>Set and track academic goals with detailed progress analytics</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/ai-assistant">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                  <CardTitle>Quick Answers</CardTitle>
                  <CardDescription>Instant answers to your questions with AI-powered explanations</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Grade Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Questions Answered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by Students Worldwide</h2>
            <p className="text-lg text-gray-600">See how TimeWise AI is transforming academic success</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "TimeWise AI helped me improve my GPA from 2.8 to 3.7 in just one semester. The personalized study
                  plans are incredible!"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Sarah Martinez</div>
                    <div className="text-sm text-gray-500">Computer Science, MIT</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The AI tutor is like having a personal teacher available 24/7. It explains complex concepts in ways I
                  actually understand."
                </p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">James Davis</div>
                    <div className="text-sm text-gray-500">Pre-Med, Stanford</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Study groups feature helped me connect with amazing classmates. We've been studying together for
                  months now!"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Alex Liu</div>
                    <div className="text-sm text-gray-500">Engineering, UC Berkeley</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Academic Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who are already achieving their academic goals with TimeWise AI.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/ai-assistant">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Try AI Tutor
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-blue-200">Free to start • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">TimeWise AI</span>
              </Link>
              <p className="text-gray-400">Empowering students with AI-driven learning tools for academic success.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/ai-assistant" className="hover:text-white transition-colors">
                    AI Tutor
                  </Link>
                </li>
                <li>
                  <Link href="/calendar" className="hover:text-white transition-colors">
                    Smart Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/study-groups" className="hover:text-white transition-colors">
                    Study Groups
                  </Link>
                </li>
                <li>
                  <Link href="/flashcards" className="hover:text-white transition-colors">
                    Flashcards
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/learn" className="hover:text-white transition-colors">
                    Learning Paths
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-white transition-colors">
                    Career Center
                  </Link>
                </li>
                <li>
                  <Link href="/mobile-app" className="hover:text-white transition-colors">
                    Mobile App
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TimeWise AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
