import { BottomNavigation } from '@/components/ui/welf/bottom-navigation';
import type { Meta, StoryObj } from '@storybook/react';
import { LucideAccessibility, LucideLayoutDashboard, LucideSquareStack } from 'lucide-react';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'WELF Global Design Toolkit/Controls/Bottom Navigation',  
  component: BottomNavigation,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    activeTab: {
      control: 'select',
      options: ['active', 'default']
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { activeTab: {
      title: "Active",
      Icon: LucideAccessibility
    } },
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
      activeTab: {
      title: "Portfolio",
      Icon: LucideLayoutDashboard
    },
    options: [
      {
        title: "Portfolio",
        Icon: LucideLayoutDashboard
      },
      {
        title: "Stake",
        Icon: LucideSquareStack
      }
    ],
    onSelect: (tab) => {
      console.log(tab);
    }
  },
};



