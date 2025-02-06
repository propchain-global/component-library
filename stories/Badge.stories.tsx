import { Badge } from '@/components/ui/badge';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {Circle} from 'lucide-react'


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Base Components /Controls/ Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
      variant: { control: 'select', options: ['primary-info', 'primary-warning', 'primary-success', 'primary-error', 'primary-neutral', 'secondary-info', 'secondary-warning', 'secondary-success', 'secondary-error', 'secondary-neutral'] },
      size: { control: 'select', options: ['s', 'l'] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary-info',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary-info',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'Button',
  },
};
export const WithIcon: Story = {
  args: {
    size: 'l',
    children: <><Circle className='w-3x h-3x'/> Status Text</>,
    
  },
};
