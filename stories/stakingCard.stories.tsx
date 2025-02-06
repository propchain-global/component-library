import { StakingCard } from '@/components/ui/Staking-card';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Global Design Toolkit/ view / staking card ',  
  component: StakingCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof StakingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    stakingDetails: {
      stakedWelf: 16313,
      welfAmountInUSD: 56000,
      growthPercentage: 17.15,
      stakingRewardWelf: 4350,
      rewardGrowthPercentage: -3,
      stakingRewardUSD: 15909,
      vestingToClaimWelf: 100,
      vestingClaimUSD: 300,
      vestingGrowthPercentage: 3.62,
    }
  },
};



