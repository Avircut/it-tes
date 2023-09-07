import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { BooksPage } from './BooksPage';

const meta = {
  title: 'pages/BooksPage/BooksPage',
  component: BooksPage,
  tags: ['autodocs'],
} satisfies Meta<typeof BooksPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
  },
  decorators: [
    StoreDecorator({}),
  ],
};
