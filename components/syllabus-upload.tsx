"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, CheckCircle, AlertCircle, Sparkles } from "lucide-react"

export function SyllabusUpload() {
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "processing" | "complete" | "error">("idle")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [analysisResults, setAnalysisResults] = useState<any>(null)

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploadStatus("uploading")
    setUploadProgress(0)

    // Simulate file upload progress
    const uploadInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval)
          setUploadStatus("processing")

          // Simulate AI processing
          setTimeout(() => {
            setAnalysisResults({
              courseName: "Introduction to Computer Science",
              totalTopics: 12,
              estimatedStudyHours: 45,
              keyDeadlines: [
                { name: "Midterm Exam", date: "March 15, 2024" },
                { name: "Final Project", date: "April 20, 2024" },
                { name: "Final Exam", date: "May 5, 2024" },
              ],
              studyPlan: [
                { week: 1, topic: "Programming Fundamentals", hours: 4 },
                { week: 2, topic: "Data Structures", hours: 5 },
                { week: 3, topic: "Algorithms", hours: 6 },
              ],
            })
            setUploadStatus("complete")
          }, 2000)

          return 100
        }
        return prev + 10
      })
    }, 200)
  }, [])

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
  }, [])

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault()
      const file = event.dataTransfer.files[0]
      if (file) {
        const fakeEvent = { target: { files: [file] } } as any
        handleFileUpload(fakeEvent)
      }
    },
    [handleFileUpload],
  )

  const resetUpload = () => {
    setUploadStatus("idle")
    setUploadProgress(0)
    setAnalysisResults(null)
  }

  if (uploadStatus === "complete" && analysisResults) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center text-green-600">
            <CheckCircle className="h-6 w-6 mr-2" />
            Syllabus Analysis Complete!
          </CardTitle>
          <CardDescription>We've analyzed your syllabus and created a personalized study plan</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Course Overview</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Course:</span>
                  <span className="font-medium">{analysisResults.courseName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Topics:</span>
                  <span className="font-medium">{analysisResults.totalTopics}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Study Hours:</span>
                  <span className="font-medium">{analysisResults.estimatedStudyHours}h</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Key Deadlines</h3>
              <div className="space-y-2">
                {analysisResults.keyDeadlines.map((deadline: any, index: number) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{deadline.name}</span>
                    <Badge variant="outline">{deadline.date}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Recommended Study Plan</h3>
            <div className="space-y-3">
              {analysisResults.studyPlan.map((week: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Week {week.week}: </span>
                    <span>{week.topic}</span>
                  </div>
                  <Badge>{week.hours}h</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1">
              <Sparkles className="h-4 w-4 mr-2" />
              Start Learning
            </Button>
            <Button variant="outline" onClick={resetUpload}>
              Upload Another
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Upload className="h-6 w-6 mr-2" />
          Upload Your Syllabus
        </CardTitle>
        <CardDescription>
          Upload your course syllabus and let our AI create a personalized study plan for you
        </CardDescription>
      </CardHeader>
      <CardContent>
        {uploadStatus === "idle" && (
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Drop your syllabus here, or click to browse</h3>
            <p className="text-gray-500 mb-4">Supports PDF, DOC, DOCX files up to 10MB</p>
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Choose File
            </Button>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
            />
          </div>
        )}

        {(uploadStatus === "uploading" || uploadStatus === "processing") && (
          <div className="text-center py-8">
            <div className="mb-4">
              {uploadStatus === "uploading" ? (
                <Upload className="h-12 w-12 text-blue-600 mx-auto animate-pulse" />
              ) : (
                <Sparkles className="h-12 w-12 text-purple-600 mx-auto animate-spin" />
              )}
            </div>
            <h3 className="text-lg font-medium mb-2">
              {uploadStatus === "uploading" ? "Uploading your syllabus..." : "Analyzing with AI..."}
            </h3>
            <p className="text-gray-500 mb-4">
              {uploadStatus === "uploading"
                ? "Please wait while we upload your file"
                : "Our AI is reading your syllabus and creating a study plan"}
            </p>
            <div className="max-w-md mx-auto">
              <Progress value={uploadProgress} className="mb-2" />
              <p className="text-sm text-gray-500">{uploadProgress}% complete</p>
            </div>
          </div>
        )}

        {uploadStatus === "error" && (
          <div className="text-center py-8">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-red-600 mb-2">Upload Failed</h3>
            <p className="text-gray-500 mb-4">There was an error processing your file. Please try again.</p>
            <Button onClick={resetUpload} variant="outline">
              Try Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
