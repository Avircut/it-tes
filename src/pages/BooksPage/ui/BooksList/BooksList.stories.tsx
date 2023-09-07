import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { BooksList } from './BooksList';

const meta = {
  title: 'pages/BooksPage/BooksList',
  component: BooksList,
  tags: ['autodocs'],
} satisfies Meta<typeof BooksList>;

export default meta;
type Story = StoryObj<typeof meta>;
const volumes = [
  {
    id: '1',
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
  },
  {
    id: '2',
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
  },
  {
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
  },
  {
    id: '4',
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
  },
  {
    id: '5',
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
  },
];
export const Normal: Story = {
  args: {
    volumes,
    isFetching: false,
    total: 5,
  },
  decorators: [
    StoreDecorator({
    }),
  ],
};
export const Loading: Story = {
  args: {
    volumes,
    isFetching: true,
    total: 4,
  },
  decorators: [
    StoreDecorator({
    }),
  ],
};
export const Error: Story = {
  args: {
    volumes,
    isFetching: false,
    total: 4,
    error: true,
  },
  decorators: [
    StoreDecorator({
    }),
  ],
};
