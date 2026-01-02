'use client';

import React from 'react';
import { Smartphone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Card } from '@/shared/ui/card';
import { AnimatedPage } from '@/components/AnimatedPage';
import { AuthFormsData } from '@/features/auth/schema/requests';
import { useAppMutation } from '@/features/auth/hooks/useAppMutation';
import { generateOtpTokenRequest } from '@/features/auth/api';
import type { AuthResponseTypes } from '@/features/auth/schema/responses';
import { successToast } from '@/shared/lib/toast';

export default function Page(): React.JSX.Element {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeof AuthFormsData.forgotPassword.type>({
    resolver: zodResolver(AuthFormsData.forgotPassword.schema),
    mode: 'onBlur',
    defaultValues: { email: '' },
  });

  const generateOtpTokenMutation = useAppMutation<
    AuthResponseTypes['SignupResponse'],
    typeof AuthFormsData.generateOtpToken.type
  >({
    mutationFn: generateOtpTokenRequest,
    errorTitle: 'Request failed',
    onSuccess: (data): void => {
      successToast('OTP sent successfully', data.message);
      router.push(`/verify-otp?token=${encodeURIComponent(data.data.token)}`);
    },
  });

  const onSubmit = (data: typeof AuthFormsData.forgotPassword.type): void => {
    generateOtpTokenMutation.mutate({
      email: data.email,
      isForgotPassword: true,
    });
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
              <p className="text-base text-gray">Reset your account password</p>
            </div>
          </div>

          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 max-w-[448px]">
            <form
              className="block"
              onSubmit={(event): void => void handleSubmit(onSubmit)(event)}
              noValidate
            >
              <div className="space-y-1 mb-6">
                <h2 className="text-base font-medium text-[#0A0A0A] mb-1">
                  Forgot Password
                </h2>
                <p className="text-base text-gray-2 font-normal">
                  Enter your registered email to continue
                </p>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-black-1a"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={`bg-[#F3F3F5] border-none h-9 ${
                    errors.email ? 'border border-red-500' : ''
                  }`}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-xs font-normal text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full mt-4 bg-blue-color hover:bg-blue-color/90 text-white h-9 rounded-lg font-medium"
              >
                {generateOtpTokenMutation.isPending ? 'Sending...' : 'Continue'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </AnimatedPage>
  );
}
