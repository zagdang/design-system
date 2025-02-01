import type { Meta, StoryObj } from '@storybook/react';
import { Down } from '@zagdang/icons';
import { useState } from 'react';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from './dropdown-menu';

import { Button } from '@/components/Button';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-96 w-full flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="dropdown"
            size="dropdown"
          >
            Open Menu
            <Down className="w-4 h-2.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-30">
          <DropdownMenuCheckboxItem
            checked={checked}
            onCheckedChange={setChecked}
          >
            Show status
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Most dependents</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Most download</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
