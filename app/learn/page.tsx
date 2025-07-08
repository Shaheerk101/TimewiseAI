"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { BookOpen, Play, Award, Target, Clock, Search, Star, TrendingUp, Brain, CheckCircle } from "lucide-react"

export default function LearnPage() {
  const [selectedSubject, setSelectedSubject] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const subjects = ["All", "Mathematics", "Science", "Computer Science", "Language Arts", "History", "Test Prep"]

  const learningPaths = [
    {
      id: 1,
      title: "Calculus Mastery Path",
      subject: "Mathematics",
      level: "Advanced",
      duration: "8 weeks",
      lessons: 45,
      completed: 12,
      rating: 4.9,
      students: 15420,
      description: "Master calculus from limits to integration with step-by-step guidance",
      skills: ["Limits", "Derivatives", "Integration", "Applications"],
      nextLesson: "Derivative Rules",
      progress: 27,
      badge: "🏆",
    },
    {
      id: 2,
      title: "Python Programming Fundamentals",
      subject: "Computer Science",
      level: "Beginner",
      duration: "6 weeks",
      lessons: 32,
      completed: 8,
      rating: 4.8,
      students: 23150,
      description: "Learn Python from scratch with hands-on projects and real-world applications",
      skills: ["Variables", "Functions", "Loops", "Data Structures"],
      nextLesson: "Working with Lists",
      progress: 25,
      badge: "💻",
    },
    {
      id: 3,
      title: "SAT Math Prep Bootcamp",
      subject: "Test Prep",
      level: "Intermediate",
      duration: "4 weeks",
      lessons: 28,
      completed: 15,
      rating: 4.9,
      students: 8930,
      description: "Boost your SAT math score with targeted practice and proven strategies",
      skills: ["Algebra", "Geometry", "Statistics", "Test Strategy"],
      nextLesson: "Quadratic Equations",
      progress: 54,
      badge: "📊",
    },
    {
      id: 4,
      title: "Chemistry Foundations",
      subject: "Science",
      level: "Beginner",
      duration: "10 weeks",
      lessons: 52,
      completed: 5,
      rating: 4.7,
      students: 12340,
      description: "Build a strong foundation in chemistry with interactive experiments",
      skills: ["Atoms", "Molecules", "Reactions", "Stoichiometry"],
      nextLesson: "Atomic Structure",
      progress: 10,
      badge: "⚗️",
    },
  ]

  const achievements = [
    { name: "First Steps", description: "Complete your first lesson", icon: "🎯", unlocked: true },
    { name: "Week Warrior", description: "Study for 7 consecutive days", icon: "🔥", unlocked: true },
    { name: "Math Master", description: "Complete a math learning path", icon: "🧮", unlocked: false },
    { name: "Social Learner", description: "Join 3 study groups", icon: "👥", unlocked: true },
    { name: "Speed Demon", description: "Complete 10 lessons in one day", icon: "⚡", unlocked: false },
    { name: "Perfect Score", description: "Get 100% on 5 quizzes", icon: "💯", unlocked: false },
  ]

  const filteredPaths = learningPaths.filter((path) => {
    const matchesSearch =
      path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      path.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "All" || path.subject === selectedSubject
    return matchesSearch && matchesSubject
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Personalized Learning</h1>
          <p className="text-lg text-gray-600">AI-curated learning paths designed just for you</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">127</div>
              <div className="text-xs opacity-90">Lessons Completed</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">89%</div>
              <div className="text-xs opacity-90">Average Score</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">42h</div>
              <div className="text-xs opacity-90">Study Time</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs opacity-90">Badges Earned</div>
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
                      placeholder="Search learning paths..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {subjects.map((subject) => (
                      <Button
                        key={subject}
                        variant={selectedSubject === subject ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSubject(subject)}
                        className={selectedSubject === subject ? "bg-blue-600 hover:bg-blue-700" : ""}
                      >
                        {subject}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card className="mb-6 border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-800">
                  <Brain className="h-5 w-5 mr-2" />
                  AI Recommendations for You
                </CardTitle>
                <CardDescription className="text-purple-700">Based on your progress and learning style</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Continue Calculus Path</h3>
                      <Badge className="bg-purple-100 text-purple-800">Recommended</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">You're 27% complete. Next: Derivative Rules</p>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Play className="h-4 w-4 mr-1" />
                      Continue Learning
                    </Button>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Try Physics Fundamentals</h3>
                      <Badge className="bg-blue-100 text-blue-800">New</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Perfect match for your math skills</p>
                    <Button size="sm" variant="outline">
                      <BookOpen className="h-4 w-4 mr-1" />
                      Explore Path
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Paths */}
            <div className="space-y-6">
              {filteredPaths.map((path) => (
                <Card key={path.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{path.badge}</div>
                        <div>
                          <CardTitle className="text-xl mb-1">{path.title}</CardTitle>
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{path.subject}</Badge>
                            <Badge variant="outline">{path.level}</Badge>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="h-4 w-4 mr-1" />
                              {path.duration}
                            </div>
                          </div>
                          <CardDescription>{path.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-medium">{path.rating}</span>
                        </div>
                        <div className="text-sm text-gray-600">{path.students.toLocaleString()} students</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Progress */}
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>
                            Progress: {path.completed}/{path.lessons} lessons
                          </span>
                          <span className="font-medium">{path.progress}% complete</span>
                        </div>
                        <Progress value={path.progress} className="h-2" />
                      </div>

                      {/* Skills */}
                      <div>
                        <div className="text-sm font-medium mb-2">Skills you'll learn:</div>
                        <div className="flex flex-wrap gap-2">
                          {path.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="text-sm text-gray-600">
                          Next: <span className="font-medium">{path.nextLesson}</span>
                        </div>
                        <div className="flex space-x-2">
                          {path.completed > 0 ? (
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              <Play className="h-4 w-4 mr-2" />
                              Continue
                            </Button>
                          ) : (
                            <Button className="bg-green-600 hover:bg-green-700">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Start Learning
                            </Button>
                          )}
                          <Button variant="outline">Preview</Button>
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
            {/* Daily Goal */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Target className="h-5 w-5 mr-2 text-green-600" />
                  Daily Goal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">3/5</div>
                  <div className="text-sm text-gray-600 mb-3">Lessons completed today</div>
                  <Progress value={60} className="mb-3" />
                  <div className="text-xs text-gray-500">2 more to reach your daily goal!</div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Award className="h-5 w-5 mr-2 text-yellow-600" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.slice(0, 4).map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-2 rounded-lg ${
                        achievement.unlocked ? "bg-yellow-50 border border-yellow-200" : "bg-gray-50"
                      }`}
                    >
                      <div className={`text-lg ${achievement.unlocked ? "" : "grayscale opacity-50"}`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div
                          className={`text-sm font-medium ${achievement.unlocked ? "text-yellow-800" : "text-gray-600"}`}
                        >
                          {achievement.name}
                        </div>
                        <div className="text-xs text-gray-500">{achievement.description}</div>
                      </div>
                      {achievement.unlocked && <CheckCircle className="h-4 w-4 text-green-500" />}
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View All Achievements
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Study Streak */}
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">🔥</div>
                <div className="text-2xl font-bold text-orange-600 mb-1">7 Days</div>
                <div className="text-sm text-orange-800 font-medium mb-2">Study Streak!</div>
                <div className="text-xs text-orange-700">Keep it up! You're on fire!</div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                  Weekly Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: "Sarah Chen", points: 2840, rank: 1, isYou: false },
                    { name: "You", points: 2650, rank: 2, isYou: true },
                    { name: "Mike Johnson", points: 2420, rank: 3, isYou: false },
                    { name: "Emma Davis", points: 2180, rank: 4, isYou: false },
                  ].map((user, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-2 rounded ${
                        user.isYou ? "bg-blue-50 border border-blue-200" : ""
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            user.rank === 1
                              ? "bg-yellow-500 text-white"
                              : user.rank === 2
                                ? "bg-gray-400 text-white"
                                : user.rank === 3
                                  ? "bg-orange-500 text-white"
                                  : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {user.rank}
                        </div>
                        <span className={`text-sm ${user.isYou ? "font-semibold text-blue-800" : ""}`}>
                          {user.name}
                        </span>
                      </div>
                      <div className="text-sm font-medium">{user.points} pts</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
