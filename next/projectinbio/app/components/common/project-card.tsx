'use client'

import { ProjectData } from '@/app/server/get-profile-data'
import Link from 'next/link'

export function ProjectCard({
  project,
  isOwner,
  imageUrl,
}: {
  project: ProjectData
  isOwner: boolean
  imageUrl: string
}) {
  const projectUrl = project.projectUrl
  const formattedProjectUrl = projectUrl.startsWith('http')
    ? projectUrl
    : `https://${projectUrl}`

  function handleClick() {
    //  Todo
    console.log('clicked')
  }

  return (
    <Link href={`${formattedProjectUrl}`} target='_blank' onClick={handleClick}>
      <div className='bg-background-secondary hover:border-border-secondary flex h-33 w-85 gap-5 rounded-[20px] border border-transparent p-3'>
        <div className='size-24 flex-shrink-0 overflow-hidden rounded-md'>
          <img
            src={imageUrl}
            alt='Projeto'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='flex flex-col gap-2'>
          {isOwner && (
            <span className='text-accent-green text-xs font-bold uppercase'>
              {project.totalVisits || 0} cliques
            </span>
          )}
          <div className='flex flex-col'>
            <span className='text-content-body text-xl font-bold'>
              {project.projectName}
            </span>
            <span className='text-content-body text-sm'>
              {project.projectDescription}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
