import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './AppButton.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    SHADOW = 'shadow',
    DRIB = 'drib',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outline_inverted'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ThemeButton,
    dataTestid?: string
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ThemeButton.CLEAR,
    dataTestid,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.Button, {}, [cls[theme], className])}
      data-testid={dataTestid}
      {...otherProps}
    >
      {children}
    </button>
  );
};
