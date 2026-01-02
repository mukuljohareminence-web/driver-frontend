import axios, {
  HttpStatusCode,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';
// import { env } from '@/shared/config/env';
import type { ApiError } from '../types/api-response';

export const api = axios.create({
  baseURL: 'https://codeless-stan-concurrently.ngrok-free.dev/api',
  withCredentials: true,
  // timeout: 10_000,
});

let isRefreshing = false;
let failedQueue: ((tokenRefreshed: boolean) => void)[] = [];

const processQueue = (tokenRefreshed: boolean): void => {
  failedQueue.forEach((cb): void => cb(tokenRefreshed));
  failedQueue = [];
};

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: ApiError): Promise<AxiosResponse> => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.code === 'ECONNABORTED') {
      return Promise.reject(
        error instanceof Error ? error : new Error(String(error)),
      );
    }

    if (!error.response) {
      return Promise.reject(
        error instanceof Error ? error : new Error(String(error)),
      );
    }

    const isUnauthorized =
      // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
      error.response.status === HttpStatusCode.Unauthorized;
    const authBypassRoutes = [
      '/auth/login',
      '/auth/refresh',
      '/auth/signup',
      '/auth/validate-otp',
      '/auth/verify-otp-token',
      '/auth/resend-otp',
    ];
    const shouldBypassRefresh =
      !!originalRequest.url &&
      authBypassRoutes.some((route): boolean | undefined =>
        originalRequest.url?.includes(route),
      );

    if (isUnauthorized && !originalRequest._retry && !shouldBypassRefresh) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject): void => {
          failedQueue.push((tokenRefreshed): void => {
            if (!tokenRefreshed) {
              reject(error instanceof Error ? error : new Error(String(error)));
              return;
            }

            void (async (): Promise<void> => {
              try {
                const res = await api(originalRequest);
                resolve(res);
              } catch (err: unknown) {
                reject(err instanceof Error ? err : new Error(String(err)));
              }
            })();
          });
        });
      }

      isRefreshing = true;

      try {
        await api.post('/auth/refresh', {}, { withCredentials: true });
        isRefreshing = false;
        processQueue(true);
        return api(originalRequest);
      } catch (refreshErr: unknown) {
        isRefreshing = false;
        processQueue(false);

        try {
          await api.post('/auth/logout');
        } catch (err) {
          console.warn(err);
        }

        window.location.href = '/login?session=true';

        return Promise.reject(
          refreshErr instanceof Error
            ? refreshErr
            : new Error(String(refreshErr)),
        );
      }
    }

    return Promise.reject(
      error instanceof Error ? error : new Error(String(error)),
    );
  },
);

export default api;
