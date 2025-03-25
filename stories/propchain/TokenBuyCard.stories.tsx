import TokenBuyCard from '@/components/ui/propchain/token-buy-card';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { LucideLayoutDashboard } from 'lucide-react';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Propchain Global Design Toolkit /Controls/Cards/Token Buy Card',
  component: TokenBuyCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TokenBuyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TokenBuyCardDefault: Story = {
  args: {
  },
};




