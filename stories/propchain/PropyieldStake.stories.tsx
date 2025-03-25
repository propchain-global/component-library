import PropYieldStaking from '@/components/ui/propchain/prop-yield-staking';
import type { Meta, StoryObj } from '@storybook/react';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Propchain Global Design Toolkit /Controls/Cards/PropYield Staking',
  component: PropYieldStaking,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    isWalletConnected: { control: 'boolean' },
    stakedAmount: { control: 'number' },
    rewardAmount: { control: 'number' },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { isWalletConnected: false, stakedAmount: 0, rewardAmount: 0 },
} satisfies Meta<typeof PropYieldStaking>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PropYieldStakeDefault: Story = {
  args: {
    isWalletConnected: false,
    stakedAmount: 0,
    rewardAmount: 0,
  },
};




