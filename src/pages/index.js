import CharactersList from '@/view/CharactersList'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <ul>
      <li>
        <CharactersList/>
      </li>
    </ul>
    </main>
  )
}
