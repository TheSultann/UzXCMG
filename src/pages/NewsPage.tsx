import { Clock3 } from 'lucide-react'
import { PageHeroBanner } from '../shared/ui/PageHeroBanner'
import { SectionTitle } from '../shared/ui/SectionTitle'
import newsBanner from '../assets/news-banner.png'
import newsFeaturedPort from '../assets/news-featured-port.png'
import newsCardTrucks from '../assets/news-card-trucks.png'
import newsCardTractors from '../assets/news-card-tractors.png'
import newsCardGreenTruck from '../assets/news-card-green-truck.png'

const featuredImage = newsFeaturedPort

const featuredArticle = {
  title: "Dunyodagi eng katta port XCMG ning asosiy uskunalaridan foydalanadi!",
  content:
    "XCMG Group tomondan ishlab chiqarilgan port uskunalari dunyodagi eng katta portlardan birida muvaffaqiyatli ishga tushirildi. Bu loyiha kompaniyaning global bozordagi mavqeini mustahkamlash va yangi texnologiyalarni joriy etish yo'lida muhim qadam bo'ldi. Assosiy etibor yuklash vo nuloga berish tizimlarning samaradorligini oshirishga, elektr tomon kuchlardan boshlangan mashqalar bo'yicha yo'l va dala tezlashtirish opsiyaning yoziq shakllari yaxshilashga qaratilgan. O'zbekistondagi qo'shma korxona ishlab chiqarishga zahira olding sari yurish va MDH mamlakatlaridagi operatsiyalarning yangi elkeromriy yaratildi.",
} as const

const newsArticles = [
  {
    id: '1',
    title:
      "2026-yiga textor start | XCM5 materiallarini oqish bitilish uskunalarni global miqyosda yetkazib beruvchiga va xaridiy safi tirlash..",
    date: '12.02.2026',
    excerpt:
      "XCMG Yangiliklari | 2026 yil 5-fevral Sun'iy o'lchami 3-fevral kuni XCMG Group Fortescue kompaniyasining bosh direktori bilan uchrashdi jami Polat va...",
    image: newsCardTrucks,
  },
  {
    id: '2',
    title:
      "2026-yil uchun atayib boshlanishi XCMG qatrang yo'lajis mashinalari Janubiy Amerikda bosqivzar yenilar kini foriq ko'rinishido",
    date: '12.02.2026',
    excerpt:
      "XCMG Yangiliklari | 2026 yil 5-fevral Sun'iy o'lchami 3-fevral kuni XCMG Group Fortescue kompaniyasining bosh direktori bilan uchrashdi jami Polat va...",
    image: newsCardTractors,
  },
  {
    id: '3',
    title: "2026-yil uchun atayib boshlanishi XCMG Mining Machinery bulan dunyo bo'ylab kertilings yiri'l chokid",
    date: '12.02.2026',
    excerpt:
      "XCMG Yangiliklari | 2026 yil 5-fevral Sun'iy o'lchami 3-fevral kuni XCMG Group Fortescue kompaniyasining bosh direktori bilan uchrashdi jami Polat va...",
    image: newsCardGreenTruck,
  },
  {
    id: '4',
    title: "XCMG va Fortescue dunyodagi eng yirik elektr kon uskunalari prototiplarini ishga tushirdi",
    date: '12.02.2026',
    excerpt:
      "XCMG Yangiliklari | 2026 yil 5-fevral Sun'iy o'lchami 3-fevral kuni XCMG Group Fortescue kompaniyasining bosh direktori bilan uchrashdi jami Polat va...",
    image: newsBanner,
  },
  {
    id: '5',
    title:
      "2026-yiga textor start | XCM5 materiallarini oqish bitilish uskunalarni global miqyosda yetkazib beruvchiga va xaridiy safi tirlash..",
    date: '12.02.2026',
    excerpt:
      "XCMG Yangiliklari | 2026 yil 5-fevral Sun'iy o'lchami 3-fevral kuni XCMG Group Fortescue kompaniyasining bosh direktori bilan uchrashdi jami Polat va...",
    image: newsCardTrucks,
  },
  {
    id: '6',
    title:
      "2026-yil uchun atayib boshlanishi XCMG qatrang yo'lajis mashinalari Janubiy Amerikda bosqivzar yenilar kini foriq ko'rinishido",
    date: '12.02.2026',
    excerpt:
      "XCMG Yangiliklari | 2026 yil 5-fevral Sun'iy o'lchami 3-fevral kuni XCMG Group Fortescue kompaniyasining bosh direktori bilan uchrashdi jami Polat va...",
    image: newsCardTractors,
  },
  {
    id: '7',
    title: "2026-yil uchun atayib boshlanishi XCMG Mining Machinery bulan dunyo bo'ylab kertilings yiri'l chokid",
    date: '12.02.2026',
    excerpt:
      "XCMG Yangiliklari | 2026 yil 5-fevral Sun'iy o'lchami 3-fevral kuni XCMG Group Fortescue kompaniyasining bosh direktori bilan uchrashdi jami Polat va...",
    image: newsCardGreenTruck,
  },
  {
    id: '8',
    title: "XCMG va Fortescue dunyodagi eng yirik elektr kon uskunalari prototiplarini ishga tushirdi",
    date: '12.02.2026',
    excerpt:
      "XCMG Yangiliklari | 2026 yil 5-fevral Sun'iy o'lchami 3-fevral kuni XCMG Group Fortescue kompaniyasining bosh direktori bilan uchrashdi jami Polat va...",
    image: newsBanner,
  },
] as const

