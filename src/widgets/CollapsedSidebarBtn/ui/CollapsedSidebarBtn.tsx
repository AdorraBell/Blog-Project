import { classNames } from 'shared/lib/classNames/classNames';
import MenuIcon from 'shared/assets/icons/menu-icon.svg';
import CrossIcon from 'shared/assets/icons/cross.svg';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { FC } from 'react';
import cls from './CollapsedSidebarBtn.module.scss';

interface CollapsedSidebarBtnProps {
    className?: string,
    collapsed: boolean,
    onClick?: () => void,
    dataTestid?: string
}

export const CollapsedSidebarBtn: FC<CollapsedSidebarBtnProps> = (props) => {
  const {
    className,
    collapsed,
    onClick,
    dataTestid,
  } = props;

  return (
    <AppButton
      className={classNames(cls.CollasedSidebarBtn, {}, [className])}
      theme={ThemeButton.DRIB}
      type="button"
      onClick={onClick}
      dataTestid={dataTestid}
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
};
