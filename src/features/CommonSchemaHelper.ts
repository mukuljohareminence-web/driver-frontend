import { z } from 'zod';

export const withType = <T>(): T => {
  return {} as T;
};

// TODO: add shared schema helpers if needed for the new project.
export const EmptySchema = z.object({});
export type EmptyDto = z.infer<typeof EmptySchema>;
