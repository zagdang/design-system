import { MapPin } from 'lucide-react';

import type { IconTypes } from '@/types';

const Location = ({ size, color }: IconTypes) => {
  return (
    <MapPin
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Location;
