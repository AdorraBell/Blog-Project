import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
  args: {},
};

export const Dark = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
