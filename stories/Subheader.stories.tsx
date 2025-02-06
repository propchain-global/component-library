import { Subheader } from '@/components/ui/subheader';
import type { Meta, StoryObj } from '@storybook/react';
const dummyMarketInfo = [
   {
       title: 'Market cap',
       price: '$42.31M',
       percentChange: '1.23%'
   },
   {
       title: 'Volume (24h)',
       price: '$1.23B',
       percentChange: '1.23%'
   },
   {
     title: "FDV",
     price: '$100.23B',
     percentChange: '1.23%'
   },
   {
     title: "Ticker",
     price: "$WELF"
   },
   {
     title: "Vol/Mkt Cap (24h)",
     price: "1.23%",
     percentChange: "1.23%"
   },
   {
       title: 'Total supply',
       price: '2.21M',
       percentChange: '1.23%'
   }
]

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Global Design Toolkit/Controls/Subheader',  
  component: Subheader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
   
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    marketInfo: {
      control: {
        type: 'object',
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { marketInfo: [] },
} satisfies Meta<typeof Subheader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  
  args: {
    marketInfo: dummyMarketInfo
  },
};




