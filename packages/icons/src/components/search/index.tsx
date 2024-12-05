import { Search } from 'lucide-react';

import type { IconTypes } from '@/types';

const Find = ({ size, color }: IconTypes) => {
  return (
    <Search
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Find;
