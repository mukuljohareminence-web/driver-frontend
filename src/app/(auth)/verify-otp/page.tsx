'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Smartphone } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Label } from '@/shared/ui/label';
import { Card } from '@/shared/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp';
import { useAppMutation } from '@/features/auth/hooks/useAppMutation';
import {
  resendOtpRequest,
  validateOtpRequest,
  verifyOtpTokenRequest,
} from '@/features/auth/api';
import type { AuthResponseTypes } from '@/features/auth/schema/responses';
import type { AuthFormsData } from '@/features/auth/schema/requests';
import { errorToast, successToast } from '@/shared/lib/toast';

export default function Page(): React.JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const otpToken = searchParams.get('token') ?? '';
  const [emailFromToken, setEmailFromToken] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const hasVerifiedRef = React.useRef(false);

  const verifyOtpTokenMutation = useAppMutation<
    AuthResponseTypes['VerifyOtpTokenResponse'],
    typeof AuthFormsData.verifyOtpToken.type
  >({
    mutationFn: verifyOtpTokenRequest,
    skipDefaultErrorHandling: true,
    onSuccess: (data): void => {
      setEmailFromToken(data.data.email);
    },
    onError: (): void => {
      errorToast('Token expired', 'Please signup again to continue.');
      router.replace('/login');
    },
  });

  const resendOtpMutation = useAppMutation<
    AuthResponseTypes['ResendOtpResponse'],
    typeof AuthFormsData.resendOtp.type
  >({
    mutationFn: resendOtpRequest,
    skipDefaultErrorHandling: true,
    onSuccess: (data): void => {
      successToast('OTP resent', data.message);
    },
    onError: (data): void => {
      errorToast(
        'Failed to resend OTP',
        data.response?.data?.message ?? 'Something went wrong',
      );
    },
  });

  const validateOtpMutation = useAppMutation<
    AuthResponseTypes['ValidateOtpResponse'],
    typeof AuthFormsData.validateOtp.type
  >({
    mutationFn: validateOtpRequest,
    skipDefaultErrorHandling: true,
    onSuccess: (data): void => {
      successToast('OTP Verified', data.message || 'Verification successful!');
      if (data.data.tokenForResetPassword) {
        router.push(
          `/reset-password?token=${encodeURIComponent(
            data.data.tokenForResetPassword,
          )}`,
        );
      } else {
        router.push('/onboarding');
      }
    },
    onError: (error): void => {
      errorToast(
        'OTP verification failed',
        error.response?.data?.message ?? 'Please try again.',
      );
    },
  });

  React.useEffect((): void => {
    if (!otpToken) {
      router.replace('/signup');
      return;
    }

    if (hasVerifiedRef.current) return;
    hasVerifiedRef.current = true;

    verifyOtpTokenMutation.mutate({ token: otpToken });
  }, [otpToken, router]);

  const handleVerifyLogin = (): void => {
    if (!otpToken) {
      router.replace('/signup');
      return;
    }

    if (validateOtpMutation.isPending) return;
    validateOtpMutation.mutate({ otp, token: otpToken });
  };

  const handleResendOtp = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault();
    if (!otpToken) {
      router.replace('/signup');
      return;
    }

    resendOtpMutation.mutate({ token: otpToken });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-7">
        {/* Header with Icon and Title */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-xl bg-green-blue-gradient shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] flex items-center justify-center">
            <Smartphone className="w-8 h-8 text-white" strokeWidth={2.5} />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-primary">
              Driver Portal
            </h1>
            <p className="text-base text-gray">
              Track your performance and earn rewards
            </p>
          </div>
        </div>

        {/* Main Card */}
        <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 max-w-[448px] gap-0">
          <div className="block">
            <div className="space-y-1 mb-6">
              <h2 className="text-base font-medium text-black-1a mb-1">
                Enter Verification Code
              </h2>
              <p className="text-base text-gray-2 font-normal">
                {emailFromToken
                  ? `We sent a code to ${emailFromToken}`
                  : 'We sent a code to your email'}
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <Label
                htmlFor="otp"
                className="text-sm font-medium text-black-1a"
              >
                Verification Code
              </Label>
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value): void => setOtp(value)}
                containerClassName="justify-center"
              >
                <InputOTPGroup className="gap-2">
                  <InputOTPSlot
                    index={0}
                    className="h-12 w-12 rounded-md bg-[#F3F3F5] border-none shadow-none text-base font-medium"
                  />
                  <InputOTPSlot
                    index={1}
                    className="h-12 w-12 rounded-md bg-[#F3F3F5] border-none shadow-none text-base font-medium"
                  />
                  <InputOTPSlot
                    index={2}
                    className="h-12 w-12 rounded-md bg-[#F3F3F5] border-none shadow-none text-base font-medium"
                  />
                  <InputOTPSlot
                    index={3}
                    className="h-12 w-12 rounded-md bg-[#F3F3F5] border-none shadow-none text-base font-medium"
                  />
                  <InputOTPSlot
                    index={4}
                    className="h-12 w-12 rounded-md bg-[#F3F3F5] border-none shadow-none text-base font-medium"
                  />
                  <InputOTPSlot
                    index={5}
                    className="h-12 w-12 rounded-md bg-[#F3F3F5] border-none shadow-none text-base font-medium"
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="mb-6 flex justify-center">
              <p className="text-xs font-normal text-gray-2">
                Didn&apos;t receive the code?{' '}
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendOtpMutation.isPending}
                  className="text-blue-color text-base hover:underline font-medium disabled:opacity-60"
                >
                  {resendOtpMutation.isPending ? 'Resending...' : 'Resend'}
                </button>
              </p>
            </div>

            <Button
              onClick={handleVerifyLogin}
              disabled={validateOtpMutation.isPending || otp.length !== 6}
              className="w-full bg-blue-color hover:bg-blue-color/90 text-white h-9 rounded-lg font-medium mb-3"
            >
              {validateOtpMutation.isPending
                ? 'Verifying...'
                : 'Verify & Login'}
            </Button>

            <Button
              variant="outline"
              className="w-full bg-white text-sm border border-[#0000001A] hover:bg-gray-50 text-black-1a h-9 rounded-lg font-medium flex items-center justify-center"
            >
              Change Email
            </Button>
          </div>
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
  );
}
