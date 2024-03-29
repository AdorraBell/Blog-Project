import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './AppText.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface AppTextProps{
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const AppText = (props: AppTextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