export const NewsPage = () => {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f5f1e8_0%,#ffffff_22%,#ffffff_100%)]">
      <PageHeroBanner title="Yangiliklar" />

      <section className="bg-white py-[24px] sm:py-[32px]">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-5 lg:px-6">
          <SectionTitle>Yangiliklar</SectionTitle>

          <div className="mb-[14px] grid items-start gap-[12px] lg:grid-cols-[1.06fr_0.94fr]">
            <div className="overflow-hidden border border-black/5 bg-[#f1f1f1] shadow-[0_18px_36px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_22px_44px_rgba(17,17,17,0.1)]">
              <img
                src={featuredImage}
                alt={featuredArticle.title}
                className="h-[198px] w-full object-cover transition-transform duration-500 hover:scale-[1.04] sm:h-[210px] md:h-[255px]"
              />
            </div>

            <div className="border border-black/5 bg-white p-[14px] shadow-[0_18px_36px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_22px_44px_rgba(17,17,17,0.08)] sm:p-[18px]">
              <h3 className="mb-[10px] text-[18px] leading-[1.18] font-bold text-[#303030] sm:text-[20px] md:text-[22px]">
                {featuredArticle.title}
              </h3>
              <p className="text-[13px] leading-[1.65] text-[#666666] md:text-[11px]">
                {featuredArticle.content}
              </p>
            </div>
          </div>

          <div className="grid gap-x-[10px] gap-y-[14px] sm:grid-cols-2 lg:grid-cols-4">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="group overflow-hidden border border-black/5 bg-[#f5f5f5] shadow-[0_14px_30px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_18px_34px_rgba(17,17,17,0.08)]"
              >
                <div className="h-[176px] overflow-hidden bg-white sm:h-[150px] lg:h-[132px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                  />
                </div>

                <div className="px-[12px] pb-[12px] pt-[10px] sm:px-[10px] sm:pb-[10px] sm:pt-[8px] lg:px-[8px] lg:pb-[10px] lg:pt-[6px]">
                  <div className="mb-[7px] flex items-center gap-[4px] text-[10px] leading-none text-[#9a9a9a] sm:text-[9px] lg:text-[8px]">
                    <Clock3 className="h-[10px] w-[10px] sm:h-[9px] sm:w-[9px]" />
                    {article.date}
                  </div>
                  <h4 className="mb-[7px] text-[14px] font-semibold leading-[1.4] text-[#222222] sm:text-[12px] lg:text-[10px]">
                    {article.title}
                  </h4>
                  <p className="text-[11px] leading-[1.5] text-[#777777] sm:text-[10px] lg:text-[8px]">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
