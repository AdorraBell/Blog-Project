import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { AppInput } from './AppInput';

const meta: Meta<typeof AppInput> = {
  title: 'shared/AppInput',
  component: AppInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppInput>;

export const Input: Story = {
  args: {
    inputTitle: 'title',
    value: 'text',
  },
};

export const InputDark = {
  args: {
    inputTitle: 'title',
    value: 'text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
