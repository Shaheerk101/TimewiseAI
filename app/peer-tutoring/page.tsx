"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Search, Users, Clock, DollarSign, BookOpen } from "lucide-react"
import Link from "next/link"

const mockTutors = [
  {
    id: 1,
    name: "Sarah Chen",
    subject: "Mathematics",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 25,
    availability: "Available now",
    description: "PhD in Mathematics with 5 years of tutoring experience. Specializes in Calculus and Statistics.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Mike Johnson",
    subject: "Computer Science",
    rating: 4.8,
    reviews: 89,
    hourlyRate: 30,
    availability: "Available today",
    description: "Software engineer and CS tutor. Expert in Python, Java, and algorithms.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Emma Davis",
    subject: "Chemistry",
    rating: 4.9,
    reviews: 156,
    hourlyRate: 28,
    availability: "Available tomorrow",
    description: "Chemistry PhD student with passion for teaching organic and inorganic chemistry.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function PeerTutoringPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("All")

  const subjects = ["All", "Mathematics", "Computer Science", "Chemistry", "Physics", "Biology", "English", "History"]

  const filteredTutors = mockTutors.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "All" || tutor.subject === selectedSubject
    return matchesSearch && matchesSubject
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Tutor</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with experienced student tutors who can help you succeed in your courses
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Expert Tutors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Subjects Covered</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Availability</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$15-40</div>
              <div className="text-sm text-gray-600">Per Hour</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search tutors by name or subject..."
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

        {/* Request Specific Tutor */}
        <Card className="mb-8 border-2 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need a Specific Tutor?</h3>
                <p className="text-blue-700">
                  Request a tutor with specific qualifications or experience. We'll find the perfect match for you.
                </p>
              </div>
              <Link href="/peer-tutoring/request">
                <Button className="bg-blue-600 hover:bg-blue-700">Request Tutor</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Tutors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.map((tutor) => (
            <Card key={tutor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <img src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <CardTitle className="text-lg">{tutor.name}</CardTitle>
                    <Badge variant="outline">{tutor.subject}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{tutor.rating}</span>
                      <span className="text-sm text-gray-500">({tutor.reviews} reviews)</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">${tutor.hourlyRate}/hr</div>
                  </div>

                  <p className="text-sm text-gray-600">{tutor.description}</p>

                  <div className="flex items-center text-sm text-green-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {tutor.availability}
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Book Session</Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg">No tutors found matching your criteria</p>
              <p className="text-sm">Try adjusting your search or subject filter</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
