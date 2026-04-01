import { Link } from 'react-router-dom';
import { PageHeroBanner } from '../../shared/ui/PageHeroBanner';
import { SectionTitle } from '../../shared/ui/SectionTitle';

import bulldozersGraders from '../../assets/product-categories/bulldozers-graders.png';
import excavators from '../../assets/product-categories/excavators.png';
import loaders from '../../assets/product-categories/loaders.png';
import miningEquipment from '../../assets/product-categories/mining-equipment.png';
import roadConstructionEquipment from '../../assets/product-categories/road-construction-equipment.png';

const productCards = [
  {
    id: 'excavators',
    title: 'Ekskavatorlar',
    image: excavators,
    desktopImgClass: 'sm:w-[84%] sm:left-1/2 sm:-translate-x-1/2 sm:bottom-0',
  },
  {
    id: 'loaders',
    title: 'Yuk ortgichlar',
    image: loaders,
    desktopImgClass: 'sm:w-[88%] sm:left-1/2 sm:-translate-x-1/2 sm:bottom-0',
  },
  {
    id: 'bulldozers',
    title: 'Buldozer va greyderlar',
    image: bulldozersGraders,
    desktopImgClass: 'sm:w-[88%] sm:right-0 sm:bottom-0',
  },
  {
    id: 'road-equipment',
    title: "Yo'l qurilish texnikasi",
    image: roadConstructionEquipment,
    desktopImgClass: 'sm:w-[48%] sm:right-[10px] sm:bottom-0',
  },
  {
    id: 'mining',
    title: "Tog' konlari texnikasi",
    image: miningEquipment,
    desktopImgClass: 'sm:w-[53%] sm:right-0 sm:bottom-2',
  },
] as const;

export const ProductsPage = () => {
  return (
    <>
      <PageHeroBanner title="Bizning mahsulotlar" />

      <section className="bg-white py-[28px] sm:py-[42px]">
        <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
          <SectionTitle>Mahsulotlar</SectionTitle>

          <div className="grid grid-cols-1 gap-[10px] min-[960px]:grid-cols-2 xl:grid-cols-4">
            {/* Tall cards */}
            {productCards.slice(0, 2).map((card) => (
              <Link
                key={card.id}
                to={`/products/${card.id}`}
                className="group relative flex min-h-[214px] flex-col overflow-hidden bg-[#efefef] px-[14px] pb-[10px] pt-[12px] shadow-[0_14px_32px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(17,17,17,0.1)] sm:min-h-[294px] sm:px-[20px] sm:pb-[10px] sm:pt-[14px]"
              >
                <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[86px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block sm:h-[110px]" />
                <h3 className="relative z-10 max-w-[150px] text-[13px] font-semibold text-[#333333] sm:text-[15px]">
                  {card.title}
                </h3>
                <div className="mt-auto flex min-h-[150px] items-end justify-center pt-3 sm:hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`z-10 object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.02] ${
                      card.id === 'excavators'
                        ? 'w-[82%] max-w-[286px] -translate-x-[8px]'
                        : 'w-[84%] max-w-[290px] translate-x-[2px]'
                    }`}
                  />
                </div>
                <img
                  src={card.image}
                  alt={card.title}
                  className={`absolute z-10 hidden object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:translate-y-[-16px] group-hover:scale-[1.08] sm:block ${card.desktopImgClass}`}
                />
              </Link>
            ))}

            {/* Stacked small cards */}
            <div className="grid gap-[10px] sm:min-h-[294px] sm:gap-3">
              {productCards.slice(2, 4).map((card) => (
                <Link
                  key={card.id}
                  to={`/products/${card.id}`}
                  className="group relative flex min-h-[128px] flex-col overflow-hidden bg-[#efefef] px-[12px] pb-[8px] pt-[10px] shadow-[0_14px_30px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_38px_rgba(17,17,17,0.1)] sm:min-h-[141px] sm:px-[16px] sm:pt-[12px]"
                >
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[56px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block sm:h-[72px]" />
                  <h3 className="relative z-10 max-w-[142px] text-[13px] leading-[1.15] font-semibold text-[#333333] sm:max-w-[170px] sm:text-[14px]">
                    {card.title}
                  </h3>
                  <div className="mt-auto flex min-h-[88px] items-end justify-center pt-2 sm:hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`z-10 object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.02] ${
                        card.id === 'bulldozers'
                          ? 'w-[84%] max-w-[292px] translate-x-[12px] -translate-y-[4px]'
                          : 'w-[60%] max-w-[168px] translate-x-[6px]'
                      }`}
                    />
                  </div>
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`absolute z-10 hidden object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:translate-y-[-12px] group-hover:scale-[1.08] sm:block ${card.desktopImgClass}`}
                  />
                </Link>
              ))}
            </div>

            {/* Last tall card */}
            <Link
              to={`/products/${productCards[4].id}`}
              className="group relative flex min-h-[214px] flex-col overflow-hidden bg-[#efefef] px-[14px] pb-[10px] pt-[12px] shadow-[0_14px_32px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(17,17,17,0.1)] sm:min-h-[294px] sm:px-[20px] sm:pb-[10px] sm:pt-[14px]"
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[86px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block sm:h-[110px]" />
              <h3 className="relative z-10 max-w-[150px] text-[13px] font-semibold text-[#333333] sm:max-w-none sm:text-[15px]">
                {productCards[4].title}
              </h3>
              <div className="mt-auto flex min-h-[150px] items-end justify-center pt-3 sm:hidden">
                <img
                  src={productCards[4].image}
                  alt={productCards[4].title}
                  className="z-10 w-[74%] max-w-[204px] -translate-x-[12px] object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <img
                src={productCards[4].image}
                alt={productCards[4].title}
                className={`absolute z-10 hidden object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:translate-y-[-16px] group-hover:scale-[1.08] sm:block ${productCards[4].desktopImgClass}`}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
