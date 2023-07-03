import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;

}

export const Navbar = ({className}: NavbarProps) => {
    
    return ( 
        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={cls.links}>
                <AppLink 
                    to="/about"
                    className={cls.mainLink}
                    theme={AppLinkTheme.MENU}>
                    About
                </AppLink>
                <AppLink  
                    to="/"
                    theme={AppLinkTheme.MENU}>
                    Home
                </AppLink>
            </div>
            
        </div>
    );
}
 
