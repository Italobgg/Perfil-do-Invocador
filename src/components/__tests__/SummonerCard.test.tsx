import { render, screen } from '@testing-library/react';
import SummonerCard from '../SummonerCard';
import { Summoner } from '@/types/summoner';

// 1. Criar um mock dos dados que o componente espera
const mockSummoner: Summoner = {
  id: '1',
  accountId: '1',
  puuid: '1',
  name: 'Test Summoner',
  profileIconId: 4089,
  revisionDate: 0,
  summonerLevel: 150,
};

describe('SummonerCard', () => {
  it('deve renderizar o nome, nível e ícone do invocador', () => {
    // 2. Renderizar o componente passando o mock
    render(<SummonerCard summoner={mockSummoner} />);

    // 3. Verificar se os elementos estão na tela
    
    // Verifica o nome
    expect(screen.getByText('Test Summoner')).toBeInTheDocument();
    
    // Verifica o nível
    expect(screen.getByText(150)).toBeInTheDocument();

    // Verifica a imagem (pelo 'alt text', que é bom para acessibilidade)
    const iconImage = screen.getByAltText('Test Summoner profile icon');
    expect(iconImage).toBeInTheDocument();

    const expectedUrl = `https://ddragon.leagueoflegends.com/cdn/13.20.1/img/profileicon/${mockSummoner.profileIconId}.png`;
    expect(iconImage).toHaveAttribute('src', expect.stringContaining(encodeURIComponent(expectedUrl))); 
  });
});