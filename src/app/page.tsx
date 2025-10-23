// src/app/page.tsx
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold text-center">Perfil do Invocador</h1>
        <p className="text-xl text-gray-300">
          Encontre estatísticas detalhadas do seu invocador
        </p>

        <SearchBar />
      </div>
    </main>
  );
}
