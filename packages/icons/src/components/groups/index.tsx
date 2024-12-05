import { UsersRound } from 'lucide-react';

import type { IconTypes } from '@/types';

const Groups = ({ size, color }: IconTypes) => {
  return (
    <UsersRound
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Groups;
