import { normalizeError } from '@/shared/lib/errorHandler';
import { errorToast } from '@/shared/lib/toast';
import type { ApiError } from '@/shared/types/api-response';
import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
} from '@tanstack/react-query';
import { HttpStatusCode } from 'axios';

type AppMutationOptions<TData = unknown, TVariables = void> = Omit<
  UseMutationOptions<TData, ApiError, TVariables>,
  'onError'
> & {
  onError?: (error: ApiError) => void;
  errorTitle?: string;
  skipDefaultErrorHandling?: boolean;
};

export function useAppMutation<TData = unknown, TVariables = void>(
  options: AppMutationOptions<TData, TVariables>,
): UseMutationResult<TData, ApiError, TVariables> {
  const {
    onError,
    errorTitle = 'Operation Failed',
    skipDefaultErrorHandling = false,
    ...restOptions
  } = options;

  return useMutation<TData, ApiError, TVariables>({
    ...restOptions,
    onError: (error, _variables, _context): void => {
      if (error.response?.status === HttpStatusCode.Unauthorized) {
        if (onError) onError(error);
        return;
      }

      if (!skipDefaultErrorHandling) {
        const { message } = normalizeError(error);
        errorToast(errorTitle, message);
      }

      if (onError) onError(error);
    },
  });
}
