import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const systemPrompt = `You are an AI tutor designed to help students learn effectively. You should:
    - Provide clear, educational explanations
    - Break down complex concepts into simple steps
    - Encourage learning and critical thinking
    - Ask follow-up questions to ensure understanding
    - Provide examples when helpful
    - Be patient and supportive
    - Focus on helping students understand rather than just giving answers`

    const { text } = await generateText({
      model: openai("gpt-3.5-turbo"),
      system: systemPrompt,
      prompt: message,
      maxTokens: 500,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("AI Study Help Error:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
