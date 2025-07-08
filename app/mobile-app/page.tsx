"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Download, Star, Bell, Zap, Users, Brain, Calendar, BookOpen, CheckCircle } from "lucide-react"

export default function MobileAppPage() {
  const features = [
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Never miss a study session or assignment deadline with intelligent reminders",
    },
    {
      icon: Brain,
      title: "Offline AI Assistant",
      description: "Access AI help even without internet connection for emergency study situations",
    },
    {
      icon: Users,
      title: "Social Study Features",
      description: "Chat with study groups, find study buddies nearby, and share progress",
    },
    {
      icon: Calendar,
      title: "Calendar Sync",
      description: "Seamlessly sync with your phone's calendar and get native reminders",
    },
    {
      icon: Zap,
      title: "Quick Actions",
      description: "Scan homework, ask AI questions, and schedule sessions with one tap",
    },
    {
      icon: BookOpen,
      title: "Study on the Go",
      description: "Access all your courses, notes, and study materials anywhere",
    },
  ]

  const screenshots = [
    { title: "Dashboard", description: "Your academic overview at a glance" },
    { title: "AI Chat", description: "Get instant help with any subject" },
    { title: "Study Groups", description: "Connect with classmates easily" },
    { title: "Calendar", description: "Smart scheduling that adapts to you" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Smartphone className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">TimeWiseAI Mobile App</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take your academic success with you everywhere. Study smarter with our powerful mobile app designed for
            students on the go.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white h-14 px-8">
              <Download className="h-5 w-5 mr-2" />
              Download for iOS
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-14 px-8">
              <Download className="h-5 w-5 mr-2" />
              Download for Android
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
              <span className="font-medium">4.8</span>
              <span className="ml-1">App Store Rating</span>
            </div>
            <div className="flex items-center">
              <Download className="h-4 w-4 text-blue-500 mr-1" />
              <span className="font-medium">50K+</span>
              <span className="ml-1">Downloads</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Mobile Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you love about TimeWiseAI, optimized for your mobile device
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See It In Action</h2>
            <p className="text-lg text-gray-600">Beautiful, intuitive design that makes studying enjoyable</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {screenshots.map((screenshot, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <Smartphone className="h-16 w-16 text-purple-400" />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">{screenshot.title}</h3>
                  <p className="text-sm text-gray-600">{screenshot.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Students Love Our Mobile App</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Study Anywhere, Anytime</h3>
                    <p className="text-gray-600 text-sm">
                      Access your courses and AI assistant whether you're on campus, at home, or commuting
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Instant Notifications</h3>
                    <p className="text-gray-600 text-sm">
                      Get reminded about upcoming sessions, assignments, and study group meetings
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Seamless Sync</h3>
                    <p className="text-gray-600 text-sm">
                      All your data syncs perfectly between web and mobile - pick up where you left off
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Offline Capabilities</h3>
                    <p className="text-gray-600 text-sm">
                      Access your notes and some AI features even without internet connection
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-64 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl mx-auto flex items-center justify-center">
                <Smartphone className="h-32 w-32 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8★</div>
              <div className="text-sm text-gray-600">App Store Rating</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-sm text-gray-600">Study Sessions</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Study Smarter?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already achieving better grades with TimeWiseAI mobile app
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white h-14 px-8">
                <Download className="h-5 w-5 mr-2" />
                Download for iOS
              </Button>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 h-14 px-8">
                <Download className="h-5 w-5 mr-2" />
                Download for Android
              </Button>
            </div>
            <p className="text-sm text-purple-200 mt-4">Free download • No credit card required</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
