import type { z } from 'zod';
import { LoginResponseSchema, type LoginResponse } from './LoginResponseSchema';
import {
  SignupResponseSchema,
  type SignupResponse,
} from './SignupResponseSchema';
import {
  VerifyOtpTokenResponseSchema,
  type VerifyOtpTokenResponse,
} from './VerifyOtpTokenResponseSchema';
import {
  ResendOtpResponseSchema,
  type ResendOtpResponse,
} from './ResendOtpResponseSchema';
import {
  ValidateOtpResponseSchema,
  type ValidateOtpResponse,
} from './ValidateOtpResponseSchema';
import {
  MessageResponseSchema,
  type MessageResponse,
} from './MessageResponseSchema';
import type { SuccessResponse } from '@/shared/types/api-response';

export const AuthResponseSchemas = {
  LoginResponseSchema,
  SignupResponseSchema,
  VerifyOtpTokenResponseSchema,
  ResendOtpResponseSchema,
  ValidateOtpResponseSchema,
  MessageResponseSchema,
} as const satisfies Record<string, z.ZodTypeAny>;

export interface AuthResponseTypes {
  LoginResponse: SuccessResponse<LoginResponse>;
  SignupResponse: SuccessResponse<SignupResponse>;
  VerifyOtpTokenResponse: SuccessResponse<VerifyOtpTokenResponse>;
  ResendOtpResponse: SuccessResponse<ResendOtpResponse>;
  ValidateOtpResponse: SuccessResponse<ValidateOtpResponse>;
  MessageResponse: SuccessResponse<MessageResponse>;
}
