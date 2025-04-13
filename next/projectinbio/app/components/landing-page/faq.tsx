const faqItems = [
  {
    title: 'Como funciona a criação de portfólio e links com Project in Bio',
    description:
      'Com Project in Bio, você pode criar um portfólio profissional e uma página de links em poucos minutos. Nossa plataforma oferece templates personalizáveis e uma interface fácil de usar para que você possa mostrar seu trabalho e organizar seus links de maneira eficiente.',
  },
  {
    title: 'Há um período de teste gratuito?',
    description:
      'Sim! Oferecemos um teste gratuito de 7 dias, sem compromisso. Isso permite que você explore todas as funcionalidades da nossa plataforma antes de decidir por uma assinatura.',
  },
  {
    title: 'Posso personalizar o design do meu portfólio?',
    description:
      'Sim! Com Project in Bio, você pode personalizar cores, fontes e o layout do seu portfólio, garantindo que ele reflita a sua marca pessoal.',
  },
  {
    title: 'Preciso de habilidades técnicas para usar a plataforma?',
    description:
      'Não! Nossa plataforma foi desenvolvida para ser simples e intuitiva, então não é necessário conhecimento técnico. Você pode criar e personalizar seu portfólio e links sem complicações.',
  },
  {
    title: 'O que acontece se eu cancelar minha assinatura?',
    description:
      'Você pode cancelar sua assinatura a qualquer momento. Seu portfólio e página de links ficarão disponíveis até o final do período pago, mas após isso, as funcionalidades premium serão desativadas.',
  },
  {
    title: 'Posso compartilhar meu portfólio em redes sociais?',
    description:
      'Sim! Você pode facilmente compartilhar seu portfólio e página de links em suas redes sociais através de um link personalizado.',
  },
]

export function FAQ() {
  return (
    <div className='my-20 flex flex-col items-center gap-16'>
      <h3 className='text-content-body text-4xl font-bold'>
        Dúvidas frequentes
      </h3>
      <div className='hidden gap-3 md:flex'>
        <div className='flex flex-col gap-3'>
          {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map(item => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          {faqItems.slice(Math.ceil(faqItems.length / 2)).map(item => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className='flex gap-3 md:hidden'>
        <div className='flex flex-col justify-center gap-3'>
          {faqItems.map(item => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function FAQItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className='borber border-border-primary bg-background-primary flex h-min w-full flex-col gap-3 rounded-2xl border p-5 md:w-[351px]'>
      <p className='text-content-body font-bold'>{title}</p>
      <p className='text-content-body'>{description}</p>
    </div>
  )
}
