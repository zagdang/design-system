import { AlignLeft } from 'lucide-react';

import type { IconTypes } from '@/types';

const List = ({ size, color }: IconTypes) => {
  return (
    <AlignLeft
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default List;
