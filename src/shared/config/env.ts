import { z } from 'zod';

const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z
    .string()
    .min(1, 'NEXT_PUBLIC_API_BASE_URL is required')
    .refine(
      (value): boolean =>
        value.startsWith('/') || z.string().url().safeParse(value).success,
      'NEXT_PUBLIC_API_BASE_URL must be a valid URL or relative path',
    ),
  NEXT_PUBLIC_APP_ENV: z.enum(['development', 'staging', 'production']),
  NEXT_PUBLIC_WS_URL: z
    .url('NEXT_PUBLIC_WS_URL must be a valid URL')
    .min(1, 'NEXT_PUBLIC_WS_URL is required'),
});

function parseEnv<T extends z.ZodTypeAny>(
  schema: T,
  values: Record<string, unknown>,
): z.infer<T> {
  const result = schema.safeParse(values);

  if (!result.success) {
    const formatted = result.error.issues
      .map((issue): string => `• ${issue.path.join('.')}: ${issue.message}`)
      .join('\n');

    throw new Error(
      `Invalid environment configuration:\n${formatted}\n\nFix your .env file.`,
    );
  }

  return result.data;
}

export const env = parseEnv(clientEnvSchema, {
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL,
});

// TODO: add server-only env parsing if needed.
