import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { useState } from 'react';
import { AppModal } from 'shared/ui/AppModal/AppModal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppButton
          theme={ThemeButton.DRIB}
          onClick={toggleModal}
        >
          {t('Toggle')}
        </AppButton>
        <AppModal
          isOpen={isOpen}
          onClose={toggleModal}
        >
          lorem ipsum dolor sit amet, consectetur adipiscing elit. proin in ante viverra
        </AppModal>
      </div>
    </div>
  );
};
