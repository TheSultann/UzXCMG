import { Briefcase, Hexagon, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeroBanner } from '../../shared/ui/PageHeroBanner';
import { SectionTitle } from '../../shared/ui/SectionTitle';

export const ServicePage = () => {
  return (
    <>
      <PageHeroBanner title="SERVIS" />

      <section className="bg-white py-[42px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6">
          <SectionTitle>Servis</SectionTitle>

          <div className="grid grid-cols-1 gap-[16px] md:grid-cols-3 md:gap-[24px]">
            {/* Service Centers Box */}
            <Link
              to="/service/centers"
              className="group flex min-h-[220px] flex-col justify-between border-2 border-transparent bg-[#efefef] p-[24px] shadow-[0_14px_32px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#0f5db8] hover:bg-[#e8e8e8] hover:shadow-[0_20px_40px_rgba(17,17,17,0.1)]"
            >
              <h3 className="text-[18px] font-semibold text-[#222222]">Servis markazlari</h3>
              <div className="flex justify-end">
                <Wrench className="h-[64px] w-[64px] text-[#333333] transition-transform group-hover:scale-110" strokeWidth={1.5} />
              </div>
            </Link>

            {/* Spare Parts Box */}
            <Link
              to="/service/spare-parts"
              className="group flex min-h-[220px] flex-col justify-between border-2 border-[#0088ff] bg-[#efefef] p-[24px] shadow-[0_14px_32px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:bg-[#e8e8e8] hover:shadow-[0_20px_40px_rgba(17,17,17,0.1)]"
            >
              <h3 className="text-[18px] font-semibold text-[#222222]">Ehtiyot qismlar</h3>
              <div className="flex justify-end">
                <Hexagon className="h-[64px] w-[64px] text-[#333333] transition-transform group-hover:scale-110" strokeWidth={1.5} />
              </div>
            </Link>

            {/* Maintenance Box */}
            <Link
              to="/service/maintenance"
              className="group flex min-h-[220px] flex-col justify-between border-2 border-transparent bg-[#efefef] p-[24px] shadow-[0_14px_32px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#0f5db8] hover:bg-[#e8e8e8] hover:shadow-[0_20px_40px_rgba(17,17,17,0.1)]"
            >
              <h3 className="text-[18px] font-semibold text-[#222222]">Xizmat ko'rsatish</h3>
              <div className="flex justify-end">
                <Briefcase className="h-[64px] w-[64px] text-[#333333] transition-transform group-hover:scale-110" strokeWidth={1.5} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

