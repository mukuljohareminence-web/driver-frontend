import { z } from 'zod';

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .pipe(z.email('Email is invalid')),
});

export type ForgotPasswordDto = z.infer<typeof ForgotPasswordSchema>;
