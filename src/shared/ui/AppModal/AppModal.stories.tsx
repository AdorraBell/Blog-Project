import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { AppModal } from './AppModal';

const meta: Meta<typeof AppModal> = {
  title: 'shared/AppModal',
  component: AppModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppModal>;

export const Modal: Story = {
  args: {
    isOpen: true,
    children: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. proin in ante viverra',
  },
};

export const ModalDark = {
  args: {
    isOpen: true,
    children: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. proin in ante viverra',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
