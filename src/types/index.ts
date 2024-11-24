import type { buttonVariants } from '@/components/ui/button'

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  className?: string
  href?: string
  variant?: ButtonVariant
}

export type ButtonVariant = keyof typeof buttonVariants

export interface CardProps {
  description: string
  image: string
  isPending: boolean
  name: string
  path: string
}

export interface SectionHeaderProps {
  className?: string
  subtitle: string
  title: string
}

export interface ThemeToggleProps {
  className?: string
}
