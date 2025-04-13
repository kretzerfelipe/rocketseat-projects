'use client'

import { createProject } from '@/app/actions/create-project'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Modal } from '@/app/components/ui/modal'
import { TextArea } from '@/app/components/ui/textarea'
import { compressImage } from '@/app/lib/utils'
import { ArrowUpFromLine, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, startTransition, useState } from 'react'

export function NewProject({ profileId }: { profileId: string }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectUrl, setProjectUrl] = useState('')
  const [projectImage, setProjectImage] = useState<File | null>(null)
  const [isCreatingProject, setIsCreatingProject] = useState(false)

  function triggerImageInput(id: string) {
    document.getElementById(id)?.click()
  }

  async function handleImageInput(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null
    if (file) {
      setProjectImage(file)
    }
  }

  async function handleCreateProject() {
    setIsCreatingProject(true)
    
    if (!projectImage) return

    const compressedImage = await compressImage(projectImage)

    const formData = new FormData()

    formData.append('file', compressedImage)
    formData.append('profileId', profileId)
    formData.append('projectName', projectName)
    formData.append('projectDescription', projectDescription)
    formData.append('projectUrl', projectUrl)

    await createProject(formData)
    
    startTransition(() => {
      setIsOpen(false)
      setIsCreatingProject(false)
      setProjectName('')
      setProjectDescription('')
      setProjectUrl('')
      setProjectImage(null)
      router.refresh()
    })
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='bg-background-secondary border-border-secondary flex h-[132px] w-[340px] items-center justify-center gap-2 rounded-[20px] hover:border hover:border-dashed'
      >
        <Plus className='text-accent-green size-10' />
        <span>Novo projeto</span>
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className='bg-background-primary flex flex-col justify-between gap-10 rounded-[20px] p-8'>
          <p className='text-content-body text-xl font-bold'>Novo projeto</p>
          <div className='flex gap-10'>
            <div className='flex flex-col items-center gap-3 text-xs'>
              <div className='bg-background-tertiary h-[100px] w-[100px] overflow-hidden rounded-xl'>
                {projectImage ? (
                  <img
                    src={URL.createObjectURL(projectImage)}
                    alt='Project Image'
                    className='object-cover object-center'
                    onClick={() => triggerImageInput('imageInput')}
                  />
                ) : (
                  <button
                    className='h-full w-full'
                    onClick={() => triggerImageInput('imageInput')}
                  >
                    100x100
                  </button>
                )}
              </div>
              <button
                className='text-content-body flex items-center gap-2'
                onClick={() => triggerImageInput('imageInput')}
              >
                <ArrowUpFromLine className='size-4' />
                <span>Adicionar imagem</span>
              </button>
              <input
                type='file'
                id='imageInput'
                accept='image/*'
                className='hidden'
                onChange={e => handleImageInput(e)}
              />
            </div>
            <div className='flex w-[293px] flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='project-name'
                  className='text-content-body font-bold'
                >
                  Titulo do projeto
                </label>
                <Input
                  id='project-name'
                  placeholder='Digite o nome do projeto'
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='project-description'
                  className='text-content-body font-bold'
                >
                  Descrição
                </label>
                <TextArea
                  id='project-description'
                  placeholder='Dê uma breve descrição do seu projeto'
                  className='h-36'
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='project-url'
                  className='text-content-body font-bold'
                >
                  URL do projeto
                </label>
                <Input
                  type='url'
                  id='project-description'
                  placeholder='Digite a URL do projeto'
                  value={projectUrl}
                  onChange={(e) => setProjectUrl(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='flex justify-end gap-4'>
            <Button onClick={() => setIsOpen(false)} className='text-content-body bg-transparent font-bold'>Voltar</Button>
            <Button onClick={handleCreateProject} disabled={isCreatingProject}>Salvar</Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
