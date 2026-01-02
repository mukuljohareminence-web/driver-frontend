import { z } from 'zod';

export const ResendOtpSchema = z.object({
  token: z.string().min(1, 'Token is required'),
});

export type ResendOtpDto = z.infer<typeof ResendOtpSchema>;
