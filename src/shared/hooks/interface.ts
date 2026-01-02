export enum DebounceEnum {
  delayInMs = 600,
}

export interface OptionItem {
  id: number;
  name: string;
}

export interface UseSelectSearchResult {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  options: OptionItem[];
  loading: boolean;
  error: unknown;
  reload: () => Promise<unknown>;
}

export interface UsePaginationOptions {
  initialPage?: number;
  initialLimit?: number;
}

export interface UsePaginationReturn {
  page: number;
  limit: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  handlePageChange: (newPage: number) => void;
  handleLimitChange: (newLimit: number) => void;
}
