import { Clock3, MapPin, Phone } from 'lucide-react';
import { PageHeroBanner } from '../../shared/ui/PageHeroBanner';
import { SectionTitle } from '../../shared/ui/SectionTitle';

import serviceCenterWorkshop from '../../assets/service-center-workshop.jpg';

const images = Array.from({ length: 4 }, () => serviceCenterWorkshop);

const serviceCenters = Array.from({ length: 4 }, (_, i) => ({
  id: `center-${i + 1}`,
  name: 'Servis markaz nomi',
  image: images[i],
  hours: 'Dushanbadan - Jumagacha\n09:00 - 18:00',
  phone: '+998(95) 000-00-00',
  address: 'Xorazm viloyati, Urganch shahri',
}));

export const ServiceCentersPage = () => {
  return (
    <>
      <PageHeroBanner title="SERVIS MARKAZLARI" />

      <section className="bg-white py-[42px]">
        <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
          <SectionTitle>Servis markazlari</SectionTitle>

          <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
            {serviceCenters.map((center) => (
              <div key={center.id} className="flex flex-col border border-[#eeeeee] bg-[#f8f8f8]">
                {/* Photo */}
                <div className="h-[180px] w-full overflow-hidden bg-[#e0e0e0]">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="h-full w-full object-cover mix-blend-multiply"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col p-[20px]">
                  <h3 className="mb-[16px] text-[16px] font-bold text-[#222222]">{center.name}</h3>
                  
                  <div className="mb-[16px] space-y-[12px] flex-1">
                    <div className="flex items-start gap-[8px]">
                      <Clock3 className="mt-[2px] h-[14px] w-[14px] shrink-0 text-[#666666]" strokeWidth={1.8} />
                      <div>
                        <p className="mb-[2px] text-[11px] font-medium text-[#888888]">Ish vaqti</p>
                        <p className="whitespace-pre-line text-[12px] leading-[1.4] text-[#333333]">{center.hours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-[8px]">
                      <Phone className="mt-[2px] h-[14px] w-[14px] shrink-0 text-[#666666]" strokeWidth={1.8} />
                      <div>
                        <p className="mb-[2px] text-[11px] font-medium text-[#888888]">Telefon raqam</p>
                        <a href={`tel:${center.phone.replace(/[^+\d]/g, '')}`} className="text-[12px] text-[#333333] hover:text-[#0f5db8]">
                          {center.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-[8px]">
                      <MapPin className="mt-[2px] h-[14px] w-[14px] shrink-0 text-[#666666]" strokeWidth={1.8} />
                      <div>
                        <p className="mb-[2px] text-[11px] font-medium text-[#888888]">Manzil</p>
                        <p className="text-[12px] text-[#333333]">{center.address}</p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-auto w-full bg-[#2d2d2d] py-[10px] text-[12px] font-medium text-white transition-colors hover:bg-black">
                    Xaritada ko'rish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
