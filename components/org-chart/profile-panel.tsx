'use client';

import { X, User, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PersonData } from './person-node';

type ProfilePanelProps = {
  person: PersonData | null;
  onClose: () => void;
};

export function ProfilePanel({ person, onClose }: ProfilePanelProps) {
  if (!person) return null;

  return (
    <div className="absolute top-0 right-0 h-full w-96 bg-white border-l shadow-lg z-10 flex flex-col">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="font-semibold text-lg">Profile</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="h-24 w-24 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
            <User className="h-12 w-12 text-neutral-600" />
          </div>
          <h3 className="font-semibold text-xl mb-1">{person.name}</h3>
          <p className="text-muted-foreground">{person.role}</p>
          <p className="text-sm text-neutral-500 mt-1">{person.team}</p>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-neutral-50 border">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <Mail className="h-4 w-4 text-neutral-600" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium">
                  {person.name.toLowerCase().replace(' ', '.')}@company.com
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-neutral-50 border">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <Phone className="h-4 w-4 text-neutral-600" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="text-sm font-medium">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-neutral-50 border">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <MapPin className="h-4 w-4 text-neutral-600" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="text-sm font-medium">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <h4 className="font-semibold mb-3">About</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A dedicated professional with expertise in {person.team}.
            Passionate about driving team success and fostering collaboration
            across the organization.
          </p>
        </div>
      </div>
    </div>
  );
}
