import { z } from 'zod';

export const CreateUserSchema = z.object({
  // TODO: define request schema
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
