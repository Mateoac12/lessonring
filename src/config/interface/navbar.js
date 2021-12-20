import technologyIcon from 'assets/menuIcons/technology.svg'
import marcketingIcon from 'assets/menuIcons/marcketing.svg'

export const NAVBAR_OPTIONS = [
  {
    id: 1,
    name: 'Podcasts',
    path: '/podcasts',
    menu: [
      {
        id: 1,
        name: 'Programación',
        description:
          'Tecnologías, herramientas, opiniones y charlas entre Devs!',
        path: '/podcasts/programming',
        icon: technologyIcon,
      },
      {
        id: 2,
        name: 'Marketing',
        path: '/podcasts/marketing',
        description:
          'Nociones prácticas de marketing, traidas a tierra y con muchos ejemplos cotidianos.',
        icon: marcketingIcon,
      },
    ],
  },
  {
    id: 2,
    name: 'Streams educativos',
    path: '/streams',
  },
  {
    id: 3,
    name: 'Cursos',
    path: '/courses',
  },
  {
    id: 4,
    name: 'Blogs',
    path: '/blogs',
  },
]
