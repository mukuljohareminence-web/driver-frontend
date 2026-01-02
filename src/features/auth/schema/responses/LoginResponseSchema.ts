import { z } from 'zod';
import { SafeUserSchema } from './SafeUserSchema';

export const LoginResponseSchema = z.object({
  user: SafeUserSchema.optional(),
  message: z.string().optional(),
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
