import { z } from 'zod';

export const UpdateUserSchema = z.object({
  // TODO: define request schema
});

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
