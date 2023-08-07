import { classNames } from 'shared/lib/classNames/classNames';
import MenuIcon from 'shared/assets/icons/menu-icon.svg';
import CrossIcon from 'shared/assets/icons/cross.svg';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import cls from './CollapsedSidebarBtn.module.scss';

interface CollapsedSidebarBtnProps {
    className?: string,
    collapsed: boolean,
    onClick: () => void,
}

export const CollapsedSidebarBtn = ({ className, collapsed, onClick }: CollapsedSidebarBtnProps) => (
  <AppButton
    className={classNames(cls.CollasedSidebarBtn, {}, [className])}
    theme={ThemeButton.DRIB}
    type="button"
    onClick={onClick}
  >
    { collapsed
      ? (
        <MenuIcon
          className={classNames(cls.icon, {}, [])}
        />
      )
      : (
        <CrossIcon
          className={classNames(cls.icon, {}, [])}
        />
      )}
  </AppButton>
);
