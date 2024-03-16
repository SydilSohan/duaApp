
import Sidebar from '@/components/Sidebar/Sidebar';
import { redirect } from 'next/navigation';
export default function Home() {

  redirect("/dua's-importance?cat=1")
  return (
    <main className="flex min-h-screen flex-row justify-start px-4 text-center pb-16 max-w-screen-xl w-full gap-4">
      <div className='flex '>

      </div>
        <div className=' bg-black flex-grow w-[800px]'>body</div>
    </main>
  )
}


