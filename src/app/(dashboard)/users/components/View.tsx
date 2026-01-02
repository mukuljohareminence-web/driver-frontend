'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { useForm } from 'react-hook-form';
import { Label } from '@/shared/ui/label';
import { Input } from '@/shared/ui/input';
import type { LocationFormsData } from '@/features/users/schema/requests';
import { Textarea } from '@/shared/ui/textarea';
import type { ViewLocationModalProps } from '../interface';

export default function ViewLocationModal({
  open,
  onOpenChange,
  entity,
}: ViewLocationModalProps): React.JSX.Element | null {
  const form = useForm<typeof LocationFormsData.view.type>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      description: '',
      parentName: undefined,
    },
  });

  React.useEffect(() => {
    if (entity) {
      form.reset({
        name: entity.name,
        description: entity.description,
        parentName: entity.parentName ?? undefined,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entity, open]);

  const { register } = form;

  if (!entity) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-lg"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>View Location</DialogTitle>
        </DialogHeader>

        <form className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input readOnly {...register('name')} />
          </div>

          <div>
            <Label>Description</Label>
            <Textarea
              readOnly
              {...register('description')}
              className="max-h-60 overflow-y-auto"
            />
          </div>

          <div>
            <Label>Parent Name</Label>
            <Input readOnly type="textarea" {...register('parentName')} />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
