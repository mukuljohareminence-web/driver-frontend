'use client';

import React from 'react';
import { Mail, Phone, MapPin, Calendar, Pencil } from 'lucide-react';
import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';

interface UserProfileCardProps {
  onEditClick: () => void;
}

export function UserProfileCard({
  onEditClick,
}: UserProfileCardProps): React.JSX.Element {
  return (
    <Card className="border border-[#E5E7EB] bg-white rounded-2xl p-6">
      <div className="flex flex-col items-center space-y-4">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-green-blue-gradient flex items-center justify-center text-white text-2xl font-semibold shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1)]">
          JD
        </div>

        {/* Name and ID */}
        <div className="text-center space-y-1">
          <h2 className="text-xl font-semibold text-black-1f">John Driver</h2>
          <p className="text-sm font-normal text-gray">ID: DR-1234</p>
        </div>

        {/* Tier Badge */}
        <span className="px-4 py-1 rounded-full bg-[#C0C0C033] text-gray-2  text-sm font-medium">
          Silver Tier
        </span>

        {/* Edit Profile Button */}
        <Button
          variant="outline"
          className="gap-2 border-[#E5E7EB] bg-[#FAFBFC] w-full rounded-[10px] text-sm font-medium text-black-1f shadow-none"
          onClick={onEditClick}
        >
          <Pencil className="w-4 h-4" />
          Edit Profile
        </Button>

        {/* Contact Information */}
        <div className="w-full pt-4 border-t border-[#E5E7EB] space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray" />
            <span className="text-sm text-gray font-normal">
              john.driver@email.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-gray" />
            <span className="text-sm text-gray font-normal">
              (555) 123-4567
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gray" />
            <span className="text-sm text-gray font-normal">North Region</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-gray" />
            <span className="text-sm text-gray font-normal">
              Joined January 15, 2024
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
