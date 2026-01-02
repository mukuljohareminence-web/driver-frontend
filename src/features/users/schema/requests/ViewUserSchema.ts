import { z } from 'zod';

export const ViewUserSchema = z.object({
  // TODO: define request schema
});

export type ViewUserDto = z.infer<typeof ViewUserSchema>;
