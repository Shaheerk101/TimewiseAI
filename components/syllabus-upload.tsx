"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, FileText, CheckCircle } from "lucide-react"

export function SyllabusUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setIsUploaded(false)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setIsUploading(true)

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      setIsUploaded(true)
    }, 2000)
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files[0]
    if (droppedFile) {
      setFile(droppedFile)
      setIsUploaded(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Upload className="h-5 w-5 mr-2 text-blue-600" />
          Upload Your Syllabus
        </CardTitle>
        <CardDescription>
          Upload your course syllabus and let our AI create a personalized study plan for you.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!isUploaded ? (
          <>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-900 mb-2">Drag and drop your syllabus here</p>
              <p className="text-sm text-gray-500 mb-4">or click to browse files</p>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="syllabus-upload" className="sr-only">
                    Choose file
                  </Label>
                  <Input
                    id="syllabus-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileChange}
                    className="max-w-xs mx-auto"
                  />
                </div>
                {file && (
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <FileText className="h-4 w-4" />
                    <span>{file.name}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center">
              <Button onClick={handleUpload} disabled={!file || isUploading} className="bg-blue-600 hover:bg-blue-700">
                {isUploading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload & Analyze
                  </>
                )}
              </Button>
            </div>

            <div className="text-xs text-gray-500 text-center">Supported formats: PDF, DOC, DOCX, TXT (Max 10MB)</div>
          </>
        ) : (
          <div className="text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Syllabus Uploaded Successfully!</h3>
              <p className="text-gray-600 mb-4">
                Your syllabus has been analyzed and your personalized study plan is ready.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">View Study Plan</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
