import { QrCode } from 'lucide-react';

import type { IconTypes } from '@/types';

const QRCode = ({ size, color }: IconTypes) => {
  return (
    <QrCode
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default QRCode;
