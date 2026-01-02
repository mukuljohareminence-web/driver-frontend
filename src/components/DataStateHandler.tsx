import React from 'react';
import ErrorBox from '@/components/ErrorBox';
import { GlobalLoader } from './GlobalLoader';
import type { DataStateHandlerProps } from './interface';

export function DataStateHandler<T>({
  isPending,
  isError,
  error,
  data,
  isEmpty,
  emptyMessage = 'No data available.',
  children,
  loadingComponent,
  errorComponent,
  emptyComponent,
}: DataStateHandlerProps<T>): React.JSX.Element | null {
  // Loading state
  if (isPending) {
    return <>{loadingComponent || <GlobalLoader />}</>;
  }

  // Error state
  if (isError && error) {
    return (
      <>
        {errorComponent ? (
          errorComponent(error)
        ) : (
          <ErrorBox response={error.response} />
        )}
      </>
    );
  }

  // No data
  if (!data) {
    return (
      <>
        {emptyComponent || <p className="text-gray-400 mt-4">{emptyMessage}</p>}
      </>
    );
  }

  // Data is empty using custom isEmpty function
  if (isEmpty?.(data)) {
    return (
      <>
        {emptyComponent || <p className="text-gray-400 mt-4">{emptyMessage}</p>}
      </>
    );
  }

  // Render children with data
  return <>{children(data)}</>;
}
