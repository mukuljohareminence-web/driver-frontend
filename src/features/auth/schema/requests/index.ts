import { withType } from '@/features/CommonSchemaHelper';
import { LoginSchema, type LoginDto } from './LoginSchema';
import { SignupSchema, type SignupDto } from './SignupSchema';
import {
  VerifyOtpTokenSchema,
  type VerifyOtpTokenDto,
} from './VerifyOtpTokenSchema';
import { ResendOtpSchema, type ResendOtpDto } from './ResendOtpSchema';
import { ValidateOtpSchema, type ValidateOtpDto } from './ValidateOtpSchema';
import {
  ForgotPasswordSchema,
  type ForgotPasswordDto,
} from './ForgotPasswordSchema';
import {
  GenerateOtpTokenSchema,
  type GenerateOtpTokenDto,
} from './GenerateOtpTokenSchema';
import { ResetPasswordSchema, type ResetPasswordDto } from './ResetPasswordSchema';

export const AuthFormsData = {
  login: {
    schema: LoginSchema,
    type: withType<LoginDto>(),
  },
  signup: {
    schema: SignupSchema,
    type: withType<SignupDto>(),
  },
  verifyOtpToken: {
    schema: VerifyOtpTokenSchema,
    type: withType<VerifyOtpTokenDto>(),
  },
  resendOtp: {
    schema: ResendOtpSchema,
    type: withType<ResendOtpDto>(),
  },
  validateOtp: {
    schema: ValidateOtpSchema,
    type: withType<ValidateOtpDto>(),
  },
  forgotPassword: {
    schema: ForgotPasswordSchema,
    type: withType<ForgotPasswordDto>(),
  },
  generateOtpToken: {
    schema: GenerateOtpTokenSchema,
    type: withType<GenerateOtpTokenDto>(),
  },
  resetPassword: {
    schema: ResetPasswordSchema,
    type: withType<ResetPasswordDto>(),
  },
};
