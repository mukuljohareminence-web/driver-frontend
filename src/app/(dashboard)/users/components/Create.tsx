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
import { Label } from '@/shared/ui/label';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { successToast } from '@/shared/lib/toast';
import { createLocation } from '@/features/users/api';
import { useAppMutation } from '@/features/auth/hooks/useAppMutation';
import {
  type CreateLocationModalProps,
  defaultLocationFormValues,
} from '../interface';
import { Textarea } from '@/shared/ui/textarea';
import { FormSearchSelect } from '@/components/FormSearchSelect';

export default function CreateLocationModal({
  open,
  onOpenChange,
  onSuccess,
}: CreateLocationModalProps): React.JSX.Element {
  const form = useForm<typeof LocationFormsData.create.type>({
    resolver: zodResolver(LocationFormsData.create.schema),
    mode: 'onBlur',
    defaultValues: defaultLocationFormValues,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const createLocationMutation = useAppMutation<
    LocationResponseTypes['CreateLocationResponse'],
    typeof LocationFormsData.create.type
  >({
    mutationFn: createLocation,
    errorTitle: 'Failed to create location',
    onSuccess: (data) => {
      successToast(data.message);
      onSuccess?.();
      reset();
      onOpenChange(false);
    },
  });

  const onSubmitForm = (data: typeof LocationFormsData.create.type): void => {
    createLocationMutation.mutate(data);
  };

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
          <DialogTitle>Create Location</DialogTitle>
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
              className={`max-h-60 overflow-y-auto ${errors.description ? 'border-red-500' : ''}`}
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
            open={open}
          />

          <Button
            className="w-full mt-4"
            type="submit"
            disabled={createLocationMutation.isPending}
          >
            Create Location
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
