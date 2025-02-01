import type { CheckIconProps } from '@/types';

const Drop = ({ color = 'currentColor', size = 15, className }: CheckIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.5 2L2 7.5L7.5 13L13 7.5L7.5 2Z" // 더 단순한 path로 테스트
        fill={color}
      />
    </svg>
  );
};

export default Drop;
