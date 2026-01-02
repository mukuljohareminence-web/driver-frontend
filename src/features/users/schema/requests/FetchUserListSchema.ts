import { z } from 'zod';

export const FetchUserListSchema = z.object({
  // TODO: define request schema
});

export type FetchUserListDto = z.infer<typeof FetchUserListSchema>;
