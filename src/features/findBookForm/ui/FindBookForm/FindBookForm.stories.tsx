import type { Meta, StoryObj } from '@storybook/react';
import { FindBookForm } from './FindBookForm';

const meta = {
  title: 'features/FindBookForm',
  component: FindBookForm,
  tags: ['autodocs'],
} satisfies Meta<typeof FindBookForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
  },
};