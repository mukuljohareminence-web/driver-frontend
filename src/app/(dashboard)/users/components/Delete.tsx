'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/shared/ui/dialog';
import { Button } from '@/shared/ui/button';
import { X } from 'lucide-react';
import type { ILocation } from '@/entities/location/model';
import { deleteLocation } from '@/features/users/api';
import type { LocationResponseTypes } from '@/features/users/schema/responses';
import { useAppMutation } from '@/features/auth/hooks/useAppMutation';
import { errorToast, successToast } from '@/shared/lib/toast';
import type { DeleteLocationModalProps } from '../interface';

export default function DeleteLocationModal({
  open,
  onOpenChange,
  entity,
  onSuccess,
}: DeleteLocationModalProps): React.JSX.Element | null {
  const confirmDelete = (entity: ILocation): void => {
    onOpenChange(false);
    deleteLocationMutation.mutate(entity.id);
  };

  const deleteLocationMutation = useAppMutation<
    LocationResponseTypes['DeleteLocationResponse'],
    number
  >({
    mutationFn: deleteLocation,
    errorTitle: 'Failed to delete location',
    onSuccess: (data) => {
      if (data.data.deleted) {
        successToast(data.message);
        onSuccess?.();
      } else {
        errorToast('Failed to delete location');
      }
      onOpenChange(false);
    },
  });

  if (!entity) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Delete Location</DialogTitle>
          <DialogClose className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </DialogClose>
        </DialogHeader>

        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete{' '}
            <span className="font-semibold">{entity.name}</span>? <br />
            This action cannot be undone.
          </p>
        </div>

        <DialogFooter className="flex justify-end space-x-2">
          <Button
            variant="outline"
            type="button"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            type="button"
            onClick={() => confirmDelete(entity)}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
