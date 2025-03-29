import Image from 'next/image'
import { Hero } from './components/landing-page/hero'

export default function Home() {
  return (
    <div className='container mx-auto flex max-w-7xl'>
      <Hero />
    </div>
  )
}
