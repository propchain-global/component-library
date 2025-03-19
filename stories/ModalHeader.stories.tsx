import { ModalHeader } from '@/components/ui/welf/modal-header';
import type { Meta, StoryObj } from '@storybook/react';



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'WELF Global Design Toolkit/ controls / ModalHeader',
  component: ModalHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['icon+title', 'title+supporting', 'centered']
    },
    showCloseButton: { control: 'boolean' }
  }
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ModalHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: "icon+title",
    title: 'Title',
    supportingText: 'Supporting text',
    showCloseButton: false,
  },
};

