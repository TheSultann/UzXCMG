import { Boxes, Globe2, Truck, Users } from 'lucide-react'
import { PageHeroBanner } from '../shared/ui/PageHeroBanner'
import heroBanner from '../assets/hero/hero-banner.png'

const stats = [
  { icon: Users, value: '100', label: 'Hodimlar' },
  { icon: Truck, value: '2400', label: 'Yetkazib berilgan' },
  { icon: Boxes, value: '50', label: 'Mahsulot turi' },
  { icon: Globe2, value: '80', label: 'Xalqaro mijozlar' },
] as const

const timelineEvents = [
  {
    year: '1963',
    title: 'Birinchi bob',
    description:
      "Urganchda ekskavator ta'mirlash zavodi E-304, E-652, E-4111 ekskavatorlarni, S-100, S-108, T-180 traktorlarni, PM-10 kozmhna kompressorlar, ortaqramiash jins va kanal ta'mirlash jismlar forida saqlab olishlar, yong kuzla UPM-17 (Murmansk dan transportiash. Qashqadaryo va qolqiq chunlanlarning DES-250 hamda qirgizlarni tilan huqyuqlarni ta'mirlash).",
  },
  {
    year: '2000',
    title: 'Ikkinchi bob',
    description:
      "Urgench ekskavator ta'mirlash zavodi xayriyachi boyutishga ko'rab muh ishining Xorazm viloyadi boysiharmonog 1999 yil 27 noyabrga ASP nichi boyirat ishlari \"Urgench ekskavatori\" OAJ tashkil etildi. Korxonaviy rahbar yirki va texnologiyalari bosqich E0-4111 Dragline EO-8111 M ekskavatorlar UPM-1.1 Materiallar va MZ2M-400201 dvorgatel ishlatish qishloqshahar infratuktasida.",
  },
  {
    year: '2006',
    title: 'Uchinchi bob',
    description:
      "Kompaniya E30 dona ishlab chiqarish, ekskavator EO-4111, Shundan 70 ta ekskavator MOH destlabiga eksport uchun yo'naladi. Akkreditatsiya jamiyati O'zbekiston Respublikasi Oleltron va suv xojaligi rastamatlar dan bori turli mashqlar va ekskavator bilan taqdirlashdan.",
  },
  {
    year: '2007',
    title: "To'rtinchi bob",
    description:
      "EO-4111 ekskavatorlardan eksportgalarga va yertitr fermarsalargatig izlabining vafoyat astini-yarimi yashovchilari bulmasdi, noxi ekskavatorlarning o'zgartirilch ichiraga hovuzmesaqosaning mo'dillashtirilgan kirla bos krolikdo, bu esa isit sahna eshtokichsirib salsihlar bo'yicradi.",
  },
  {
    year: '2012',
    title: 'Uchinchi bob',
    description:
      "O'zbekiston Respublikasi Yerrifilari Kenulmasoning 2011 yil 19 martdagi 164.1 son qarorilari Bilan \"Urgench ekskavatori\" OAJ \"O'zbekiston tarilli yollar\" davlat ishlari yoritlanlarning 65,4 foiz aksiyalarini sodip olish hodda bo'lihga chiqaradi.",
  },
] as const

