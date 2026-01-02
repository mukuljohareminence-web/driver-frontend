import { z } from 'zod';

export const CreateUserResponseSchema = z.object({
  // TODO: define response schema
});

export type CreateUserResponse = z.infer<typeof CreateUserResponseSchema>;
