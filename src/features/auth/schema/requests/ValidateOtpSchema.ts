import { z } from 'zod';

export const ValidateOtpSchema = z.object({
  otp: z.string().length(6, 'OTP must be exactly 6 characters long'),
  token: z.string().min(1, 'Invalid token'),
});

export type ValidateOtpDto = z.infer<typeof ValidateOtpSchema>;
