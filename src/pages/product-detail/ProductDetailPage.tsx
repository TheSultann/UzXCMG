import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Weight, Box, Maximize, Fuel } from 'lucide-react';
import { PageHeroBanner } from '../../shared/ui/PageHeroBanner';
import { SectionTitle } from '../../shared/ui/SectionTitle';

import excavators from '../../assets/product-categories/excavators.png';
import loaders from '../../assets/product-categories/loaders.png';
import bulldozersGraders from '../../assets/product-categories/bulldozers-graders.png';
import miningEquipment from '../../assets/product-categories/mining-equipment.png';

const productImages = [excavators, loaders, bulldozersGraders, miningEquipment];

const mainSpecs = [
  { icon: Weight, label: 'Massa', value: '3356 Kg' },
  { icon: Box, label: 'Kovsh hajmi', value: '12 m³' },
  { icon: Fuel, label: 'Dvigatel quvvati', value: '145 kW' },
  { icon: Maximize, label: 'Maks. qazish chuqurligi', value: '0.8 m' },
];

const detailedSpecs = [
  { label: 'Dvigatel quvvati', value: '162 kVt (217 ot kuchi)' },
  { label: 'Maksimal yetib borish masofasi', value: '11.0 m' },
  { label: 'Kovush hajmi', value: '1.2 ~ 1.5 m³' },
  { label: 'Gidravlik tizim', value: 'Yuk sezuvchi, yopiq markazli' },
  { label: 'Ish og\'irligi', value: '' },
  { label: 'Aylanish tezligi (burilish)', value: '11.5 ayl/min (rpm)' },
  { label: 'Yer oraliqi', value: '480 mm' },
  { label: 'Sovitish tizimi', value: '' },
  { label: 'Maksimal qazish chuqurligi', value: '6.7 m' },
  { label: 'Harakat tezligi', value: '5.5 km/soat gacha' },
];

const similarProducts = [
  { id: 'similar-1', name: 'XC8-S 2570', image: excavators, load: '25 t', engine: '375 HP' },
  { id: 'similar-2', name: 'XC8-S 2570', image: loaders, load: '25 t', engine: '375 HP' },
  { id: 'similar-3', name: 'XC8-S 2570', image: bulldozersGraders, load: '25 t', engine: '375 HP' },
  { id: 'similar-4', name: 'XC8-S 2570', image: miningEquipment, load: '25 t', engine: '375 HP' },
];

export const ProductDetailPage = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <PageHeroBanner title="Bizning mahsulotlar" />

      <section className="bg-white py-[42px]">
        <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
          <div className="grid gap-[32px] lg:grid-cols-2">
            <div>
              <div className="mb-[12px] flex h-[320px] items-center justify-center border border-[#eeeeee] bg-[#f8f8f8] p-[24px] md:h-[400px]">
                <img src={productImages[activeImage]} alt="Product" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex gap-[8px]">
                {productImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex h-[64px] w-[64px] items-center justify-center border bg-[#f8f8f8] p-[6px] transition-all md:h-[80px] md:w-[80px] ${
                      activeImage === i ? 'border-[#0f5db8]' : 'border-[#eeeeee] hover:border-[#ccc]'
                    }`}
                  >
                    <img src={img} alt="" className="max-h-full max-w-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-[16px] text-[22px] font-bold text-[#222222] md:text-[28px]">
                4×4 ekskavatorli yuklagich XC8-S 2570
              </h2>
              <p className="mb-[20px] text-[13px] leading-[1.7] text-[#666666]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              <ul className="mb-[20px] space-y-[6px]">
                <li className="text-[13px] text-[#444444]"><span className="font-medium">• Sof quvvat:</span> 73 kVt (98 ot kuchi)</li>
                <li className="text-[13px] text-[#444444]"><span className="font-medium">• Maksimal qazish chuqurligi:</span> 6.03 m (19 fut 9 dyuym)</li>
                <li className="text-[13px] text-[#444444]"><span className="font-medium">• Ish og'irligi:</span> 13 407 kg (29 551 funt)</li>
              </ul>
              <div className="mb-[24px] grid grid-cols-2 gap-[10px]">
                {mainSpecs.map((spec) => {
                  const Icon = spec.icon;
                  return (
                    <div key={spec.label} className="flex items-center gap-[10px] border border-[#eeeeee] bg-[#fafafa] px-[14px] py-[12px]">
                      <Icon className="h-[18px] w-[18px] text-[#f3c316]" strokeWidth={1.8} />
                      <div>
                        <p className="text-[10px] text-[#888888]">{spec.label}</p>
                        <p className="text-[13px] font-semibold text-[#333333]">{spec.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <a href="/contact" className="inline-flex h-[44px] items-center justify-center gap-[8px] bg-[#f3c316] px-[32px] text-[13px] font-semibold text-black transition-colors hover:bg-[#ffd42b]">
                <Phone className="h-[14px] w-[14px]" strokeWidth={2} />
                Bog'lanish
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] py-[42px]">
        <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
          <h3 className="mb-[24px] text-[22px] font-bold text-[#222222]">Batafsil</h3>
          <div className="grid grid-cols-1 gap-x-[32px] gap-y-[2px] md:grid-cols-2 lg:grid-cols-4">
            {detailedSpecs.filter(s => s.label).map((spec, i) => (
              <div key={i} className="border-b border-[#e5e5e5] py-[12px]">
                <p className="text-[13px] font-semibold text-[#333333]">{spec.label}</p>
                {spec.value && <p className="mt-[2px] text-[12px] text-[#777777]">{spec.value}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[42px]">
        <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
          <SectionTitle>Shunga o'xshash mahsulotlar</SectionTitle>
          <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
            {similarProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`} className="group block border border-[#eeeeee] bg-white transition-shadow hover:shadow-md">
                <div className="flex h-[180px] items-center justify-center bg-[#f8f8f8] p-[16px]">
                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]" />
                </div>
                <div className="px-[14px] py-[12px]">
                  <h4 className="mb-[6px] text-[14px] font-semibold text-[#222222]">{product.name}</h4>
                  <p className="text-[11px] text-[#666666]">Yuk ko'tarish quvvati: {product.load}</p>
                  <p className="text-[11px] text-[#666666]">Dvigatel quvvati: {product.engine}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
