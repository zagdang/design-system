// Button.stories.tsx
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
      options: ['default', 'destructive', 'outline', 'ghost', 'system'],
    },
    size: {
      control: 'select',
      options: ['default', 'full', 'sys_sm', 'sys_md', 'sys_full', 'tag'],
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
};

// 모든 variant 보여주기
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Tag</Button>
      <Button variant="ghost">System-Ghost</Button>
      <Button variant="system">System-Button</Button>
    </div>
  ),
};

// 모든 size 보여주기
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="default">Default</Button>
      <Button size="full">티켓 구입 하러가기</Button>
      <Button
        variant="system"
        size="sys_sm"
      >
        System
      </Button>
      <Button
        variant="system"
        size="sys_md"
      >
        System
      </Button>
      <Button
        variant="system"
        size="sys_full"
      >
        System-full
      </Button>
      <Button
        variant="outline"
        size="tag"
      >
        IT/기술
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
};

// With Icon
export const WithIcon: Story = {
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
      <Button variant="outline">
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
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle
            cx="12"
            cy="7"
            r="4"
          />
        </svg>
        User Profile
      </Button>
    </div>
  ),
};

// Loading 상태 (추가하고 싶다면)
export const Loading: Story = {
  render: () => (
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
  ),
};
