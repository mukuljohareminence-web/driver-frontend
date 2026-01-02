'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = { hasError: false };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(_error: Error): void {
    // TODO: report errors to logging/monitoring service
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="p-8">
          <h2 className="text-lg font-semibold">Something went wrong</h2>
          <p className="text-sm text-muted-foreground">
            // TODO: render a custom error fallback
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
