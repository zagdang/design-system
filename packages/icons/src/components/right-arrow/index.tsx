import { ArrowRight } from 'lucide-react';

import type { IconTypes } from '@/types';

const RightArrow = ({ size, color }: IconTypes) => {
  return (
    <ArrowRight
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default RightArrow;
