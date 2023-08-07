import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';

interface LanguageSwitcherProps{
    className?: string,
    short?: boolean,
}

export const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      onClick={toggle}
      theme={ThemeButton.DRIB}
      className={className}
    >
      {t(short ? 'Language-short' : 'Language')}
    </AppButton>
  );
};
