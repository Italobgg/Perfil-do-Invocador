"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

/* Componente de Barra de Pesquisa. */
export default function SearchBar() {
  const [summonerName, setSummonerName] = useState("");
  const router = useRouter(); // Hook para controlar a navegação

  /* Lida com o envio do formulário.*/
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Impede o recarregamento padrão da página

    // Remove espaços extras no início/fim e verifica se não está vazio
    const trimmedName = summonerName.trim();
    if (!trimmedName) {
      return;
    }

    // Redireciona o usuário para a página de perfil
    router.push(`/summoner/${trimmedName}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md">
      <input
        type="text"
        value={summonerName}
        onChange={(e) => setSummonerName(e.target.value)}
        placeholder="Nome do Invocador..."
        className="flex-grow p-3 rounded-l-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="p-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        Buscar
      </button>
    </form>
  );
}
