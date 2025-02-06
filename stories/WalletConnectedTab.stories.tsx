import {  WalletConnectTab } from '@/components/ui/wallet-conntect-tab';
import { backgroundColor } from '@/stylecore/color';
import type { Meta, StoryObj } from '@storybook/react';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Global Design Toolkit/Controls/WalletConnected Tab',  
  component: WalletConnectTab,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
   
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'connected', 'recent', 'failed', 'detected']
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { type: 'default' },
} satisfies Meta<typeof WalletConnectTab>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
   parameters: {
      backgroundColor: backgroundColor.weak
   },
  args: {
    type: "default",
    walletName: "Metamask",
    walletSrc: "https://metamask.io/images/metamask-logo.svg"
  },
};




