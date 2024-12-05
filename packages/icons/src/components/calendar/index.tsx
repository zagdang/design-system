import { CalendarDays } from 'lucide-react';

import type { IconTypes } from '@/types';

const Calendar = ({ size, color }: IconTypes) => {
  return (
    <CalendarDays
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default Calendar;
