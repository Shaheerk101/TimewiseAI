"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Clock, Users, ArrowRight } from "lucide-react"

export default function RequestTutorPage() {
  const [formData, setFormData] = useState({
    subject: "",
    specificTutor: "",
    experience: "",
    budget: "",
    schedule: "",
    description: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the request to your API
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h2>
            <p className="text-gray-600 mb-6">
              We're finding the perfect tutor for you. You'll hear back within 24 hours.
            </p>
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div className="flex items-center justify-center">
                <Clock className="h-4 w-4 mr-2" />
                Response within 24 hours
              </div>
              <div className="flex items-center justify-center">
                <Users className="h-4 w-4 mr-2" />
                3-5 tutor matches
              </div>
            </div>
            <Button onClick={() => (window.location.href = "/peer-tutoring")} className="w-full">
              Browse More Tutors
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Request a Specific Tutor</h1>
            <p className="text-lg text-gray-600">
              Tell us exactly what you're looking for and we'll find the perfect tutor match
            </p>
          </div>

          {/* How it Works */}
          <Card className="mb-8 border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    1
                  </div>
                  <p className="text-sm text-blue-800">Submit your requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    2
                  </div>
                  <p className="text-sm text-blue-800">We find matching tutors</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    3
                  </div>
                  <p className="text-sm text-blue-800">Choose your favorite</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Request Form */}
          <Card>
            <CardHeader>
              <CardTitle>Tutor Request Form</CardTitle>
              <CardDescription>
                The more details you provide, the better we can match you with the right tutor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15-20">$15-20/hour</SelectItem>
                        <SelectItem value="20-25">$20-25/hour</SelectItem>
                        <SelectItem value="25-30">$25-30/hour</SelectItem>
                        <SelectItem value="30-35">$30-35/hour</SelectItem>
                        <SelectItem value="35+">$35+/hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="specificTutor">Specific Tutor (Optional)</Label>
                  <Input
                    id="specificTutor"
                    placeholder="Do you have a specific tutor in mind?"
                    value={formData.specificTutor}
                    onChange={(e) => setFormData({ ...formData, specificTutor: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="experience">Required Experience</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any experience level</SelectItem>
                      <SelectItem value="1-2-years">1-2 years experience</SelectItem>
                      <SelectItem value="3-5-years">3-5 years experience</SelectItem>
                      <SelectItem value="5+-years">5+ years experience</SelectItem>
                      <SelectItem value="graduate">Graduate student</SelectItem>
                      <SelectItem value="phd">PhD student/holder</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="schedule">Preferred Schedule</Label>
                  <Input
                    id="schedule"
                    placeholder="e.g., Weekday evenings, Weekend mornings"
                    value={formData.schedule}
                    onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="description">Additional Requirements</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us more about what you're looking for in a tutor..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                  />
                </div>

                <div className="flex space-x-4">
                  <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700" disabled={!formData.subject}>
                    Submit Request
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => (window.location.href = "/peer-tutoring")}
                    className="flex-1"
                  >
                    Browse Tutors Instead
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Fallback Options */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Don't Want to Wait?</CardTitle>
              <CardDescription>Browse our available tutors and book a session immediately</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-100 text-green-800">Available Now</Badge>
                  <span className="text-sm">50+ tutors online</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-blue-100 text-blue-800">Quick Match</Badge>
                  <span className="text-sm">Get matched in 5 minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
