import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from './button';

import Close from '@/assets/Button/close.svg';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
// 기본 버튼
export const Default: Story = {
  args: {
    children: 'Button',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  render: ({ children }) => (
    <Button>
      <span className="text-neutral-white">{children}</span>
    </Button>
  ),
};

export const Discover: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">
        {' '}
        <span className="text-neutral-white">Front-end</span>
      </Button>
    </div>
  ),
};

export const Icons: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        size="lg"
      >
        <span className="text-neutral-white">버튼</span>
      </Button>
      <Button
        variant="search"
        size="lg"
      >
        <span className="text-neutral-white">버튼</span>
      </Button>
    </div>
  ),
};

export const Package: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  render: () => (
    <div className="flex flex-wrap w-96 gap-4">
      <Button
        variant="package"
        size="package"
      >
        <span className=" text-neutral-white">버튼</span>
      </Button>
    </div>
  ),
};

export const History: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  render: () => (
    <div className="flex flex-wrap w-96 gap-4">
      <Button
        variant="history"
        size="package"
        className="relative group"
      >
        <span className=" text-neutral-white">버튼</span>
        <span className="text-neutral-white opacity-0 group-hover:opacity-100 transition-opacity">
          <img
            src={Close}
            alt="closeBtn"
          />
        </span>
      </Button>
    </div>
  ),
};
