import CardDesign1 from '@images/placeholder.png'
import { BehanceLogo, GithubLogo } from '@phosphor-icons/react'

export const MAIL = 'me@leodnz.com'

export const LINKS = [
  {
    icon: BehanceLogo,
    name: 'Behance',
    path: 'https://behance.com/leodnz',
  },
  {
    icon: GithubLogo,
    name: 'Github',
    path: 'https://github.com/lpndev',
  },
]

export const SKILLS = [
  'JavaScript',
  'TypeScript',
  'React',
  'UI/UX',
  'Graphic Design',
  'Meta Ads',
]

export const TABS = [
  {
    card: [
      {
        description:
          'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet',
        image: CardDesign1,
        isPending: false,
        name: 'Design card #1',
        path: '#',
      },
      {
        description:
          'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet',
        image: CardDesign1,
        isPending: false,
        name: 'Design card #1',
        path: '#',
      },
      {
        description:
          'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet',
        image: CardDesign1,
        isPending: false,
        name: 'Design card #1',
        path: '#',
      },
    ],
    icon: BehanceLogo,
    label: 'Design',
    linkName: 'Behance',
    value: 'design',
  },
  {
    card: [
      {
        description:
          'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet',
        image: CardDesign1,
        isPending: true,
        name: 'Code card #1',
        path: '#',
      },
      {
        description:
          'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet',
        image: CardDesign1,
        isPending: true,
        name: 'Code card #1',
        path: '#',
      },
      {
        description:
          'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet',
        image: CardDesign1,
        isPending: true,
        name: 'Code card #1',
        path: '#',
      },
    ],
    icon: GithubLogo,
    label: 'Code',
    linkName: 'Github',
    value: 'code',
  },
]

export const CAREER_STORY = [
  {
    company: 'Company Name',
    role: 'Job Title + Function',
    year: 'XXXX',
  },
  {
    company: 'Company Name',
    role: 'Job Title + Function',
    year: 'XXXX',
  },
  {
    company: 'Company Name',
    role: 'Job Title + Function',
    year: 'XXXX',
  },
]
