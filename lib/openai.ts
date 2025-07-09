import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || process.env.openaisecretkey,
})

export { openai }

export function isOpenAIConfigured(): boolean {
  return !!(process.env.OPENAI_API_KEY || process.env.openaisecretkey)
}
