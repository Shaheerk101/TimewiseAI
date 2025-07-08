"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { SyllabusUpload } from "@/components/syllabus-upload"
import { Brain, BookOpen, Users, Calendar, FileText, ArrowRight, CheckCircle, Star, Crown } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [email, setEmail] = useState("")

  const features = [
    {
      icon: Brain,
      title: "AI Study Assistant",
      description: "Get instant help with homework and study guides across all subjects",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: BookOpen,
      title: "Peer Tutoring",
      description: "Connect with student tutors for affordable 1-on-1 sessions",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Study Groups",
      description: "Join or create study groups with classmates in your courses",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered calendar that helps you balance study time and social activities",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: FileText,
      title: "Syllabus Analysis",
      description: "Upload your syllabus and get an organized study plan for the semester",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      content: "TimeWiseAI helped me organize my coursework and find study partners. My grades improved significantly!",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Mike Chen",
      role: "Business Major",
      content: "The AI assistant is incredibly helpful for understanding complex concepts. Highly recommend!",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Emma Davis",
      role: "Pre-Med Student",
      content: "Found amazing tutors through the platform. The scheduling feature keeps me organized.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TimeWiseAI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                Pricing
              </a>
              <Link href="/peer-tutoring" className="text-gray-600 hover:text-blue-600 transition-colors">
                Find Tutors
              </Link>
              <Link href="/ai-assistant" className="text-gray-600 hover:text-blue-600 transition-colors">
                AI Assistant
              </Link>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Academic Success Made Simple
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
              TimeWiseAI is a comprehensive platform that helps students excel academically through AI-powered study
              assistance, peer tutoring, and smart scheduling tools. Upload your syllabus, get organized, and connect
              with fellow students to achieve your academic goals.
            </p>
            <p className="text-base text-gray-500 mb-8">
              Join thousands of students who are already improving their grades and managing their time more
              effectively.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <Input
                type="email"
                placeholder="Enter your email to get started"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-80 h-12 text-base border-gray-300 focus:border-blue-400"
              />
              <Button
                size="lg"
                className="h-12 px-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Start Free
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Free to start
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Upload Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Get Started in Seconds</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upload your course syllabus and we'll create a personalized study plan for your entire semester
            </p>
          </div>
          <SyllabusUpload />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Everything You Need to Succeed</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed to help students manage their academic workload effectively
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for your academic needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2 border-gray-200 bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Free</CardTitle>
                <div className="text-4xl font-bold text-gray-800 mb-2">$0</div>
                <CardDescription>Perfect for trying out the platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Basic AI assistance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Syllabus upload</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Basic calendar</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Community access</span>
                  </div>
                </div>
                <Link href="/subscribe?plan=free">
                  <Button className="w-full bg-gray-600 hover:bg-gray-700">Get Started Free</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-300 bg-white relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2">$9.99</div>
                <CardDescription>For serious students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Unlimited AI queries</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Advanced scheduling</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Priority tutor matching</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Study analytics</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">All free features</span>
                  </div>
                </div>
                <Link href="/subscribe?plan=pro">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    Upgrade to Pro
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ultimate Plan */}
            <Card className="border-2 border-purple-300 bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold flex items-center justify-center">
                  <Crown className="h-5 w-5 text-purple-500 mr-2" />
                  Ultimate
                </CardTitle>
                <div className="text-4xl font-bold text-purple-600 mb-2">$19.99</div>
                <CardDescription>For academic excellence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Personal study coach</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Advanced AI features</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Custom study plans</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Priority support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">All pro features</span>
                  </div>
                </div>
                <Link href="/subscribe?plan=ultimate">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Go Ultimate
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Students Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Improve Your Grades?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Join thousands of students who are already succeeding with TimeWiseAI
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link href="/subscribe">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-8 text-lg font-semibold">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/peer-tutoring">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 h-12 px-8 text-lg font-semibold bg-transparent"
                >
                  Find a Tutor
                  <BookOpen className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">TimeWiseAI</span>
              </div>
              <p className="text-gray-400">
                Helping students succeed academically through AI-powered tools and peer connections.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/ai-assistant">AI Study Assistant</Link>
                </li>
                <li>
                  <Link href="/peer-tutoring">Peer Tutoring</Link>
                </li>
                <li>
                  <Link href="/calendar">Smart Calendar</Link>
                </li>
                <li>Study Groups</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Discord Community</li>
                <li>Study Tips Blog</li>
                <li>Help Center</li>
                <li>Student Success Stories</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TimeWiseAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
