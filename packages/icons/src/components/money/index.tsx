import { CircleDollarSign } from 'lucide-react';

import type { IconTypes } from '@/types';

const Money = ({ size, color }: IconTypes) => {
  return (
    <CircleDollarSign
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Money;
