import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  decorators: [StoreDecorator({ loginForm: { username: '123', password: 'dew' } })],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
};

export const Dark = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
