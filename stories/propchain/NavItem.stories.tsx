import NavItem from '@/components/ui/propchain/nav-item';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { LucideLayoutDashboard } from 'lucide-react';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Propchain Global Design Toolkit /Controls/Nav Item',
  component: NavItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    isActive: { control: 'boolean' },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NavItemDefault: Story = {
  args: {
    isActive: false,
    title: 'Stake',
    Icon: <LucideLayoutDashboard className='w-6 h-6' />,
    href: '/stake',
    onClick: fn(),
  },
};




