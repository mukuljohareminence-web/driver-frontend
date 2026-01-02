'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LocationFormsData } from '@/features/users/schema/requests';
import type { LocationResponseTypes } from '@/features/users/schema/responses';
import { updateLocation } from '@/features/users/api';
import { useAppMutation } from '@/features/auth/hooks/useAppMutation';
import { Label } from '@/shared/ui/label';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import {
  defaultLocationFormValues,
  type EditLocationModalProps,
} from '../interface';
import { successToast } from '@/shared/lib/toast';
import { Textarea } from '@/shared/ui/textarea';
import { FormSearchSelect } from '@/components/FormSearchSelect';

export default function EditLocationModal({
  open,
  onOpenChange,
  entity,
  onSuccess,
}: EditLocationModalProps): React.JSX.Element | null {
  const form = useForm<typeof LocationFormsData.update.type>({
    resolver: zodResolver(LocationFormsData.update.schema),
    mode: 'onBlur',
    defaultValues: defaultLocationFormValues,
  });

  React.useEffect(() => {
    if (entity) {
      form.reset({
        name: entity.name,
        description: entity.description,
        parentId: entity.parentId ?? undefined,
      });
    }
  }, [entity, open, form]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const updateLocationMutation = useAppMutation<
    LocationResponseTypes['UpdateLocationResponse'],
    typeof LocationFormsData.update.type
  >({
    mutationFn: (body) => updateLocation(entity!.id, body),
    errorTitle: 'Failed to update location',
    onSuccess: (data) => {
      successToast(data.message);
      onSuccess?.();
      reset();
      onOpenChange(false);
    },
  });

  const onSubmitForm = (data: typeof LocationFormsData.update.type): void => {
    updateLocationMutation.mutate(data);
  };

  if (!entity) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) reset();
        onOpenChange(nextOpen);
      }}
    >
      <DialogContent
        className="sm:max-w-lg"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Edit Location</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input
              {...register('name')}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label>Description</Label>
            <Textarea
              {...register('description')}
              className={`max-h-60 overflow-y-auto ${
                errors.description ? 'border-red-500' : ''
              }`}
            />
            {errors.description && (
              <p className="text-red-600 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <FormSearchSelect
            control={form.control}
            name="parentId"
            label="Parent Location"
            placeholder="Select parent..."
            fetchUrl="/options/locations"
            selectedId={entity.id}
          />

          <Button
            className="w-full mt-4"
            type="submit"
            disabled={updateLocationMutation.isPending}
          >
            Update Location
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
