import React from 'react';
import AnimatedWithAbilityPage from '@/components/AnimatedWithAbility';
import { Actions } from '@/features/auth/ability/actions';
import { Subjects } from '@/features/auth/ability/subject';
import LocationsContent from './components/UsersContent/UsersContent';

export default function LocationsPage(): React.JSX.Element {
  return (
    <AnimatedWithAbilityPage
      action={Actions.Read}
      subject={Subjects.Locations}
      component={LocationsContent}
    />
  );
}
