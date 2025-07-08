"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Brain, Send, BookOpen, Calculator, Beaker, Globe, History, Lightbulb, Sparkles } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  subject?: string
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI tutor. I can help you with math, science, history, and more. What would you like to learn about today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const subjects = [
    { name: "Mathematics", icon: Calculator, color: "bg-blue-500" },
    { name: "Science", icon: Beaker, color: "bg-green-500" },
    { name: "History", icon: History, color: "bg-purple-500" },
    { name: "Literature", icon: BookOpen, color: "bg-orange-500" },
    { name: "Geography", icon: Globe, color: "bg-teal-500" },
  ]

  const quickPrompts = [
    "Explain photosynthesis",
    "Help with algebra",
    "World War II timeline",
    "Shakespeare analysis",
    "Chemistry formulas",
  ]

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/ai/study-help", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputMessage,
          context: "general_tutoring",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get AI response")
      }

      const data = await response.json()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || "I'm sorry, I couldn't process that request. Please try again.",
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickPrompt = (prompt: string) => {
    setInputMessage(prompt)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <Brain className="h-8 w-8 text-blue-600 mr-3" />
                AI Tutor
              </h1>
              <p className="text-gray-600">Get instant help with your studies</p>
            </div>
            <Badge className="bg-green-100 text-green-800">
              <Sparkles className="h-3 w-3 mr-1" />
              Online
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Subjects */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Subjects</CardTitle>
                <CardDescription>Choose a subject to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {subjects.map((subject, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => handleQuickPrompt(`Help me with ${subject.name}`)}
                    >
                      <div className={`w-3 h-3 rounded-full ${subject.color} mr-3`} />
                      {subject.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Prompts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Start</CardTitle>
                <CardDescription>Popular questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start text-xs bg-transparent"
                      onClick={() => handleQuickPrompt(prompt)}
                    >
                      <Lightbulb className="h-3 w-3 mr-2" />
                      {prompt}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>
                      <Brain className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">AI Tutor</CardTitle>
                    <CardDescription>Ready to help you learn</CardDescription>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-1">
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
              </ScrollArea>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask me anything about your studies..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    disabled={isLoading}
                  />
                  <Button onClick={handleSendMessage} disabled={isLoading || !inputMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
