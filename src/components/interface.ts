import type { ApiError } from '@/shared/types/api-response';
import { type Control, type FieldValues, type Path } from 'react-hook-form';
import type { SpinnerProps } from '@/shared/ui/spinner';

export interface AnimatedWithAbilityPageProps {
  action?: string | string[];
  subject?: string;
  component: React.ComponentType;
  can?: boolean;
}

export interface Paginate {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginateProps extends Paginate {
  onChange: (newPage: number) => void;
  onLimitChange: (limit: number) => void;
}

export interface AuthCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export interface DataStateHandlerProps<T> {
  isPending: boolean;
  isError: boolean;
  error: ApiError | null;
  data: T | undefined;
  isEmpty?: (data: T) => boolean;
  emptyMessage?: string;
  children: (data: T) => React.ReactNode;
  loadingComponent?: React.ReactNode;
  errorComponent?: (error: ApiError) => React.ReactNode;
  emptyComponent?: React.ReactNode;
}

export interface FormErrorBoxProps {
  title: string;
  description?: React.ReactNode;
  className?: string;
  timeout?: number;
}

export interface FormSearchSelectProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  placeholder?: string;
  fetchUrl: string;
  selectedId?: number;
  open?: boolean;
}

export interface GlobalLoaderProps {
  fullScreen?: boolean;
  size?: string;
  variant?: SpinnerProps['variant'];
}

export interface RowActionsProps<T> {
  entity: T;
  onView?: (entity: T) => void;
  onEdit?: (entity: T) => void;
  onDelete?: (entity: T) => void;

  canView?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
}
