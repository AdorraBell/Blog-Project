import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { CollapsedSidebarBtn } from './CollapsedSidebarBtn';

const meta: Meta<typeof CollapsedSidebarBtn> = {
  title: 'widgets/CollapsedSidebarBtn',
  component: CollapsedSidebarBtn,
};

export default meta;
type Story = StoryObj<typeof CollapsedSidebarBtn>;

export const LightClosed: Story = {
  args: {
    collapsed: true,
  },
};

export const DarkClosed = {
  args: {
    collapsed: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightOpened: Story = {
  args: {
    collapsed: false,
  },
};

export const DarkOpened = {
  args: {
    collapsed: false,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
