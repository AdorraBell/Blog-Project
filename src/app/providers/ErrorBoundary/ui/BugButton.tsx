import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// component to test the error boundary

export const BugButton = () => {

  const [error, setError] = useState(false);
  const {t} = useTranslation();

  const throwError = () => {
    setError(!error);
  }

  useEffect(() => {
    if (error) throw new Error();
  }, [error])

  return (
    <AppButton 
      theme={ThemeButton.CIRCLE_SHADOW}
      onClick={throwError}>
      {t('Throw Error')}
    </AppButton>
  );
}