'use client';

import React from 'react';
import { User, Phone, MapPin, Users } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Button } from '@/shared/ui/button';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    fullName: string;
    phoneNumber: string;
    region: string;
    team: string;
  };
  onFormDataChange: (data: EditProfileModalProps['formData']) => void;
  onSave: () => void;
}

export function EditProfileModal({
  isOpen,
  onClose,
  formData,
  onFormDataChange,
  onSave,
}: EditProfileModalProps): React.JSX.Element {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-0 bg-white rounded-[14px]">
        <DialogHeader className="px-6 pt-6 pb-2 border-none">
          <div className="flex items-start justify-between">
            <div className="w-full text-left">
              <h2 className="text-base font-medium text-black-1a mb-0">
                Edit Profile
              </h2>
              <p className="text-base font-normal text-gray-2 mt-1">
                Update your profile information
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="px-6 pt-0 pb-3 space-y-6">
          {/* Profile Summary */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <div className="w-16 h-16 rounded-full bg-green-blue-gradient flex items-center justify-center text-white text-xl font-semibold">
              JD
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-black-1a">John Driver</h3>
              <span className="inline-block px-3 py-1 mt-1 rounded-[8px] bg-[#C0C0C020] text-[#C0C0C0] border border-[#C0C0C040] text-xs font-medium">
                Silver
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="flex items-center text-sm font-medium text-black-1a gap-2"
              >
                <User className="w-4 h-4 text-black-1a" />
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  onFormDataChange({ ...formData, fullName: e.target.value })
                }
                className="bg-[#F3F3F5] border border-[#00000000] h-9"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label
                htmlFor="phoneNumber"
                className="flex items-center text-sm font-medium text-black-1a gap-2"
              >
                <Phone className="w-4 h-4 text-black-1a" />
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                disabled
                className="bg-[#F3F3F5] border border-[#00000000] h-9"
              />
              <p className="text-xs text-gray-2 font-normal">
                Phone number cannot be changed. Contact support if needed.
              </p>
            </div>

            {/* Region */}
            <div className="space-y-2">
              <Label
                htmlFor="region"
                className="flex items-center text-sm font-medium text-black-1a gap-2"
              >
                <MapPin className="w-4 h-4 text-black-1a" />
                Region
              </Label>
              <Input
                id="region"
                type="text"
                value={formData.region}
                onChange={(e) =>
                  onFormDataChange({ ...formData, region: e.target.value })
                }
                className="bg-[#F3F3F5] border border-[#00000000] h-9"
              />
            </div>

            {/* Team */}
            <div className="space-y-2">
              <Label
                htmlFor="team"
                className="flex items-center text-sm font-medium text-black-1a gap-2"
              >
                <Users className="w-4 h-4 text-black-1a" />
                Team
              </Label>
              <Input
                id="team"
                type="text"
                value={formData.team}
                onChange={(e) =>
                  onFormDataChange({ ...formData, team: e.target.value })
                }
                className="bg-[#F3F3F5] border border-[#00000000] h-9"
              />
            </div>
          </div>
        </div>

        {/* Footer with Action Buttons */}
        <DialogFooter className="justify-start px-6 pt-0 pb-6 ">
          <div className="flex items-center justify-start gap-2 w-full">
            <Button
              onClick={() => {
                onSave();
                onClose();
              }}
              className=" bg-blue-color text-sm font-medium hover:bg-blue-color/90 text-white"
            >
              Save Changes
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className=" border-gray-200 hover:bg-gray-50 shadow-none"
            >
              Cancel
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
