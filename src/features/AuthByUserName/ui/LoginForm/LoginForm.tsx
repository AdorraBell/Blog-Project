import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppText, TextTheme } from 'shared/ui/AppText/AppText';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { LoginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const [secondLineFocus, setSecondLineFocus] = useState(false);

  const dispatch = useDispatch();
  const {
    username,
    password,
    error,
    isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
    setSecondLineFocus(false);
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(LoginByUserName({ username, password }));
  }, [dispatch, username, password]);

  const firstLineOnEnter = () => {
    setSecondLineFocus(true);
  };

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <AppText title={t('Authorization form')} />
      {error
        && (
          <AppText
            theme={TextTheme.ERROR}
            text={error}
          />
        )}
      <AppInput
        className={cls.liginInput}
        inputTitle={t('Login')}
        autoFocus
        onEnter={firstLineOnEnter}
        onChange={onChangeUsername}
        value={username}
      />
      <AppInput
        className={cls.liginInput}
        inputTitle={t('Password')}
        autoFocus={secondLineFocus}
        onChange={onChangePassword}
        value={password}
      />
      <AppButton
        theme={ThemeButton.OUTLINE}
        className={cls.logInBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Sign in')}
      </AppButton>
    </div>
  );
});
