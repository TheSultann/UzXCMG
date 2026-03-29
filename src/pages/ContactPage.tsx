import { Mail, MapPin, MessageSquareText, Phone, User } from 'lucide-react'
import { PageHeroBanner } from '../components/PageHeroBanner'
import { SectionTitle } from '../components/SectionTitle'

import heroBanner from '../assets/hero/hero-banner.png'

const contactSections = [
  {
    title: 'Manzil',
    items: [
      {
        icon: MapPin,
        text: "220100, Xorazm viloyati Urganch shahri Sanoatsozlar ko'chasi 1-uy",
      },
    ],
  },
  {
    title: "Marketing va sotuv bo'limi",
    items: [
      { icon: Phone, text: '+998(95) 621-21-91' },
      { icon: Phone, text: '+998(30) 621-21-91' },
      { icon: Mail, text: 'uzxcmg@mail.com' },
    ],
  },
  {
    title: "Servis va xizmat ko'rsatish bo'limi",
    items: [
      { icon: Phone, text: '+998(95) 621-21-91' },
      { icon: Phone, text: '+998(30) 621-21-91' },
      { icon: Mail, text: 'uzxcg@mail.com' },
    ],
  },
] as const

const dealers = [
  {
    name: "'USG PLACE' MCHJ manzili",
    address: 'Xorazm viloyati, Urganch shahri',
    phones: ['+998(77) 186-64-03', '+998(58) 528-03-07'],
  },
  {
    name: "'AUTO SPEC TECH' MCHJ manzili",
    address: 'Toshkent shahri, Yunusobod tumani, maxsus 32',
    phones: ['+998(90) 376-06-08', '+998(78) 443-17-77'],
    email: 'autospectech@mail.com',
  },
  {
    name: "'CHINA TECHNICS PARTS' MCHJ manzili",
    address: 'Toshkent shahri Mirtirnol tumani',
    phones: ['+998(97) 196-11-16', '+998(71) 228-71-17'],
  },
]

export const ContactPage = () => {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f5f1e8_0%,#ffffff_22%,#ffffff_100%)]">
      <PageHeroBanner title="Aloqa" />

      <section className="bg-white py-[42px]">
        <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
          <SectionTitle>Aloqa</SectionTitle>

          <div className="mb-[32px] grid gap-[24px] lg:grid-cols-2">
            <div className="space-y-[24px] border border-black/5 bg-white p-[22px] shadow-[0_18px_36px_rgba(17,17,17,0.05)]">
              {contactSections.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-[10px] text-[15px] font-bold text-[#222222]">{section.title}</h3>
                  <div className="space-y-[6px]">
                    {section.items.map((item, i) => {
                      const Icon = item.icon
                      return (
                        <div key={i} className="flex items-center gap-[8px] text-[13px] text-[#555555]">
                          <Icon className="h-[14px] w-[14px] shrink-0 text-[#0f5db8]" strokeWidth={1.8} />
                          <span>{item.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-black/5 bg-white p-[22px] shadow-[0_18px_36px_rgba(17,17,17,0.05)]">
              <h3 className="mb-[16px] text-[18px] font-bold text-[#222222]">Diller va Distribyutorlar</h3>
              <div className="space-y-[20px]">
                {dealers.map((dealer) => (
                  <div key={dealer.name} className="border-b border-[#eeeeee] pb-[16px]">
                    <h4 className="mb-[6px] text-[14px] font-semibold text-[#333333]">{dealer.name}</h4>
                    <p className="mb-[4px] flex items-center gap-[6px] text-[12px] text-[#666666]">
                      <MapPin className="h-[12px] w-[12px] shrink-0 text-[#0f5db8]" strokeWidth={1.8} />
                      {dealer.address}
                    </p>
                    <div className="flex flex-wrap gap-[12px]">
                      {dealer.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                          className="flex items-center gap-[4px] text-[12px] text-[#555555] hover:text-[#0f5db8]"
                        >
                          <Phone className="h-[11px] w-[11px] text-[#0f5db8]" strokeWidth={1.8} />
                          {phone}
                        </a>
                      ))}
                    </div>
                    {dealer.email && (
                      <a
                        href={`mailto:${dealer.email}`}
                        className="mt-[4px] flex items-center gap-[4px] text-[12px] text-[#555555] hover:text-[#0f5db8]"
                      >
                        <Mail className="h-[11px] w-[11px] text-[#0f5db8]" strokeWidth={1.8} />
                        {dealer.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-[16px] lg:grid-cols-2">
            <div className="relative min-h-[300px] overflow-hidden border border-black/5 bg-[#e8e8e8] shadow-[0_18px_36px_rgba(17,17,17,0.05)]">
              <img
                src={heroBanner}
                alt="Korxona binosi"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="border border-black/5 bg-[#f8f8f8] px-[24px] py-[20px] shadow-[0_18px_36px_rgba(17,17,17,0.05)]">
              <form className="space-y-[12px]">
                <label className="relative block">
                  <User className="pointer-events-none absolute left-[10px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-[#8a8a8a]" />
                  <input
                    type="text"
                    placeholder="Ism"
                    className="h-[40px] w-full border border-[#dedede] bg-white pl-[34px] pr-[12px] text-[13px] outline-none placeholder:text-[#8a8a8a] focus:border-[#0f5db8]"
                  />
                </label>

                <label className="relative block">
                  <Phone className="pointer-events-none absolute left-[10px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-[#8a8a8a]" />
                  <input
                    type="tel"
                    placeholder="Telefon raqam"
                    className="h-[40px] w-full border border-[#dedede] bg-white pl-[34px] pr-[12px] text-[13px] outline-none placeholder:text-[#8a8a8a] focus:border-[#0f5db8]"
                  />
                </label>

                <label className="relative block">
                  <MessageSquareText className="pointer-events-none absolute left-[10px] top-[12px] h-[14px] w-[14px] text-[#8a8a8a]" />
                  <textarea
                    placeholder="Xabar"
                    rows={5}
                    className="w-full border border-[#dedede] bg-white pl-[34px] pr-[12px] pt-[10px] text-[13px] outline-none placeholder:text-[#8a8a8a] focus:border-[#0f5db8]"
                  />
                </label>

                <button
                  type="button"
                  className="h-[40px] w-full bg-[#2d2d2d] text-[13px] font-medium text-white transition-all hover:-translate-y-[1px] hover:bg-black"
                >
                  Yuborish
                </button>
              </form>
            </div>
          </div>

          <div className="mt-[16px] h-[300px] overflow-hidden border border-black/5 bg-[#d9ddd8] shadow-[0_18px_36px_rgba(17,17,17,0.05)]">
            <div className="relative h-full w-full bg-[linear-gradient(0deg,rgba(200,210,200,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(200,210,200,0.4)_1px,transparent_1px)] bg-[size:40px_40px]">
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <MapPin className="h-[40px] w-[40px] text-[#db3e35]" fill="#db3e35" />
                <div className="mt-[8px] rounded bg-white/95 px-[12px] py-[6px] text-[12px] font-semibold text-[#2d2d2d] shadow-md">
                  JV U-XCMG qo&apos;shma korxonasi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
