import { z } from 'zod';

export const ResetPasswordSchema = z
  .object({
    token: z.string().min(1, 'Token is required'),
    password: z
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, {
        message:
          'Password must be at least 8 characters and include uppercase, lowercase, number, and special character',
      }),
    confirm_password: z
      .string()
      .min(1, 'Confirm password is required')
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, {
        message:
          'Password must be at least 8 characters and include uppercase, lowercase, number, and special character',
      }),
  })
  .refine((data): boolean => data.password === data.confirm_password, {
    message: 'Passwords does not match',
    path: ['confirm_password'],
  });

export type ResetPasswordDto = z.infer<typeof ResetPasswordSchema>;
