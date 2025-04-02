import { TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';

export function TotalVisits() {
  return (
    <div className='bg-background-secondary border-border-primary flex w-auto items-center gap-4 rounded-xl border px-8 py-3 whitespace-normal shadow-lg'>
      <span className='text-content-body font-bold w-30'>Total de visitas</span>
      <div className='flex items-center gap-2 text-accent-green'>
        <span className='text-3xl font-bold'>143</span>
        <TrendingUp />
      </div>
    </div>
  )
}
