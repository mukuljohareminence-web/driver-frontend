'use client';

import { useCallback, useState } from 'react';
import type { OptionItem, UseSelectSearchResult } from './interface';

export function useSelectSearch(
  _fetchUrl: string,
  _selectedId?: number,
): UseSelectSearchResult {
  const [search, setSearch] = useState('');
  const [options] = useState<OptionItem[]>([]);
  const [loading] = useState(false);
  const [error] = useState<unknown>(null);

  const reload = useCallback(async (): Promise<unknown> => {
    // TODO: fetch options from API using search and selectedId
    return Promise.resolve();
  }, []);

  return { search, setSearch, options, loading, error, reload };
}
