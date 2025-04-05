'use client'

import { createLink } from '@/app/actions/create-link'
import { verifyLink } from '@/app/actions/verify-link'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { sanitizeLink } from '@/app/lib/utils'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

export function CreateLinkForm() {

  const router = useRouter()
  const [link, setLink] = useState<string>('')
  const [error, setError] = useState<string>('')

  function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(e.target.value))
    setError('')
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (link.length < 3) {
      setError('O link deve ter pelo menos 3 caracteres')
      return
    }

    const isLinkTaken = await verifyLink(link)
    
    if (isLinkTaken) {
      setError('Desculpe, esse link já está em uso')
      return
    }

    const linkCreated = await createLink(link)

    if (!linkCreated) {
      setError('Desculpe, não conseguimos criar seu link')
      return
    }

    router.push(`/${linkCreated.id}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex w-full items-center gap-2'>
        <span>projectinbio.com/</span>
        <Input value={link} onChange={handleLinkChange} placeholder='Seu link' />
        <Button className='w-[126px]'>Criar</Button>
      </form>
      <div>
        <span className='text-accent-pink'>{error}</span>
      </div>
    </>
  )
}
