'use client';

import React from 'react';
import { Provider as ReduxProvider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store';
import { AppProviders } from './AppProviders';
import ErrorBoundary from './ErrorBoundary';
import type { AppDispatch } from '@/store';
import { usePathname, useRouter } from 'next/navigation';
import { PUBLIC_PATHS } from '@/shared/config/routes';
import { meRequest } from '@/features/auth/api/me';
import { normalizeError } from '@/shared/lib/errorHandler';
import { errorToast } from '@/shared/lib/toast';
import { clearUser, setUser } from '@/store/slices/userSlice';

export function RootProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const InitAuth = (): React.JSX.Element | null => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const pathname = usePathname();
    const isPublicRoute = PUBLIC_PATHS.some((path): boolean =>
      pathname.startsWith(path),
    );

    React.useEffect((): void => {
      if (isPublicRoute) return;

      void (async (): Promise<void> => {
        try {
          const res = await meRequest();
          if (res.data.user) dispatch(setUser(res.data.user));
        } catch (err) {
          dispatch(clearUser());
          const { message } = normalizeError(err);
          errorToast('Session expired', message || 'Please login again.');
          router.push('/login?session=true');
        }
      })();
    }, [dispatch, router, isPublicRoute]);

    return null;
  };

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppProviders>
          <ErrorBoundary>
            <InitAuth />
            {children}
          </ErrorBoundary>
        </AppProviders>
      </PersistGate>
    </ReduxProvider>
  );
}
