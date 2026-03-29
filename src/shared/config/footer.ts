export const footerLinkColumns = [
  {
    title: 'Korxona haqida',
    links: [
      { label: 'Biz haqimizda', href: '/about' },
      { label: 'Kompaniya tarixi', href: '/about#history' },
      { label: 'Rahbariyat', href: '/leadership' },
      { label: "Ta'sischilar", href: '/about' },
    ],
  },
  {
    title: "Ma'lumotlar",
    links: [
      { label: 'Yangiliklar', href: '/news' },
      { label: 'Media', href: '/media' },
      { label: "Bog'lanish", href: '/contact' },
    ],
  },
  {
    title: 'Mahsulotlar',
    links: [
      { label: 'Ekskavatorlar', href: '/products/excavators' },
      { label: "G'ildirakli ekskavatorlar", href: '/products/excavators' },
      { label: 'Ekskavatorlar', href: '/products/excavators' },
      { label: "G'ildirakli ekskavatorlar", href: '/products/excavators' },
    ],
  },
] as const;

export const footerPhones = [
  { label: '+998 (94) 230-35-48', href: 'tel:+998942303548' },
  { label: '+998 (99) 507-56-57', href: 'tel:+998995075657' },
  { label: '+998 (91) 915-49-77', href: 'tel:+998919154977' },
] as const;

export const footerEmails = [
  { label: 'uzxcmg@mail.ru', href: 'mailto:uzxcmg@mail.ru' },
  { label: 'info_jv@uzxcmg.uz', href: 'mailto:info_jv@uzxcmg.uz' },
  { label: 'marketing_jv@uzxcmg.uz', href: 'mailto:marketing_jv@uzxcmg.uz' },
] as const;

export const footerAddress =
  "Manzil: 220100, O'zbekiston Respublikasi, Xorazm viloyati, Urganch, Sanoat ko'chasi, 1-uy";
