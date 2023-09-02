import type { Meta, StoryObj } from '@storybook/react';
import { BooksDetailPage } from './BooksDetailPage';

const meta = {
  title: 'pages/BooksDetailPage',
  component: BooksDetailPage,
  tags: ['autodocs'],
} satisfies Meta<typeof BooksDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
  },
};
