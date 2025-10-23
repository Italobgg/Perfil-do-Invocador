// src/app/summoner/[name]/loading.tsx
import SummonerCardSkeleton from "@/components/SummonerCardSkeleton";

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <SummonerCardSkeleton />
    </main>
  );
}