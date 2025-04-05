import { Header } from '@/app/components/common/header'
import { Rocket } from 'lucide-react'
import { CreateLinkForm } from './create-link-form'

export default function CriarPage() {
  return (
    <div className='w-full flex flex-wrap flex-col min-h-screen px-5'>
      <Header />
      <div className='mx-auto flex flex-1 max-w-xl -mt-[10vh] flex-col items-center justify-center gap-10'>
        <div className='flex items-center gap-4'>
          <h1 className='text-4xl font-bold text-white'>Escolha seu link</h1>
          <Rocket className='size-10' />
        </div>
        <CreateLinkForm />
      </div>
    </div>
  )
}
