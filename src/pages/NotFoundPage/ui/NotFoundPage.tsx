import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { Link } from 'react-router-dom';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Page is not found')}
      <Link to="/">
        <AppButton theme={ThemeButton.SHADOW}>
          {t('Go Home')}
        </AppButton>
      </Link>
    </div>
  );
};
