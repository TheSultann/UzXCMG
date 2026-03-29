import leaderPhoto from '../assets/photo_2024-06-09_15-22-44 1.png'

export const leaders = [
  {
    id: 'director-1',
    name: 'Ollaberganov Dilmurod',
    position: 'Bosh direktor',
    department: 'Yuqori boshqaruv',
    phone: '+998(95) 621-21-91',
    image: leaderPhoto,
  },
  {
    id: 'director-2',
    name: 'Ollaberganov Dilmurod',
    position: 'Ijrochi direktor',
    department: 'Yuqori boshqaruv',
    phone: '+998(95) 621-21-91',
    image: leaderPhoto,
  },
  {
    id: 'director-3',
    name: 'Ollaberganov Dilmurod',
    position: 'Filial direktori',
    department: 'Yuqori boshqaruv',
    phone: '+998(95) 621-21-91',
    image: leaderPhoto,
  },
  {
    id: 'director-4',
    name: 'Ollaberganov Dilmurod',
    position: 'Bosh direktor',
    department: 'Yuqori boshqaruv',
    phone: '+998(95) 621-21-91',
    image: leaderPhoto,
  },
  {
    id: 'director-5',
    name: 'Ollaberganov Dilmurod',
    position: 'Ijrochi direktor',
    department: 'Yuqori boshqaruv',
    phone: '+998(95) 621-21-91',
    image: leaderPhoto,
  },
  {
    id: 'director-6',
    name: 'Ollaberganov Dilmurod',
    position: 'Filial direktori',
    department: 'Yuqori boshqaruv',
    phone: '+998(95) 621-21-91',
    image: leaderPhoto,
  },
] as const

export type Leader = (typeof leaders)[number]
