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
    <main className="min-h-screen bg-[linear-gradient(180deg,#f5f1e8_0%,#ffffff_22%,#ffffff_100%)]">
      <PageHeroBanner title="Rahbariyat" />

      <section className="px-4 py-[32px] sm:px-5 sm:py-[40px] lg:px-6">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="grid items-start gap-[20px] lg:grid-cols-[380px_minmax(0,760px)] lg:gap-[28px] xl:grid-cols-[420px_minmax(0,820px)]">
            <div className="overflow-hidden rounded-[28px] border border-black/5 bg-[#f0f0f0] shadow-[0_22px_48px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_28px_56px_rgba(17,17,17,0.14)]">
              <img
                src={leader.image}
                alt={leader.name}
                className="h-[360px] w-full object-cover object-center transition-transform duration-500 hover:scale-[1.04] sm:h-[430px] lg:h-[520px]"
              />
            </div>

            <div className="rounded-[28px] border border-black/5 bg-white p-[20px] shadow-[0_18px_42px_rgba(17,17,17,0.05)] sm:p-[24px] lg:p-[30px]">
              <div className="mb-[18px] border-b border-[#ece8dd] pb-[18px]">
                <div className="mb-[10px] inline-flex items-center gap-[8px] rounded-full bg-[#f7f2e5] px-[12px] py-[7px] text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8b6d1f]">
                  Rahbariyat
                </div>
                <h1 className="mb-[8px] text-[30px] leading-[1.02] font-bold tracking-[-0.03em] text-[#2d2d2d] sm:text-[36px]">
                  {leader.name}
                </h1>
                <p className="text-[17px] font-semibold text-[#4a4a4a]">
                  {leader.position}
                </p>
              </div>

              <div className="mb-[22px] flex flex-wrap items-center gap-[18px] rounded-[18px] bg-[#faf8f2] px-[16px] py-[14px]">
                <span className="flex items-center text-[14px] leading-none font-semibold text-[#4a4a4a]">
                  <span className="mr-[7px] inline-block h-[5px] w-[5px] rounded-full bg-[#f3c316]" />
                  15+ yillik tajriba
                </span>
                <span className="flex items-center text-[14px] leading-none font-semibold text-[#4a4a4a]">
                  <span className="mr-[7px] inline-block h-[5px] w-[5px] rounded-full bg-[#f3c316]" />
                  2020-yildan beri
                </span>
              </div>

              <div className="mb-[10px] flex items-center gap-[9px]">
                <span className="h-[26px] w-[5px] bg-[#f3c316]" />
                <h2 className="text-[24px] leading-none font-bold text-[#2d2d2d]">Biografiya</h2>
              </div>

              <div className="space-y-[16px] text-[15px] leading-[1.82] text-[#4e4e4e]">
                {biographyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-[24px] inline-flex h-[42px] items-center gap-[9px] rounded-[14px] bg-[#2f2f2f] px-[16px] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#1f1f1f] hover:shadow-[0_10px_18px_rgba(47,47,47,0.24)] sm:h-[46px] sm:px-[18px]">
                <Phone className="h-[15px] w-[15px] text-white" strokeWidth={1.9} />
                <span className="text-[14px] font-medium text-white sm:text-[15px]">
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

