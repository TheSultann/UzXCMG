import bulldozersGraders from '../../../assets/product-categories/bulldozers-graders.png';
import excavators from '../../../assets/product-categories/excavators.png';
import loaders from '../../../assets/product-categories/loaders.png';
import miningEquipment from '../../../assets/product-categories/mining-equipment.png';
import roadConstructionEquipment from '../../../assets/product-categories/road-construction-equipment.png';

export const ProductCategories = () => {
  return (
    <section id="products" className="bg-white pb-[48px] pt-[6px]">
      <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
        <div className="mb-[22px] flex items-center justify-center gap-[9px]">
          <span className="h-[26px] w-[6px] bg-[#f3c316]"></span>
          <h2 className="text-[27px] font-bold tracking-[-0.4px] text-[#2d2d2d]">Mahsulot turlari</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <a
            href="#products"
            className="group relative flex min-h-[294px] overflow-hidden bg-[#efefef] px-[20px] pb-[10px] pt-[14px]"
          >
            <h3 className="relative z-10 text-[15px] font-semibold text-[#333333]">Ekskavatorlar</h3>
            <img
              src={excavators}
              alt="Ekskavatorlar"
              className="absolute bottom-0 left-1/2 w-[84%] -translate-x-1/2 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          <a
            href="#products"
            className="group relative flex min-h-[294px] overflow-hidden bg-[#efefef] px-[20px] pb-[10px] pt-[14px]"
          >
            <h3 className="relative z-10 text-[15px] font-semibold text-[#333333]">Yuk ortgichlar</h3>
            <img
              src={loaders}
              alt="Yuk ortgichlar"
              className="absolute bottom-0 left-1/2 w-[88%] -translate-x-1/2 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          <div className="grid min-h-[294px] gap-3">
            <a
              href="#products"
              className="group relative flex min-h-[141px] overflow-hidden bg-[#efefef] px-[16px] pb-[8px] pt-[12px]"
            >
              <h3 className="relative z-10 max-w-[170px] text-[14px] leading-[1.15] font-semibold text-[#333333]">
                Tog' konlari texnikasi
              </h3>
              <img
                src={miningEquipment}
                alt="Tog' konlari"
                className="absolute bottom-2 right-0 w-[53%] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>
            <a
              href="#products"
              className="group relative flex min-h-[141px] overflow-hidden bg-[#efefef] px-[16px] pb-[8px] pt-[12px]"
            >
              <h3 className="relative z-10 max-w-[170px] text-[14px] leading-[1.15] font-semibold text-[#333333]">
                Yo'l qurilish texnikasi
              </h3>
              <img
                src={roadConstructionEquipment}
                alt="Yo'l qurilish"
                className="absolute bottom-0 right-[10px] w-[48%] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>
          </div>

          <a
            href="#products"
            className="group relative flex min-h-[294px] overflow-hidden bg-[#efefef] px-[20px] pb-[10px] pt-[14px]"
          >
            <h3 className="relative z-10 text-[15px] font-semibold text-[#333333]">Buldozer va greyderlar</h3>
            <img
              src={bulldozersGraders}
              alt="Buldozer va greyderlar"
              className="absolute bottom-0 right-0 w-[88%] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
