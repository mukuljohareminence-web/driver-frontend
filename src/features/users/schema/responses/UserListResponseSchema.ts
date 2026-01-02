import { z } from 'zod';

export const UserListResponseSchema = z.object({
  // TODO: define response schema
});

export type UserListResponse = z.infer<typeof UserListResponseSchema>;
