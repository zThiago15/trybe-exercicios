import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe input email na tela', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});
