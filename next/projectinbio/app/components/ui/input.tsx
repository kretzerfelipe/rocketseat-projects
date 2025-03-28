import { cn } from '@/app/lib/utils';
import { InputHTMLAttributes } from 'react';

export function TextInput({...props}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className={cn('w-full p-3 bg-background-secondary text-content-body placeholder:text-content-placeholder rounded-xl border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary')} />
  )
}