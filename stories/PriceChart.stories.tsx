import { PriceChart } from '@/components/ui/price-chart';
import type { Meta, StoryObj } from '@storybook/react';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Global Design Toolkit/Controls/PriceChart',  
  component: PriceChart,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
   
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    token: {
      control: {
        type: 'text',
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { token: 'WELF' },
} satisfies Meta<typeof PriceChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  
  args: {
    token: 'WELF',
    activeTab: 'M',
    price: 100,
    low24: 90,
    high24: 110,
    change24: 1.23,
    totalSupply: 1000000,
    volume: 1000000,
    marketCap: 1000000,
    circulatingSupply: 1000000,
  },
};




