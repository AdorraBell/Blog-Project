import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <button
        onClick={onToggle}
        type="button"
      >
        Toggle
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
