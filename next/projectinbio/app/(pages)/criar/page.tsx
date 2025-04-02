import { Header } from '@/app/components/common/header'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Rocket } from 'lucide-react'

export default function CriarPage() {
  return (
    <div className='w-full flex flex-wrap flex-col min-h-screen px-5'>
      <Header />
      <div className='mx-auto flex flex-1 max-w-xl -mt-[10vh] flex-col items-center justify-center gap-10'>
        <div className='flex items-center gap-4'>
          <h1 className='text-4xl font-bold text-white'>Escolha seu link</h1>
          <Rocket className='size-10' />
        </div>
        <form action='' className='flex w-full items-center gap-2'>
          <span>projectinbio.com/</span>
          <Input />
          <Button className='w-[126px]'>Criar</Button>
        </form>
        <div>
          <span className='text-accent-pink'>Erro de exemplo</span>
        </div>
      </div>
    </div>
  )
}
