
import { GoogleGenAI, Type } from "@google/genai";
import type { Asset } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const assetSchema = {
  type: Type.OBJECT,
  properties: {
    ownerName: {
      type: Type.STRING,
      description: "Full name of the asset owner. Should be a realistic-sounding fictional name.",
    },
    lastKnownAddress: {
      type: Type.STRING,
      description: "The last known mailing address of the owner. Should be a realistic-sounding fictional US address.",
    },
    amount: {
      type: Type.NUMBER,
      description: "The monetary value of the unclaimed asset.",
    },
    source: {
      type: Type.STRING,
      description: "The name of the institution holding the asset (e.g., 'State Treasury', 'MetLife Insurance', 'Bank of America'). Should sound varied and specific.",
    },
  },
  required: ["ownerName", "lastKnownAddress", "amount", "source"],
};

export const generateUnclaimedAssets = async (scenarioTitle: string): Promise<Asset[]> => {
  try {
    const prompt = `Simulating a comprehensive scan across 20 different types of digital databases (e.g., government treasury sites, banking networks, insurance company records, court filings, and pension administrators), generate a JSON array of 3 fictional unclaimed assets related to the category: "${scenarioTitle}". The data should be entirely fictional but realistic, with varied and specific sources.`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: assetSchema,
        },
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
      console.warn("Gemini API returned an empty response for:", scenarioTitle);
      return []; // Return empty array if response is empty
    }

    const parsedData = JSON.parse(jsonText);

    // Basic validation to ensure we have an array of objects
    if (Array.isArray(parsedData)) {
      return parsedData as Asset[];
    } else {
      console.error("Parsed data is not an array:", parsedData);
      return [];
    }

  } catch (error) {
    console.error("Error generating content with Gemini API:", error);
    throw new Error("Failed to communicate with the AI service.");
  }
};
