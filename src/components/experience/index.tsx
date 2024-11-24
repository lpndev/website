import { Timeline } from '@/components/experience/timeline'
import { SectionHeader } from '@/components/ui/section-header'
import { CAREER_STORY } from '@/constants'

export default function Experience() {
  return (
    <div className='section'>
      <SectionHeader subtitle='Experience' title='Career Events' />

      <div className='flex w-full flex-col'>
        {CAREER_STORY.map((event, i) => {
          const isEven = i % 2 === 0

          return (
            <div className='relative inline-flex flex-1' key={i}>
              <span className='absolute left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-zinc-200 dark:border-zinc-700 sm:top-10' />

              <div
                className={`w-full py-4 pr-4 text-right sm:py-8 sm:pr-8 ${!isEven && 'opacity-0'}`}
              >
                <div className={!isEven ? 'invisible' : ''}>
                  <Timeline event={event} />
                </div>
              </div>

              <div className='w-full border-l border-zinc-200 py-4 pl-4 dark:border-zinc-700 sm:py-8 sm:pl-8'>
                <div className={isEven ? 'invisible' : ''}>
                  <Timeline event={event} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
