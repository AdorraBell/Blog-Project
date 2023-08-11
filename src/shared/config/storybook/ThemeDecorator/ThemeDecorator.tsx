import { StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Theme } from 'shared/config/theme/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (story: () => StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      {story()}
    </div>
  </ThemeProvider>
);
