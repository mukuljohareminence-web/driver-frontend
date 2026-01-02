'use client';

import { useState } from 'react';
import { ModalForms } from '@/app/interface';

export function useModalEntity<T>(): {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  entity: T | null;
  setEntity: (entity: T | null) => void;
  modalType: ModalForms | null;
  selectedEntity: T | null;
  openCreate: () => void;
  openView: (entity: T) => void;
  openEdit: (entity: T) => void;
  openDelete: (entity: T) => void;
  closeModal: () => void;
} {
  const [isOpen, setIsOpen] = useState(false);
  const [entity, setEntity] = useState<T | null>(null);
  const [modalType, setModalType] = useState<ModalForms | null>(null);

  const openCreate = (): void => {
    setModalType(ModalForms.Create);
    setEntity(null);
    setIsOpen(true);
  };

  const openView = (selectedEntity: T): void => {
    setModalType(ModalForms.View);
    setEntity(selectedEntity);
    setIsOpen(true);
  };

  const openEdit = (selectedEntity: T): void => {
    setModalType(ModalForms.Edit);
    setEntity(selectedEntity);
    setIsOpen(true);
  };

  const openDelete = (selectedEntity: T): void => {
    setModalType(ModalForms.Delete);
    setEntity(selectedEntity);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setModalType(null);
    setEntity(null);
  };

  return {
    isOpen,
    setIsOpen,
    entity,
    setEntity,
    modalType,
    selectedEntity: entity,
    openCreate,
    openView,
    openEdit,
    openDelete,
    closeModal,
  };
}
