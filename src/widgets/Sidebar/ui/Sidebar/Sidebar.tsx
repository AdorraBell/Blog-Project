import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <button
        onClick={onToggle}
        type="button"
        data-testid="sidebar-toggle"
      >
        {t('Toggle')}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher
          className={cls.switcher}
        />
        <LanguageSwitcher
          className={cls.switcher}
        />
      </div>
    </div>
  );
};
