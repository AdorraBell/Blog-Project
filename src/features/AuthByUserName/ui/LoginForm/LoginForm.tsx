import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const [secondLineFocus, setSecondLineFocus] = useState(false);

  const firstLineChanged = () => {
    setSecondLineFocus(false);
  };

  const firstLineOnEnter = () => {
    setSecondLineFocus(true);
  };

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <AppInput
        className={cls.liginInput}
        inputTitle={t('Login')}
        autoFocus
        onEnter={firstLineOnEnter}
        onChange={firstLineChanged}
      />
      <AppInput
        className={cls.liginInput}
        inputTitle={t('Password')}
        autoFocus={secondLineFocus}
      />
      <AppButton
        theme={ThemeButton.OUTLINE}
        className={cls.logInBtn}
      >
        {t('Sign in')}
      </AppButton>
    </div>
  );
};
