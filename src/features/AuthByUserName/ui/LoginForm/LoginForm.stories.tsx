import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  decorators: [StoreDecorator({ loginForm: { username: '123', password: 'dew' } })],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Form: Story = {
  args: {},
};

export const FormDark = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
