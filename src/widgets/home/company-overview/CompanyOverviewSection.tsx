import { Boxes, Globe2, Truck, Users } from 'lucide-react';
import banner from '../../../assets/company-overview-building.jpg';
import lineBackground from '../../../assets/Line.png';

const stats = [
  { icon: Users, value: '100', label: 'Hodimlar' },
  { icon: Truck, value: '2400', label: 'Yetkazib berilgan' },
  { icon: Boxes, value: '50', label: 'Mahsulot turi' },
  { icon: Globe2, value: '80', label: 'Xalqaro mijozlar' },
] as const;

export const CompanyOverviewSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#111111] py-8 text-white sm:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.82)_0%,rgba(17,17,17,0.84)_100%)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-105px] h-[1144px] w-[1924px] -translate-x-1/2 opacity-[0.28] mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 72%), url(${lineBackground})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-6 w-[5px] bg-[#f3c316]"></span>
          <h2 className="text-[19px] font-bold sm:text-[22px]">Nima uchun bizni tanlash kerak</h2>
        </div>

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1.25fr_0.78fr_1fr]">
          <div className="min-h-[190px] overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-[0_20px_44px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_26px_54px_rgba(0,0,0,0.26)] sm:min-h-[202px]">
            <img src={banner} alt="UzXCMG ishlab chiqarish maydoni" className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]" />
          </div>

          <div id="history" className="border border-white/10 bg-[#161616] p-4 shadow-[0_20px_42px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_26px_54px_rgba(0,0,0,0.24)] sm:p-5">
            <h3 className="mb-3 text-[13px] font-semibold leading-[1.4] sm:text-[14px] sm:leading-[1.35]">
              Orta Osiyoda yagona bo'lgan maxsus texnikalarni ishlab chiquvchi qo'shma korxona
            </h3>
            <div className="space-y-3 text-[14px] leading-[1.7] text-white/80">
              <p>
                "UzXCMG" qo'shma korxonasi O'zbekiston Respublikasi Prezidentining 2014-yil qaroriga
                muvofiq tashkil etilgan bo'lib, og'ir va maxsus texnikalarni ishlab chiqarishga
                ixtisoslashgan.
              </p>
              <p id="management">
                Korxona ishlab chiqarish, savdo va servisni birlashtirib, mijozlarga zamonaviy yechim
                va texnik xizmat ko'rsatishni taklif qiladi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="group flex min-h-[90px] flex-col justify-center border border-white/10 bg-[#161616] px-4 py-3 transition-all duration-300 hover:-translate-y-[4px] hover:bg-[#1b1b1b] hover:shadow-[0_18px_36px_rgba(0,0,0,0.2)] sm:min-h-[95px] sm:px-5 sm:py-4">
                  <Icon className="mb-3 h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
                  <p className="text-[18px] font-bold leading-none text-[#f3c316] sm:text-[19px]">{item.value}</p>
                  <p className="mt-2 text-[12px] text-white/75 sm:text-[13px]">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

