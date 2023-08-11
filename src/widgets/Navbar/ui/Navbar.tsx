import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { useCallback, useState } from 'react';
import { AppModal } from 'shared/ui/AppModal/AppModal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppButton
          theme={ThemeButton.OUTLINE}
          onClick={toggleModal}
        >
          {t('Sign in')}
        </AppButton>
      </div>
      <AppModal
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        {t('Sign in')}
      </AppModal>
    </div>
  );
};
