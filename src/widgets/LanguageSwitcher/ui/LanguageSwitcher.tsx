import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';

interface LanguageSwitcherProps{
    className?: string
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      onClick={toggle}
      theme={ThemeButton.BUTTON_DRIB}
      className={className}
    >
      {t('Language')}
    </AppButton>
  );
};
