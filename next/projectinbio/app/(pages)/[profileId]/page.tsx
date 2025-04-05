import { ProjectCard } from '@/app/components/common/project-card'
import { TotalVisits } from '@/app/components/common/total-visits'
import { UserCard } from '@/app/components/common/user-card'
import { auth } from '@/app/lib/auth'
import { getProfileData } from '@/app/server/get-profile-data'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { NewProject } from './new-project'

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>
}) {
  const { profileId } = await params
  const session = await auth()

  const profileData = await getProfileData(profileId)

  if (!profileData) {	
    return notFound()
  }

  const isOwner = profileData.userId === session?.user?.id

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
        {isOwner && <NewProject profileId={profileId} />}
      </div>
      <div className='absolute right-0 bottom-4 left-0 mx-auto w-min'>
        <TotalVisits />
      </div>
    </div>
  )
}
