import { z } from 'zod';

export const ValidateOtpResponseSchema = z.object({
  id: z.string(),
  email: z.string(),
  tokenForResetPassword: z.string(),
});

export type ValidateOtpResponse = z.infer<typeof ValidateOtpResponseSchema>;
