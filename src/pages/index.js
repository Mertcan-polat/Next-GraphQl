import CharactersList from "@/view/CharactersList";
import Header from "@/view/Header";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <ul>
          <li>
            <CharactersList />
          </li>
        </ul>
      </main>
    </div>
  );
}
