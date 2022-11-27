import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Testando a App.js', () => {
  test('Verificando se o label e o input existem no documento', () => {
    render(<App />);
    const labelTask = screen.getByText('Tarefa:');
    const inputTask = screen.getByLabelText('Tarefa:');

    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    expect(inputTask.type).toBe('text');
  });

  test('Exercício 1 - Botão de adicionar', () => {
    // pegar elementos
    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    expect(inputTask).toBeInTheDocument();

    const btnAdd = screen.getByRole('button'); // encontrar um elemento botão
    expect(btnAdd).toBeInTheDocument();
    expect(btnAdd).toHaveTextContent('Adicionar');

    // interagir
    userEvent.type(inputTask, 'terminar exercícios do dia 14.1');
    userEvent.click(btnAdd);

    // fazer testes
    const task = screen.getByText('terminar exercícios do dia 14.1');
    expect(task).toBeInTheDocument();
  });

  test('Exercício 2 - Verificar se tarefa digitada é adicionada', () => {
    // Adicionar 2 tarefas no código
    render(<App />);
    const iptTask = screen.getByLabelText('Tarefa:');
    const btnAdd = screen.getByRole('button', { name: /adicionar/i });

    // interagir
    userEvent.type(iptTask, 'Lavar louça');
    userEvent.click(btnAdd);

    userEvent.type(iptTask, 'Estudar RTL');
    userEvent.click(btnAdd);

    // pegar itens adicionados
    const itens = screen.getAllByRole('listitem'); // Capturar todos os itens <li>
    expect(itens).toHaveLength(2);
  });

  test.only('Exercício 3 - Ao selecionar tarefa e clicar em remover tarefa é excluída', () => {
    // Capturar elementos
    render(<App />);
    const iptTask = screen.getByRole('textbox');
    const btnAdd = screen.getByRole('button', { name: /adicionar/i });

    // Digitar 2 tarefas
    userEvent.type(iptTask, 'Finalizar tarefas do dia 14.1 de RTL');
    userEvent.click(btnAdd);

    userEvent.type(iptTask, 'Jogar videogame');
    userEvent.click(btnAdd);

    const btnsSelect = screen.getAllByRole('button', { name: /selecionar/i });
    const btnsRemove = screen.getAllByRole('button', { name: /remover/i });

    userEvent.click(btnsSelect[0]);
    userEvent.click(btnsRemove[0]);

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(1);
  });
});
