import { z } from 'zod';

export const ResendOtpResponseSchema = z.object({
  message: z.string(),
});

export type ResendOtpResponse = z.infer<typeof ResendOtpResponseSchema>;
