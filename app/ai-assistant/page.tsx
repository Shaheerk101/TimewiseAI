"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Brain, Send, BookOpen, Calculator, Lightbulb, Clock } from "lucide-react"

export default function AIAssistantPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm your AI study assistant. I can help you with homework, explain concepts, create study guides, and more. What would you like to work on today?",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!message.trim()) return

    const userMessage = { role: "user", content: message }
    setMessages((prev) => [...prev, userMessage])
    const currentMessage = message
    setMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/ai/study-help", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentMessage }),
      })

      if (!response.ok) {
        throw new Error("Failed to get AI response")
      }

      const data = await response.json()

      const aiResponse = {
        role: "assistant",
        content: data.response || "I'm sorry, I couldn't process that request. Please try again.",
      }

      setMessages((prev) => [...prev, aiResponse])
    } catch (error) {
      console.error("Error:", error)
      const errorMessage = {
        role: "assistant",
        content: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const quickActions = [
    {
      icon: BookOpen,
      title: "Explain Concept",
      description: "Get clear explanations of complex topics",
      prompt: "Can you explain the concept of photosynthesis?",
    },
    {
      icon: Calculator,
      title: "Solve Problem",
      description: "Step-by-step problem solving",
      prompt: "Help me solve this algebra problem: 2x + 5 = 15",
    },
    {
      icon: Lightbulb,
      title: "Study Tips",
      description: "Get personalized study strategies",
      prompt: "Give me study tips for preparing for exams",
    },
    {
      icon: Clock,
      title: "Create Schedule",
      description: "Plan your study time effectively",
      prompt: "Help me create a study schedule for finals week",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Study Assistant</h1>
            <p className="text-gray-600">Get instant help with your studies, 24/7</p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setMessage(action.prompt)}
              >
                <CardContent className="p-4 text-center">
                  <action.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
                  <p className="text-xs text-gray-600">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Chat Interface */}
          <Card className="h-96 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2 text-blue-600" />
                Chat with AI Assistant
              </CardTitle>
              <CardDescription>Ask questions, get explanations, or request study help</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask me anything about your studies..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!message.trim() || isLoading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Subject Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Mathematics</Badge>
                  <Badge variant="outline">Science</Badge>
                  <Badge variant="outline">History</Badge>
                  <Badge variant="outline">Literature</Badge>
                  <Badge variant="outline">Languages</Badge>
                  <Badge variant="outline">Computer Science</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-gray-600">
                  <li>• Explain complex concepts</li>
                  <li>• Solve step-by-step problems</li>
                  <li>• Create study guides</li>
                  <li>• Generate practice questions</li>
                  <li>• Provide study strategies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Available 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Get instant help whenever you need it. No waiting for office hours or scheduling appointments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
