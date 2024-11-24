import type { SectionHeaderProps } from '@/types'

import { cn } from '@/lib/utils'

export function SectionHeader({
  className,
  subtitle,
  title,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-1',
        className,
      )}
      {...props}
    >
      <p className='mono'>{subtitle}</p>
      <h3 className='subtitle'>{title}</h3>
    </div>
  )
}
