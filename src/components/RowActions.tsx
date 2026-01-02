'use client';

import React from 'react';
import { Button } from '@/shared/ui/button';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import type { RowActionsProps } from './interface';

export function RowActions<T>({
  entity,
  onView,
  onEdit,
  onDelete,
  canView = true,
  canEdit = true,
  canDelete = true,
}: RowActionsProps<T>): React.JSX.Element {
  return (
    <div className="flex items-center gap-1">
      {canView && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => onView?.(entity)}
        >
          <Eye className="h-4 w-4" />
        </Button>
      )}

      {canEdit && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => onEdit?.(entity)}
        >
          <Pencil className="h-4 w-4" />
        </Button>
      )}

      {canDelete && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-red-600 hover:text-red-700"
          onClick={() => onDelete?.(entity)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
