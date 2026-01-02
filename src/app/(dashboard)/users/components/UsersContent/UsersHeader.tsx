import React from 'react';
import { useAbility } from '@/features/auth/hooks/useAbility';
import { Actions } from '@/features/auth/ability/actions';
import { Subjects } from '@/features/auth/ability/subject';
import SmartCaller from '@/widgets/smart-caller';

export const LocationsHeader = React.memo(function LocationsHeader({
  onCreate,
}: {
  onCreate: () => void;
}) {
  const ability = useAbility();

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-semibold mb-4">Locations</h2>
      <SmartCaller.DefaultButton
        onClick={onCreate}
        can={ability?.can(Actions.Create, Subjects.Locations)}
      >
        Create Location
      </SmartCaller.DefaultButton>
    </div>
  );
});
