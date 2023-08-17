import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
  args: {},
};

export const Dark = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
