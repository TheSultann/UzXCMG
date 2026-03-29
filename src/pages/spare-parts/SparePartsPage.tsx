import {
  Boxes,
  Clock3,
  Filter,
  Gauge,
  Settings,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import heroBanner from '../../assets/hero/hero-banner.png';
import { SectionTitle } from '../../shared/ui/SectionTitle';

type IconProps = {
  className?: string;
};

const EnginePartsIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="20 24 76 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M66.6667 46.6665V36.6665M56.6667 36.6665H76.6667M40 59.9998H30M30 49.9998V69.9998M90 56.6665V83.3332M50 59.9998H50.0333M60 59.9998H60.0333M70 59.9998H70.0333M40 46.6665V73.3332H46.6667L53.3333 83.3332H80V53.3332L73.3333 46.6665H40Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const categories = [
  { title: 'Dvigatel qismlari', icon: EnginePartsIcon },
  { title: 'Gidravlika qismlari', icon: Settings },
  { title: 'Filtrlar va sarf materiallari', icon: Filter },
  { title: 'Yurish qismi', icon: Gauge },
  { title: 'Elektr tizimi', icon: Zap },
] as const;

const advantages = [
  {
    title: 'Yuqori sifatli materiallar',
    description: "Faqat original hamda sinovdan o'tgan butlovchi qismlardan ishlab chiqariladi.",
    icon: ShieldCheck,
  },
  {
    title: 'Uzoq xizmat muddati',
    description: "Eng og'ir ish sharoitida ham texnika va ehtiyot qismlar uzoq xizmat qiladi.",
    icon: Clock3,
  },
  {
    title: 'Mukammal moslik',
    description: "Qismlar model chizig'iga mos, o'rnatish uchun ortiqcha sozlash talab etmaydi.",
    icon: Boxes,
  },
  {
    title: 'Rasmiy kafolat',
    description: "Xarid qilingan ehtiyot qismlar uchun ishlab chiqaruvchi kafolati taqdim etiladi.",
    icon: ShieldCheck,
  },
] as const;

const featureList = [
  "Tez yetkazib berish xizmati mavjud",
  'Rasmiy zavod ehtiyot qismlari',
  'Malakali texnik tavsiyalar',
] as const;

