import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './AppButton.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    SHADOW = 'shadow',
    DRIB = 'drib'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ThemeButton
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.Button, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
