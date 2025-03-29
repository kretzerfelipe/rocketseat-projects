import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Plus,
} from 'lucide-react'
import { Button } from '../ui/button'

const icons = [Facebook, Github, Instagram, Linkedin, Twitter]

export function UserCard() {
  return (
    <div className='border-content-body border-opacity-10 text-content-body flex w-87 flex-col items-center gap-5 rounded-3xl bg-[#121212] p-5'>
      <div className='bg-background-tertiary size-48 rounded-full'>
        <img
          src='https://github.com/kretzerfelipe.png'
          alt='Felipe Dev'
          className='object-cover h-full w-full rounded-full'
        />
      </div>
      <div className='flex w-full flex-col gap-2'>
        <div className='flex items-center gap-2.5'>
          <h3 className='min-w-0 overflow-hidden text-3xl font-bold'>
            Felipe dev
          </h3>
        </div>
        <p className='opacity-40'>Eu faço produtos para a internet</p>
      </div>
      <div className='flex w-full flex-col gap-2'>
        <span className='text-xs font-medium uppercase'>Links</span>
        <div className='flex w-full justify-between gap-3'>
          {icons.map((Icon, i) => (
            <Button key={i} className='bg-[#1e1e1e] hover:bg-[#2e2e2e]'>
              <Icon />
            </Button>
          ))}
        </div>
        <div className='flex h-43 w-full flex-col gap-3'>
          <div className='flex w-full flex-col items-center gap-3'>
            <Button className='w-full'>Template Sass - Compre Agora</Button>
            <Button className='bg-[#1e1e1e] hover:bg-[#2e2e2e]'>
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
