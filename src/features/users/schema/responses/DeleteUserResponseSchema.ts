import { z } from 'zod';

export const DeleteUserResponseSchema = z.object({
  // TODO: define response schema
});

export type DeleteUserResponse = z.infer<typeof DeleteUserResponseSchema>;
