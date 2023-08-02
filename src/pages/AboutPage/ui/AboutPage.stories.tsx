import type { Meta, StoryObj } from '@storybook/react';
import  AboutPage  from './AboutPage'; // экспорт дефолтный, так как лейзи лоадинг
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';


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
  decorators: [ThemeDecorator(Theme.DARK)]
};