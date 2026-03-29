import { Boxes, Globe2, Truck, Users } from 'lucide-react';
import banner from '../../../assets/hero/hero-banner.png';
import lineBackground from '../../../assets/Line.png';

const stats = [
  { icon: Users, value: '100', label: 'Hodimlar' },
  { icon: Truck, value: '2400', label: 'Yetkazib berilgan' },
  { icon: Boxes, value: '50', label: 'Mahsulot turi' },
  { icon: Globe2, value: '80', label: 'Xalqaro mijozlar' },
] as const;

export const CompanyOverviewSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#111111] py-10 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          backgroundImage: `url(${lineBackground})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_45%),linear-gradient(180deg,rgba(17,17,17,0.82)_0%,rgba(17,17,17,0.86)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-6 w-[5px] bg-[#f3c316]"></span>
          <h2 className="text-[22px] font-bold">Nima uchun bizni tanlash kerak</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.78fr_1fr]">
          <div className="min-h-[202px] overflow-hidden border border-white/10 bg-[#1a1a1a]">
            <img src={banner} alt="UzXCMG ishlab chiqarish maydoni" className="h-full w-full object-cover" />
          </div>

          <div id="history" className="border border-white/10 bg-[#161616] p-4">
            <h3 className="mb-3 text-[14px] font-semibold leading-[1.35]">
              Orta Osiyoda yagona bo'lgan maxsus texnikalarni ishlab chiquvchi qo'shma korxona
            </h3>
            <div className="space-y-3 text-[11px] leading-[1.55] text-white/80">
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
                <div key={item.label} className="flex min-h-[95px] flex-col justify-center border border-white/10 bg-[#161616] px-5 py-4">
                  <Icon className="mb-3 h-6 w-6 text-white" strokeWidth={1.8} />
                  <p className="text-[19px] font-bold leading-none text-[#f3c316]">{item.value}</p>
                  <p className="mt-2 text-[11px] text-white/75">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
