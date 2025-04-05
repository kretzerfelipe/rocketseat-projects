'use client'

import { Modal } from '@/app/components/ui/modal';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export function NewProject({ profileId }: { profileId: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className='bg-background-secondary border-border-secondary flex h-[132px] w-[340px] items-center justify-center gap-2 rounded-[20px] hover:border hover:border-dashed'>
        <Plus className='text-accent-green size-10' />
        <span>Novo projeto</span>
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>Salve</Modal>
    </>
  )
}
