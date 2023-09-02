import type { Meta, StoryObj } from '@storybook/react';
import { BooksPageHeader } from './BooksPageHeader';

const meta = {
  title: 'shared/BooksPageHeader',
  component: BooksPageHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof BooksPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
