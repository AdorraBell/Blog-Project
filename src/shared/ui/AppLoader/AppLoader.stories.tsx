import type { Meta, StoryObj } from '@storybook/react';
import { AppLoader } from './AppLoader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';


const meta: Meta<typeof AppLoader> = {
  title: 'shared/AppLoader',
  component: AppLoader,
};

export default meta;
type Story = StoryObj<typeof AppLoader>;


export const Light: Story = {
  args: {},
};

export const Dark = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
};