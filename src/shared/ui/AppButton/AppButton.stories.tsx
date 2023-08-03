import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { AppButton, ThemeButton } from './AppButton';

const meta: Meta<typeof AppButton> = {
  title: 'shared/AppButton',
  component: AppButton,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Drib: Story = {
  args: {
    children: 'text',
    theme: ThemeButton.BUTTON_DRIB,
  },
};

export const DribDark = {
  args: {
    children: 'text',
    theme: ThemeButton.BUTTON_DRIB,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
  args: {
    children: 'text',
    theme: ThemeButton.CLEAR,
  },
};

export const CurcleShadow: Story = {
  args: {
    children: 'text',
    theme: ThemeButton.CIRCLE_SHADOW,
  },

};

export const CurcleShadowDark = {
  args: {
    children: 'text',
    theme: ThemeButton.CIRCLE_SHADOW,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
