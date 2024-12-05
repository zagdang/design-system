import { Headset } from 'lucide-react';

import type { IconTypes } from '@/types';

const CallService = ({ size, color }: IconTypes) => {
  return (
    <Headset
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default CallService;
