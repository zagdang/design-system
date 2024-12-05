import { LayoutDashboard } from 'lucide-react';

import type { IconTypes } from '@/types';

const DashBoard = ({ size, color }: IconTypes) => {
  return (
    <LayoutDashboard
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default DashBoard;