export const SparePartsPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.72)_0%,rgba(10,10,10,0.58)_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[182px] w-full max-w-[1238px] items-center justify-center px-4 py-[28px] sm:px-5 lg:px-6">
          <h1 className="text-center text-[28px] font-black uppercase tracking-[-0.04em] text-white md:text-[46px]">
            EHTIYOT QISMLAR
          </h1>
        </div>
      </section>

      <section className="bg-white py-[38px] md:py-[42px]">
        <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
          <SectionTitle>Ehtiyot qismlar</SectionTitle>

          <div className="mx-auto grid max-w-[940px] grid-cols-1 gap-[8px] sm:grid-cols-2 lg:grid-cols-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const wideClass = index < 3 ? 'lg:col-span-2' : 'lg:col-span-2';
              const offsetClass = index === 3 ? 'lg:col-start-2' : index === 4 ? 'lg:col-start-4' : '';

              return (
                <div
                  key={category.title}
                  className={`group relative flex min-h-[146px] flex-col items-center justify-center overflow-hidden bg-[#ececec] px-[18px] py-[18px] text-center transition-all duration-300 hover:-translate-y-[4px] hover:bg-[#e7e7e7] hover:shadow-[0_16px_26px_rgba(0,0,0,0.1)] ${wideClass} ${offsetClass}`}
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#f3c316] transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="mb-[18px] flex h-[46px] w-[46px] items-center justify-center bg-white text-[#303030] shadow-[0_1px_0_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:text-[#111111]">
                    <Icon className="h-[24px] w-[24px]" strokeWidth={1.7} />
                  </div>
                  <p className="max-w-[170px] text-[13px] font-medium leading-[1.35] text-[#333333] transition-colors duration-300 group-hover:text-black">
                    {category.title}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-[44px]">
            <SectionTitle>Original ehtiyot qismlarning afzalliklari</SectionTitle>

            <div className="mx-auto grid max-w-[980px] grid-cols-2 gap-y-[28px] sm:grid-cols-4 sm:gap-x-[24px]">
              {advantages.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group mx-auto flex max-w-[180px] flex-col items-center rounded-[10px] px-[10px] py-[8px] text-center transition-all duration-300 hover:-translate-y-[4px]"
                  >
                    <div className="mb-[16px] flex h-[42px] w-[42px] items-center justify-center bg-[#202020] text-[#f3c316] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_22px_rgba(0,0,0,0.18)]">
                      <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-[-8deg]" strokeWidth={1.9} />
                    </div>
                    <h3 className="mb-[8px] text-[12px] font-semibold leading-[1.35] text-[#222222] transition-colors duration-300 group-hover:text-black">
                      {item.title}
                    </h3>
                    <p className="text-[10px] leading-[1.45] text-[#666666]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#232323] py-[32px] text-white">
        <div className="mx-auto grid w-full max-w-[1238px] gap-[28px] px-4 sm:px-5 lg:grid-cols-[1.08fr_0.92fr] lg:px-6">
          <div className="max-w-[470px]">
            <h2 className="text-[22px] font-semibold leading-[1.2] text-white">
              Ehtiyot qismlar bo&apos;yicha
            </h2>
            <p className="mt-[2px] text-[34px] font-bold leading-none text-[#f3c316]">
              so&apos;rov yuboring
            </p>
            <p className="mt-[18px] max-w-[390px] text-[12px] leading-[1.7] text-white/70">
              Quyidagi shaklni to&apos;ldiring va sizga ehtiyot qismlar haqida malakali
              mutaxassislarimiz qisqa muddat ichida batafsil ma&apos;lumot beradi.
            </p>

            <div className="mt-[18px] space-y-[10px]">
              {featureList.map((item) => (
                <div key={item} className="group flex items-start gap-[8px] text-[12px] text-white/80 transition-colors duration-300 hover:text-white">
                  <span className="mt-[4px] h-[8px] w-[8px] rounded-full border border-[#f3c316] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#f3c316]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="justify-self-end bg-white p-[18px] text-[#2d2d2d] shadow-[0_16px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_36px_rgba(0,0,0,0.22)] sm:w-[360px]">
            <h3 className="mb-[14px] text-[14px] font-semibold text-[#2e2e2e]">Buyurtma shakli</h3>

            <form className="space-y-[8px]">
              <div className="grid gap-[8px] sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Ism"
                  className="h-[28px] border border-[#d6d6d6] px-[8px] text-[11px] outline-none placeholder:text-[#8b8b8b] focus:border-[#f3c316]"
                />
                <input
                  type="tel"
                  placeholder="Telefon raqam"
                  className="h-[28px] border border-[#d6d6d6] px-[8px] text-[11px] outline-none placeholder:text-[#8b8b8b] focus:border-[#f3c316]"
                />
              </div>

              <input
                type="text"
                placeholder="Ehtiyot qism nomi"
                className="h-[28px] w-full border border-[#d6d6d6] px-[8px] text-[11px] outline-none placeholder:text-[#8b8b8b] focus:border-[#f3c316]"
              />

              <input
                type="text"
                placeholder="Ehtiyot qism kodi"
                className="h-[28px] w-full border border-[#d6d6d6] px-[8px] text-[11px] outline-none placeholder:text-[#8b8b8b] focus:border-[#f3c316]"
              />

              <textarea
                rows={5}
                placeholder="Qo'shimcha izoh"
                className="w-full border border-[#d6d6d6] px-[8px] py-[8px] text-[11px] outline-none placeholder:text-[#8b8b8b] focus:border-[#f3c316]"
              />

                <button
                  type="button"
                  className="h-[32px] w-full bg-[#f3c316] text-[11px] font-semibold text-black transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#ffd42b] hover:shadow-[0_10px_18px_rgba(243,195,22,0.28)]"
                >
                  Yuborish
                </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
