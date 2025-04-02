import Image from 'next/image'
import { Hero } from '../components/landing-page/hero'
import { Header } from '../components/common/header'
import VideoExplanation from '../components/landing-page/video-explanation'
import Pricing from '../components/landing-page/pricing'
import { FAQ } from '../components/landing-page/faq'

export default function Home() {
  return (
    <div className='mx-auto max-w-7xl px-5 overflow-hidden'>
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  )
}
