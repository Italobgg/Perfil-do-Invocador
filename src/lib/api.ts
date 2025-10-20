// src/lib/api.ts
import { Summoner } from '@/types/summoner';
import { mockSummoner } from './mocks';

// Simula um atraso de rede
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getSummonerByName(name: string): Promise<Summoner | null> {
  console.log(`Buscando invocador (mock): ${name}`);

  await sleep(1000); // Simula o tempo de resposta da API

  // No futuro, aqui será a chamada real para a API da Riot
  // Por enquanto, sempre retornamos o mesmo mock
  if (name.toLowerCase() === 'rito pls') {
    return mockSummoner;
  }

  // Retorna null se o nome não for o do mock para simular "não encontrado"
  return null;
}