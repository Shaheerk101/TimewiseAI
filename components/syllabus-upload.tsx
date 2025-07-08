"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react"

export function SyllabusUpload() {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
  const [fileName, setFileName] = useState<string>("")

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    const pdfFile = files.find((file) => file.type === "application/pdf")

    if (pdfFile) {
      handleFileUpload(pdfFile)
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf") {
      handleFileUpload(file)
    }
  }, [])

  const handleFileUpload = async (file: File) => {
    setFileName(file.name)
    setUploadStatus("uploading")
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploadStatus("success")
          return 100
        }
        return prev + 10
      })
    }, 200)

    // Here you would typically upload to your API
    try {
      const formData = new FormData()
      formData.append("syllabus", file)

      // Replace with your actual API endpoint
      // const response = await fetch('/api/upload-syllabus', {
      //   method: 'POST',
      //   body: formData
      // })

      // if (!response.ok) throw new Error('Upload failed')
    } catch (error) {
      clearInterval(interval)
      setUploadStatus("error")
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">Upload Your Syllabus</CardTitle>
        <CardDescription className="text-gray-600">
          Drop your PDF syllabus here and we'll help you organize your semester
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragOver
              ? "border-purple-400 bg-purple-50"
              : uploadStatus === "success"
                ? "border-green-400 bg-green-50"
                : uploadStatus === "error"
                  ? "border-red-400 bg-red-50"
                  : "border-gray-300 hover:border-purple-400 hover:bg-purple-50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {uploadStatus === "idle" && (
            <>
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">Drag and drop your syllabus PDF here</p>
              <p className="text-sm text-gray-500 mb-4">or click to browse files</p>
              <input type="file" accept=".pdf" onChange={handleFileSelect} className="hidden" id="syllabus-upload" />
              <label htmlFor="syllabus-upload">
                <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                  <span>Choose PDF File</span>
                </Button>
              </label>
            </>
          )}

          {uploadStatus === "uploading" && (
            <>
              <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">Uploading {fileName}</p>
              <Progress value={uploadProgress} className="w-full mb-4" />
              <p className="text-sm text-gray-500">{uploadProgress}% complete</p>
            </>
          )}

          {uploadStatus === "success" && (
            <>
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <p className="text-lg font-medium text-green-700 mb-2">Upload successful!</p>
              <p className="text-sm text-gray-600 mb-4">
                We're processing your syllabus and will have your schedule ready shortly.
              </p>
              <Button
                onClick={() => {
                  setUploadStatus("idle")
                  setFileName("")
                  setUploadProgress(0)
                }}
                variant="outline"
              >
                Upload Another
              </Button>
            </>
          )}

          {uploadStatus === "error" && (
            <>
              <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <p className="text-lg font-medium text-red-700 mb-2">Upload failed</p>
              <p className="text-sm text-gray-600 mb-4">Please try again or contact support if the problem persists.</p>
              <Button
                onClick={() => {
                  setUploadStatus("idle")
                  setFileName("")
                  setUploadProgress(0)
                }}
                variant="outline"
              >
                Try Again
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
