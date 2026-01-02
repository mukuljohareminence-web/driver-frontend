'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Smartphone } from 'lucide-react';
import { Card } from '@/shared/ui/card';
import { AnimatedPage } from '@/components/AnimatedPage';
import { Label } from '@/shared/ui/label';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { AuthFormsData } from '@/features/auth/schema/requests';
import { useAppMutation } from '@/features/auth/hooks/useAppMutation';
import { resetPasswordRequest } from '@/features/auth/api';
import type { AuthResponseTypes } from '@/features/auth/schema/responses';
import { errorToast, successToast } from '@/shared/lib/toast';

export default function Page(): React.JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token') ?? '';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeof AuthFormsData.resetPassword.type>({
    resolver: zodResolver(AuthFormsData.resetPassword.schema),
    mode: 'onBlur',
    defaultValues: {
      token,
      password: '',
      confirm_password: '',
    },
  });

  const resetPasswordMutation = useAppMutation<
    AuthResponseTypes['MessageResponse'],
    typeof AuthFormsData.resetPassword.type
  >({
    mutationFn: resetPasswordRequest,
    errorTitle: 'Reset failed',
    onSuccess: (data): void => {
      successToast('Password updated', data.message);
      router.replace('/login');
    },
    onError: (error): void => {
      errorToast(
        'Reset failed',
        error.response?.data?.message ?? 'Please try again.',
      );
    },
  });

  React.useEffect((): void => {
    if (!token) {
      router.replace('/forgot-password');
    }
  }, [token, router]);

  const onSubmit = (data: typeof AuthFormsData.resetPassword.type): void => {
    if (!token) {
      router.replace('/forgot-password');
      return;
    }

    resetPasswordMutation.mutate({ ...data, token });
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md space-y-7">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-xl bg-green-blue-gradient shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold text-primary">
                Driver Portal
              </h1>
              <p className="text-base text-gray">Reset your password</p>
            </div>
          </div>

          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 max-w-[448px] gap-0">
            <form
              className="block"
              onSubmit={(event): void => void handleSubmit(onSubmit)(event)}
              noValidate
            >
              <div className="space-y-1 mb-6">
                <h2 className="text-base font-medium text-[#0A0A0A] mb-1">
                  Reset Password
                </h2>
                <p className="text-base text-gray-2 font-normal">
                  Set a new password to secure your account
                </p>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-black-1a"
                >
                  New Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className={`bg-[#F3F3F5] border-none h-9 ${errors.password ? 'border border-red-500' : ''}`}
                  {...register('password')}
                />
                {errors.password && (
                  <p className="text-xs font-normal text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 mt-4">
                <Label
                  htmlFor="confirm_password"
                  className="text-sm font-medium text-black-1a"
                >
                  Confirm Password
                </Label>
                <Input
                  id="confirm_password"
                  type="password"
                  placeholder="••••••••"
                  className={`bg-[#F3F3F5] border-none h-9 ${errors.confirm_password ? 'border border-red-500' : ''}`}
                  {...register('confirm_password')}
                />
                {errors.confirm_password && (
                  <p className="text-xs font-normal text-red-600">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full mt-4 bg-blue-color hover:bg-blue-color/90 text-white h-9 rounded-lg font-medium"
                disabled={resetPasswordMutation.isPending}
              >
                {resetPasswordMutation.isPending
                  ? 'Updating...'
                  : 'Reset Password'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </AnimatedPage>
  );
}
