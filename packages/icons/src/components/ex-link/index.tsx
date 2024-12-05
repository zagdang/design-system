import { ExternalLink } from 'lucide-react';

import type { IconTypes } from '@/types';

const ExLink = ({ size, color }: IconTypes) => {
  return (
    <ExternalLink
      size={size}
      color={color}
      strokeWidth={2}
    />
  );
};

export default ExLink;
