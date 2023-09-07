import type { Meta, StoryObj } from '@storybook/react';
import { Volume } from '../../model/types/BookSchema';
import { BookCard } from './BookCard';

const volume:Volume = {
  id: '3',
  volumeInfo: {
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit!',
    authors: ['Chris Pratt', 'John Smith'],
    categories: ['art', 'biography'],
    infoLink: 'https://google.com',
    imageLinks: {
      smallThumbnail: 'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg',
      thumbnail: 'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg',
    },
  },
  saleInfo: {
    retailPrice: {
      amount: 123.33,
      currencyCode: 'RUB',
    },
  },
  buyLink: 'https://google.com',
};
const meta = {
  title: 'entities/BookCard',
  component: BookCard,
  tags: ['autodocs'],
} satisfies Meta<typeof BookCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    volume,
  },
};
