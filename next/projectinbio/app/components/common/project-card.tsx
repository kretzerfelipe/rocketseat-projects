export function ProjectCard() {
  return (
    <div className='bg-background-secondary hover:border-border-secondary flex h-33 w-85 gap-5 rounded-[20px] border border-transparent p-3'>
      <div className='size-24 flex-shrink-0 overflow-hidden rounded-md'>
        <img
          src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Projeto'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-accent-green text-xs font-bold uppercase'>
          10 cliques
        </span>
        <div className='flex flex-col'>
          <span className='text-content-body text-xl font-bold'>
            Projeto 01
          </span>
          <span className='text-content-body text-sm'>
            Descrição super detalhada do que o projeto faz.
          </span>
        </div>
      </div>
    </div>
  )
}
