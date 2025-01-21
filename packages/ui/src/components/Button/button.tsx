import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex  gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'items-center justify-center bg-neutral-white-300 py-2 px-5 text-xxs font-bold rounded-sm hover:bg-neutral-white-500',
        outline: 'items-center justify-center border-0.5 border-neutral-white bg-transparent rounded-xl hover:bg-neutral-white-300',
        search: 'items-center justify-center border-0.5 border-neutral-white bg-transparent rounded-xl hover:bg-secondary',
        package: 'items-center justify-left border-0 bg-neutral-540 text-xxs w-full hover:bg-neutral-560',
        history: 'items-center justify-between border-0 bg-transparent text-xxs w-full pr-2.5 hover:bg-neutral-520',
      },
      size: {
        default: 'h-8.5 px-10 py-3.5',
        sm: 'h-5 px-2 py-1.5 text-3xs',
        lg: 'h-5.5 px-2.5 py-1.5 text-xxs',
        package: 'h-5 py-1.3 pl-5 font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
