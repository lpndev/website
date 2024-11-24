import { Card } from '@/components/projects/card'
import { TABS } from '@/constants'
import * as Tabs from '@radix-ui/react-tabs'

export function Tab() {
  return (
    <Tabs.Root
      className='flex w-full flex-col gap-6 outline-none'
      defaultValue={TABS[0].value}
    >
      <Tabs.List className='mx-auto inline-flex w-fit items-center justify-center rounded-full border border-zinc-200/50 bg-zinc-100 px-1 py-1 dark:border-zinc-800 dark:bg-zinc-900'>
        {TABS.map((tab, i) => (
          <Tabs.Trigger
            className='rounded-full px-2.5 py-1 text-xs outline-none data-[state=active]:bg-zinc-200 dark:data-[state=active]:bg-zinc-800'
            key={i}
            value={tab.value}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {TABS.map((tab, index) => (
        <Tabs.Content className='outline-none' key={index} value={tab.value}>
          <ul className='flex flex-col items-center justify-center gap-6 sm:gap-4'>
            {tab.card.map((card, i) => (
              <li key={i}>
                <Card
                  description={card.description}
                  image={card.image}
                  isPending={card.isPending}
                  name={card.name}
                  path={card.path}
                />
              </li>
            ))}
          </ul>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
