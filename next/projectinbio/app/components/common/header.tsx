import { Logo } from '@/app/assets/logo'
import { Button } from '../ui/button'
import { auth } from '@/app/lib/auth'
import { manageAuth } from '@/app/actions/manage-auth'

export async function Header() {
  const session = await auth()

  console.log(session)

  return (
    <div className='mx-auto flex w-full max-w-7xl items-center justify-between py-10'>
      <div className='flex items-center gap-4'>
        <Logo size={27} />
        <h3 className='text-content-body text-2xl font-bold'>Project in bio</h3>
      </div>
      <div className='flex items-center gap-4'>
        {session && <Button>Minha página</Button>}
        <form action={manageAuth}>
          <Button>{session ? 'Sair' : 'LogIn'}</Button>
        </form>
      </div>
    </div>
  )
}
