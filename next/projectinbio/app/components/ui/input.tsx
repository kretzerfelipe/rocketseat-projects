import { cn } from '@/app/lib/utils'
import { InputHTMLAttributes } from 'react'

export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        'bg-background-secondary text-content-body placeholder:text-content-placeholder hover:border-border-secondary hover:text-content-body active:border-border-tertiary w-full rounded-xl border border-transparent p-3'
      )}
    />
  )
}
