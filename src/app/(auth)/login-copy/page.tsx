'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Smartphone } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Card } from '@/shared/ui/card';
import { errorToast } from '@/shared/lib/toast';

export default function Page(): React.JSX.Element {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const searchParams = useSearchParams();

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

  const handleSendCode = (): void => {
    // TODO: Add phone number validation and API call here
    router.push('/verify-otp');
  };

  return (
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
          <div className="block">
            <div className="space-y-1 mb-6">
              <h2 className="text-base font-medium text-[#0A0A0A] mb-1">
                Enter Your Phone Number
              </h2>
              <p className="text-base text-gray-2 font-normal">
                We&apos;ll send you a verification code via SMS
              </p>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-black-1a"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="bg-[#F3F3F5] border-none h-9"
                value={phoneNumber}
                onChange={(e): void => setPhoneNumber(e.target.value)}
              />
              <p className="text-xs font-normal text-gray-2">
                Enter your registered phone number
              </p>
            </div>

            <Button
              onClick={handleSendCode}
              className="w-full mt-4 bg-blue-color hover:bg-blue-color/90 text-white h-9 rounded-lg font-medium"
            >
              Send Code
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
