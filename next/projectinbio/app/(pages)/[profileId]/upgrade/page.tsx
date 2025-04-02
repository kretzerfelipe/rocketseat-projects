import { Header } from '@/app/components/common/header'
import { Button } from '@/app/components/ui/button'

export default async function UpgradePage() {
  return (
    <div className='flex min-h-screen w-full flex-col flex-wrap px-5'>
      <Header />
      <div className='mx-auto -mt-[12vh] flex max-w-xl flex-1 flex-col items-center justify-center gap-10'>
        <h2 className='text-2xl font-bold'>Escolha o plano</h2>
        <div className='flex gap-4'>
          <Button>R$ 9,90 / mês</Button>
          <Button>R$ 99,90 Vitalício</Button>
        </div>
      </div>
    </div>
  )
}
