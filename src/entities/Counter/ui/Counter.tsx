import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">
        { counterValue }
      </h1>
      <AppButton
        onClick={increment}
        theme={ThemeButton.OUTLINE}
        dataTestid="increment-btn"
      >
        {t('Increment')}
      </AppButton>
      <AppButton
        onClick={decrement}
        theme={ThemeButton.OUTLINE}
        dataTestid="decrement-btn"
      >
        {t('Decrement')}
      </AppButton>
    </div>
  );
};
