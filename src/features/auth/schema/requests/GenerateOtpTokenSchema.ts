import { z } from 'zod';

export const GenerateOtpTokenSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .pipe(z.email('Email is invalid')),
  isForgotPassword: z.boolean(),
});

export type GenerateOtpTokenDto = z.infer<typeof GenerateOtpTokenSchema>;
