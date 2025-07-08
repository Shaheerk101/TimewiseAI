import { type NextRequest, NextResponse } from "next/server"
import { openai } from "@/lib/openai"

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

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
    return NextResponse.json({ error: "Failed to get AI response" }, { status: 500 })
  }
}
