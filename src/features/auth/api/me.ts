'use client';
import api from '@/shared/lib/apiClient';
import type { AxiosResponse } from 'axios';
import type { AuthResponseTypes } from '../schema/responses';

export async function meRequest(): Promise<AuthResponseTypes['LoginResponse']> {
  const res: AxiosResponse<AuthResponseTypes['LoginResponse']> =
    await api.get('/auth/me');

  return res.data;
}
