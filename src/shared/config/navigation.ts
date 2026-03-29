export type NavigationItem = {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
};

export const navigationItems: NavigationItem[] = [
  {
    label: 'Korxona haqida',
    href: '/about',
    children: [
      { label: 'Biz haqimizda', href: '/about' },
      { label: 'Rahbariyat', href: '/leadership' },
      { label: 'Kompaniya tarixi', href: '/about#history' },
      { label: 'Xalqaro sertifikatlar', href: '/certificates' },
      { label: 'Normativ hujjatlar', href: '/certificates' },
    ],
  },
  { label: 'Mahsulotlar', href: '/products' },
  {
    label: 'Servis',
    href: '/service',
    children: [
      { label: 'Servis markazlari', href: '/service/centers' },
      { label: 'Ehtiyot qismlar', href: '/service' },
      { label: "Xizmat ko'rsatish", href: '/service' },
    ],
  },
  { label: 'Yangiliklar', href: '/news' },
  {
    label: 'Media',
    href: '/media',
    children: [
      { label: 'Galereya', href: '/media' },
      { label: 'Video', href: '/video' },
    ],
  },
  { label: 'Aloqa', href: '/contact' },
];

export const headerSocialLinks = [
  { label: 'Instagram', href: '#instagram', icon: 'instagram' },
  { label: 'Telegram', href: '#telegram', icon: 'telegram' },
  { label: 'YouTube', href: '#youtube', icon: 'youtube' },
] as const;

export const contactPhone = {
  label: '+998(95) 621-21-91',
  href: 'tel:+998956212191',
};
