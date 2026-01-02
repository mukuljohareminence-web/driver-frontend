import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export function withBoundary<TProps extends Record<string, unknown>>(
  Component: React.ComponentType<TProps>,
): React.FC<TProps> {
  const Wrapped: React.FC<TProps> = (props): React.JSX.Element => (
    <ErrorBoundary>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Component {...(props as any)} />
    </ErrorBoundary>
  );

  return Wrapped;
}
