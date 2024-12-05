import { Image } from 'lucide-react';

import type { IconTypes } from '@/types';

const Img = ({ size, color }: IconTypes) => {
  return (
    <Image
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Img;
