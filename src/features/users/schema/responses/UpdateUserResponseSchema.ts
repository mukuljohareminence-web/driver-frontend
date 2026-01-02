import { z } from 'zod';

export const UpdateUserResponseSchema = z.object({
  // TODO: define response schema
});

export type UpdateUserResponse = z.infer<typeof UpdateUserResponseSchema>;
