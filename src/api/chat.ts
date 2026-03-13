// import type { VercelRequest, VercelResponse } from "@vercel/node"
// import { liteClient as algoliasearch } from "algoliasearch/lite";
// import { GoogleGenerativeAI } from "@google/generative-ai"

// type ChatRequestBody = {
//   message: string
// }

// type ChatResponse = {
//   reply: string
// }

// export default async function handler(
//   req: VercelRequest,
//   res: VercelResponse
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" })
//   }

//   const { message } = req.body as ChatRequestBody

//   if (!message) {
//     return res.status(400).json({ error: "Message is required" })
//   }

//   try {
//     // 1️⃣ Algolia search
//     const algolia = algoliasearch(
//       process.env.ALGOLIA_APP_ID as string,
//       process.env.ALGOLIA_API_KEY as string
//     )

//     const index = algolia.initIndex(
//       process.env.ALGOLIA_INDEX_NAME as string
//     )

//     const searchResult = await index.search(message, {
//       hitsPerPage: 5
//     })


//     const context = searchResult.hits
//       .map(
//         (hit: any) =>
//           `• ${hit.name}: ${hit.description}`
//       )
//       .join("\n")

//     // 2️⃣ Gemini
//     const genAI = new GoogleGenerativeAI(
//       process.env.GEMINI_API_KEY as string
//     )

//     const model = genAI.getGenerativeModel({
//       model: "gemini-1.5-flash"
//     })

//     const prompt = `
// You are an assistant helping users find suitable Kendo clubs.

// Use ONLY the information below:
// ${context}

// User question: ${message}

// Answer clearly and concisely.
// `

//     const result = await model.generateContent(prompt)
//     const reply = result.response.text()

//     return res.status(200).json({ reply })
//   } catch (err) {
//     console.error("Chat API error:", err)
//     return res
//       .status(500)
//       .json({ error: "Internal server error" })
//   }
// }

function chatHandler() {
  // Placeholder function since the actual implementation is commented out.
}

export default chatHandler