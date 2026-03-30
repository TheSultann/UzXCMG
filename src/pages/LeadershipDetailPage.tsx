import { Phone } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { PageHeroBanner } from '../shared/ui/PageHeroBanner'
import { leaders } from '../data/leaders'

const biographyParagraphs = [
  "Ollaberganov Dilmurod texnologiya va korporativ strategiyada transformatsion o'zgarishlarni amalga oshirishda 15 yildan ortiq tajribaga ega taniqli biznes yetakchisidir. U Garvard biznes maktabida MBA darajasini va Stenford universitetida kompyuter fanlari bo'yicha bakalavr darajasini oldi va u yerda a'lo baholar bilan tugatdi. Uning texnologiya va biznes sohasidagi akademik asoslari uning yetakchilikka bo'lgan noyob yondashuvini shakllantirishda muhim rol o'ynadi.",
  "Bosh direktor sifatida Sara innovatsiya, barqarorlik va inklyuziv o'sishni qo'llab-quvvatladi. Uning rahbarligi ostida kompaniya yangi bozorlarga chiqdi, innovatsion mahsulotlarni ishga tushirdi va mukammallik hamda hamkorlik madaniyatini rivojlantirdi. U sanoat konferensiyalarida tez-tez ma'ruzachi bo'lib, bir nechta texnologiya va notijorat tashkilotlari boshqaruvi azosi sifatida texnologiya yetakchiligi va barqaror biznes amaliyotlarida xilma-xillikni himoya qiladi.",
  "Faoliyati davomida Sara Fortune 500 kompaniyalarida va tez rivojlanayotgan startaplarda muhim lavozimlarda ishlagan. 2020-yilda kompaniyaga bosh direktor sifatida qo'shilishdan oldin u TechVentures Global kompaniyasida bosh operatsion direktor bo'lib ishlagan, u yerda 500 dan ortiq xodimlardan iborat jamoaga rahbarlik qilgan va operatsion samaradorlikni 40% ga oshirishga olib kelgan raqamli transformatsiya tashabbusini muvaffaqiyatli boshqargan. Uning strategik qarashlari va murakkab bozor dinamikasini boshqarish qobiliyati doimiy ravishda ajoyib natijalarga erishdi.",
] as const

export const LeadershipDetailPage = () => {
  const { id } = useParams()
  const leader = leaders.find((item) => item.id === id)

  if (!leader) {
    return <Navigate to="/leadership" replace />
  }

  return (
    <main className="min-h-screen bg-white">
      <PageHeroBanner title="Rahbariyat" />

      <section className="px-4 py-[36px] sm:px-5 lg:px-6">
        <div className="mx-auto w-full max-w-[1238px]">
          <div className="grid items-start gap-[16px] lg:grid-cols-[334px_592px] lg:gap-[18px]">
            <div className="overflow-hidden bg-[#f0f0f0] shadow-[0_18px_40px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_24px_48px_rgba(17,17,17,0.14)]">
              <img
                src={leader.image}
                alt={leader.name}
                className="h-[330px] w-full object-cover object-center transition-transform duration-500 hover:scale-[1.04]"
              />
            </div>

            <div className="pt-[2px]">
              <h1 className="mb-[7px] text-[27px] leading-none font-bold tracking-[-0.02em] text-[#2d2d2d] md:text-[28px]">
                {leader.name}
              </h1>
              <p className="mb-[18px] text-[15px] leading-none font-semibold text-[#4a4a4a]">
                {leader.position}
              </p>

              <div className="mb-[16px] flex flex-wrap items-center gap-[18px]">
                <span className="flex items-center text-[13px] leading-none font-semibold text-[#4a4a4a]">
                  <span className="mr-[6px] inline-block h-[4px] w-[4px] rounded-full bg-[#f3c316]" />
                  15+ yillik tajriba
                </span>
                <span className="flex items-center text-[13px] leading-none font-semibold text-[#4a4a4a]">
                  <span className="mr-[6px] inline-block h-[4px] w-[4px] rounded-full bg-[#f3c316]" />
                  2020-yildan beri
                </span>
              </div>

              <h2 className="mb-[8px] text-[18px] leading-none font-bold text-[#2d2d2d]">Biografiya</h2>
              <div className="space-y-[13px] text-[11px] leading-[1.48] text-[#4e4e4e]">
                {biographyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-[14px] inline-flex h-[28px] items-center gap-[6px] bg-[#2f2f2f] px-[10px] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#1f1f1f] hover:shadow-[0_10px_18px_rgba(47,47,47,0.24)]">
                <Phone className="h-[11px] w-[11px] text-white" strokeWidth={1.9} />
                <span className="text-[11px] font-medium text-white">
                  Xizmat telefoni {leader.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
