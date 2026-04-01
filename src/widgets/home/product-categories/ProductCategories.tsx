import { Link } from 'react-router-dom';
import bulldozersGraders from '../../../assets/product-categories/bulldozers-graders.png';
import excavators from '../../../assets/product-categories/excavators.png';
import loaders from '../../../assets/product-categories/loaders.png';
import miningEquipment from '../../../assets/product-categories/mining-equipment.png';
import roadConstructionEquipment from '../../../assets/product-categories/road-construction-equipment.png';

const productLinks = {
  excavators: '/products/excavators',
  loaders: '/products/loaders',
  mining: '/products/mining',
  road: '/products/road-equipment',
  bulldozers: '/products/bulldozers',
} as const;

export const ProductCategories = () => {
  return (
    <section id="products" className="bg-white pb-[48px] pt-[6px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6">
        <div className="mb-[22px] flex items-center justify-center gap-[9px]">
          <span className="h-[26px] w-[6px] bg-[#f3c316]"></span>
          <h2 className="text-[23px] font-bold tracking-[-0.3px] text-[#2d2d2d] sm:text-[27px]">
            Mahsulot turlari
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[10px] min-[960px]:grid-cols-2 xl:grid-cols-4">
          <Link
            to={productLinks.excavators}
            className="group relative flex min-h-[214px] flex-col overflow-hidden bg-[#efefef] px-[14px] pb-[10px] pt-[12px] shadow-[0_14px_32px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(17,17,17,0.1)] sm:min-h-[294px] sm:px-[20px] sm:pb-[10px] sm:pt-[14px]"
          >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[86px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block sm:h-[110px]" />
            <h3 className="relative z-10 max-w-[150px] text-[13px] font-semibold text-[#333333] sm:text-[15px]">
              Ekskavatorlar
            </h3>
            <div className="mt-auto flex min-h-[150px] items-end justify-center pt-3 sm:hidden">
              <img
                src={excavators}
                alt="Ekskavatorlar"
                className="z-10 w-[82%] max-w-[286px] -translate-x-[8px] object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <img
              src={excavators}
              alt="Ekskavatorlar"
              className="absolute bottom-0 left-1/2 z-10 hidden w-[84%] -translate-x-1/2 object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:translate-y-[-16px] group-hover:scale-[1.08] sm:block"
            />
          </Link>

          <Link
            to={productLinks.loaders}
            className="group relative flex min-h-[214px] flex-col overflow-hidden bg-[#efefef] px-[14px] pb-[10px] pt-[12px] shadow-[0_14px_32px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(17,17,17,0.1)] sm:min-h-[294px] sm:px-[20px] sm:pb-[10px] sm:pt-[14px]"
          >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[86px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block sm:h-[110px]" />
            <h3 className="relative z-10 max-w-[150px] text-[13px] font-semibold text-[#333333] sm:text-[15px]">
              Yuk ortgichlar
            </h3>
            <div className="mt-auto flex min-h-[150px] items-end justify-center pt-3 sm:hidden">
              <img
                src={loaders}
                alt="Yuk ortgichlar"
                className="z-10 w-[84%] max-w-[290px] translate-x-[2px] object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <img
              src={loaders}
              alt="Yuk ortgichlar"
              className="absolute bottom-0 left-1/2 z-10 hidden w-[88%] -translate-x-1/2 object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:translate-y-[-16px] group-hover:scale-[1.08] sm:block"
            />
          </Link>

          <div className="grid gap-[10px] sm:min-h-[294px] sm:gap-3">
            <Link
              to={productLinks.mining}
              className="group relative flex min-h-[128px] flex-col overflow-hidden bg-[#efefef] px-[12px] pb-[8px] pt-[10px] shadow-[0_14px_30px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_38px_rgba(17,17,17,0.1)] sm:min-h-[141px] sm:px-[16px] sm:pt-[12px]"
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[56px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block sm:h-[72px]" />
              <h3 className="relative z-10 max-w-[142px] text-[13px] leading-[1.15] font-semibold text-[#333333] sm:max-w-[170px] sm:text-[14px]">
                Tog' konlari texnikasi
              </h3>
              <div className="mt-auto flex min-h-[88px] items-end justify-center pt-2 sm:hidden">
                <img
                  src={miningEquipment}
                  alt="Tog' konlari"
                  className="z-10 w-[74%] max-w-[204px] -translate-x-[12px] object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <img
                src={miningEquipment}
                alt="Tog' konlari"
                className="absolute bottom-2 right-0 z-10 hidden w-[53%] object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:translate-y-[-12px] group-hover:scale-[1.08] sm:block"
              />
            </Link>
            <Link
              to={productLinks.road}
              className="group relative flex min-h-[128px] flex-col overflow-hidden bg-[#efefef] px-[12px] pb-[8px] pt-[10px] shadow-[0_14px_30px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_38px_rgba(17,17,17,0.1)] sm:min-h-[141px] sm:px-[16px] sm:pt-[12px]"
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[56px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block sm:h-[72px]" />
              <h3 className="relative z-10 max-w-[142px] text-[13px] leading-[1.15] font-semibold text-[#333333] sm:max-w-[170px] sm:text-[14px]">
                Yo'l qurilish texnikasi
              </h3>
              <div className="mt-auto flex min-h-[88px] items-end justify-center pt-2 sm:hidden">
                <img
                  src={roadConstructionEquipment}
                  alt="Yo'l qurilish"
                  className="z-10 w-[60%] max-w-[168px] translate-x-[6px] object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <img
                src={roadConstructionEquipment}
                alt="Yo'l qurilish"
                className="absolute bottom-0 right-[10px] z-10 hidden w-[48%] object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:translate-y-[-12px] group-hover:scale-[1.08] sm:block"
              />
            </Link>
          </div>

          <Link
            to={productLinks.bulldozers}
            className="group relative flex min-h-[214px] flex-col overflow-hidden bg-[#efefef] px-[14px] pb-[10px] pt-[12px] shadow-[0_14px_32px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(17,17,17,0.1)] sm:min-h-[294px] sm:px-[20px] sm:pb-[10px] sm:pt-[14px]"
          >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[86px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block sm:h-[110px]" />
            <h3 className="relative z-10 max-w-[170px] text-[13px] font-semibold text-[#333333] sm:text-[15px]">
              Buldozer va greyderlar
            </h3>
            <div className="mt-auto flex min-h-[150px] items-end justify-center pt-3 sm:hidden">
              <img
                src={bulldozersGraders}
                alt="Buldozer va greyderlar"
                className="z-10 w-[84%] max-w-[292px] translate-x-[12px] -translate-y-[4px] object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <img
              src={bulldozersGraders}
              alt="Buldozer va greyderlar"
              className="absolute bottom-0 right-0 z-10 hidden w-[88%] object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:translate-y-[-16px] group-hover:scale-[1.08] sm:block"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

