import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <h1>{t('Main')}</h1>
    </div>
  );
};

export default MainPage;
