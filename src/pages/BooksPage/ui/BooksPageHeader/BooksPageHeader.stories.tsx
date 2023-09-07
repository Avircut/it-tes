import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { BooksPageHeader } from './BooksPageHeader';

const meta = {
  title: 'pages/BooksPage/BooksPageHeader',
  component: BooksPageHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof BooksPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
  decorators: [
    StoreDecorator({}),
  ],
};
