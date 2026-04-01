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
    icon: <img src={excavatorIcon} alt="" className="h-[44px] w-[44px] object-contain sm:h-[56px] sm:w-[56px]" />,
  },
  {
    title: (
      <>
        Jahon darajasidagi texnik
        <br />
        sifat
      </>
    ),
    icon: <ClipboardCheck className="h-[44px] w-[44px] text-[#f3c316] sm:h-[56px] sm:w-[56px]" strokeWidth={1.6} />,
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
    icon: <img src={serverStackIcon} alt="" className="h-[44px] w-[44px] object-contain sm:h-[56px] sm:w-[56px]" />,
  },
  {
    title: (
      <>
        MDHning istalgan
        <br />
        nuqtasiga eksport qilish
      </>
    ),
    icon: <Globe2 className="h-[44px] w-[44px] text-[#f3c316] sm:h-[56px] sm:w-[56px]" strokeWidth={1.6} />,
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
    icon: <img src={customerServiceIcon} alt="" className="h-[44px] w-[44px] object-contain sm:h-[56px] sm:w-[56px]" />,
  },
  {
    title: (
      <>
        O'zbekiston bo'ylab
        <br />
        Servis
      </>
    ),
    icon: <img src={serviceIcon} alt="" className="h-[44px] w-[44px] object-contain sm:h-[56px] sm:w-[56px]" />,
  },
] as const;

export const QualityFeaturesSection = () => {
  return (
    <section className="bg-white pb-[34px] pt-[20px] sm:pb-[46px] sm:pt-[26px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6">
        <div className="mb-[20px] flex items-center justify-center gap-[9px]">
          <span className="h-[26px] w-[6px] bg-[#f3c316]"></span>
          <h2 className="text-[22px] font-bold tracking-[-0.3px] text-[#2d2d2d] sm:text-[27px] sm:tracking-[-0.4px]">
            A'lo sifatli UzXCMG
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-3 lg:grid-cols-6">
          {featureCards.map((feature, index) => (
            <div
              key={index}
              className="group flex min-h-[124px] flex-col items-center justify-center bg-[#efefef] px-2.5 py-3 text-center shadow-[0_14px_30px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-[4px] hover:bg-[#e9e9e9] hover:shadow-[0_20px_38px_rgba(17,17,17,0.1)] sm:min-h-[136px] sm:px-3 sm:py-4"
            >
              <div className="mb-[8px] flex h-[48px] items-center justify-center transition-transform duration-300 group-hover:scale-110 sm:mb-[10px] sm:h-[58px]">{feature.icon}</div>
              <p className="text-[12px] leading-[1.45] font-semibold text-[#333333] sm:text-[13px]">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

