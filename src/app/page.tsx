import { api } from "~/trpc/server";

export default async function Home() {
  
  const data = await api.listings.getAll.query();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {JSON.stringify(data)}
    </main>
  );
}

