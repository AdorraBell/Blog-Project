import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { AppText, TextTheme } from './AppText';

const meta: Meta<typeof AppText> = {
  title: 'shared/AppText',
  component: AppText,
};

export default meta;
type Story = StoryObj<typeof AppText>;

export const Light: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum',
  },
};

export const Dark = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightError: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum',
    theme: TextTheme.ERROR,
  },
};

export const DarkError = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleLight: Story = {
  args: {
    title: 'Title lorem ipsum',
  },
};

export const OnlyTitleDark = {
  args: {
    title: 'Title lorem ipsum',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyDescriptionLight: Story = {
  args: {
    text: 'Description lorem ipsum',
  },
};

export const OnlyDescriptionDark = {
  args: {
    text: 'Description lorem ipsum',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
