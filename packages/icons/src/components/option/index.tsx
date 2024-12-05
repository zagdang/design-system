import { SlidersHorizontal } from 'lucide-react';

import type { IconTypes } from '@/types';

const Option = ({ size, color }: IconTypes) => {
  return (
    <SlidersHorizontal
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Option;
