import type { CAREER_STORY } from '@/constants'

export function Timeline({ event }: { event: (typeof CAREER_STORY)[0] }) {
  return (
    <div>
      <span className='font-mono text-xs text-foreground/70 sm:text-sm'>
        {event.year}
      </span>
      <h4 className='mt-2 text-sm font-medium sm:text-base'>{event.company}</h4>
      <p className='text-xs text-foreground/70 sm:text-sm'>{event.role}</p>
    </div>
  )
}
