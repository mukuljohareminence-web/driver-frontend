'use client';
import api from '@/shared/lib/apiClient';
import type { AxiosResponse } from 'axios';
import type { AuthResponseTypes } from '../schema/responses';
import type { AuthFormsData } from '../schema/requests';

export async function signupRequest(
  credentials: typeof AuthFormsData.signup.type,
): Promise<AuthResponseTypes['SignupResponse']> {
  const res: AxiosResponse<AuthResponseTypes['SignupResponse']> =
    await api.post('/auth/signup', credentials);

  return res.data;
}

export async function loginRequest(
  credentials: typeof AuthFormsData.login.type,
): Promise<AuthResponseTypes['LoginResponse']> {
  const res: AxiosResponse<AuthResponseTypes['LoginResponse']> =
    await api.post('/auth/login', credentials);

  return res.data;
}

export async function verifyOtpTokenRequest(
  credentials: typeof AuthFormsData.verifyOtpToken.type,
): Promise<AuthResponseTypes['VerifyOtpTokenResponse']> {
  const res: AxiosResponse<AuthResponseTypes['VerifyOtpTokenResponse']> =
    await api.post('/auth/verify-otp-token', credentials);

  return res.data;
}

export async function resendOtpRequest(
  credentials: typeof AuthFormsData.resendOtp.type,
): Promise<AuthResponseTypes['ResendOtpResponse']> {
  const res: AxiosResponse<AuthResponseTypes['ResendOtpResponse']> =
    await api.post('/auth/resend-otp', credentials);

  return res.data;
}

export async function validateOtpRequest(
  credentials: typeof AuthFormsData.validateOtp.type,
): Promise<AuthResponseTypes['ValidateOtpResponse']> {
  const res: AxiosResponse<AuthResponseTypes['ValidateOtpResponse']> =
    await api.post('/auth/validate-otp', credentials);

  return res.data;
}

export async function logoutRequest(): Promise<
  AuthResponseTypes['MessageResponse']
> {
  const res: AxiosResponse<AuthResponseTypes['MessageResponse']> =
    await api.post('/auth/logout');

  return res.data;
}

export async function generateOtpTokenRequest(
  credentials: typeof AuthFormsData.generateOtpToken.type,
): Promise<AuthResponseTypes['SignupResponse']> {
  const res: AxiosResponse<AuthResponseTypes['SignupResponse']> =
    await api.post('/auth/generate-otp-token', credentials);

  return res.data;
}

export async function resetPasswordRequest(
  credentials: typeof AuthFormsData.resetPassword.type,
): Promise<AuthResponseTypes['MessageResponse']> {
  const res: AxiosResponse<AuthResponseTypes['MessageResponse']> =
    await api.post('/auth/reset-password', credentials);

  return res.data;
}
