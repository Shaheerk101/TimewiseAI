import { type NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || process.env.openaisecretkey,
})

export async function POST(request: NextRequest) {
  try {
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
            "You are a helpful AI tutor assistant. Help students with their studies by providing clear explanations, step-by-step solutions, and study guidance. Be encouraging and educational.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const response =
      completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response. Please try again."

    return NextResponse.json({ response })
  } catch (error) {
    console.error("OpenAI API error:", error)
    return NextResponse.json({ error: "Failed to get AI response" }, { status: 500 })
  }
}
