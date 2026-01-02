import React from 'react';
import { formatDate } from '@/shared/lib/utils';
import { useAbility } from '@/features/auth/hooks/useAbility';
import { Actions } from '@/features/auth/ability/actions';
import { Subjects } from '@/features/auth/ability/subject';
import SmartCaller from '@/widgets/smart-caller';
import { RowActions } from '@/components/RowActions';
import type { LocationRowProps } from '../../interface';

export const LocationRow = React.memo(function LocationRow({
  entity,
  onView,
  onEdit,
  onDelete,
}: LocationRowProps): React.JSX.Element {
  const ability = useAbility();

  return (
    <tr>
      <SmartCaller.TableCell className="text-gray-900">
        {entity.id}
      </SmartCaller.TableCell>
      <SmartCaller.TableCell className="font-medium text-gray-900">
        {entity.name}
      </SmartCaller.TableCell>
      <SmartCaller.TableCell>{entity.description}</SmartCaller.TableCell>
      <SmartCaller.TableCell>{entity.siteName}</SmartCaller.TableCell>
      <SmartCaller.TableCell>{entity.parentName ?? '—'}</SmartCaller.TableCell>
      <SmartCaller.TableCell>
        {formatDate(entity.createdAt)}
      </SmartCaller.TableCell>
      <SmartCaller.TableCell>
        {formatDate(entity.updatedAt)}
      </SmartCaller.TableCell>
      <SmartCaller.TableCell>
        <RowActions
          entity={entity}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
          canView={ability?.can(Actions.Read, Subjects.Locations)}
          canEdit={ability?.can(Actions.Update, Subjects.Locations)}
          canDelete={ability?.can(Actions.Delete, Subjects.Locations)}
        />
      </SmartCaller.TableCell>
    </tr>
  );
});
