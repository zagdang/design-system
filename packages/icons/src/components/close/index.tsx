import { CircleX } from 'lucide-react';

import type { IconTypes } from '@/types';

const Close = ({ size, color }: IconTypes) => {
  return (
    <CircleX
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Close;
