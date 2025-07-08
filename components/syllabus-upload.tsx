"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, CheckCircle } from "lucide-react"

export function SyllabusUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)

    // Simulate upload process
    setTimeout(() => {
      setUploading(false)
      setUploaded(true)
    }, 2000)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <FileText className="h-6 w-6 text-blue-600" />
          Upload Your Syllabus
        </CardTitle>
        <CardDescription>
          Upload your course syllabus PDF and let our AI create a personalized study plan for you
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!uploaded ? (
          <div className="space-y-4">
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">Drop your PDF here or click to browse</p>
              <p className="text-sm text-gray-500">Supports PDF files up to 10MB</p>
              <input id="file-upload" type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
            </div>

            {file && (
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">{file.name}</p>
                    <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <Button onClick={handleUpload} disabled={uploading} className="bg-blue-600 hover:bg-blue-700">
                  {uploading ? "Uploading..." : "Upload"}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Syllabus Uploaded Successfully!</h3>
            <p className="text-gray-600 mb-6">
              Our AI is analyzing your syllabus and creating your personalized study plan.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">View Study Plan</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
