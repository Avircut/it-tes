import type { Meta, StoryObj } from '@storybook/react';
import { ButtonInput } from './ButtonInput';

const meta = {
  title: 'shared/ButtonInput',
  component: ButtonInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
