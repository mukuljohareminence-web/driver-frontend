import { HttpStatusCode, type AxiosError } from 'axios';
import type { ErrorResponse } from '@/shared/types/api-response';

export interface NormalizedError {
  title: string;
  message: string;
  statusCode?: number;
}

function isAxiosError<T = unknown>(error: unknown): error is AxiosError<T> {
  return (
    typeof error === 'object' &&
    error !== null &&
    'isAxiosError' in (error as Record<string, unknown>) &&
    (error as Record<string, unknown>).isAxiosError === true
  );
}

export function normalizeError(error: unknown): NormalizedError {
  if (isAxiosError<ErrorResponse>(error)) {
    const status = error.response?.status;
    const apiMessage = error.response?.data?.message;
    const fallback = error.message || 'Unexpected network error';

    let title = 'Request failed';
    switch (status) {
      case HttpStatusCode.BadRequest:
        title = 'Bad request';
        break;
      case HttpStatusCode.Unauthorized:
        title = 'Unauthorized';
        break;
      case HttpStatusCode.Forbidden:
        title = 'Forbidden';
        break;
      case HttpStatusCode.NotFound:
        title = 'Not found';
        break;
      default:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
        if (status && status >= HttpStatusCode.InternalServerError) {
          title = 'Server error';
        }
    }

    return {
      title,
      message: apiMessage ?? fallback,
      ...(status !== undefined ? { statusCode: status } : {}),
    };
  }

  if (error instanceof Error) {
    return { title: 'Error', message: error.message };
  }

  return { title: 'Error', message: 'An unknown error occurred' };
}
