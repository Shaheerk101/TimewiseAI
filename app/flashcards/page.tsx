"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  RotateCcw,
  Plus,
  Search,
  Star,
  Users,
  Brain,
  Zap,
  Target,
  Clock,
  BookOpen,
  TrendingUp,
  Award,
} from "lucide-react"

export default function FlashcardsPage() {
  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("All")

  const subjects = ["All", "Mathematics", "Science", "History", "Languages", "Computer Science"]

  const flashcardSets = [
    {
      id: 1,
      title: "Calculus Derivatives",
      subject: "Mathematics",
      cards: 45,
      studied: 32,
      mastered: 28,
      creator: "Sarah Chen",
      rating: 4.9,
      users: 15420,
      lastStudied: "2 hours ago",
      difficulty: "Advanced",
      description: "Master derivative rules and applications",
    },
    {
      id: 2,
      title: "Spanish Vocabulary - Level 1",
      subject: "Languages",
      cards: 120,
      studied: 85,
      mastered: 67,
      creator: "Maria Rodriguez",
      rating: 4.8,
      users: 8930,
      lastStudied: "Yesterday",
      difficulty: "Beginner",
      description: "Essential Spanish words for beginners",
    },
    {
      id: 3,
      title: "Chemistry Periodic Table",
      subject: "Science",
      cards: 118,
      studied: 95,
      mastered: 89,
      creator: "Dr. Johnson",
      rating: 4.9,
      users: 12340,
      lastStudied: "3 days ago",
      difficulty: "Intermediate",
      description: "Elements, symbols, and properties",
    },
    {
      id: 4,
      title: "World War II Timeline",
      subject: "History",
      cards: 67,
      studied: 23,
      mastered: 15,
      creator: "Prof. Williams",
      rating: 4.7,
      users: 5670,
      lastStudied: "Never",
      difficulty: "Intermediate",
      description: "Key events and dates of WWII",
    },
  ]

  const sampleCards = [
    {
      question: "What is the derivative of x²?",
      answer: "2x",
      explanation: "Using the power rule: d/dx(xⁿ) = n·xⁿ⁻¹, so d/dx(x²) = 2·x²⁻¹ = 2x",
    },
    {
      question: "What is the chain rule?",
      answer: "d/dx[f(g(x))] = f'(g(x)) · g'(x)",
      explanation: "The chain rule is used to differentiate composite functions",
    },
    {
      question: "What is the derivative of sin(x)?",
      answer: "cos(x)",
      explanation: "The derivative of sine is cosine",
    },
  ]

  const filteredSets = flashcardSets.filter((set) => {
    const matchesSearch =
      set.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      set.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "All" || set.subject === selectedSubject
    return matchesSearch && matchesSubject
  })

  const handleCardFlip = () => {
    setShowAnswer(!showAnswer)
  }

  const handleNextCard = () => {
    setCurrentCard((prev) => (prev + 1) % sampleCards.length)
    setShowAnswer(false)
  }

  const handlePrevCard = () => {
    setCurrentCard((prev) => (prev - 1 + sampleCards.length) % sampleCards.length)
    setShowAnswer(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Smart Flashcards</h1>
            <p className="text-lg text-gray-600">AI-powered spaced repetition for better retention</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
            <Plus className="h-4 w-4 mr-2" />
            Create Set
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4 text-center">
              <Brain className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">1,247</div>
              <div className="text-xs opacity-90">Cards Studied</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">89%</div>
              <div className="text-xs opacity-90">Retention Rate</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">23</div>
              <div className="text-xs opacity-90">Study Streak</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">15</div>
              <div className="text-xs opacity-90">Sets Mastered</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Flashcard Practice */}
          <div className="lg:col-span-2">
            {/* Current Study Session */}
            <Card className="mb-6 border-2 border-purple-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-purple-600" />
                    Quick Study: Calculus Derivatives
                  </CardTitle>
                  <Badge className="bg-purple-100 text-purple-800">
                    {currentCard + 1} of {sampleCards.length}
                  </Badge>
                </div>
                <Progress value={((currentCard + 1) / sampleCards.length) * 100} className="mt-2" />
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div
                    className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-6 min-h-[200px] flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={handleCardFlip}
                  >
                    <div className="text-center">
                      {!showAnswer ? (
                        <div>
                          <div className="text-lg font-semibold text-gray-800 mb-4">
                            {sampleCards[currentCard].question}
                          </div>
                          <div className="text-sm text-gray-500">Click to reveal answer</div>
                        </div>
                      ) : (
                        <div>
                          <div className="text-xl font-bold text-blue-600 mb-4">{sampleCards[currentCard].answer}</div>
                          <div className="text-sm text-gray-600 border-t pt-4">
                            {sampleCards[currentCard].explanation}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button variant="outline" onClick={handlePrevCard}>
                      Previous
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="outline" onClick={handleCardFlip}>
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Flip
                      </Button>
                      {showAnswer && (
                        <>
                          <Button variant="outline" className="text-red-600 border-red-200 bg-transparent">
                            Hard
                          </Button>
                          <Button variant="outline" className="text-yellow-600 border-yellow-200 bg-transparent">
                            Good
                          </Button>
                          <Button variant="outline" className="text-green-600 border-green-200 bg-transparent">
                            Easy
                          </Button>
                        </>
                      )}
                    </div>
                    <Button onClick={handleNextCard}>Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Search and Filters */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search flashcard sets..."
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
                        className={selectedSubject === subject ? "bg-purple-600 hover:bg-purple-700" : ""}
                      >
                        {subject}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flashcard Sets */}
            <div className="space-y-4">
              {filteredSets.map((set) => (
                <Card key={set.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{set.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{set.description}</p>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{set.subject}</Badge>
                          <Badge variant="outline">{set.difficulty}</Badge>
                          <div className="flex items-center text-sm text-gray-600">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            {set.rating}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="h-4 w-4 mr-1" />
                            {set.users.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">{set.cards}</div>
                        <div className="text-xs text-gray-500">cards</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Progress</div>
                        <Progress value={(set.studied / set.cards) * 100} className="mt-1" />
                        <div className="text-xs text-gray-500 mt-1">
                          {set.studied}/{set.cards} studied
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Mastered</div>
                        <Progress value={(set.mastered / set.cards) * 100} className="mt-1" />
                        <div className="text-xs text-gray-500 mt-1">
                          {set.mastered}/{set.cards} mastered
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Last Studied</div>
                        <div className="text-sm font-medium mt-1">{set.lastStudied}</div>
                        <div className="text-xs text-gray-500">by {set.creator}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        {set.cards - set.studied > 0 && (
                          <span className="text-orange-600 font-medium">
                            {set.cards - set.studied} cards due for review
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Preview
                        </Button>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          <BookOpen className="h-4 w-4 mr-1" />
                          Study Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Review */}
            <Card className="border-2 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-800">
                  <Clock className="h-5 w-5 mr-2" />
                  Due for Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">47</div>
                  <div className="text-sm text-orange-800 mb-4">Cards ready to review</div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Zap className="h-4 w-4 mr-2" />
                    Start Review
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Study Streak */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">🔥</div>
                <div className="text-2xl font-bold text-green-600 mb-1">23 Days</div>
                <div className="text-sm text-green-800 font-medium mb-2">Study Streak!</div>
                <div className="text-xs text-green-700">Longest streak: 45 days</div>
              </CardContent>
            </Card>

            {/* Study Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Study Modes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Brain className="h-4 w-4 mr-2" />
                    Flashcards
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Target className="h-4 w-4 mr-2" />
                    Learn Mode
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Zap className="h-4 w-4 mr-2" />
                    Speed Review
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Test Mode
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Cards Studied</span>
                    <span className="font-medium">342</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Accuracy</span>
                    <span className="font-medium text-green-600">87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Study Time</span>
                    <span className="font-medium">4.2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">New Cards</span>
                    <span className="font-medium">28</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
