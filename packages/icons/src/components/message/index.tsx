import { Mail } from 'lucide-react';

import type { IconTypes } from '@/types';

const Message = ({ size, color }: IconTypes) => {
  return (
    <Mail
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Message;
