// src/app/__tests__/page.test.tsx
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('should render the main heading', () => {
    render(<Home />);

    // Next.js com Tailwind cria uma página inicial com este texto
    const heading = screen.getByText(/Get started by editing/i);

    expect(heading).toBeInTheDocument();
  });
});