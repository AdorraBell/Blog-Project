import { render, screen } from '@testing-library/react';
import { AppButton, ThemeButton } from './AppButton';

describe('appButton', () => {
  test('test render', () => {
    render(<AppButton>TEST</AppButton>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('test clear theme', () => {
    render(<AppButton theme={ThemeButton.CLEAR}>TEST</AppButton>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
