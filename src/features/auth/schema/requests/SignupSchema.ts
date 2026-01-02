import { z } from 'zod';

export const SignupSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Email is required')
      .pipe(z.email('Email is invalid')),
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters'),
    password: z
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
        message:
          'Password must include uppercase, lowercase, number, and special character',
      })
      .min(8, 'Password must be at least 8 characters'),
    confirm_password: z.string(),
  })
  .refine((data): boolean => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });

export type SignupDto = z.infer<typeof SignupSchema>;
