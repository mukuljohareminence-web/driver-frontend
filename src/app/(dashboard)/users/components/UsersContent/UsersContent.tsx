'use client';

import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Paginate } from '@/components/Paginate';
import { fetchLocationsList } from '@/features/users/api';
import LocationsTable from './Table';
import { usePagination } from '@/shared/hooks/usePagination';
import { useModalEntity } from '@/shared/hooks/useModalEntity';
import type { ILocation } from '@/entities/location/model';
import { DataStateHandler } from '@/components/DataStateHandler';
import type { ApiError } from '@/shared/types/api-response';
import { LocationsHeader } from './UsersHeader';
import LocationCrudModal from './UserCrudModal';

export default function LocationsContent(): React.JSX.Element {
  const { page, limit, handlePageChange, handleLimitChange } = usePagination();
  const queryClient = useQueryClient();

  const {
    modalType,
    selectedEntity: selectedLocation,
    openCreate,
    openView,
    openEdit,
    openDelete,
    closeModal,
  } = useModalEntity<ILocation>();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['locations', page, limit],
    queryFn: () => fetchLocationsList({ page, limit }),
  });

  const refetchLocations = React.useCallback(async (): Promise<void> => {
    await queryClient.invalidateQueries({ queryKey: ['locations'] });
  }, [queryClient]);

  return (
    <>
      <LocationCrudModal
        modalType={modalType}
        closeModal={closeModal}
        refetchEntityData={refetchLocations}
        selectedEntity={selectedLocation}
      />

      <div className="flex flex-col gap-6">
        <LocationsHeader onCreate={openCreate} />

        <DataStateHandler
          isPending={isLoading}
          isError={isError}
          error={error as ApiError}
          data={data}
          isEmpty={(res) => (res.data ?? []).length === 0}
        >
          {(res) => {
            const rows = (res.data ?? []) as ILocation[];
            const pagination = res.options?.pagination;

            return (
              <>
                <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
                  <LocationsTable
                    rows={rows}
                    onView={openView}
                    onEdit={openEdit}
                    onDelete={openDelete}
                  />
                </div>

                {pagination && (
                  <div className="flex justify-end">
                    <Paginate
                      page={page}
                      limit={limit}
                      total={pagination.total}
                      totalPages={pagination.totalPages}
                      onChange={handlePageChange}
                      onLimitChange={handleLimitChange}
                    />
                  </div>
                )}
              </>
            );
          }}
        </DataStateHandler>
      </div>
    </>
  );
}
