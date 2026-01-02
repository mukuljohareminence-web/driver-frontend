import React from 'react';
import CreateLocationModal from '../Create';
import { ModalForms } from '@/app/interface';
import ViewLocationModal from '../View';
import EditLocationModal from '../Edit';
import DeleteLocationModal from '../Delete';
import type { LocationCrudModalProps } from '../../interface';

export default function LocationCrudModal({
  modalType,
  closeModal,
  refetchEntityData,
  selectedEntity,
}: LocationCrudModalProps): React.JSX.Element {
  return (
    <React.Fragment>
      <CreateLocationModal
        open={modalType === ModalForms.Create}
        onOpenChange={(open: boolean) => {
          if (!open) closeModal();
        }}
        onSuccess={refetchEntityData}
      />

      <ViewLocationModal
        open={modalType === ModalForms.View}
        onOpenChange={(open: boolean) => {
          if (!open) closeModal();
        }}
        entity={selectedEntity}
      />

      <EditLocationModal
        open={modalType === ModalForms.Edit}
        onOpenChange={(open: boolean) => {
          if (!open) closeModal();
        }}
        entity={selectedEntity}
        onSuccess={refetchEntityData}
      />

      <DeleteLocationModal
        open={modalType === ModalForms.Delete}
        onOpenChange={(open: boolean) => {
          if (!open) closeModal();
        }}
        entity={selectedEntity}
        onSuccess={refetchEntityData}
      />
    </React.Fragment>
  );
}
