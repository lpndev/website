import { Tab } from '@/components/projects/tab'
import { SectionHeader } from '@/components/ui/section-header'

export default function Projects() {
  return (
    <div className='section'>
      <SectionHeader subtitle='Showcase' title='My Projects' />

      <Tab />
    </div>
  )
}
