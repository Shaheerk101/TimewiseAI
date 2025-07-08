import OpenAI from "openai"

// Create OpenAI client with proper error handling
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || process.env.openaisecretkey || "dummy-key-for-build",
})

// Helper function to check if OpenAI is properly configured
export function isOpenAIConfigured(): boolean {
  const apiKey = process.env.OPENAI_API_KEY || process.env.openaisecretkey
  return !!apiKey && apiKey !== "dummy-key-for-build"
}
