import { ProjectCard } from '@/app/components/common/project-card'
import { TotalVisits } from '@/app/components/common/total-visits'
import { UserCard } from '@/app/components/common/user-card'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>
}) {
  const { profileId } = await params

  return (
    <div className='relative flex h-screen overflow-hidden p-20'>
      <div className='bg-background-tertiary fixed top-0 left-0 flex w-full items-center justify-center gap-1 py-2'>
        <span>Você está usando a versão trial.</span>
        <Link href={`/${profileId}/upgrade`}>
          <button className='text-accent-green font-bold'>
            Faça o upgrade agora!
          </button>
        </Link>
      </div>
      <div className='flex h-min w-1/2 justify-center'>
        <UserCard />
      </div>
      <div className='flex w-full flex-wrap content-start justify-center gap-4 overflow-y-auto'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <button className='bg-background-secondary border-border-secondary flex h-[132px] w-[340px] items-center justify-center gap-2 rounded-[20px] hover:border hover:border-dashed'>
          <Plus className='text-accent-green size-10' />
          <span>Novo projeto</span>
        </button>
      </div>
      <div className='absolute right-0 bottom-4 left-0 mx-auto w-min'>
        <TotalVisits />
      </div>
    </div>
  )
}
