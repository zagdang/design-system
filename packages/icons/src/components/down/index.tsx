import type { CheckIconProps } from '@/types';

const Down = ({ color = 'currentColor', size = 15, className }: CheckIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.767768 1.86063L2.71027 3.80313C3.00277 4.09563 3.47527 4.09563 3.76777 3.80313L5.71027 1.86063C6.18277 1.38813 5.84527 0.578125 5.17777 0.578125L1.29277 0.578125C0.625268 0.578125 0.295268 1.38813 0.767768 1.86063Z"
        fill={color}
      />
    </svg>
  );
};

export default Down;
