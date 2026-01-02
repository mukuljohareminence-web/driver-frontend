'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Smartphone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Card } from '@/shared/ui/card';
import { signupRequest } from '@/features/auth/api';
import { useAppMutation } from '@/features/auth/hooks/useAppMutation';
import { successToast } from '@/shared/lib/toast';
import type { AuthResponseTypes } from '@/features/auth/schema/responses';
import { AuthFormsData } from '@/features/auth/schema/requests';
import { AnimatedPage } from '@/components/AnimatedPage';
import Link from 'next/link';

export default function Page(): React.JSX.Element {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeof AuthFormsData.signup.type>({
    resolver: zodResolver(AuthFormsData.signup.schema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirm_password: '',
    },
  });

  const signupMutation = useAppMutation<
    AuthResponseTypes['SignupResponse'],
    typeof AuthFormsData.signup.type
  >({
    mutationFn: signupRequest,
    errorTitle: 'Signup failed',
    onSuccess: (data: AuthResponseTypes['SignupResponse']): void => {
      successToast(
        'OTP sent successfully',
        data.message ?? 'Please check you email',
      );

      router.push(`/verify-otp?token=${data.data.token}`);
    },
  });

  const onSubmit = (data: typeof AuthFormsData.signup.type): void => {
    signupMutation.mutate(data);
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen flex flex-col items-center justify-center p-8 ">
        <div className="w-full max-w-md space-y-7">
          {/* Header with Icon and Title */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-xl bg-green-blue-gradient shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] flex items-center justify-center ">
              <Smartphone className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold  text-primary">
                Driver Portal
              </h1>
              <p className="text-base text-gray">
                Track your performance and earn rewards
              </p>
            </div>
          </div>

          {/* Main Card */}
          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 max-w-[448px] gap-0">
            <form
              className="block"
              onSubmit={(event): void => void handleSubmit(onSubmit)(event)}
              noValidate
            >
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
                  placeholder="john.doe@example.com"
                  className={`bg-[#F3F3F5] border-none h-9 ${errors.email ? 'border border-red-500' : ''}`}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-xs font-normal text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 mt-4">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-black-1a"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={`bg-[#F3F3F5] border-none h-9 ${errors.name ? 'border border-red-500' : ''}`}
                  {...register('name')}
                />
                {errors.name && (
                  <p className="text-xs font-normal text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 mt-4">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-black-1a"
                >
                  Password
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
                disabled={signupMutation.isPending}
                className="w-full mt-4 bg-blue-color hover:bg-blue-color/90 text-white h-9 rounded-lg font-medium"
              >
                {signupMutation.isPending ? 'Sending...' : 'Send Code'}
              </Button>
              <p className="text-center text-xs font-normal text-gray mt-4">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="text-blue-400 font-semibold hover:text-blue-500 hover:underline transition-colors"
                >
                  Login
                </Link>
              </p>
            </form>
          </Card>

          {/* Footer */}
          <p className="text-center text-xs font-normal text-gray">
            By continuing, you agree to our{' '}
            <a href="#" className="text-blue-color hover:underline font-medium">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-color hover:underline font-medium">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
}
