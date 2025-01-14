import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
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
};
// 모든 variant 보여주기
export const Variants: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button
        variant="outline"
        size="lg"
      >
        <span className="text-neutral-white">버튼</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
      >
        <span className="text-neutral-white">버튼</span>
      </Button>
    </div>
  ),
};
// 모든 size 보여주기
export const Sizes: Story = {
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
        variant="outline"
        size="sm"
      >
        <span className="text-neutral-white">버튼</span>
      </Button>
    </div>
  ),
};
// 비활성화된 상태
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
// With Icon
export const WithIcon: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
        With Icon
      </Button>
    </div>
  ),
};
// Loading 상태 (추가하고 싶다면)
export const Loading: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>
        <svg
          className="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10h-2c0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8V2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10z" />
        </svg>
        Loading...
      </Button>
    </div>
  ),
};
