import { z } from 'zod';

export const VerifyOtpTokenResponseSchema = z.object({
  email: z.string(),
});

export type VerifyOtpTokenResponse = z.infer<typeof VerifyOtpTokenResponseSchema>;
