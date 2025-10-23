import { render, screen } from '@testing-library/react';
import Home from '../../app/page';

// Simula o useRouter para este teste
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(), // Simula a função push
  }),
}));

describe('Home Page', () => {
  it('deve renderizar o título principal e a barra de busca', () => {
    render(<Home />);
    
    // Procura pelo novo título
    const heading = screen.getByRole('heading', {
      name: /Perfil do Invocador/i,
    });
    expect(heading).toBeInTheDocument();

    // Verifica se a barra de busca está presente
    const searchInput = screen.getByPlaceholderText('Nome do Invocador...');
    expect(searchInput).toBeInTheDocument();
  });
});