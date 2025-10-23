/* Componente Skeleton para o SummonerCard.
 * Mostra uma UI de carregamento que imita o layout do card final.*/
export default function SummonerCardSkeleton() {
  return (
    // 'animate-pulse' é a classe mágica do Tailwind para o efeito de "pulsar"
    <div className="flex animate-pulse items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
      {/* Círculo do Ícone */}
      <div className="relative">
        <div className="w-[100px] h-[100px] bg-gray-700 rounded-full border-4 border-gray-600"></div>
        {/* Tag de Nível */}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 w-12 h-5 bg-gray-700 rounded-full border-2 border-gray-600"></span>
      </div>
      
      {/* Linhas de Texto */}
      <div className="flex flex-col gap-3">
        {/* Nome */}
        <div className="w-48 h-8 bg-gray-700 rounded-md"></div>
        {/* ID (Debug) */}
        <div className="w-32 h-5 bg-gray-700 rounded-md"></div>
      </div>
    </div>
  );
}