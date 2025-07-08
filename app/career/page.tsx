"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Briefcase,
  Target,
  TrendingUp,
  BookOpen,
  Search,
  Clock,
  DollarSign,
  GraduationCap,
  Star,
  ExternalLink,
} from "lucide-react"

export default function CareerPage() {
  const [selectedField, setSelectedField] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const fields = ["All", "Technology", "Engineering", "Business", "Healthcare", "Education", "Finance"]

  const careerPaths = [
    {
      id: 1,
      title: "Software Engineer",
      field: "Technology",
      description: "Design and develop software applications and systems",
      averageSalary: "$95,000",
      growthRate: "+22%",
      education: "Bachelor's Degree",
      skills: ["Programming", "Problem Solving", "Algorithms", "System Design"],
      companies: ["Google", "Microsoft", "Apple", "Meta"],
      jobOpenings: 15420,
      difficulty: "Medium",
      timeToEntry: "2-4 years",
    },
    {
      id: 2,
      title: "Data Scientist",
      field: "Technology",
      description: "Analyze complex data to help organizations make informed decisions",
      averageSalary: "$118,000",
      growthRate: "+31%",
      education: "Master's Degree",
      skills: ["Statistics", "Python", "Machine Learning", "Data Visualization"],
      companies: ["Netflix", "Uber", "Airbnb", "Amazon"],
      jobOpenings: 8930,
      difficulty: "Hard",
      timeToEntry: "3-5 years",
    },
    {
      id: 3,
      title: "Product Manager",
      field: "Business",
      description: "Guide product development from conception to launch",
      averageSalary: "$125,000",
      growthRate: "+19%",
      education: "Bachelor's Degree",
      skills: ["Strategy", "Communication", "Analytics", "Leadership"],
      companies: ["Google", "Facebook", "Spotify", "Slack"],
      jobOpenings: 5670,
      difficulty: "Medium",
      timeToEntry: "3-6 years",
    },
    {
      id: 4,
      title: "Biomedical Engineer",
      field: "Engineering",
      description: "Apply engineering principles to healthcare and medical devices",
      averageSalary: "$88,000",
      growthRate: "+5%",
      education: "Bachelor's Degree",
      skills: ["Biology", "Engineering", "Problem Solving", "Research"],
      companies: ["Medtronic", "Johnson & Johnson", "GE Healthcare", "Siemens"],
      jobOpenings: 3240,
      difficulty: "Hard",
      timeToEntry: "4-6 years",
    },
  ]

  const skillsInDemand = [
    { skill: "Artificial Intelligence", growth: "+45%", jobs: 12500 },
    { skill: "Cloud Computing", growth: "+38%", jobs: 18900 },
    { skill: "Cybersecurity", growth: "+33%", jobs: 15600 },
    { skill: "Data Analysis", growth: "+28%", jobs: 22100 },
    { skill: "Digital Marketing", growth: "+25%", jobs: 14300 },
    { skill: "UX/UI Design", growth: "+23%", jobs: 9800 },
  ]

  const careerResources = [
    {
      title: "Resume Builder",
      description: "Create a professional resume with AI assistance",
      type: "Tool",
      rating: 4.8,
    },
    {
      title: "Interview Prep Course",
      description: "Master technical and behavioral interviews",
      type: "Course",
      rating: 4.9,
    },
    {
      title: "LinkedIn Optimization",
      description: "Optimize your LinkedIn profile for recruiters",
      type: "Guide",
      rating: 4.7,
    },
    {
      title: "Salary Negotiation",
      description: "Learn to negotiate your worth confidently",
      type: "Workshop",
      rating: 4.8,
    },
  ]

  const filteredPaths = careerPaths.filter((path) => {
    const matchesSearch =
      path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      path.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      path.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesField = selectedField === "All" || path.field === selectedField
    return matchesSearch && matchesField
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 bg-green-50 border-green-200"
      case "Medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
      case "Hard":
        return "text-red-600 bg-red-50 border-red-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Career Center</h1>
          <p className="text-lg text-gray-600">Explore career paths and build the skills employers want</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-4 text-center">
              <Briefcase className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-xs opacity-90">Job Opportunities</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">+25%</div>
              <div className="text-xs opacity-90">Average Growth</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4 text-center">
              <GraduationCap className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">89%</div>
              <div className="text-xs opacity-90">Job Placement Rate</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">$95K</div>
              <div className="text-xs opacity-90">Average Starting Salary</div>
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
                      placeholder="Search careers, skills, or companies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {fields.map((field) => (
                      <Button
                        key={field}
                        variant={selectedField === field ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedField(field)}
                        className={selectedField === field ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        {field}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Career Paths */}
            <div className="space-y-6">
              {filteredPaths.map((path) => (
                <Card key={path.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-1">{path.title}</CardTitle>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline">{path.field}</Badge>
                          <Badge className={getDifficultyColor(path.difficulty)}>{path.difficulty}</Badge>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            {path.timeToEntry}
                          </div>
                        </div>
                        <CardDescription>{path.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{path.averageSalary}</div>
                        <div className="text-sm text-gray-600">Average Salary</div>
                        <div className="text-sm font-medium text-green-600">{path.growthRate} growth</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Required Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {path.skills.map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Education</h4>
                          <div className="flex items-center text-sm text-gray-600">
                            <GraduationCap className="h-4 w-4 mr-1" />
                            {path.education}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Top Companies</h4>
                          <div className="flex flex-wrap gap-2">
                            {path.companies.map((company, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {company}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Job Market</h4>
                          <div className="flex items-center text-sm text-gray-600">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {path.jobOpenings.toLocaleString()} open positions
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t mt-4">
                      <div className="text-sm text-gray-600">Explore this career path and build relevant skills</div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View Jobs
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <BookOpen className="h-4 w-4 mr-1" />
                          Start Learning
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
            {/* Skills in Demand */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Skills in Demand
                </CardTitle>
                <CardDescription>Fastest growing skills this year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skillsInDemand.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.skill}</span>
                        <Badge className="bg-green-100 text-green-800 text-xs">{item.growth}</Badge>
                      </div>
                      <div className="text-xs text-gray-600">{item.jobs.toLocaleString()} job openings</div>
                      <Progress value={Math.random() * 100} className="h-1" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
                  Career Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {careerResources.map((resource, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-medium text-sm">{resource.title}</h4>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                          <span className="text-xs">{resource.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                        <Button size="sm" variant="ghost" className="text-xs h-6 px-2">
                          Access
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Assessment */}
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-800">Career Assessment</CardTitle>
                <CardDescription className="text-purple-700">
                  Discover careers that match your interests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <p className="text-sm text-purple-800 mb-4">
                    Take our 10-minute assessment to find your ideal career path
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Assessment</Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Market Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Market Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Remote Work</span>
                    <span className="font-medium text-green-600">↑ 45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">AI/ML Jobs</span>
                    <span className="font-medium text-green-600">↑ 38%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cybersecurity</span>
                    <span className="font-medium text-green-600">↑ 33%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Healthcare Tech</span>
                    <span className="font-medium text-green-600">↑ 28%</span>
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
