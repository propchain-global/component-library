import { Button } from '@/components/ui/button';
import { Circle } from "lucide-react";
import type { Meta, StoryObj } from '@storybook/react';



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Base Components /Controls/ Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary','alert', 'outline', 'link', 'secondary', 'tertiary']
    },
    IconLeft: { control: false }
  }
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "link",
    children: 'Button',
    size: 'xl',
    is_loading: false,
    disabled: false,
    IconLeft: Circle,
    IconRight: Circle
  },
};

export const Secondary: Story = {
  args: {
    variant: "primary",
    children: 'Button',
    IconLeft: Circle,
    IconRight: Circle
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    children: 'Button',
    IconLeft: Circle,
    IconRight: Circle
  },
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'Button',
    IconLeft: Circle,
    IconRight: Circle
  },
};