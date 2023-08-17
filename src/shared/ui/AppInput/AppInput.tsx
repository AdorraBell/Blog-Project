import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  memo, InputHTMLAttributes, useEffect, useState, useRef,
} from 'react';
import cls from './AppInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onKeyDown'>

interface AppInputProps extends HTMLInputProps{
    className?: string,
    inputTitle?: string,
    value?: string,
    onChange?: (value: string) => void,
    type?: string,
    autoFocus?: boolean,
    onEnter?: () => void,
}

export const AppInput = memo((props: AppInputProps) => {
  const {
    className,
    inputTitle,
    value,
    onChange,
    type = 'text',
    autoFocus,
    onEnter,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter?.();
    }
  };

  return (
    <div className={classNames(cls.AppInputWrapper, {}, [className])}>
      {inputTitle
        && (
          <span className={cls.inputTitle}>
            {inputTitle}
          </span>
        )}
      <input
        type={type}
        className={cls.appInput}
        value={value}
        onChange={onChangeHandler}
        ref={ref}
        onKeyDown={onKeyDown}
        {...otherProps}
      />
    </div>
  );
});
