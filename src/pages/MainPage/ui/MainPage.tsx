import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <h1>{t('Main')}</h1>
      <Counter />
    </div>
  );
};

export default MainPage;
