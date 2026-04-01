import avtomobilYollari from '../../../assets/partners/avtomobil-yollari-qomitasi.png';
import davlatBojxona from '../../../assets/partners/davlat-bojxona-qomitasi.png';
import ozbekekspertiza from '../../../assets/partners/ozbekekspertiza.png';
import ozmeliomashlizing from '../../../assets/partners/ozmeliomashlizing.png';
import suvXojaligi from '../../../assets/partners/suv-xojaligi-vazirligi.png';
import togKonGeologiya from '../../../assets/partners/tog-kon-geologiya-vazirligi.png';
import xorazmHokimligi from '../../../assets/partners/xorazm-hokimligi.png';

const partners = [
  {
    image: xorazmHokimligi,
    alt: 'Xorazm Viloyat Hokimligi',
  },
  {
    image: togKonGeologiya,
    alt: 'TOG-KON SANOATI VA GEOLOGIYA VAZIRLIGI',
  },
  {
    image: avtomobilYollari,
    alt: "AVTOMOBIL YO'LLARI QO'MITASI",
  },
  {
    image: ozbekekspertiza,
    alt: "O'ZBEKEKSPERTIZA",
  },
  {
    image: suvXojaligi,
    alt: "SUV XO'JALIGI VAZIRLIGI",
  },
  {
    image: davlatBojxona,
    alt: "O'zbekiston Respublikasi davlat bojxona qo'mitasi",
  },
  {
    image: ozmeliomashlizing,
    alt: "O'ZMELIOMASHLIZING DAVLAT UNITAR KORXONASI",
  },
] as const;

export const PartnersSection = () => {
  return (
    <section className="bg-white pb-[24px] pt-[30px] sm:pb-[32px] sm:pt-[42px]">
      <style>{`
        @keyframes partners-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
        <div className="mb-[24px] flex items-center justify-center gap-[10px]">
          <span className="h-[33px] w-[6px] bg-[#f3c316]"></span>
          <h2 className="text-[23px] font-bold tracking-[-0.35px] text-[#2d2d2d] sm:text-[31px] sm:tracking-[-0.5px]">
            Hamkorlar
          </h2>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex w-max items-start"
            style={{ animation: 'partners-marquee 30s linear infinite' }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.alt}-${index}`}
                className="group mx-[6px] flex h-[104px] w-[136px] shrink-0 items-center justify-center rounded-[12px] px-[8px] py-[8px] text-center transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#fafafa] sm:mx-[8px] sm:h-[138px] sm:w-[172px] sm:px-[10px] sm:py-[10px]"
              >
                <div className="flex h-[82px] w-[110px] items-center justify-center sm:h-[108px] sm:w-[136px]">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="max-h-[78px] max-w-[104px] object-contain transition-transform duration-300 group-hover:scale-[1.05] sm:max-h-[102px] sm:max-w-[128px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
