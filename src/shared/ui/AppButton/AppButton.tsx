import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    CIRCLE_SHADOW_45 = 'circle_shadow_45',
    CIRCLE_SHADOW_45_DRIB = 'circle_shadow_45_drib'
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
            className={classNames(cls.Button, {}, [cls[theme]])}
            {...otherProps} >
            {children}
        </button>
    );
}