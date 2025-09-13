'use server';

/**
 * @fileOverview A stylist bio generation AI agent.
 *
 * - generateStylistBio - A function that generates a stylist bio.
 * - GenerateStylistBioInput - The input type for the generateStylistBio function.
 * - GenerateStylistBioOutput - The return type for the generateStylistBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStylistBioInputSchema = z.object({
  name: z.string().describe('The name of the stylist.'),
  skills: z.array(z.string()).describe('The skills of the stylist.'),
  experience: z.string().describe('The experience of the stylist.'),
  customerReviews: z.array(z.string()).describe('Customer reviews of the stylist.'),
});
export type GenerateStylistBioInput = z.infer<typeof GenerateStylistBioInputSchema>;

const GenerateStylistBioOutputSchema = z.object({
  bio: z.string().describe('The generated bio for the stylist.'),
});
export type GenerateStylistBioOutput = z.infer<typeof GenerateStylistBioOutputSchema>;

export async function generateStylistBio(input: GenerateStylistBioInput): Promise<GenerateStylistBioOutput> {
  return generateStylistBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStylistBioPrompt',
  input: {schema: GenerateStylistBioInputSchema},
  output: {schema: GenerateStylistBioOutputSchema},
  prompt: `You are a marketing expert specializing in creating engaging and professional bios for salon stylists.

  Given the following information about a stylist, generate a bio that highlights their skills, experience, and positive customer feedback.

  Name: {{{name}}}
  Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Experience: {{{experience}}}
  Customer Reviews: {{#each customerReviews}}'{{{this}}}'{{#unless @last}}, {{/unless}}{{/each}}
  `,
});

const generateStylistBioFlow = ai.defineFlow(
  {
    name: 'generateStylistBioFlow',
    inputSchema: GenerateStylistBioInputSchema,
    outputSchema: GenerateStylistBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
