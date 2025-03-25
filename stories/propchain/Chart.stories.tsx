import { PriceChart } from '@/components/ui/propchain/price-chart';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Propchain Global Design Toolkit /Controls/Chart',
  component: PriceChart,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    price: { control: 'number' },
    low: { control: 'number' },
    high: { control: 'number' },
    change: { control: 'number' },
    activeTab: { options: ['Day', 'Week', 'Month', 'Year'], control: 'select' },
    chartData: { control: 'object' },
    xkey: { control: 'text' },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { },
} satisfies Meta<typeof PriceChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ChartDefault: Story = {
  args: {
    price: 240800,
    low: 1.62,
    high: 2.5,
    change: 24.2,
    activeTab: 'Day',
    xkey: 'x',
  },
};




