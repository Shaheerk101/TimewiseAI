"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Brain, Calendar, BookOpen, Target, TrendingUp, Clock, Users, Award, ArrowRight } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Student!</h1>
            <p className="text-gray-600">Here's your learning progress and upcoming tasks</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Study Hours</p>
                    <p className="text-2xl font-bold text-gray-900">24.5</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Goals Completed</p>
                    <p className="text-2xl font-bold text-gray-900">8/12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Current GPA</p>
                    <p className="text-2xl font-bold text-gray-900">3.7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Streak</p>
                    <p className="text-2xl font-bold text-gray-900">15 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Jump into your most used features</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link href="/ai-assistant">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Brain className="h-4 w-4 mr-2" />
                        Ask AI Tutor
                        <ArrowRight className="h-4 w-4 ml-auto" />
                      </Button>
                    </Link>
                    <Link href="/calendar">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        View Calendar
                        <ArrowRight className="h-4 w-4 ml-auto" />
                      </Button>
                    </Link>
                    <Link href="/study-groups">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Users className="h-4 w-4 mr-2" />
                        Join Study Group
                        <ArrowRight className="h-4 w-4 ml-auto" />
                      </Button>
                    </Link>
                    <Link href="/flashcards">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Practice Flashcards
                        <ArrowRight className="h-4 w-4 ml-auto" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest study sessions and achievements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Completed Math Chapter 5</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Joined Physics Study Group</p>
                        <p className="text-xs text-gray-500">5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">AI Tutor session: Chemistry</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Flashcard review: History</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Don't miss these important deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-red-500" />
                        <div>
                          <p className="font-medium">Math Assignment Due</p>
                          <p className="text-sm text-gray-500">Tomorrow, 11:59 PM</p>
                        </div>
                      </div>
                      <Badge variant="destructive">Urgent</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-yellow-500" />
                        <div>
                          <p className="font-medium">Physics Lab Report</p>
                          <p className="text-sm text-gray-500">Friday, 5:00 PM</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="font-medium">History Essay</p>
                          <p className="text-sm text-gray-500">Next Monday, 9:00 AM</p>
                        </div>
                      </div>
                      <Badge variant="outline">Scheduled</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="courses" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded mr-3 flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">M</span>
                      </div>
                      Mathematics
                    </CardTitle>
                    <CardDescription>Calculus II</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} />
                      <p className="text-xs text-gray-500">Next: Chapter 6 - Integration</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded mr-3 flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">P</span>
                      </div>
                      Physics
                    </CardTitle>
                    <CardDescription>General Physics I</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} />
                      <p className="text-xs text-gray-500">Next: Lab - Momentum</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 rounded mr-3 flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">C</span>
                      </div>
                      Chemistry
                    </CardTitle>
                    <CardDescription>Organic Chemistry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} />
                      <p className="text-xs text-gray-500">Next: Reaction Mechanisms</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Schedule</CardTitle>
                  <CardDescription>Wednesday, January 8, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 border-l-4 border-blue-500 bg-blue-50 rounded">
                      <div className="text-sm font-medium text-blue-600">9:00 AM</div>
                      <div className="flex-1">
                        <p className="font-medium">Mathematics Lecture</p>
                        <p className="text-sm text-gray-500">Room 201, Science Building</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 border-l-4 border-green-500 bg-green-50 rounded">
                      <div className="text-sm font-medium text-green-600">11:00 AM</div>
                      <div className="flex-1">
                        <p className="font-medium">Physics Lab</p>
                        <p className="text-sm text-gray-500">Lab 3, Physics Building</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 border-l-4 border-purple-500 bg-purple-50 rounded">
                      <div className="text-sm font-medium text-purple-600">2:00 PM</div>
                      <div className="flex-1">
                        <p className="font-medium">Study Group - Chemistry</p>
                        <p className="text-sm text-gray-500">Library, Room 15</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 border-l-4 border-orange-500 bg-orange-50 rounded">
                      <div className="text-sm font-medium text-orange-600">4:00 PM</div>
                      <div className="flex-1">
                        <p className="font-medium">AI Tutor Session</p>
                        <p className="text-sm text-gray-500">Online - Math Review</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="progress" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Study Hours</CardTitle>
                    <CardDescription>Your study time this week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Monday</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                          </div>
                          <span className="text-sm">4h</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Tuesday</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                          </div>
                          <span className="text-sm">3h</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Wednesday</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                          </div>
                          <span className="text-sm">5h</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Thursday</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "40%" }}></div>
                          </div>
                          <span className="text-sm">2h</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Subject Performance</CardTitle>
                    <CardDescription>Your grades across subjects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Mathematics</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">A-</Badge>
                          <span className="text-sm text-green-600">↗ +0.2</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Physics</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">B+</Badge>
                          <span className="text-sm text-green-600">↗ +0.3</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Chemistry</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">B</Badge>
                          <span className="text-sm text-gray-500">→ 0.0</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">History</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">A</Badge>
                          <span className="text-sm text-green-600">↗ +0.1</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
