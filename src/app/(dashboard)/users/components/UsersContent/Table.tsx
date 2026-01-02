import React from 'react';
import SmartCaller from '@/widgets/smart-caller';
import { LocationRow } from './UserRow';
import type { LocationsTableProps } from '../../interface';
import type { ILocation } from '@/entities/location/model';

function LocationsTable({
  rows,
  onView,
  onEdit,
  onDelete,
}: LocationsTableProps): React.JSX.Element {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <SmartCaller.TableHeader>ID</SmartCaller.TableHeader>
          <SmartCaller.TableHeader>Name</SmartCaller.TableHeader>
          <SmartCaller.TableHeader>Description</SmartCaller.TableHeader>
          <SmartCaller.TableHeader>Site Name</SmartCaller.TableHeader>
          <SmartCaller.TableHeader>Parent Name</SmartCaller.TableHeader>
          <SmartCaller.TableHeader>Created At</SmartCaller.TableHeader>
          <SmartCaller.TableHeader>Updated At</SmartCaller.TableHeader>
          <SmartCaller.TableHeader>Actions</SmartCaller.TableHeader>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-100">
        {rows.map((location: ILocation) => (
          <LocationRow
            key={location.id}
            entity={location}
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default React.memo(LocationsTable);
