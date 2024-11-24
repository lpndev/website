import type { ButtonProps } from '@/types'

import { cn } from '@/lib/utils'

export const buttonVariants = {
  default:
    'border border-zinc-200/50 bg-gradient-to-br from-zinc-50 to-zinc-100 px-3.5 py-2 hover:brightness-[99%] dark:border-zinc-900 dark:from-zinc-950 dark:to-zinc-900 dark:hover:brightness-95',
  ghost: 'text-foreground/70 hover:text-foreground',
} as const

export function Button({
  children,
  className,
  href,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex w-fit items-center gap-1.5 rounded-xl text-center text-sm transition',
        buttonVariants[variant],
        className,
      )}
      href={href}
      rel='noopener noreferrer'
      {...props}
    >
      {children}
    </a>
  )
}
