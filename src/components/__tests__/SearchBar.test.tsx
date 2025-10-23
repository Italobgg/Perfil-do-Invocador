import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';
import { useRouter } from 'next/navigation';

// 1. Mockar o 'next/navigation'
// Precisamos simular o comportamento do hook useRouter
const mockRouterPush = jest.fn(); // jest.fn() cria uma função espiã

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockRouterPush, // Quando o componente chamar router.push, ele chamará nosso mock
  }),
}));

describe('SearchBar', () => {
  // Limpa o mock entre os testes
  beforeEach(() => {
    mockRouterPush.mockClear();
  });

  it('deve renderizar o input e o botão', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText('Nome do Invocador...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument();
  });

  it('deve atualizar o valor do input ao digitar', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Nome do Invocador...') as HTMLInputElement;

    // Simula o usuário digitando
    fireEvent.change(input, { target: { value: 'Rito Pls' } });

    expect(input.value).toBe('Rito Pls');
  });

  it('deve chamar router.push com o nome correto ao enviar', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Nome do Invocador...');
    const button = screen.getByRole('button', { name: /buscar/i });

    // 1. Simula digitação
    fireEvent.change(input, { target: { value: 'Rito Pls' } });
    
    // 2. Simula clique
    fireEvent.click(button);

    // 3. Verifica se o router.push foi chamado com a URL correta
    expect(mockRouterPush).toHaveBeenCalledTimes(1);
    expect(mockRouterPush).toHaveBeenCalledWith('/summoner/Rito Pls');
  });

  it('não deve chamar router.push se o input estiver vazio ou só com espaços', () => {
    render(<SearchBar />);
    const button = screen.getByRole('button', { name: /buscar/i });
    const input = screen.getByPlaceholderText('Nome do Invocador...');

    // Tenta enviar vazio
    fireEvent.click(button);
    expect(mockRouterPush).not.toHaveBeenCalled();

    // Simula digitação com espaços
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(button);
    expect(mockRouterPush).not.toHaveBeenCalled();
  });
});