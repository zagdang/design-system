import { ClipboardList } from 'lucide-react';

import type { IconTypes } from '@/types';

const Board = ({ size, color }: IconTypes) => {
  return (
    <ClipboardList
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Board;
