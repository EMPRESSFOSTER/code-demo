'use server';

/**
 * @fileOverview Provides AI-powered code suggestions and error fixes for the code playground.
 *
 * - aiPoweredCodingAssistance - A function that handles the code assistance process.
 * - AIPoweredCodingAssistanceInput - The input type for the aiPoweredCodingAssistance function.
 * - AIPoweredCodingAssistanceOutput - The return type for the aiPoweredCodingAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPoweredCodingAssistanceInputSchema = z.object({
  code: z.string().describe('The user code in the playground.'),
  lessonContext: z.string().describe('The context of the current lesson.'),
});
export type AIPoweredCodingAssistanceInput = z.infer<typeof AIPoweredCodingAssistanceInputSchema>;

const AIPoweredCodingAssistanceOutputSchema = z.object({
  suggestion: z.string().describe('The AI-powered code suggestion.'),
  errorFix: z.string().describe('The AI-powered error fix, if any.'),
});
export type AIPoweredCodingAssistanceOutput = z.infer<typeof AIPoweredCodingAssistanceOutputSchema>;

export async function aiPoweredCodingAssistance(input: AIPoweredCodingAssistanceInput): Promise<AIPoweredCodingAssistanceOutput> {
  return aiPoweredCodingAssistanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredCodingAssistancePrompt',
  input: {schema: AIPoweredCodingAssistanceInputSchema},
  output: {schema: AIPoweredCodingAssistanceOutputSchema},
  prompt: `You are an AI assistant that provides code suggestions and error fixes for web development code in a playground environment.

  Based on the current lesson context and the user's code, provide a suggestion to improve the code or fix any errors.

  Lesson Context: {{{lessonContext}}}
  User Code: {{{code}}}

  Suggestion: Provide a concise and helpful suggestion to improve the code.
  Error Fix: If there are any errors in the code, provide a corrected version of the code snippet. If there are no errors, state that there are no errors.

  Output in JSON format.`,
});

const aiPoweredCodingAssistanceFlow = ai.defineFlow(
  {
    name: 'aiPoweredCodingAssistanceFlow',
    inputSchema: AIPoweredCodingAssistanceInputSchema,
    outputSchema: AIPoweredCodingAssistanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
