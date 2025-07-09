import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: `You are a helpful AI tutor assistant. You help students with their studies by:
      - Explaining complex concepts in simple terms
      - Providing step-by-step solutions to problems
      - Creating study plans and schedules
      - Answering academic questions across various subjects
      - Offering study tips and learning strategies
      
      Be encouraging, patient, and educational in your responses. Always aim to help the student learn and understand rather than just providing answers.`,
      prompt: message,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("AI API Error:", error)
    return NextResponse.json({ error: "Failed to generate AI response" }, { status: 500 })
  }
}
