import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "shared/lib/useTheme";
import LightIcon from "shared/assets/icons/sun.svg";
import DarkIcon from "shared/assets/icons/moon.svg";
import { Theme } from "shared/config/theme/ThemeContext";
import { AppButton, ThemeButton } from "shared/ui/AppButton/AppButton";

interface ThemeSwitcherProps{
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    
    const {theme, toggleTheme} = useTheme();

    return ( 
        <>
            <AppButton 
                onClick={toggleTheme}
                theme={ThemeButton.CIRCLE_SHADOW_45_DRIB}
                className={cls.ThemeSwitcher}
                 >
                    { theme === Theme.LIGHT ?
                        <LightIcon 
                        className={classNames(cls.icon, {}, [])} />
                        :
                        <DarkIcon 
                        className={classNames(cls.icon, {}, [cls.darkIcon])} />
                    }
            </AppButton>
                   
        </>
        
    );
}
 
