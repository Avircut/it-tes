import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { FindBookForm } from './FindBookForm';

const meta = {
  title: 'pages/BooksPage/FindBookForm',
  component: FindBookForm,
  tags: ['autodocs'],
} satisfies Meta<typeof FindBookForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
  },
  decorators: [
    StoreDecorator({}),
  ],
};
