import { Phone } from 'lucide-react';

import type { IconTypes } from '@/types';

const PhoneCall = ({ size, color }: IconTypes) => {
  return (
    <Phone
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default PhoneCall;
