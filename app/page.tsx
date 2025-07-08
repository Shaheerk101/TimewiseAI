"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Brain, Users, Calendar, BarChart3, Zap, Star, ArrowRight, CheckCircle } from "lucide-react"

export default function HomePage() {
  const [email, setEmail] = useState("")

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🚀 AI-Powered Learning Platform
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Master Your Studies with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>

            <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
              Transform your learning experience with personalized AI tutoring, smart scheduling, and collaborative
              study tools designed for academic success.
            </p>

            <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-blue-600 px-8 py-4 text-lg hover:bg-blue-700">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
                Watch Demo
              </Button>
            </div>

            <p className="text-sm text-gray-500">Free to start • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Everything You Need to Excel</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Comprehensive tools and AI-powered features to help you study smarter, not harder.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group border-0 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-blue-100">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Brain className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">AI Study Assistant</CardTitle>
                <CardDescription>
                  Get instant help with homework, explanations, and personalized study recommendations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-purple-100">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Calendar className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Smart Scheduling</CardTitle>
                <CardDescription>
                  AI-optimized study schedules that adapt to your learning patterns and deadlines.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-green-100">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Study Groups</CardTitle>
                <CardDescription>
                  Connect with classmates, form study groups, and collaborate on projects seamlessly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-orange-100">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Progress Analytics</CardTitle>
                <CardDescription>
                  Track your learning progress with detailed analytics and performance insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-red-100">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Flashcards & Quizzes</CardTitle>
                <CardDescription>
                  Spaced repetition flashcards and adaptive quizzes to reinforce your learning.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-indigo-100">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Resource Library</CardTitle>
                <CardDescription>Access curated study materials, textbooks, and educational resources.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">50K+</div>
              <div className="text-blue-100">Active Students</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">95%</div>
              <div className="text-blue-100">Grade Improvement</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">1M+</div>
              <div className="text-blue-100">Study Sessions</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">24/7</div>
              <div className="text-blue-100">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Loved by Students Worldwide</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              See how TimeWiseAI is transforming the way students learn and succeed.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  "TimeWiseAI helped me improve my GPA from 2.8 to 3.7 in just one semester. The AI tutor is
                  incredible!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100"></div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Sarah Chen</div>
                    <div className="text-sm text-gray-500">Computer Science, MIT</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  "The study groups feature connected me with amazing classmates. We aced our final project together!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-100"></div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Marcus Johnson</div>
                    <div className="text-sm text-gray-500">Business, Stanford</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  "Smart scheduling saved me hours every week. I finally have time for both studies and social life!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100"></div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Emma Rodriguez</div>
                    <div className="text-sm text-gray-500">Pre-Med, Harvard</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Choose Your Learning Path</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Start free and upgrade as you grow. All plans include our core AI features.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <CardDescription className="mt-4">Perfect for getting started with AI-powered learning</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Basic AI study assistant
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />5 study sessions per day
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Basic progress tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Community access
                  </li>
                </ul>
                <Button className="mt-6 w-full bg-transparent" variant="outline">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <CardDescription className="mt-4">Advanced features for serious students</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Advanced AI tutor with subject expertise
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Unlimited study sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Smart scheduling & calendar sync
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Advanced analytics & insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Priority support
                  </li>
                </ul>
                <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700">Start Pro Trial</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Ultimate</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$39</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <CardDescription className="mt-4">Everything you need for academic excellence</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    1-on-1 AI tutoring sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Custom study plans
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    Exam preparation tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                    24/7 priority support
                  </li>
                </ul>
                <Button className="mt-6 w-full bg-purple-600 hover:bg-purple-700">Start Ultimate Trial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Ready to Transform Your Learning?</h2>
          <p className="mb-8 text-xl text-gray-600">
            Join thousands of students who are already achieving better grades with TimeWiseAI.
          </p>

          <form onSubmit={handleEmailSubmit} className="mx-auto flex max-w-md gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </form>

          <p className="mt-4 text-sm text-gray-500">Start your free trial today. No credit card required.</p>
        </div>
      </section>
    </div>
  )
}
