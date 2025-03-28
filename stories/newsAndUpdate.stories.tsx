import { NewsAndUpdateCarousel } from '@/components/ui/welf/news-and-update';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'WELF Global Design Toolkit/ view / news and update ',  
  component: NewsAndUpdateCarousel,
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
} satisfies Meta<typeof NewsAndUpdateCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    newsData: [
      {
        title: 'Real Stake 1',
        description: 'Say hello to a world of limitless possibilities with our innovative staking program! Experience the freedom of maximizing your earnings while maintaining full control.',
        externalLink: 'https://www.medium.com',
        thumbnail: 'https://picsum.photos/id/1/200/300',
      },
      {
        title: 'Real Stake 2',
        description: 'Say hello to a world of limitless possibilities with our innovative staking program! Experience the freedom of maximizing your earnings while maintaining full control.',
        externalLink: 'https://www.medium.com',
        thumbnail: 'https://picsum.photos/id/1/200/300',
      },
      {
        title: 'Real Stake 3',
        description: 'Say hello to a world of limitless possibilities with our innovative staking program! Experience the freedom of maximizing your earnings while maintaining full control.',
        externalLink: 'https://www.medium.com',
        thumbnail: 'https://picsum.photos/id/1/200/300',
      }
    ]
  },
};



