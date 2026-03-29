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
    label: (
      <>
        Xorazm Viloyat
        <br />
        Hokimligi
      </>
    ),
  },
  {
    image: togKonGeologiya,
    alt: 'TOG-KON SANOATI VA GEOLOGIYA VAZIRLIGI',
    label: (
      <>
        TOG'- KON SANOATI VA
        <br />
        GEOLOGIYA VAZIRLIGI
      </>
    ),
  },
  {
    image: avtomobilYollari,
    alt: "AVTOMOBIL YO'LLARI QO'MITASI",
    label: (
      <>
        AVTOMOBIL YO'LLARI
        <br />
        QO'MITASI
      </>
    ),
  },
  {
    image: ozbekekspertiza,
    alt: "O'ZBEKEKSPERTIZA",
    label: <>O'ZBEKEKSPERTIZA</>,
  },
  {
    image: suvXojaligi,
    alt: "SUV XO'JALIGI VAZIRLIGI",
    label: (
      <>
        SUV XO'JALIGI
        <br />
        VAZIRLIGI
      </>
    ),
  },
  {
    image: davlatBojxona,
    alt: "O'zbekiston Respublikasi davlat bojxona qo'mitasi",
    label: (
      <>
        O'zbekiston Respublikasi
        <br />
        davlat bojxona qo'mitasi
      </>
    ),
  },
  {
    image: ozmeliomashlizing,
    alt: "O'ZMELIOMASHLIZING DAVLAT UNITAR KORXONASI",
      label: (
        <>
        O'ZMELIOMASHLIZING
        <br />
        DAVLAT UNITAR KORXONASI
      </>
    ),
  },
] as const;

export const PartnersSection = () => {
  return (
    <section className="bg-white pb-[32px] pt-[42px]">
      <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
        <div className="mb-[24px] flex items-center justify-center gap-[10px]">
          <span className="h-[33px] w-[6px] bg-[#f3c316]"></span>
          <h2 className="text-[31px] font-bold tracking-[-0.5px] text-[#2d2d2d]">Hamkorlar</h2>
        </div>

        <div className="grid grid-cols-2 items-start gap-y-4 text-center sm:grid-cols-4 lg:grid-cols-7">
          {partners.map((partner) => (
            <div key={partner.alt} className="flex flex-col items-center">
              <div className="flex h-[92px] w-[100px] items-center justify-center">
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="max-h-[84px] max-w-[88px] object-contain"
                />
              </div>
              <p className="mt-[8px] max-w-[150px] text-[9px] leading-[1.2] font-bold uppercase text-[#2c2c2c] sm:text-[10px]">
                {partner.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
