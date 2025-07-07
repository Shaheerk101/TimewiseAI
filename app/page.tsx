"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Brain, BookOpen, Users, Calendar, FileText, ArrowRight, CheckCircle, Gift, Smartphone, Star, Crown } from 'lucide-react'
import Link from "next/link"

export default function HomePage() {
  const [email, setEmail] = useState("")

  const features = [
    {
      icon: Brain,
      title: "AI Study Assistant",
      description: "Get instant help with homework, explanations, and study guides across all subjects",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: BookOpen,
      title: "Live Tutoring",
      description: "Connect with expert tutors for personalized 1-on-1 sessions",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Friend Groups & Social Calendar",
      description: "Add friends, create groups, and find time to hang out together automatically",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Calendar,
      title: "Smart Adaptive Scheduling",
      description: "AI calendar that adjusts when plans change while keeping friend meetups intact",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: FileText,
      title: "Document Scanner",
      description: "Scan textbooks, notes, and homework with our browser extension",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Full-featured iOS and Android app with social features and notifications",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "High School Senior",
      content:
        "TimeWiseAI helped me raise my GPA from 3.2 to 3.8! The friend groups feature helps me balance study and social time.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Mike Chen",
      role: "College Freshman",
      content:
        "The adaptive calendar is a game-changer! When my exam got moved, it automatically rescheduled everything but kept my friend hangouts.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Emma Davis",
      role: "Graduate Student",
      content: "Love how it finds time for my study group AND my social groups. Perfect work-life balance tool!",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const stats = [
    { number: "50K+", label: "Students Connected" },
    { number: "500+", label: "Expert Tutors" },
    { number: "10K+", label: "Friend Groups" },
    { number: "4.9/5", label: "Student Rating" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                TimeWiseAI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
                Pricing
              </a>
              <a href="#social" className="text-gray-600 hover:text-purple-600 transition-colors">
                Social Features
              </a>
              <Link href="/mobile-app" className="text-gray-600 hover:text-purple-600 transition-colors">
                Download App
              </Link>
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
              <Gift className="h-3 w-3 mr-1" />
              FREE during Finals Period (Dec & May-June)
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Study Smart, Socialize Better
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              AI-powered study assistant + social calendar that finds time for friends.
              <span className="font-semibold text-purple-600"> Balance academics and social life perfectly!</span>
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-80 h-12 text-lg border-purple-200 focus:border-purple-400"
                />
                <Button
                  size="lg"
                  className="h-12 px-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                >
                  Start Learning Free
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Free during finals
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Mobile app included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI tutoring to social scheduling, we've got your academic and social life covered
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
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
      <section id="pricing" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Choose Your Learning Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and upgrade when you're ready. All plans include peer tutoring access!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2 border-gray-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Free</CardTitle>
                <div className="text-4xl font-bold text-gray-800 mb-2">$0</div>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Up to 2 Classes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Basic Calendar</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">100 Monthly AI Queries</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Peer Tutoring Access</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Friend Groups</span>
                  </div>
                </div>
                <Button className="w-full bg-gray-600 hover:bg-gray-700">Get Started Free</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-purple-300 bg-white/80 backdrop-blur-sm relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                <div className="text-4xl font-bold text-purple-600 mb-2">$9.99</div>
                <CardDescription>For serious students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Up to 5 Classes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Advanced Calendar Tools</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">10,000+ Monthly AI Queries</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Calendar Export</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Priority Support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">All Free Features</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>

            {/* Ultimate Plan */}
            <Card className="border-2 border-yellow-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold flex items-center justify-center">
                  <Crown className="h-5 w-5 text-yellow-500 mr-2" />
                  Ultimate
                </CardTitle>
                <div className="text-4xl font-bold text-yellow-600 mb-2">$19.99</div>
                <CardDescription>For academic excellence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Unlimited Classes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Premium Calendar Features</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Unlimited AI Queries</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">Advanced Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">1-on-1 Success Coaching</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">All Pro Features</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                  Go Ultimate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Loved by Students Everywhere
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Student Life?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of students who've found the perfect balance between academics and social life
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 h-14 px-8 text-lg font-semibold">
                Start Free Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 h-14 px-8 text-lg font-semibold bg-transparent"
              >
                Download Mobile App
                <Smartphone className="h-5 w-5 ml-2" />
              </Button>
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
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">TimeWiseAI</span>
              </div>
              <p className="text-gray-400">
                The AI-powered platform that helps students succeed academically while maintaining a healthy social
                life.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>AI Study Assistant</li>
                <li>Live Tutoring</li>
                <li>Social Calendar</li>
                <li>Friend Groups</li>
                <li>Mobile App</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>TikTok</li>
                <li>Discord</li>
                <li>Support</li>
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
