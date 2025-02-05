import { openai } from "@ai-sdk/openai";
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";
import { openrouter } from "@openrouter/ai-sdk-provider";

import { customMiddleware } from "./custom-middleware";

export const customModel = (apiIdentifier: string) => {
  // Check if the OpenRouter API Key is available and not a dummy (e.g., "")
  const hasOpenRouterKey =
    process.env.OPENROUTER_API_KEY && process.env.OPENROUTER_API_KEY !== "";

  // Use "deepseek/deepseek-r1" when OpenRouter is available
const modelIdentifier = hasOpenRouterKey ? "deepseek/deepseek-r1" : apiIdentifier;

  // Choose the appropriate provider based on the key available
const provider = hasOpenRouterKey
? openrouter(modelIdentifier)
: openai(modelIdentifier);


  return wrapLanguageModel({
    model: provider,
    middleware: customMiddleware,
  });
};
