import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verifica se existe input email na tela', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verificar se existem 2 botões na tela', () => {
  render(<App />);
  // pegar elementos
  const buttons = screen.getAllByRole('button'); // pegar por função
  
  // fazer testes
  expect(buttons).toHaveLength(2);
})

test('Verificar se botão de "Enviar" existe ', () => {
  render(<App />);

  // pegar elementos
  const button = screen.getByTestId('id-send');

  // fazer testes
  expect(button).toBeInTheDocument();
  expect(button).toHaveValue('Enviar');
})

test('Verificar se botão "Voltar" existe', () => {
  render(<App />);
  // pegar elemento
  const backButton = screen.getByTestId('back-btn');

  // fazer testes
  expect(backButton).toBeInTheDocument();
  expect(backButton).toHaveValue('Voltar');
})

test.only('Verificar que ao digitar no input email e clicar em "Enviar", o email será renderizado na tela', () => {
  render(<App />);
  const iptEmail = screen.getByLabelText('Email');
  const btnSend = screen.getByTestId('id-send');
  const user = screen.getByTestId('id-email-user');

  // interação com os elementos
  userEvent.type(iptEmail, 'teste@gmail.com');
  userEvent.click(btnSend);

  expect(iptEmail).toHaveValue('');
  expect(user).toHaveTextContent('Valor: teste@gmail.com');
})
