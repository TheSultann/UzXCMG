import { ChevronDown } from 'lucide-react';
import { faqItems } from '../../../shared/config/faq';

type FaqSectionProps = {
  title?: string;
  sectionId?: string;
};

export const FaqSection = ({ title, sectionId = 'service-centers' }: FaqSectionProps) => {
  return (
    <section id={sectionId} className="bg-white py-8">
      <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
        {title ? (
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="h-6 w-[5px] bg-[#f3c316]"></span>
            <h2 className="text-[22px] font-bold text-[#2d2d2d]">{title}</h2>
          </div>
        ) : null}

        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <details
              key={item}
              id={index === 1 ? 'maintenance' : index === 3 ? 'spare-parts' : undefined}
              className="group bg-[#efefef] shadow-[0_12px_26px_rgba(17,17,17,0.03)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#ebebeb] hover:shadow-[0_18px_34px_rgba(17,17,17,0.08)] open:bg-[#e8e8e8]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 text-[12px] font-medium text-[#2d2d2d]">
                <span>{item}</span>
                <ChevronDown className="h-4 w-4 text-[#555555] transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-4 pb-4 text-[11px] leading-[1.6] text-[#555555]">
                UzXCMG bo'yicha barcha ma'lumotlar menejerlar va servis bo'limi orqali taqdim etiladi.
                Biz sizga texnika tanlash, servis, lizing va ehtiyot qismlar bo'yicha to'liq maslahat beramiz.
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
