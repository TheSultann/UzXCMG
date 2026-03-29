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
    <section className="bg-white pb-[32px] pt-[42px]">
      <style>{`
        @keyframes partners-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
        <div className="mb-[24px] flex items-center justify-center gap-[10px]">
          <span className="h-[33px] w-[6px] bg-[#f3c316]"></span>
          <h2 className="text-[31px] font-bold tracking-[-0.5px] text-[#2d2d2d]">Hamkorlar</h2>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex w-max items-start"
            style={{ animation: 'partners-marquee 30s linear infinite' }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.alt}-${index}`}
                className="group mx-[8px] flex h-[138px] w-[172px] shrink-0 items-center justify-center rounded-[12px] px-[10px] py-[10px] text-center transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#fafafa]"
              >
                <div className="flex h-[108px] w-[136px] items-center justify-center">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="max-h-[102px] max-w-[128px] object-contain transition-transform duration-300 group-hover:scale-[1.05]"
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
