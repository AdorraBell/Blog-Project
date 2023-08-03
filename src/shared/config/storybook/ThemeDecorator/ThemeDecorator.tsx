import { StoryFn } from '@storybook/react';
import { Theme } from 'shared/config/theme/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (story: () => StoryFn) => (
  <div className={`app ${theme}`}>
    {story()}
  </div>
);
