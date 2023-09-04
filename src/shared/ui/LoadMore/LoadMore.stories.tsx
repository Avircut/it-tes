import type { Meta, StoryObj } from '@storybook/react';
import { LoadMore } from './LoadMore';

const meta = {
  title: 'shared/LoadMore',
  component: LoadMore,
  tags: ['autodocs'],
} satisfies Meta<typeof LoadMore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
