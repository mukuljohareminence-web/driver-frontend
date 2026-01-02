import { z } from 'zod';

export const LoginSchema = z.object({
  // email: z.email('Email is not valid'),
  email: z.string(),
  password: z.string(),
  // .min(8, 'Password must be at least 8 characters')
  // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
  //   message:
  //     'Password must include uppercase, lowercase, number, and special character',
  // }),
});

export type LoginDto = z.infer<typeof LoginSchema>;
