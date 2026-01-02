import { z } from 'zod';

export const SafeUserSchema = z.object({
  id: z.string(),
  phoneNumber: z.string().nullable().optional(),
  email: z.string(),
  name: z.string(),
  hashedOtp: z.string().nullable().optional(),
  otpExpiresAt: z.string().nullable().optional(),
  role: z.number(),
  status: z.number(),
  totalPoints: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  tierId: z.string(),
});

export type SafeUser = z.infer<typeof SafeUserSchema>;

export enum UserRoles {
  DRIVER = 1,
  ADMIN = 2,
  SUPER_ADMIN = 3,
}

export enum UserStatus {
  UNVERIFIED = 0,
  ACTIVE = 1,
  INACTIVE = 2,
  SUSPENDED = 3,
}
