import { z } from 'zod';

export const SignupResponseSchema = z.object({
  token: z.string(),
});

export type SignupResponse = z.infer<typeof SignupResponseSchema>;
