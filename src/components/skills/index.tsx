import { SectionHeader } from '@/components/ui/section-header'
import { SKILLS } from '@/constants'

export default function Skills() {
  return (
    <div className='section'>
      <SectionHeader subtitle='Skills' title='Current Knowledge' />

      <ul className='flex max-w-96 flex-row flex-wrap items-center justify-center gap-2 sm:gap-4'>
        {SKILLS.map((item, i) => (
          <li key={i}>
            <div className='badge'>{item}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
