import ConnectedPortfolioCard from '@/components/ui/welf/connected-portfolio-banner';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'WELF Global Design Toolkit/ view / connected portfolio card ',  
  component: ConnectedPortfolioCard,
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
  // args: { onClick: fn() },
} satisfies Meta<typeof ConnectedPortfolioCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    welfBalance: '500',
    usdBalance: '1000',
    priceChangePercentage: '10',
    stakeInfo: {
      poolInfo: {
        formattedDurations: ['30d', '60d'],
        activeTier: { durations: [30, 60], apys: [10, 20] },
        poolConfig: {
          cooldownPeriod: 24,
          minStake: '1',
          currentTierVersion: 1,
          name: 'WELF Pool',
          stakingToken: '0x123',
          rewardToken: '0x456',
          isPaused: false,
          rewardStrategy: 1,
          rewardAddress: '0x789',
          restricted: false,
          allowPartialUnstake: true,
        },
      },
      stakes: [],
      total_stakesamount: '500',
      total_rewards: '50',
      reward_breakdown: [],
    },
  },
};



