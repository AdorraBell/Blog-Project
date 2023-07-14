import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';

interface PageErrorProps {
    className?: string
}

export const PageError = ({className}: PageErrorProps) => {
  const {t} = useTranslation();
  
  const reloadPage = () => {
    location.reload();
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Something went wrong')}</p>
      <AppButton
        theme={ThemeButton.CIRCLE_SHADOW}
        onClick={reloadPage}>
        {t('Reload page')}
      </AppButton>
    </div>
  );
}