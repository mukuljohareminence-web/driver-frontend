'use client';

import type { PropsWithChildren } from 'react';
import ErrorBoundary from './ErrorBoundary';

export default function LocalErrorBoundary({
  children,
}: PropsWithChildren): React.JSX.Element {
  // TODO: customize local error boundaries as needed
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
