import { Badge } from '@/components/hero/badge'
import { Button } from '@/components/ui/button'
import { LINKS, MAIL } from '@/constants'
import { EnvelopeSimple } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <div className='section gap-8'>
      <Badge />

      <h1 className='title flex flex-col gap-2 text-center sm:gap-1'>
        Hi there 👋, I'm Leonardo!
        <span className='bg-gradient-to-br from-zinc-600 to-zinc-300 bg-clip-text text-transparent dark:from-zinc-50 dark:to-zinc-900'>
          I create cool things online
        </span>
      </h1>

      <ul className='flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-4'>
        {LINKS.map((links, i) => (
          <li key={i}>
            <Button href={links.path} target='_blank'>
              <links.icon size={18} />
              {links.name}
            </Button>
          </li>
        ))}

        <li>
          <Button href={`mailto:${MAIL}`}>
            <EnvelopeSimple size={18} />
            Email
          </Button>
        </li>
      </ul>
    </div>
  )
}
