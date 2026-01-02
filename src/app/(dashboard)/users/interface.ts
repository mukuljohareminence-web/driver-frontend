import type {
  DeleteEntityModalProps,
  EditEntityModalProps,
  EntityCrudModalProps,
  EntityModalProps,
  EntityRowProps,
  EntityTableProps,
  ViewEntityModalProps,
} from '@/app/interface';
import type { ILocation } from '@/entities/location/model';

export const defaultLocationFormValues = {
  name: '',
  description: '',
  parentId: undefined,
};

export type CreateLocationModalProps = EntityModalProps;
export type EditLocationModalProps = EditEntityModalProps<ILocation>;
export type ViewLocationModalProps = ViewEntityModalProps<ILocation>;
export type DeleteLocationModalProps = DeleteEntityModalProps<ILocation>;
export type LocationCrudModalProps = EntityCrudModalProps<ILocation>;
export type LocationsTableProps = EntityTableProps<ILocation>;
export type LocationRowProps = EntityRowProps<ILocation>;
