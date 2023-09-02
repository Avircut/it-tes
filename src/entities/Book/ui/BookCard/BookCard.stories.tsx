import type { Meta, StoryObj } from '@storybook/react';
import { BookCard } from './BookCard';

const meta = {
  title: 'entities/BookCard',
  component: BookCard,
  tags: ['autodocs'],
} satisfies Meta<typeof BookCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
  },
};
