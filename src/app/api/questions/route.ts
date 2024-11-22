import { strict_output } from "@/lib/gpt";
import { getAuthSession } from "@/lib/nextauth";
import { getQuestionsSchema } from "@/schemas/questions";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { z } from "zod";
import { createOpenAI } from "@ai-sdk/openai";
import { generateObject } from "ai";

const openai = createOpenAI({
  // custom settings, e.g.
  apiKey: process.env.OPENAI_API_KEY,
  compatibility: "strict", // strict mode, enable when using the OpenAI API
});

const model = openai("gpt-4o");

export const runtime = "nodejs";
export const maxDuration = 500;

export async function POST(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    // Although this is not good practice
    // if (!session?.user) {
    //   return NextResponse.json(
    //     { error: "You must be logged in to create a game." },
    //     {
    //       status: 401,
    //     }
    //   );
    // }
    const body = await req.json();
    const { amount, topic, type } = getQuestionsSchema.parse(body);
    let questions: any;

    if (type === "open_ended") {
      const result = await generateObject({
        model: model,
        schema: z.object({
          questions: z.array(
            z.object({
              question: z.string(),
              answer: z.string(),
            })
          ),
        }),

        system: `You are an expert quiz creator. Create a did quiz for the given topic.
        such that the questions should be challenging and fun Each question should have an answer within 15 words 
        the answer is open ended. `,

        prompt: `Create a quiz for the : ${topic} with ${amount} questions `,
      });

      questions = result.object.questions;
    } else if (type === "mcq") {
      const result = await generateObject({
        model: model,
        schema: z.object({
          questions: z.array(
            z.object({
              question: z.string(),
              answer: z.string(),
              option1: z.string(),
              option2: z.string(),
              option3: z.string(),
            })
          ),
        }),

        system: `You are an expert quiz creator . Create a did quiz for the given topic.
        such that the questions should be challenging and fun Each question should have an answer and options`,

        prompt: `Create a quiz for the : ${topic} with ${amount} questions `,
      });

      questions = result.object.questions;
      console.log(questions);
    }
    return NextResponse.json(
      {
        questions: questions,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.issues },
        {
          status: 400,
        }
      );
    } else {
      console.error("elle gpt error", error);
      return NextResponse.json(
        { error: "An unexpected error occurred." },
        {
          status: 500,
        }
      );
    }
  }
}
