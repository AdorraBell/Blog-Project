import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'text',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Menu: Story = {
  args: {
    theme: AppLinkTheme.MENU,
  },
};

export const MenuDark = {
  args: {
    theme: AppLinkTheme.MENU,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Normal = {
  args: {
    theme: AppLinkTheme.NORMAL,
  },
};

export const NormalDark = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
