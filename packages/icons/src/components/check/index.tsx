import { CircleCheck } from 'lucide-react';

import type { IconTypes } from '@/types';

const Check = ({ size, color }: IconTypes) => {
  return (
    <CircleCheck
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Check;
