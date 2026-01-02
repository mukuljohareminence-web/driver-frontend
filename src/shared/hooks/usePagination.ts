'use client';

import { useState } from 'react';
import type { UsePaginationOptions, UsePaginationReturn } from './interface';

export function usePagination(
  options: UsePaginationOptions = {},
): UsePaginationReturn {
  const { initialPage = 1, initialLimit = 10 } = options;
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);

  const handlePageChange = (newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number): void => {
    setLimit(newLimit);
  };

  return {
    page,
    limit,
    setPage,
    setLimit,
    handlePageChange,
    handleLimitChange,
  };
}
