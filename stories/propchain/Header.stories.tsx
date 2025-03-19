import Header from '@/components/ui/propchain/header';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { LucideLayoutDashboard } from 'lucide-react';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Propchain Global Design Toolkit /Controls/Headers/Header',
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    isWalletConnected: { control: 'boolean' },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { isWalletConnected: false, walletAddress: '0x1234567890123456789012345678901234567890' },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HeaderDefault: Story = {
  args: {
    isWalletConnected: false,
    walletAddress: '0x1234567890123456789012345678901234567890',
  },
};




