import { getSummonerByName } from "@/lib/api";
import { notFound } from "next/navigation";

// Props que a página recebe. 'params' contém os segmentos dinâmicos da URL.
interface SummonerPageProps {
  params: {
    name: string;
  };
}

/*
  Pag de perfil do Invocador.
  Esta é um Server Component, executada no lado do servidor.
 */
export default async function SummonerPage({ params }: SummonerPageProps) {
  const summonerName = decodeURIComponent(params.name);

  const summoner = await getSummonerByName(summonerName);

  if (!summoner) {
    notFound();
  }

  // Por enquanto, vamos apenas exibir os dados em formato JSON
  // No próximo passo, substituiremos isso pelo <SummonerCard />
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold mb-4">{summoner.name}</h1>
      <pre className="p-4 bg-gray-800 rounded-md text-sm">
        {JSON.stringify(summoner, null, 2)}
      </pre>
    </main>
  );
}
