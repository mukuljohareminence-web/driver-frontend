'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { WelcomeSlide } from '@/components/onboarding/WelcomeSlide';
import { HowItWorksSlide } from '@/components/onboarding/HowItWorksSlide';
import { WhatYouCanTrackSlide } from '@/components/onboarding/WhatYouCanTrackSlide';

// Main Onboarding Page
export default function OnboardingPage(): React.JSX.Element {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    <WelcomeSlide key={0} onNext={() => setCurrentSlide(1)} />,
    <HowItWorksSlide key={1} onNext={() => setCurrentSlide(2)} />,
    <WhatYouCanTrackSlide key={2} onComplete={() => router.push('/')} />,
  ];

  const handleDotClick = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full flex justify-center">
        <div
          className="transition-all duration-300 ease-in-out"
          style={{
            opacity: 1,
            transform: 'translateX(0)',
          }}
        >
          {slides[currentSlide]}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center gap-2 mt-8">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-blue-color w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
