import { cn } from '@/app/lib/utils'
import { ButtonHTMLAttributes, TextareaHTMLAttributes } from 'react'

export function TextArea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        'bg-background-secondary text-content-body placeholder:text-content-placeholder hover:border-border-secondary hover:text-content-body active:border-border-tertiary w-full rounded-xl border border-transparent p-3',
        className
      )}
    />
  )
}
