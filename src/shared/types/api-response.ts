import type { AxiosError } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SuccessResponse<T, O = Record<string, any>> {
  data: T;
  message: string;
  logs?: string;
  options?: O;
  success?: boolean;
}

export interface ErrorResponse {
  message: string;
  error?: string;
  options?: Record<string, unknown>;
  statusCode?: number;
  success?: boolean;
}

export type ApiError = AxiosError<ErrorResponse>;
