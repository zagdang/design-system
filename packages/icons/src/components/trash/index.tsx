import { Trash2 } from 'lucide-react';

import type { IconTypes } from '@/types';

const Delete = ({ size, color }: IconTypes) => {
  return (
    <Trash2
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Delete;
