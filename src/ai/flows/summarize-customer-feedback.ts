// Summarizes customer feedback for each stylist to identify areas for improvement and strengths.

'use server';

/**
 * @fileOverview Summarizes customer feedback for each stylist.
 *
 * - summarizeCustomerFeedback - A function that handles the summarization of customer feedback for a specific stylist.
 * - SummarizeCustomerFeedbackInput - The input type for the summarizeCustomerFeedback function.
 * - SummarizeCustomerFeedbackOutput - The return type for the summarizeCustomerFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCustomerFeedbackInputSchema = z.object({
  stylistName: z.string().describe('The name of the stylist.'),
  customerReviews: z.array(z.string()).describe('An array of customer review strings.'),
});
export type SummarizeCustomerFeedbackInput = z.infer<typeof SummarizeCustomerFeedbackInputSchema>;

const SummarizeCustomerFeedbackOutputSchema = z.object({
  summary: z.string().describe('A summary of the customer feedback for the stylist.'),
});
export type SummarizeCustomerFeedbackOutput = z.infer<typeof SummarizeCustomerFeedbackOutputSchema>;

export async function summarizeCustomerFeedback(input: SummarizeCustomerFeedbackInput): Promise<SummarizeCustomerFeedbackOutput> {
  return summarizeCustomerFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCustomerFeedbackPrompt',
  input: {schema: SummarizeCustomerFeedbackInputSchema},
  output: {schema: SummarizeCustomerFeedbackOutputSchema},
  prompt: `You are a salon manager. Summarize the following customer feedback for stylist {{stylistName}} to identify areas for improvement and strengths.

Customer Reviews:
{{#each customerReviews}}
- {{{this}}}
{{/each}}

Summary:`,
});

const summarizeCustomerFeedbackFlow = ai.defineFlow(
  {
    name: 'summarizeCustomerFeedbackFlow',
    inputSchema: SummarizeCustomerFeedbackInputSchema,
    outputSchema: SummarizeCustomerFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
