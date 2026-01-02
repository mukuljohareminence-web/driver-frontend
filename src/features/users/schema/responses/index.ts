import type { z } from 'zod';
import {
  CreateUserResponseSchema,
  type CreateUserResponse,
} from './CreateUserResponseSchema';
import {
  UpdateUserResponseSchema,
  type UpdateUserResponse,
} from './UpdateUserResponseSchema';
import {
  DeleteUserResponseSchema,
  type DeleteUserResponse,
} from './DeleteUserResponseSchema';
import {
  UserListResponseSchema,
  type UserListResponse,
} from './UserListResponseSchema';

export const UserResponseSchemas = {
  CreateUserResponseSchema,
  UpdateUserResponseSchema,
  DeleteUserResponseSchema,
  UserListResponseSchema,
} as const satisfies Record<string, z.ZodTypeAny>;

export interface UserResponseTypes {
  CreateUserResponse: CreateUserResponse;
  UpdateUserResponse: UpdateUserResponse;
  DeleteUserResponse: DeleteUserResponse;
  UserListResponse: UserListResponse;
}

// Stub LocationResponseTypes for build compatibility
export interface LocationResponseTypes {
  CreateLocationResponse: {
    message: string;
  };
  UpdateLocationResponse: {
    message: string;
  };
  DeleteLocationResponse: {
    message: string;
    data: {
      deleted: boolean;
    };
  };
  LocationListResponse: {
    data: unknown[];
    total: number;
  };
}
