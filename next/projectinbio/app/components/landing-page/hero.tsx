import { Button } from '../ui/button';

export function Hero() {
  return (
    <div className='w-full flex'>
      <div className='w-full flex flex-col gap-2 mt-[35vh] border'>
        <h1 className='text-5xl font-bold text-white leading-16'>Seus projetos e redes sociais em um único link</h1>
        <h2 className='text-xl leading-6'>
          Crie sua própria página de projetos e compartilhe eles com o mundo. 
          <br />
          Acompanhe o engajamento com Analytics de cliques
        </h2>
        <div className='flex items-center gap-2 w-full mt-[10vh]'>
          <span className='text-xl'>projectinbio.com</span>
          <input type="text" />
          <Button>Criar agora</Button>
        </div>
        <div className='flex w-full items-center justify-center bg-[radial-gradient(circle_at_50%_50%,var(--accent-purple),transparent_55%)]'>
          <div className='relative'>
            {/* <UserCard /> */}
            <div className='absolute -bottom-[7%] -right-[45%]'>
              {/* <TotalVisits /> */}
            </div>
            <div className='absolute top-[20%] -left-[45%] -z-10'>
              {/* <ProjectCard /> */}
            </div>
            <div className='absolute -top-[5%] -left-[55%] -z-10'>
              {/* <ProjectCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}