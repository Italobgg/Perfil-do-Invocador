import { Summoner } from '@/types/summoner';
import Image from 'next/image';

interface SummonerCardProps {
  summoner: Summoner;
}

/*Componente para exibir as informações básicas do Invocador (Ícone, Nome, Nível).*/

export default function SummonerCard({ summoner }: SummonerCardProps) {
  // A API da Riot não fornece a URL completa do ícone, apenas o ID.
  // Precisamos montá-la usando a URL do Data Dragon (CDN de assets da Riot).
  const profileIconUrl = `https://ddragon.leagueoflegends.com/cdn/13.20.1/img/profileicon/${summoner.profileIconId}.png`;
  // NOTA: '13.20.1' é uma versão do patch. No futuro, podemos tornar isso dinâmico.

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-lg">
      {/* Wrapper relativo para o nível */}
      <div className="relative">
        <Image
          src={profileIconUrl}
          alt={`${summoner.name} profile icon`}
          width={100} // Tamanho da imagem
          height={100}
          className="rounded-full border-4 border-blue-500"
          priority // Carrega esta imagem com prioridade, pois é o conteúdo principal
        />
        {/* Tag do Nível */}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded-full border-2 border-blue-500">
          {summoner.summonerLevel}
        </span>
      </div>

      {/* Informações */}
      <div>
        <h1 className="text-3xl font-bold">{summoner.name}</h1>
        {/* (Opcional) Podemos adicionar mais informações aqui depois, como o Elo */}
        <p className="text-gray-400">ID (para debug): {summoner.id}</p>
      </div>
    </div>
  );
}