import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Тест',
  },
};

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    children: 'Тест',
  },
};
export const ClearPadding: Story = {
  args: {
    theme: ButtonTheme.CLEAR_PADDING,
    children: 'Тест',
  },
};
export const ClearInverted: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
    children: 'Тест',
  },
};

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Тест',
  },
};
export const OutlineRedd: Story = {
  args: {
    theme: ButtonTheme.OUTLINE_RED,
    children: 'Тест',
  },
};
export const OutlineSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Тест',
    size: ButtonSize.L,
  },
};
export const OutlineSizeXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Тест',
    size: ButtonSize.XL,
  },
};

export const BackgroundTheme: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    children: 'Тест',
  },
};
export const BackgroundInvertTheme: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Тест',
  },
};
export const Square: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    children: '>',
  },
};
export const SquareSizeL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
    children: '>',
  },
};
export const SquareSizeXL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
    children: '>',
  },
};

export const Disabled: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Тест',
    disabled: true,
  },
};
