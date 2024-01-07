import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispath = useDispatch();

  const toggleModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const onLogout = useCallback(() => {
    dispath(userActions.logout());
  }, [dispath]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
          <AppButton
            theme={ThemeButton.OUTLINE_INVERTED}
            onClick={onLogout}
          >
            {t('Sign out')}
          </AppButton>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppButton
          theme={ThemeButton.OUTLINE_INVERTED}
          onClick={toggleModal}
        >
          {t('Sign in')}
        </AppButton>
      </div>
      <LoginModal
        isOpen={isModalOpen}
        onClose={toggleModal}
      />
    </div>
  );
};
