import { withType } from '@/features/CommonSchemaHelper';
import {
  type FetchUserListDto,
  FetchUserListSchema,
} from './FetchUserListSchema';
import { type CreateUserDto, CreateUserSchema } from './CreateUserSchema';
import { type UpdateUserDto, UpdateUserSchema } from './UpdateUserSchema';
import { type ViewUserDto, ViewUserSchema } from './ViewUserSchema';
import { z } from 'zod';

export const UserFormsData = {
  fetchList: {
    schema: FetchUserListSchema,
    type: withType<FetchUserListDto>(),
  },
  create: {
    schema: CreateUserSchema,
    type: withType<CreateUserDto>(),
  },
  update: {
    schema: UpdateUserSchema,
    type: withType<UpdateUserDto>(),
  },
  view: {
    schema: ViewUserSchema,
    type: withType<ViewUserDto>(),
  },
};

// Stub LocationFormsData for build compatibility
const LocationCreateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  siteName: z.string().optional(),
  parentName: z.string().optional(),
  parentId: z.number().optional(),
});
const LocationUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  siteName: z.string().optional(),
  parentName: z.string().optional(),
  parentId: z.number().optional(),
});
const LocationViewSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  siteName: z.string().optional(),
  parentName: z.string().optional(),
  parentId: z.number().optional(),
});
const LocationFetchListSchema = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
});

export const LocationFormsData = {
  create: {
    schema: LocationCreateSchema,
    type: withType<z.infer<typeof LocationCreateSchema>>(),
  },
  update: {
    schema: LocationUpdateSchema,
    type: withType<z.infer<typeof LocationUpdateSchema>>(),
  },
  view: {
    schema: LocationViewSchema,
    type: withType<z.infer<typeof LocationViewSchema>>(),
  },
  fetchList: {
    schema: LocationFetchListSchema,
    type: withType<z.infer<typeof LocationFetchListSchema>>(),
  },
};
