"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Calendar,
  TrendingUp,
  Target,
  Clock,
  Users,
  Brain,
  Award,
  ChevronRight,
  Plus,
  FlameIcon as Fire,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const [studyStreak, setStudyStreak] = useState(7)
  const [weeklyGoal, setWeeklyGoal] = useState(75)
  const [currentProgress, setCurrentProgress] = useState(68)

  // Mock data - replace with real data from your backend
  const studentData = {
    name: "Alex Johnson",
    gpa: 3.7,
    totalStudyHours: 142,
    coursesEnrolled: 5,
    upcomingSessions: 3,
    achievements: 12,
  }

  const recentCourses = [
    { name: "Calculus II", grade: "A-", progress: 85, nextAssignment: "Problem Set 7", dueDate: "Tomorrow" },
    { name: "Computer Science", grade: "B+", progress: 78, nextAssignment: "Final Project", dueDate: "Dec 15" },
    { name: "Physics", grade: "A", progress: 92, nextAssignment: "Lab Report", dueDate: "Friday" },
    { name: "Chemistry", grade: "B", progress: 71, nextAssignment: "Midterm Exam", dueDate: "Next Week" },
  ]

  const upcomingEvents = [
    { type: "Tutoring", subject: "Math", time: "2:00 PM", tutor: "Sarah Chen" },
    { type: "Study Group", subject: "Physics", time: "4:30 PM", members: 4 },
    { type: "AI Session", subject: "Chemistry", time: "7:00 PM", topic: "Organic Reactions" },
  ]

  const studyInsights = [
    { metric: "Most Productive Time", value: "2-4 PM", trend: "+15%" },
    { metric: "Favorite Subject", value: "Mathematics", trend: "45 hrs" },
    { metric: "Study Efficiency", value: "87%", trend: "+12%" },
    { metric: "Weekly Average", value: "18.5 hrs", trend: "+3.2 hrs" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {studentData.name}! 👋</h1>
              <p className="text-gray-600">Here's your academic progress overview</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-orange-100 px-3 py-2 rounded-full">
                <Fire className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-800">{studyStreak} day streak!</span>
              </div>
              <Link href="/ai-assistant">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  <Brain className="h-4 w-4 mr-2" />
                  Ask AI
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-6 w-6 mx-auto mb-2" />
              <div className="text-2xl font-bold">{studentData.gpa}</div>
              <div className="text-xs opacity-90">Current GPA</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-4 text-center">
              <Clock className="h-6 w-6 mx-auto mb-2" />
              <div className="text-2xl font-bold">{studentData.totalStudyHours}</div>
              <div className="text-xs opacity-90">Study Hours</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-6 w-6 mx-auto mb-2" />
              <div className="text-2xl font-bold">{studentData.coursesEnrolled}</div>
              <div className="text-xs opacity-90">Active Courses</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 mx-auto mb-2" />
              <div className="text-2xl font-bold">{studentData.upcomingSessions}</div>
              <div className="text-xs opacity-90">Upcoming Sessions</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
            <CardContent className="p-4 text-center">
              <Award className="h-6 w-6 mx-auto mb-2" />
              <div className="text-2xl font-bold">{studentData.achievements}</div>
              <div className="text-xs opacity-90">Achievements</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
            <CardContent className="p-4 text-center">
              <Fire className="h-6 w-6 mx-auto mb-2" />
              <div className="text-2xl font-bold">{studyStreak}</div>
              <div className="text-xs opacity-90">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weekly Goal Progress */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-blue-600" />
                      Weekly Study Goal
                    </CardTitle>
                    <CardDescription>You're doing great! Keep it up!</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    {Math.round((currentProgress / weeklyGoal) * 100)}% Complete
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>{currentProgress} hours completed</span>
                    <span>{weeklyGoal} hours goal</span>
                  </div>
                  <Progress value={(currentProgress / weeklyGoal) * 100} className="h-3" />
                  <div className="text-sm text-gray-600">
                    {weeklyGoal - currentProgress} hours remaining • {7 - new Date().getDay()} days left
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Progress */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Course Progress</CardTitle>
                  <Link href="/grades">
                    <Button variant="outline" size="sm">
                      View All <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCourses.map((course, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{course.name}</h3>
                            <p className="text-sm text-gray-600">Next: {course.nextAssignment}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-1">
                            {course.grade}
                          </Badge>
                          <div className="text-xs text-gray-500">Due {course.dueDate}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={course.progress} className="flex-1 h-2" />
                        <span className="text-sm font-medium">{course.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Study Insights
                </CardTitle>
                <CardDescription>AI-powered analysis of your study patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {studyInsights.map((insight, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">{insight.metric}</span>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          {insight.trend}
                        </Badge>
                      </div>
                      <div className="text-lg font-semibold">{insight.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                    Today's Schedule
                  </CardTitle>
                  <Link href="/calendar">
                    <Button variant="ghost" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{event.type}</div>
                        <div className="text-xs text-gray-600">
                          {event.subject} • {event.time}
                        </div>
                        {event.tutor && <div className="text-xs text-gray-500">with {event.tutor}</div>}
                        {event.members && <div className="text-xs text-gray-500">{event.members} members</div>}
                      </div>
                    </div>
                  ))}
                  <Link href="/calendar">
                    <Button variant="outline" className="w-full mt-3 bg-transparent" size="sm">
                      View Full Calendar
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/ai-assistant">
                    <Button
                      variant="outline"
                      className="w-full h-16 flex flex-col items-center justify-center bg-transparent"
                    >
                      <Brain className="h-5 w-5 mb-1" />
                      <span className="text-xs">AI Help</span>
                    </Button>
                  </Link>
                  <Link href="/peer-tutoring">
                    <Button
                      variant="outline"
                      className="w-full h-16 flex flex-col items-center justify-center bg-transparent"
                    >
                      <Users className="h-5 w-5 mb-1" />
                      <span className="text-xs">Find Tutor</span>
                    </Button>
                  </Link>
                  <Link href="/study-groups">
                    <Button
                      variant="outline"
                      className="w-full h-16 flex flex-col items-center justify-center bg-transparent"
                    >
                      <BookOpen className="h-5 w-5 mb-1" />
                      <span className="text-xs">Study Group</span>
                    </Button>
                  </Link>
                  <Link href="/grades">
                    <Button
                      variant="outline"
                      className="w-full h-16 flex flex-col items-center justify-center bg-transparent"
                    >
                      <Star className="h-5 w-5 mb-1" />
                      <span className="text-xs">Grades</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Achievement Badge */}
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
              <CardContent className="p-4 text-center">
                <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold text-yellow-800 mb-1">Study Streak Champion!</h3>
                <p className="text-sm text-yellow-700">You've studied for 7 days straight. Keep it up!</p>
                <Badge className="mt-2 bg-yellow-500 hover:bg-yellow-600">🔥 {studyStreak} Days</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
