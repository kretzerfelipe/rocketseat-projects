import { Header } from '@/app/components/common/header'
import { Rocket } from 'lucide-react'
import { CreateLinkForm } from './create-link-form'

export default function CriarPage() {
  return (
    <div className='flex min-h-screen w-full flex-col flex-wrap px-5'>
      <Header />
      <div className='mx-auto -mt-[10vh] flex max-w-xl flex-1 flex-col items-center justify-center gap-10'>
        <div className='flex items-center gap-4'>
          <h1 className='text-content-body text-4xl font-bold'>
            Escolha seu link
          </h1>
          <Rocket className='size-10' />
        </div>
        <CreateLinkForm />
      </div>
    </div>
  )
}
