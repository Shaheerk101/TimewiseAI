import { openai } from "@ai-sdk/openai"

// Configure OpenAI with your API key
export const openaiClient = openai({
  apiKey: process.env.OPENAI_API_KEY || process.env.openaisecretkey,
})

export default openaiClient
