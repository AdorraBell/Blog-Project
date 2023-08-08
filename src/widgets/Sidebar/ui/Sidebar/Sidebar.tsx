import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { CollapsedSidebarBtn } from 'widgets/CollapsedSidebarBtn';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <CollapsedSidebarBtn
        collapsed={collapsed}
        onClick={onToggle}
        className={cls.collapsedBtn}
        data-testid="sidebar-toggle"
      />
      <div className={cls.menuList}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.MENU}
          className={cls.menuPoint}
        >
          <HomeIcon
            className={cls.icon}
          />
          <span className={cls.link}>
            {t('Main')}
          </span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.MENU}
          className={cls.menuPoint}
        >
          <AboutIcon
            className={cls.icon}
          />
          <span className={cls.link}>
            {t('About')}
          </span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher
          className={cls.switcher}
        />
        <LanguageSwitcher
          className={cls.switcher}
          short={collapsed}
        />
      </div>
    </div>
  );
};
