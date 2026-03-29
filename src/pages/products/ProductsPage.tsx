import { Link } from 'react-router-dom';
import { PageHeroBanner } from '../../shared/ui/PageHeroBanner';
import { SectionTitle } from '../../shared/ui/SectionTitle';

import bulldozersGraders from '../../assets/product-categories/bulldozers-graders.png';
import excavators from '../../assets/product-categories/excavators.png';
import loaders from '../../assets/product-categories/loaders.png';
import miningEquipment from '../../assets/product-categories/mining-equipment.png';
import roadConstructionEquipment from '../../assets/product-categories/road-construction-equipment.png';

const productCards = [
  { id: 'excavators', title: 'Ekskavatorlar', image: excavators, imgClass: 'w-[84%]' },
  { id: 'loaders', title: 'Yuk ortgichlar', image: loaders, imgClass: 'w-[88%]' },
  { id: 'bulldozers', title: 'Buldozer va greyderlar', image: bulldozersGraders, imgClass: 'w-[88%]' },
  { id: 'road-equipment', title: "Yo'l qurilish texnikasi", image: roadConstructionEquipment, imgClass: 'w-[48%]' },
  { id: 'mining', title: "Tog' konlari texnikasi", image: miningEquipment, imgClass: 'w-[53%]' },
] as const;

export const ProductsPage = () => {
  return (
    <>
      <PageHeroBanner title="Bizning mahsulotlar" />

      <section className="bg-white py-[42px]">
        <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
          <SectionTitle>Mahsulotlar</SectionTitle>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {/* Tall cards */}
            {productCards.slice(0, 2).map((card) => (
              <Link
                key={card.id}
                to={`/products/${card.id}`}
                className="group relative flex min-h-[294px] overflow-hidden bg-[#efefef] px-[20px] pb-[10px] pt-[14px] shadow-[0_14px_32px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(17,17,17,0.1)]"
              >
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[110px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <h3 className="relative z-10 text-[15px] font-semibold text-[#333333]">{card.title}</h3>
                <img
                  src={card.image}
                  alt={card.title}
                  className={`absolute bottom-0 left-1/2 z-10 -translate-x-1/2 object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:translate-y-[-16px] group-hover:scale-[1.08] ${card.imgClass}`}
                />
              </Link>
            ))}

            {/* Stacked small cards */}
            <div className="grid min-h-[294px] gap-3">
              {productCards.slice(2, 4).map((card) => (
                <Link
                  key={card.id}
                  to={`/products/${card.id}`}
                  className="group relative flex min-h-[141px] overflow-hidden bg-[#efefef] px-[16px] pb-[8px] pt-[12px] shadow-[0_14px_30px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_38px_rgba(17,17,17,0.1)]"
                >
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[72px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="relative z-10 max-w-[170px] text-[14px] leading-[1.15] font-semibold text-[#333333]">
                    {card.title}
                  </h3>
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`absolute bottom-0 right-0 z-10 object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:translate-y-[-12px] group-hover:scale-[1.08] ${card.imgClass}`}
                  />
                </Link>
              ))}
            </div>

            {/* Last tall card */}
            <Link
              to={`/products/${productCards[4].id}`}
              className="group relative flex min-h-[294px] overflow-hidden bg-[#efefef] px-[20px] pb-[10px] pt-[14px] shadow-[0_14px_32px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(17,17,17,0.1)]"
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[110px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="relative z-10 text-[15px] font-semibold text-[#333333]">{productCards[4].title}</h3>
              <img
                src={productCards[4].image}
                alt={productCards[4].title}
                className={`absolute bottom-2 right-0 z-10 object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:translate-y-[-16px] group-hover:scale-[1.08] ${productCards[4].imgClass}`}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
