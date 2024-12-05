import { ChevronLeft } from 'lucide-react';

import type { IconTypes } from '@/types';

const Previous = ({ size, color }: IconTypes) => {
  return (
    <ChevronLeft
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Previous;
