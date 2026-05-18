import { NextRequest, NextResponse } from "next/server";

type OptimizationRequest = {
  promptBody?: string;
  goal?: string;
  targetModel?: string;
  tone?: string;
  constraints?: string;
  outputFormat?: string;
};

type OptimizationResult = {
  promptBody: string;
  rationale: string[];
};

type OpenAIResponsePayload = {
  output_text?: string;
  error?: {
    message?: string;
  };
  output?: Array<{
    content?: Array<{
      type?: string;
      text?: string;
    }>;
  }>;
};

const responseSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    promptBody: {
      type: "string",
      description: "The fully optimized reusable prompt body."
    },
    rationale: {
      type: "array",
      description: "Three to five concise bullet points explaining the important changes.",
      items: {
        type: "string"
      }
    }
  },
  required: ["promptBody", "rationale"]
};

function isOptimizationResult(value: unknown): value is OptimizationResult {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<OptimizationResult>;
  return (
    typeof candidate.promptBody === "string" &&
    Array.isArray(candidate.rationale) &&
    candidate.rationale.every((item) => typeof item === "string")
  );
}

function extractOutputText(payload: OpenAIResponsePayload) {
  if (payload.output_text) {
    return payload.output_text;
  }

  return (
    payload.output
      ?.flatMap((item) => item.content ?? [])
      .map((content) => (content.type === "output_text" ? content.text : ""))
      .filter(Boolean)
      .join("\n") ?? ""
  );
}

async function readOpenAIResponse(response: Response): Promise<OpenAIResponsePayload> {
  const text = await response.text();

  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text) as OpenAIResponsePayload;
  } catch {
    return {
      error: {
        message: response.ok
          ? "Optimization response was not valid JSON."
          : "Optimization service returned an unreadable error."
      }
    };
  }
}

function validateRequest(body: OptimizationRequest) {
  if (!body.promptBody?.trim()) {
    return "Prompt body is required.";
  }

  if (body.promptBody.length > 12000) {
    return "Prompt body is too long for this optimizer.";
  }

  return "";
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "OpenAI API key is not configured." }, { status: 500 });
  }

  let body: OptimizationRequest;

  try {
    body = (await request.json()) as OptimizationRequest;
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  const validationError = validateRequest(body);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const model = process.env.OPENAI_OPTIMIZATION_MODEL ?? "gpt-5.4-mini";
  const goal = body.goal?.trim() || "Improve prompt clarity, reliability, and reusability.";
  const targetModel = body.targetModel?.trim() || "General LLM";
  const tone = body.tone?.trim() || "clear";
  const outputFormat = body.outputFormat?.trim() || "structured";
  const constraints = body.constraints?.trim() || "No extra constraints.";

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        instructions:
          "You optimize reusable prompts. Return only schema-valid JSON. Preserve useful variables, avoid adding false product facts, keep the prompt practical, and explain only the most important changes.",
        input: [
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: [
                  `Optimization goal: ${goal}`,
                  `Target model or channel: ${targetModel}`,
                  `Tone: ${tone}`,
                  `Desired output format: ${outputFormat}`,
                  `Constraints: ${constraints}`,
                  "",
                  "Source prompt:",
                  body.promptBody
                ].join("\n")
              }
            ]
          }
        ],
        text: {
          format: {
            type: "json_schema",
            name: "prompt_optimization",
            strict: true,
            schema: responseSchema
          }
        }
      })
    });

    const payload = await readOpenAIResponse(response);

    if (!response.ok) {
      return NextResponse.json(
        { error: payload.error?.message ?? "Optimization request failed." },
        { status: response.status }
      );
    }

    const outputText = extractOutputText(payload);

    if (!outputText) {
      return NextResponse.json({ error: "Optimization response did not include text output." }, { status: 502 });
    }

    const parsed = JSON.parse(outputText) as unknown;

    if (!isOptimizationResult(parsed)) {
      return NextResponse.json({ error: "Optimization response did not match the expected shape." }, { status: 502 });
    }

    return NextResponse.json({ ...parsed, model });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to optimize this prompt.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
