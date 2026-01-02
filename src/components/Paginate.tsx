'use client';

import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/pagination';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import type { PaginateProps } from './interface';

export const Paginate = React.memo(function Paginate({
  page,
  limit,
  totalPages,
  onChange,
  onLimitChange,
}: PaginateProps): React.JSX.Element {
  if (totalPages <= 1 && !limit) return <></>;

  const pagesToShow = getVisiblePages(page, totalPages);

  return (
    <div className="flex items-center gap-4 p-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Rows:</span>

        <Select
          value={String(limit)}
          onValueChange={(val): void => {
            onLimitChange(Number(val));
            onChange(1);
          }}
        >
          <SelectTrigger className="w-20 border-gray-300">
            <SelectValue placeholder={limit} />
          </SelectTrigger>

          <SelectContent>
            {[10, 20, 50, 100].map((value) => (
              <SelectItem key={value} value={String(value)}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              aria-disabled={page === 1}
              className={page === 1 ? 'pointer-events-none opacity-50' : ''}
              onClick={() => page > 1 && onChange(page - 1)}
            />
          </PaginationItem>

          {pagesToShow.map((p, idx) =>
            p === 'ellipsis' ? (
              <PaginationItem key={`ellipsis-${idx}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={p}>
                <PaginationLink
                  isActive={p === page}
                  onClick={() => onChange(p)}
                  className="cursor-pointer"
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ),
          )}

          <PaginationItem>
            <PaginationNext
              aria-disabled={page === totalPages}
              className={
                page === totalPages ? 'pointer-events-none opacity-50' : ''
              }
              onClick={() => page < totalPages && onChange(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
});

function getVisiblePages(
  page: number,
  totalPages: number,
): (number | 'ellipsis')[] {
  const pages: (number | 'ellipsis')[] = [];

  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  pages.push(1);

  if (page > 4) pages.push('ellipsis');

  const start = Math.max(2, page - 1);
  const end = Math.min(totalPages - 1, page + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (page < totalPages - 3) pages.push('ellipsis');

  pages.push(totalPages);

  return pages;
}
