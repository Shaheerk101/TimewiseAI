"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, BookOpen, Target, Plus, Calculator, Award } from "lucide-react"

export default function GradesPage() {
  const [selectedSemester, setSelectedSemester] = useState("fall-2024")
  const [showAddGrade, setShowAddGrade] = useState(false)

  const semesters = [
    { id: "fall-2024", name: "Fall 2024", current: true },
    { id: "spring-2024", name: "Spring 2024", current: false },
    { id: "fall-2023", name: "Fall 2023", current: false },
  ]

  const courses = [
    {
      name: "Calculus II",
      code: "MATH 152",
      credits: 4,
      currentGrade: "A-",
      percentage: 91.5,
      assignments: [
        { name: "Midterm 1", grade: "A", points: 95, total: 100, weight: 25 },
        { name: "Midterm 2", grade: "A-", points: 88, total: 100, weight: 25 },
        { name: "Homework Avg", grade: "A", points: 94, total: 100, weight: 30 },
        { name: "Final Exam", grade: "TBD", points: 0, total: 100, weight: 20 },
      ],
      trend: "up",
    },
    {
      name: "Computer Science",
      code: "CS 201",
      credits: 3,
      currentGrade: "B+",
      percentage: 87.2,
      assignments: [
        { name: "Project 1", grade: "A", points: 95, total: 100, weight: 20 },
        { name: "Project 2", grade: "B+", points: 87, total: 100, weight: 20 },
        { name: "Midterm", grade: "B", points: 82, total: 100, weight: 30 },
        { name: "Final Project", grade: "TBD", points: 0, total: 100, weight: 30 },
      ],
      trend: "up",
    },
    {
      name: "Physics",
      code: "PHYS 201",
      credits: 4,
      currentGrade: "A",
      percentage: 93.8,
      assignments: [
        { name: "Lab Reports", grade: "A", points: 96, total: 100, weight: 25 },
        { name: "Midterm 1", grade: "A", points: 92, total: 100, weight: 25 },
        { name: "Midterm 2", grade: "A", points: 95, total: 100, weight: 25 },
        { name: "Final Exam", grade: "TBD", points: 0, total: 100, weight: 25 },
      ],
      trend: "stable",
    },
    {
      name: "Chemistry",
      code: "CHEM 201",
      credits: 3,
      currentGrade: "B",
      percentage: 83.1,
      assignments: [
        { name: "Lab Work", grade: "B+", points: 87, total: 100, weight: 30 },
        { name: "Midterm", grade: "B-", points: 79, total: 100, weight: 35 },
        { name: "Final Exam", grade: "TBD", points: 0, total: 100, weight: 35 },
      ],
      trend: "down",
    },
  ]

  const calculateGPA = () => {
    let totalPoints = 0
    let totalCredits = 0

    courses.forEach((course) => {
      const gradePoints = getGradePoints(course.currentGrade)
      totalPoints += gradePoints * course.credits
      totalCredits += course.credits
    })

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00"
  }

  const getGradePoints = (grade: string) => {
    const gradeMap: { [key: string]: number } = {
      "A+": 4.0,
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      "C+": 2.3,
      C: 2.0,
      "C-": 1.7,
      "D+": 1.3,
      D: 1.0,
      F: 0.0,
    }
    return gradeMap[grade] || 0.0
  }

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "text-green-600 bg-green-50 border-green-200"
    if (grade.startsWith("B")) return "text-blue-600 bg-blue-50 border-blue-200"
    if (grade.startsWith("C")) return "text-yellow-600 bg-yellow-50 border-yellow-200"
    return "text-red-600 bg-red-50 border-red-200"
  }

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-500" />
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-500" />
    return <div className="h-4 w-4" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Grade Tracker</h1>
            <p className="text-gray-600">Monitor your academic progress and GPA</p>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {semesters.map((semester) => (
                  <SelectItem key={semester.id} value={semester.id}>
                    {semester.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={() => setShowAddGrade(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Course
            </Button>
          </div>
        </div>

        {/* GPA Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Current GPA</p>
                  <p className="text-3xl font-bold">{calculateGPA()}</p>
                </div>
                <Calculator className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Credits</p>
                  <p className="text-2xl font-bold">{courses.reduce((sum, course) => sum + course.credits, 0)}</p>
                </div>
                <BookOpen className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Courses</p>
                  <p className="text-2xl font-bold">{courses.length}</p>
                </div>
                <Target className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Average</p>
                  <p className="text-2xl font-bold">
                    {(courses.reduce((sum, course) => sum + course.percentage, 0) / courses.length).toFixed(1)}%
                  </p>
                </div>
                <Award className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Grades */}
        <div className="grid lg:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>
                      {course.code} • {course.credits} credits
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(course.trend)}
                    <Badge className={getGradeColor(course.currentGrade)}>{course.currentGrade}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Overall Progress</span>
                    <span className="font-semibold">{course.percentage}%</span>
                  </div>
                  <Progress value={course.percentage} className="h-2" />

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Assignments</h4>
                    {course.assignments.map((assignment, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">{assignment.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {assignment.weight}%
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          {assignment.grade !== "TBD" ? (
                            <>
                              <span className="font-medium">
                                {assignment.points}/{assignment.total}
                              </span>
                              <Badge variant="outline" className={getGradeColor(assignment.grade)}>
                                {assignment.grade}
                              </Badge>
                            </>
                          ) : (
                            <Badge variant="outline" className="text-gray-500">
                              Pending
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GPA Calculator */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="h-5 w-5 mr-2" />
              GPA Calculator
            </CardTitle>
            <CardDescription>Calculate your potential GPA with different grade scenarios</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Target GPA</label>
                <Input placeholder="3.5" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Remaining Credits</label>
                <Input placeholder="12" />
              </div>
              <div className="flex items-end">
                <Button className="w-full">Calculate Required GPA</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
