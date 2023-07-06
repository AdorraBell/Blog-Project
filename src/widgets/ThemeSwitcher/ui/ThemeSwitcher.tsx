import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/useTheme';
import LightIcon from 'shared/assets/icons/sun.svg';
import DarkIcon from 'shared/assets/icons/moon.svg';
import { Theme } from 'shared/config/theme/ThemeContext';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps{
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      onClick={toggleTheme}
      theme={ThemeButton.BUTTON_DRIB}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      { theme === Theme.LIGHT
        ? (
          <DarkIcon
            className={classNames(cls.icon, {}, [cls.darkIcon])}
          />
        )
        : (
          <LightIcon
            className={classNames(cls.icon, {}, [])}
          />
        )}
    </AppButton>
  );
};
