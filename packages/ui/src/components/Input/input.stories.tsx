// Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Input } from './input';

import { Button } from '@/components';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Widths: Story = {
  decorators: [
    (Story) => (
      <div className="min-w-[600px] p-4">
        <div className="space-y-4">
          <div className="w-full">
            <p className="text-sm text-gray-500 mb-2">Full width (default)</p>
            <Story />
          </div>
          <div className="w-96">
            <p className="text-sm text-gray-500 mb-2">w-96</p>
            <Input placeholder="Width: 24rem" />
          </div>
          <div className="w-72">
            <p className="text-sm text-gray-500 mb-2">w-72</p>
            <Input placeholder="Width: 18rem" />
          </div>
          <div className="w-1/2">
            <p className="text-sm text-gray-500 mb-2">w-1/2</p>
            <Input placeholder="Width: 50%" />
          </div>
        </div>
      </div>
    ),
  ],
  args: {
    placeholder: 'Full width input...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithValue_Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('Sample text');

    return (
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type to change..."
        />
        <Button onClick={() => alert(`Current value: ${value}`)}>Check</Button>
      </div>
    );
  },
};

export const WithType: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const WithError: Story = {
  args: {
    className: 'border-error',
    placeholder: 'Error state',
  },
};
