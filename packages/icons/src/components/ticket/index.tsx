import { Ticket } from 'lucide-react';

import type { IconTypes } from '@/types';

const Tickets = ({ size, color }: IconTypes) => {
  return (
    <Ticket
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Tickets;
