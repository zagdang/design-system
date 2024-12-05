import { Pencil } from 'lucide-react';

import type { IconTypes } from '@/types';

const Edit = ({ size, color }: IconTypes) => {
  return (
    <Pencil
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Edit;
