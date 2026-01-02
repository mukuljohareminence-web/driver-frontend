'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Smartphone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Card } from '@/shared/ui/card';
import { errorToast, successToast } from '@/shared/lib/toast';
import { AnimatedPage } from '@/components/AnimatedPage';
import Link from 'next/link';
import { AuthFormsData } from '@/features/auth/schema/requests';
import { useAppMutation } from '@/features/auth/hooks/useAppMutation';
import { loginRequest } from '@/features/auth/api';
import type { AuthResponseTypes } from '@/features/auth/schema/responses';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { setUser } from '@/store/slices/userSlice';

export default function Page(): React.JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeof AuthFormsData.login.type>({
    resolver: zodResolver(AuthFormsData.login.schema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  React.useEffect((): (() => void) | undefined => {
    const unauthorized = searchParams.get('session');
    if (!unauthorized) return;

    const timeout = setTimeout((): void => {
      if (unauthorized === 'true') {
        errorToast(
          'Your session has timed out',
          'Please login again to continue.',
        );
        router.replace('/login');
      } else if (unauthorized === 'false') {
        errorToast('Please login to continue.');
        router.replace('/login');
      }
    }, 0);

    return (): void => clearTimeout(timeout);
  }, [searchParams, router]);

  const loginMutation = useAppMutation<AuthResponseTypes['LoginResponse']>({
    mutationFn: loginRequest,
    errorTitle: 'Login failed',
    onSuccess: (data): void => {
      if (data.data.user) dispatch(setUser(data.data.user));
      successToast('Login successful', data.message);
      router.push('/');
    },
  });

  const handleLogin = (data: typeof AuthFormsData.login.type): void => {
    loginMutation.mutate(data);
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
              onSubmit={(event): void => void handleSubmit(handleLogin)(event)}
              noValidate
            >
              <div className="space-y-1 mb-6">
                <h2 className="text-base font-medium text-[#0A0A0A] mb-1">
                  Login to your account
                </h2>
                <p className="text-base text-gray-2 font-normal">
                  Use your email or phone number to continue
                </p>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="identifier"
                  className="text-sm font-medium text-black-1a"
                >
                  Email or Phone Number
                </Label>
                <Input
                  id="identifier"
                  type="text"
                  placeholder="you@example.com or +1 (555) 000-0000"
                  className={`bg-[#F3F3F5] border-none h-9 ${errors.email ? 'border border-red-500' : ''}`}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-xs font-normal text-red-600">
                    {errors.email.message}
                  </p>
                )}
                <p className="text-xs font-normal text-gray-2">
                  Enter your registered email or phone number
                </p>
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

              <Button
                type="submit"
                disabled={loginMutation.isPending}
                className="w-full mt-4 bg-blue-color hover:bg-blue-color/90 text-white h-9 rounded-lg font-medium"
              >
                {loginMutation.isPending ? 'Logging in...' : 'Login'}
              </Button>
              <p className="text-center text-xs font-normal text-gray mt-4">
                Don&apos;t have an account?{' '}
                <Link
                  href="/signup"
                  className="text-blue-400 font-semibold hover:text-blue-500 hover:underline transition-colors"
                >
                  Sign up
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
