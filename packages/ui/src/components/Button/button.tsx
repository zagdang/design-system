import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type ButtonVariantsProps = {
  variant?: 'default' | 'system' | 'destructive' | 'outline' | 'ghost';
  size?: 'default' | 'full' | 'tag' | 'sys_sm' | 'sys_md' | 'sys_full';
  className?: string;
};

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-destructive-foreground shadow hover:bg-primary/90',
        system: 'bg-system text-system-foreground shadow-sm hover:bg-system/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-system',
      },
      size: {
        default: 'h-10 rounded-md py-3 px-5 text-base',
        full: 'w-full h-10 rounded-md py-4 px-5 text-base',
        sys_sm: 'h-6 rounded-md py-px px-1.5 text-xs',
        sys_md: 'rounded-md py-2 px-8 text-sm',
        sys_full: 'w-full h-9 rounded-md py-3.5 px-5 text-sm',
        tag: 'h-9 rounded-full px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantsProps {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
