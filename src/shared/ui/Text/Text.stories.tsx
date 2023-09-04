import type { Meta, StoryObj } from '@storybook/react';

import {
  Text, TextSize, TextTheme, TextWeight,
} from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos impedit possimus. Placeat minima sit ab, tenetur fugiat sint mollitia.',
  },
};
export const Error: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos impedit possimus. Placeat minima sit ab, tenetur fugiat sint mollitia.',
    theme: TextTheme.ERROR,
  },
};
export const OnlyTitle: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet consectetur.',
  },
};
export const OnlyText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos impedit possimus. Placeat minima sit ab, tenetur fugiat sint mollitia.',
  },
};

export const SizeL: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos impedit possimus. Placeat minima sit ab, tenetur fugiat sint mollitia.',
    size: TextSize.L,
  },
};

export const SizeS: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos impedit possimus. Placeat minima sit ab, tenetur fugiat sint mollitia.',
    size: TextSize.S,
  },
};
export const SizeM: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos impedit possimus. Placeat minima sit ab, tenetur fugiat sint mollitia.',
    size: TextSize.M,
  },
};

export const SemiBold: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos impedit possimus. Placeat minima sit ab, tenetur fugiat sint mollitia.',
    size: TextSize.M,
    weight: TextWeight.SEMIBOLD,
  },
};

export const Bold: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos impedit possimus. Placeat minima sit ab, tenetur fugiat sint mollitia.',
    size: TextSize.M,
    weight: TextWeight.BOLD,
  },
};
