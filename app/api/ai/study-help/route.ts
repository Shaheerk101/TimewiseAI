import { type NextRequest, NextResponse } from "next/server"
import { openai, isOpenAIConfigured } from "@/lib/openai"

export async function POST(request: NextRequest) {
  try {
    // Check if OpenAI is properly configured
    if (!isOpenAIConfigured()) {
      return NextResponse.json({ error: "AI service is not configured. Please contact support." }, { status: 503 })
    }

    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI study assistant. Help students with their academic questions, provide explanations, and offer study tips. Be encouraging and supportive.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response."

    return NextResponse.json({ response })
  } catch (error) {
    console.error("OpenAI API error:", error)

    // Handle specific OpenAI errors
    if (error instanceof Error && error.message.includes("API key")) {
      return NextResponse.json({ error: "AI service configuration error. Please contact support." }, { status: 503 })
    }

    return NextResponse.json({ error: "Failed to get AI response. Please try again later." }, { status: 500 })
  }
}
