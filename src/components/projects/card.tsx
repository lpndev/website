import type { CardProps } from '@/types'

import { cn } from '@/lib/utils'
import { ArrowUpRight } from '@phosphor-icons/react'

export function Card({
  description,
  image,
  isPending,
  name,
  path,
  ...props
}: CardProps) {
  return (
    <a
      className={cn(
        'card group relative max-h-96 max-w-96 overflow-hidden p-4 pb-0 transition hover:border-zinc-200 hover:brightness-[1.02] dark:hover:border-zinc-800 dark:hover:brightness-95 sm:max-w-full sm:p-6 sm:pb-6 sm:pr-0',
      )}
      href={path}
      rel='noopener noreferrer'
      target='_blank'
      {...props}
    >
      <div className='z-10 -mb-4 flex flex-col gap-2 sm:-mb-0 sm:w-1/2'>
        <h4 className='inline-flex items-center gap-2 text-lg'>
          {name}
          {isPending && (
            <span className='inline-flex h-5 items-center rounded-full bg-yellow-500/20 px-2 text-[.6rem] font-medium text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-500'>
              Coming Soon
            </span>
          )}
        </h4>
        <p className='text-foreground/70'>{description}</p>
        <p className='mt-4 inline-flex w-fit items-center gap-1.5 rounded-xl text-center text-sm'>
          See Project
          <ArrowUpRight
            className='transition group-hover:-translate-y-[0.05rem] group-hover:translate-x-[0.05rem]'
            size={18}
          />
        </p>
      </div>

      <img
        alt={name}
        className='w-96 translate-y-10 rounded-2xl border border-zinc-200/60 object-cover transition group-hover:-rotate-[.3deg] dark:border-zinc-800 sm:absolute sm:translate-x-80 sm:translate-y-0'
        src={image}
      />
    </a>
  )
}
