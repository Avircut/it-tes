import type { Meta, StoryObj } from '@storybook/react';
import { BooksPage } from './BooksPage';

const meta = {
  title: 'pages/BooksPage',
  component: BooksPage,
  tags: ['autodocs'],
} satisfies Meta<typeof BooksPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
  },
};
