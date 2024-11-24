import { MAIL } from '@/constants'

export function Badge() {
  return (
    <a
      className='text-foreground/80 relative inline-flex w-fit items-center gap-4 text-nowrap rounded-full border border-green-200 bg-gradient-to-br from-transparent to-green-200 px-3.5 py-1.5 text-center text-sm font-medium dark:border-green-950 dark:to-green-950'
      href={`mailto:${MAIL}`}
      rel='noopener noreferrer'
    >
      <div className='relative h-3 w-3'>
        <span className='absolute h-3 w-3 rounded-full bg-green-500/60'></span>
        <span className='absolute h-3 w-3 animate-ping rounded-full bg-green-500/30'></span>
      </div>
      Available to Hire
    </a>
  )
}
