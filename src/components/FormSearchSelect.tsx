'use client';

import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Controller, useWatch, type FieldValues } from 'react-hook-form';
import { useSelectSearch } from '@/shared/hooks/useSelectSearch';
import type { FormSearchSelectProps } from './interface';

export function FormSearchSelect<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder = 'Select...',
  fetchUrl,
  selectedId,
  open,
}: FormSearchSelectProps<TFieldValues>): React.JSX.Element {
  const watchedValue = useWatch({
    control,
    name,
  }) as unknown as number | undefined;

  const effectiveSelectedId =
    selectedId !== undefined ? selectedId : watchedValue;

  const { search, setSearch, options, loading, error, reload } =
    useSelectSearch(fetchUrl, effectiveSelectedId);

  React.useEffect(() => {
    if (open ?? true) reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            <Select
              {...(field.value ? { value: String(field.value) } : {})}
              onValueChange={(val) => {
                const numericValue =
                  val === '' ? undefined : Number.parseInt(val, 10);
                field.onChange(numericValue);
              }}
              onOpenChange={(isOpen) => {
                if (isOpen) reload();
                if (!isOpen) setSearch('');
              }}
            >
              <SelectTrigger
                className={`w-full min-w-0 overflow-hidden ${fieldState.error ? 'border-red-500' : ''}`}
              >
                <div className="flex w-full min-w-0 overflow-hidden">
                  <SelectValue
                    placeholder={placeholder}
                    className="truncate w-full"
                  />
                </div>
              </SelectTrigger>

              <SelectContent className="w-[var(--radix-select-trigger-width)]">
                <div className="p-2">
                  <Input
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-8"
                  />
                </div>

                {!!error && !loading && (
                  <div className="px-2 py-1 text-sm text-red-500 text-center">
                    Error fetching options
                  </div>
                )}

                {loading && (
                  <div className="px-2 py-1 text-sm text-muted-foreground">
                    Loading...
                  </div>
                )}

                {!loading &&
                  options?.map((opt) => (
                    <SelectItem key={opt.id} value={String(opt.id)}>
                      {opt.name}
                    </SelectItem>
                  ))}

                {!loading && options?.length === 0 && !error && (
                  <div className="px-2 py-2 text-sm text-muted-foreground text-center">
                    No results found
                  </div>
                )}
              </SelectContent>
            </Select>

            {fieldState.error?.message && (
              <p className="text-red-600 text-sm">
                {String(fieldState.error.message)}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
}
