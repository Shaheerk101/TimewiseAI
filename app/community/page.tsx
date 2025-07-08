"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MessageCircle,
  ThumbsUp,
  Search,
  Plus,
  Users,
  BookOpen,
  HelpCircle,
  TrendingUp,
  Clock,
  Star,
  Award,
} from "lucide-react"

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Questions", "Study Tips", "Resources", "Achievements", "General"]

  const posts = [
    {
      id: 1,
      type: "question",
      title: "How to solve integration by parts problems?",
      content: "I'm struggling with integration by parts in calculus. Can someone explain the LIATE rule?",
      author: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Mathematics",
      timestamp: "2 hours ago",
      likes: 15,
      replies: 8,
      solved: false,
      tags: ["calculus", "integration", "help"],
    },
    {
      id: 2,
      type: "tip",
      title: "My study schedule that got me a 4.0 GPA",
      content: "Here's the exact study routine I used to maintain a perfect GPA. Time blocking was a game changer!",
      author: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Study Tips",
      timestamp: "5 hours ago",
      likes: 42,
      replies: 23,
      solved: null,
      tags: ["study-tips", "time-management", "gpa"],
    },
    {
      id: 3,
      type: "resource",
      title: "Free Python programming resources compilation",
      content: "I've compiled the best free resources for learning Python. Links and descriptions included!",
      author: "Emma Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Computer Science",
      timestamp: "1 day ago",
      likes: 67,
      replies: 15,
      solved: null,
      tags: ["python", "programming", "resources", "free"],
    },
    {
      id: 4,
      type: "achievement",
      title: "Just got accepted to MIT! 🎉",
      content: "After 2 years of using TimeWiseAI, I finally got into my dream school. Thank you community!",
      author: "Alex Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      subject: "Achievements",
      timestamp: "2 days ago",
      likes: 156,
      replies: 34,
      solved: null,
      tags: ["achievement", "college", "success"],
    },
  ]

  const topContributors = [
    { name: "Dr. Sarah Wilson", points: 2840, badge: "Expert", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Mike Chen", points: 2650, badge: "Helper", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Emma Johnson", points: 2420, badge: "Mentor", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Alex Davis", points: 2180, badge: "Scholar", avatar: "/placeholder.svg?height=32&width=32" },
  ]

  const getPostIcon = (type: string) => {
    switch (type) {
      case "question":
        return <HelpCircle className="h-5 w-5 text-blue-600" />
      case "tip":
        return <BookOpen className="h-5 w-5 text-green-600" />
      case "resource":
        return <Star className="h-5 w-5 text-purple-600" />
      case "achievement":
        return <Award className="h-5 w-5 text-yellow-600" />
      default:
        return <MessageCircle className="h-5 w-5 text-gray-600" />
    }
  }

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.type === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Community</h1>
            <p className="text-lg text-gray-600">Connect, learn, and grow together with fellow students</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">12,847</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">3,456</div>
              <div className="text-sm text-gray-600">Discussions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <HelpCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">89%</div>
              <div className="text-sm text-gray-600">Questions Answered</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Community Support</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search discussions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={post.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {getPostIcon(post.type)}
                            <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                            {post.type === "question" && post.solved && (
                              <Badge className="bg-green-100 text-green-800">Solved</Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{post.timestamp}</div>
                        </div>

                        <p className="text-gray-600 mb-3">{post.content}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <span className="font-medium text-gray-900">{post.author}</span>
                              <Badge variant="outline">{post.subject}</Badge>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {post.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" className="text-gray-600">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {post.replies}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Ask Question
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Share Study Tip
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Star className="h-4 w-4 mr-2" />
                    Share Resource
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Award className="h-4 w-4 mr-2" />
                    Celebrate Achievement
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                  Top Contributors
                </CardTitle>
                <CardDescription>This month's most helpful members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                          index === 0
                            ? "bg-yellow-500"
                            : index === 1
                              ? "bg-gray-400"
                              : index === 2
                                ? "bg-orange-500"
                                : "bg-gray-300"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={contributor.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs">
                          {contributor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{contributor.name}</div>
                        <div className="text-xs text-gray-500">{contributor.points} points</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {contributor.badge}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium">Sarah</span> answered a calculus question
                      <div className="text-xs text-gray-500">5 minutes ago</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium">Mike</span> shared a study resource
                      <div className="text-xs text-gray-500">12 minutes ago</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium">Emma</span> created a new study group
                      <div className="text-xs text-gray-500">1 hour ago</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium">Alex</span> earned the "Helper" badge
                      <div className="text-xs text-gray-500">2 hours ago</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Be respectful and helpful</li>
                  <li>• Search before asking</li>
                  <li>• Use clear, descriptive titles</li>
                  <li>• Tag your posts appropriately</li>
                  <li>• Give back to the community</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
