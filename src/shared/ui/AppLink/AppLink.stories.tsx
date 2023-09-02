import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Test',
    theme: AppLinkTheme.PRIMARY,
  },
};
export const Secondary: Story = {
  args: {
    children: 'Test',
    theme: AppLinkTheme.SECONDARY,
  },
};
