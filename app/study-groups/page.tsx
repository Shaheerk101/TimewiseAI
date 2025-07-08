"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Search, Plus, Clock, MapPin, BookOpen, Calendar, Star } from "lucide-react"

export default function StudyGroupsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("All")

  const studyGroups = [
    {
      id: 1,
      name: "Calculus Study Squad",
      subject: "Mathematics",
      course: "MATH 152",
      members: 6,
      maxMembers: 8,
      nextMeeting: "Today 4:00 PM",
      location: "Library Room 204",
      description: "Weekly calculus problem-solving sessions. We focus on integration techniques and applications.",
      organizer: "Sarah Chen",
      rating: 4.8,
      isJoined: false,
    },
    {
      id: 2,
      name: "CS Algorithms Group",
      subject: "Computer Science",
      course: "CS 301",
      members: 4,
      maxMembers: 6,
      nextMeeting: "Tomorrow 6:00 PM",
      location: "Online (Zoom)",
      description: "Preparing for algorithms exam. We solve LeetCode problems and discuss time complexity.",
      organizer: "Mike Johnson",
      rating: 4.9,
      isJoined: true,
    },
    {
      id: 3,
      name: "Physics Problem Solvers",
      subject: "Physics",
      course: "PHYS 201",
      members: 5,
      maxMembers: 7,
      nextMeeting: "Friday 3:00 PM",
      location: "Physics Building Lab 3",
      description: "Hands-on physics problem solving with lab experiments and theoretical discussions.",
      organizer: "Emma Davis",
      rating: 4.7,
      isJoined: false,
    },
    {
      id: 4,
      name: "Organic Chemistry Circle",
      subject: "Chemistry",
      course: "CHEM 301",
      members: 7,
      maxMembers: 8,
      nextMeeting: "Wednesday 5:30 PM",
      location: "Chemistry Lab 101",
      description: "Master organic reactions and mechanisms. Includes practice with molecular models.",
      organizer: "Alex Rodriguez",
      rating: 4.6,
      isJoined: false,
    },
  ]

  const subjects = ["All", "Mathematics", "Computer Science", "Physics", "Chemistry", "Biology", "English"]

  const filteredGroups = studyGroups.filter((group) => {
    const matchesSearch =
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.course.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "All" || group.subject === selectedSubject
    return matchesSearch && matchesSubject
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Groups</h1>
            <p className="text-gray-600">Join or create study groups with your classmates</p>
          </div>
          <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
            <Plus className="h-4 w-4 mr-2" />
            Create Group
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">24</div>
              <div className="text-sm text-gray-600">Active Groups</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Subjects Covered</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-sm text-gray-600">Weekly Sessions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">4.8</div>
              <div className="text-sm text-gray-600">Average Rating</div>
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
                  placeholder="Search study groups..."
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
                    className={selectedSubject === subject ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {subject}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Study Groups Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredGroups.map((group) => (
            <Card key={group.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">{group.name}</CardTitle>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">{group.subject}</Badge>
                      <Badge variant="outline">{group.course}</Badge>
                      {group.isJoined && <Badge className="bg-green-100 text-green-800">Joined</Badge>}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{group.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">{group.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {group.members}/{group.maxMembers} members
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {group.nextMeeting}
                    </div>
                    <div className="flex items-center text-gray-600 col-span-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      {group.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="text-xs">
                          {group.organizer
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">by {group.organizer}</span>
                    </div>

                    <div className="flex space-x-2">
                      {group.isJoined ? (
                        <>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Open Chat
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="outline" size="sm">
                            Learn More
                          </Button>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Join Group
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No study groups found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or create a new study group</p>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Create New Group
            </Button>
          </div>
        )}

        {/* Create Group CTA */}
        <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Can't find the right group?</h3>
            <p className="text-gray-600 mb-4">Create your own study group and invite classmates to join</p>
            <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
              <Plus className="h-4 w-4 mr-2" />
              Start Your Own Group
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
