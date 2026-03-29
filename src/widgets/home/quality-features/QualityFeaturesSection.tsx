import { ClipboardCheck, Globe2 } from 'lucide-react';
import customerServiceIcon from '../../../assets/legacy/customer-service-01.png';
import excavatorIcon from '../../../assets/legacy/excavator.png';
import serverStackIcon from '../../../assets/legacy/server-stack-03.png';
import serviceIcon from '../../../assets/legacy/service.png';

const featureCards = [
  {
    title: (
      <>
        O'zbekistondagi yagona
        <br />
        ishlab chiqarish zavodi
      </>
    ),
    icon: <img src={excavatorIcon} alt="" className="h-[56px] w-[56px] object-contain" />,
  },
  {
    title: (
      <>
        Jahon darajasidagi texnik
        <br />
        sifat
      </>
    ),
    icon: <ClipboardCheck className="h-[56px] w-[56px] text-[#f3c316]" strokeWidth={1.6} />,
  },
  {
    title: (
      <>
        1000 dan ortiq
        <br />
        kompaniyalarning
        <br />
        mijozlar bazasi
      </>
    ),
    icon: <img src={serverStackIcon} alt="" className="h-[56px] w-[56px] object-contain" />,
  },
  {
    title: (
      <>
        MDHning istalgan
        <br />
        nuqtasiga eksport qilish
      </>
    ),
    icon: <Globe2 className="h-[56px] w-[56px] text-[#f3c316]" strokeWidth={1.6} />,
  },
  {
    title: (
      <>
        Mijozlarga xizmat
        <br />
        ko'rsatilish eng yuqori
        <br />
        darajada
      </>
    ),
    icon: <img src={customerServiceIcon} alt="" className="h-[56px] w-[56px] object-contain" />,
  },
  {
    title: (
      <>
        O'zbekiston bo'ylab
        <br />
        Servis
      </>
    ),
    icon: <img src={serviceIcon} alt="" className="h-[56px] w-[56px] object-contain" />,
  },
] as const;

export const QualityFeaturesSection = () => {
  return (
    <section className="bg-white pb-[46px] pt-[26px]">
      <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
        <div className="mb-[20px] flex items-center justify-center gap-[9px]">
          <span className="h-[26px] w-[6px] bg-[#f3c316]"></span>
          <h2 className="text-[27px] font-bold tracking-[-0.4px] text-[#2d2d2d]">A'lo sifatli UzXCMG</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {featureCards.map((feature, index) => (
            <div
              key={index}
              className="group flex min-h-[136px] flex-col items-center justify-center bg-[#efefef] px-3 py-4 text-center shadow-[0_14px_30px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-[4px] hover:bg-[#e9e9e9] hover:shadow-[0_20px_38px_rgba(17,17,17,0.1)]"
            >
              <div className="mb-[10px] flex h-[58px] items-center justify-center transition-transform duration-300 group-hover:scale-110">{feature.icon}</div>
              <p className="text-[11px] leading-[1.34] font-semibold text-[#333333]">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
