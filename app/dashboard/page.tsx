"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Brain,
  Calendar,
  BookOpen,
  Target,
  TrendingUp,
  Clock,
  Users,
  Award,
  Plus,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const upcomingTasks = [
    { id: 1, title: "Math Assignment Due", subject: "Calculus", dueDate: "Today", priority: "high" },
    { id: 2, title: "History Essay", subject: "World History", dueDate: "Tomorrow", priority: "medium" },
    { id: 3, title: "Chemistry Lab Report", subject: "Chemistry", dueDate: "Friday", priority: "low" },
  ]

  const recentActivity = [
    { id: 1, action: "Completed Biology Quiz", time: "2 hours ago", score: "95%" },
    { id: 2, action: "Studied with AI Tutor", time: "4 hours ago", topic: "Derivatives" },
    { id: 3, action: "Joined Study Group", time: "1 day ago", subject: "Physics" },
  ]

  const studyStats = {
    totalHours: 47,
    weeklyGoal: 50,
    streak: 12,
    completedTasks: 23,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600">Here's your learning progress and upcoming tasks.</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{studyStats.totalHours}h</div>
                  <p className="text-xs text-muted-foreground">
                    {studyStats.weeklyGoal - studyStats.totalHours}h to weekly goal
                  </p>
                  <Progress value={(studyStats.totalHours / studyStats.weeklyGoal) * 100} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{studyStats.streak} days</div>
                  <p className="text-xs text-muted-foreground">Keep it up!</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{studyStats.completedTasks}</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">AI Sessions</CardTitle>
                  <Brain className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-muted-foreground">This week</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Upcoming Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Upcoming Tasks
                  </CardTitle>
                  <CardDescription>Your assignments and deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingTasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <AlertCircle
                            className={`h-4 w-4 ${
                              task.priority === "high"
                                ? "text-red-500"
                                : task.priority === "medium"
                                  ? "text-yellow-500"
                                  : "text-green-500"
                            }`}
                          />
                          <div>
                            <p className="font-medium text-sm">{task.title}</p>
                            <p className="text-xs text-gray-500">{task.subject}</p>
                          </div>
                        </div>
                        <Badge variant={task.priority === "high" ? "destructive" : "secondary"}>{task.dueDate}</Badge>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Your latest learning activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            <CheckCircle className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                          {activity.score && (
                            <Badge className="mt-1" variant="secondary">
                              {activity.score}
                            </Badge>
                          )}
                          {activity.topic && (
                            <Badge className="mt-1" variant="outline">
                              {activity.topic}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Jump into your learning activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <Link href="/ai-assistant">
                    <Button className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                      <Brain className="h-6 w-6" />
                      <span>Ask AI Tutor</span>
                    </Button>
                  </Link>
                  <Link href="/study-groups">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                    >
                      <Users className="h-6 w-6" />
                      <span>Join Study Group</span>
                    </Button>
                  </Link>
                  <Link href="/calendar">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                    >
                      <Calendar className="h-6 w-6" />
                      <span>View Schedule</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Calculus I", progress: 75, grade: "A-", nextClass: "Tomorrow 10:00 AM" },
                { name: "World History", progress: 60, grade: "B+", nextClass: "Today 2:00 PM" },
                { name: "Chemistry", progress: 85, grade: "A", nextClass: "Friday 9:00 AM" },
                { name: "Physics", progress: 45, grade: "B", nextClass: "Monday 11:00 AM" },
              ].map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>Current Grade: {course.grade}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>
                      <div className="text-sm text-gray-600">Next class: {course.nextClass}</div>
                      <Button className="w-full bg-transparent" variant="outline">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Study Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                      <div key={day} className="flex items-center space-x-4">
                        <span className="w-8 text-sm">{day}</span>
                        <Progress value={Math.random() * 100} className="flex-1" />
                        <span className="w-8 text-sm text-right">{Math.floor(Math.random() * 8)}h</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subject Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { subject: "Mathematics", score: 92 },
                      { subject: "Science", score: 88 },
                      { subject: "History", score: 85 },
                      { subject: "Literature", score: 90 },
                    ].map((item) => (
                      <div key={item.subject} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.subject}</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={item.score} className="w-20" />
                          <span className="text-sm w-8">{item.score}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Current Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { goal: "Study 50 hours this week", progress: 94, target: "50h" },
                      { goal: "Complete all assignments", progress: 75, target: "8/8" },
                      { goal: "Maintain A average", progress: 88, target: "A-" },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.goal}</span>
                          <span className="text-gray-500">{item.target}</span>
                        </div>
                        <Progress value={item.progress} />
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Set New Goal
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "7-Day Streak", description: "Studied for 7 consecutive days", earned: true },
                      { title: "Quiz Master", description: "Scored 90%+ on 5 quizzes", earned: true },
                      { title: "Early Bird", description: "Complete morning study sessions", earned: false },
                      { title: "Team Player", description: "Join 3 study groups", earned: false },
                    ].map((achievement, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 p-3 rounded-lg border ${
                          achievement.earned ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <Award className={`h-6 w-6 ${achievement.earned ? "text-green-600" : "text-gray-400"}`} />
                        <div>
                          <p className="font-medium text-sm">{achievement.title}</p>
                          <p className="text-xs text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