export const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f6f2e8_0%,#ffffff_18%,#ffffff_100%)] text-[#171717]">
      <PageHeroBanner title="Biz haqimizda" />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%),linear-gradient(180deg,rgba(17,17,17,0.98),rgba(20,20,20,1))] px-4 py-[56px] text-white sm:px-5 lg:px-6">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.06)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.04)_95%)] bg-[length:80px_80px] opacity-[0.18]" />

        <div className="relative z-10 mx-auto w-full max-w-[1238px]">
          <div className="mb-[28px] flex items-center gap-[8px]">
            <span className="h-[28px] w-[5px] bg-[#f3c316]" />
            <h2 className="text-[20px] font-semibold text-white md:text-[34px]">
              Nima uchun bizni tanlash kerak
            </h2>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.25fr_0.78fr_1fr]">
            <div className="min-h-[240px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-[8px] shadow-[0_22px_48px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_28px_58px_rgba(0,0,0,0.26)] max-xl:min-h-[320px]">
              <img
                src={heroBanner}
                alt="UzXCMG ishlab chiqarish maydoni"
                className="block h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
              />
            </div>

            <article className="border border-white/10 bg-white/5 p-5 backdrop-blur-[8px] shadow-[0_20px_42px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_26px_54px_rgba(0,0,0,0.24)]">
              <h3 className="text-base leading-[1.45] font-semibold">
                Orta Osiyoda yagona bo&apos;lgan maxsus texnikalarni ishlab chiquvchi qo&apos;shma korxona
              </h3>
              <p className="mt-[14px] text-[0.8rem] leading-[1.8] text-white/80">
                &quot;UzXCMG&quot; qo&apos;shma korxonasi O&apos;zbekiston Respublikasi Prezidentining 2014-yil 10-sentabrdagi
                &quot;bulig loyihalarning ishlab chiqilishga og&apos;irhma korxona ta&apos;mirlni elish bo&apos;yishtiraligh
                RD-OENlar saroyig masholla mozkarit chollanlarni jamiyet shaklda tashkil etilgan, &quot;UzKXCMG&quot;
                MCHJ. Qo&apos;shma korxona faoliyatning asosiy yo&apos;naltish UzXCMG suzida og&apos;irha ertinaga
                qurilishlavshukastalasida va suvning o&apos;ziyich texnikasalirini ishlab chiqarish va ularga ta&apos;mirlik
                xizmat ko&apos;rsatishdan iboratdir.
              </p>
            </article>

            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 xl:grid-cols-2">
              {stats.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.label}
                    className="group flex min-h-[112px] flex-col justify-center border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-[8px] transition-all duration-300 hover:-translate-y-[4px] hover:bg-white/[0.08] hover:shadow-[0_18px_36px_rgba(0,0,0,0.2)]"
                  >
                    <Icon className="mb-3 h-7 w-7 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" strokeWidth={1.8} />
                    <p className="text-[1.75rem] leading-none font-bold text-[#f3c316]">{item.value}</p>
                    <p className="mt-2 text-[0.78rem] text-white/75">{item.label}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-[68px] sm:px-5 lg:px-6 lg:py-[84px]">
        <div className="mx-auto w-full max-w-[1238px]">
          <div className="mb-10 max-w-[680px]">
            <p className="mb-3 text-[0.84rem] font-bold uppercase tracking-[0.28em] text-[#9a7a04]">Korxona tarixi</p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-none font-bold tracking-[-0.05em] text-[#151515]">
              Yillar davomida shakllangan tajriba
            </h2>
          </div>

          <div className="relative before:absolute before:top-0 before:bottom-0 before:left-[10px] before:w-[2px] before:bg-[linear-gradient(180deg,rgba(243,195,22,0.2),rgba(215,215,215,0.85),rgba(243,195,22,0.2))] md:before:left-1/2 md:before:-translate-x-1/2">
            {timelineEvents.map((event, index) => (
              <article
                key={`${event.year}-${event.title}`}
                className="relative mb-6 grid grid-cols-[20px_1fr] gap-3 last:mb-0 md:mb-9 md:grid-cols-[1fr_88px_1fr] md:items-start md:gap-0"
              >
                <div className="col-span-2 mb-2 ml-[22px] flex justify-start md:col-span-1 md:col-start-2 md:row-start-1 md:mb-0 md:ml-0 md:justify-center">
                  <span className="inline-flex h-[42px] min-w-[88px] items-center justify-center bg-[#f3c316] px-[18px] font-bold text-[#111111] shadow-[0_12px_32px_rgba(243,195,22,0.24)]">
                    {event.year}
                  </span>
                </div>

                <div
                  className={`col-start-2 rounded-none border border-black/10 bg-white/92 p-[22px_18px] text-left text-[#171717] shadow-[0_18px_45px_rgba(23,23,23,0.08)] md:p-7 ${
                    index % 2 === 0
                      ? 'md:col-start-1 md:text-right'
                      : 'md:col-start-3'
                  } transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_24px_54px_rgba(23,23,23,0.12)]`}
                >
                  <h3 className="mb-3 text-[1.2rem] font-bold">{event.title}</h3>
                  <p className="text-[0.92rem] leading-[1.8] text-[#676767]">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
