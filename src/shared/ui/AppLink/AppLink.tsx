import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
    MENU = 'menu',
    NORMAL = 'normal'
}

interface AppLinkProps extends LinkProps{
    className?: string,
    theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
    
    const {
        to, 
        className, 
        children,
        theme = AppLinkTheme.NORMAL, 
        ...otherProps
    } = props;
    
    return ( 
        <Link 
            to={to}
            {...otherProps}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
                {children}
        </Link>
     );
}
 
export default AppLink;