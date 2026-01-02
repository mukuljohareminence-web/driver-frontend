// Stub interface exports for build compatibility
export enum ModalForms {
  Create = 'create',
  Edit = 'edit',
  View = 'view',
  Delete = 'delete',
}

export interface EntityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export interface EditEntityModalProps<T> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entity: T | null;
  onSuccess?: () => void;
}

export interface ViewEntityModalProps<T> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entity: T | null;
}

export interface DeleteEntityModalProps<T> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entity: T | null;
  onSuccess?: () => void;
}

export interface EntityCrudModalProps<T> {
  modalType: ModalForms | null;
  closeModal: () => void;
  refetchEntityData: () => void | Promise<void>;
  selectedEntity: T | null;
}

export interface EntityTableProps<T> {
  rows: T[];
  onView: (entity: T) => void;
  onEdit: (entity: T) => void;
  onDelete: (entity: T) => void;
}

export interface EntityRowProps<T> {
  entity: T;
  onView: (entity: T) => void;
  onEdit: (entity: T) => void;
  onDelete: (entity: T) => void;
}
