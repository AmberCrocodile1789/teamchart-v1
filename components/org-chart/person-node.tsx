'use client';

import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { User } from 'lucide-react';

export type PersonData = {
  name: string;
  role: string;
  team: string;
};

export type PersonNodeProps = {
  data: PersonData;
  selected: boolean;
};

export const PersonNode = memo(({ data, selected }: PersonNodeProps) => {
  return (
    <div
      className={`px-4 py-3 rounded-lg border-2 bg-white shadow-sm min-w-[200px] transition-all ${
        selected ? 'border-neutral-900 shadow-md' : 'border-neutral-200'
      }`}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 !bg-neutral-400"
      />

      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
          <User className="h-5 w-5 text-neutral-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm truncate">{data.name}</div>
          <div className="text-xs text-muted-foreground truncate">
            {data.role}
          </div>
          <div className="text-xs text-neutral-500 mt-1 truncate">
            {data.team}
          </div>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 !bg-neutral-400"
      />
    </div>
  );
});

PersonNode.displayName = 'PersonNode';
