import type { Meta, StoryObj } from '@storybook/react';
import  MainPage  from './MainPage'; // экспорт дефолтный, так как лейзи лоадинг
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';


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
  decorators: [ThemeDecorator(Theme.DARK)]
};