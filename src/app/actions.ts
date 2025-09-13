'use server';

import {
  generateStylistBio,
  type GenerateStylistBioInput,
} from '@/ai/flows/generate-stylist-bio';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

const GenerateStylistBioInputSchema = z.object({
  name: z.string(),
  skills: z.array(z.string()),
  experience: z.string(),
  customerReviews: z.array(z.string()),
});

export async function generateStylistBioAction(input: GenerateStylistBioInput) {
  try {
    const validatedInput = GenerateStylistBioInputSchema.parse(input);
    const output = await generateStylistBio(validatedInput);
    return { success: true, data: output };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: fromZodError(error).toString() };
    }
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
