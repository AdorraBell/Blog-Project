import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'shared/config/theme/ThemeContext';
import { useState, useMemo, FC } from 'react';

const defaulTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme,
  } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaulTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
