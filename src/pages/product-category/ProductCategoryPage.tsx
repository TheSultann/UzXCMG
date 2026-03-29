import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHeroBanner } from '../../shared/ui/PageHeroBanner';
import { SectionTitle } from '../../shared/ui/SectionTitle';

import excavators from '../../assets/product-categories/excavators.png';
import loaders from '../../assets/product-categories/loaders.png';
import bulldozersGraders from '../../assets/product-categories/bulldozers-graders.png';
import miningEquipment from '../../assets/product-categories/mining-equipment.png';
import roadConstruction from '../../assets/product-categories/road-construction-equipment.png';

const categoryTitles: Record<string, string> = {
  excavators: 'Ekskavatorlar',
  loaders: 'Yuk ortgichlar',
  bulldozers: 'Buldozer va greyderlar',
  'road-equipment': "Yo'l qurilish texnikasi",
  mining: "Tog' konlari texnikasi",
};

const subcategoryTabs: Record<string, Array<{ id: string; label: string }>> = {
  excavators: [
    { id: 'wheel', label: "G'ildirakli ekskavatorlar" },
    { id: 'mini', label: 'Mini ekskavatorlar' },
    { id: 'chain', label: 'Zanjirli ekskavatorlar' },
  ],
  loaders: [
    { id: 'frontal', label: 'Frontal yuklagichlar' },
    { id: 'mini', label: 'Mini yuklagichlar' },
  ],
  bulldozers: [
    { id: 'bulldozer', label: 'Buldozerlar' },
    { id: 'grader', label: 'Greyderlar' },
  ],
  'road-equipment': [
    { id: 'roller', label: "Yo'l katkalari" },
    { id: 'asphalt', label: 'Asfalt yotqizgichlar' },
  ],
  mining: [
    { id: 'dump-truck', label: 'Karyer samosvallari' },
    { id: 'drill', label: 'Burg\'ulash uskunalari' },
  ],
};

const sidebarCategories = [
  { id: 'road-equipment', label: "Yo'l qurilish texnikasi" },
  { id: 'bulldozers', label: 'Buldozer va greyderlar' },
  { id: 'loaders', label: 'Yuk ortgichlar' },
  { id: 'excavators', label: 'Ekskavatorlar' },
  { id: 'mining', label: "Tog' konlari texnikasi" },
  { id: 'spare', label: 'Ehtiyot qismlar' },
  { id: 'service', label: 'Servis' },
];

const productImages = [excavators, loaders, bulldozersGraders, miningEquipment, roadConstruction, excavators];

const products = Array.from({ length: 6 }, (_, i) => ({
  id: `product-${i + 1}`,
  name: 'XC8-S 2570',
  image: productImages[i % productImages.length],
  loadCapacity: '25 t',
  enginePower: '375 HP',
}));

export const ProductCategoryPage = () => {
  const { category = 'excavators' } = useParams<{ category: string }>();
  const [activeTab, setActiveTab] = useState(0);
  const title = categoryTitles[category] || 'Mahsulotlar';
  const tabs = subcategoryTabs[category] || subcategoryTabs['excavators'];

  return (
    <>
      <PageHeroBanner title="Bizning mahsulotlar" />

      <section className="bg-white py-[42px]">
        <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
          <SectionTitle>{title}</SectionTitle>

          <div className="mb-[28px] flex flex-wrap gap-[8px]">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`px-[16px] py-[8px] text-[12px] font-medium transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-[#2e2e2e] text-white'
                    : 'border border-[#d8d8d8] bg-white text-[#333333] hover:-translate-y-[1px] hover:bg-[#f5f5f5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid gap-[24px] lg:grid-cols-[220px_1fr]">
            <aside className="hidden lg:block">
              <div className="border border-[#e5e5e5] bg-white shadow-[0_16px_34px_rgba(17,17,17,0.05)]">
                <div className="border-b border-[#e5e5e5] px-[16px] py-[12px]">
                  <h3 className="text-[14px] font-semibold text-[#333333]">Mahsulotlar</h3>
                </div>
                <div className="divide-y divide-[#eeeeee]">
                  {sidebarCategories.map((cat) => {
                    const isActive = cat.id === category;
                    const hasSubs = subcategoryTabs[cat.id];
                    return (
                      <div key={cat.id}>
                        <Link
                          to={`/products/${cat.id}`}
                          className={`flex w-full items-center justify-between px-[16px] py-[10px] text-left text-[12px] transition-colors ${
                            isActive ? 'bg-[#0f5db8] font-medium text-white' : 'font-normal text-[#444444] hover:bg-[#f9f9f9]'
                          }`}
                        >
                          <span>{cat.label}</span>
                          <ChevronDown className={`h-[14px] w-[14px] transition-transform ${isActive ? 'rotate-180' : ''}`} strokeWidth={1.8} />
                        </Link>
                        {isActive && hasSubs && (
                          <div className="bg-[#fafafa] px-[16px] py-[8px]">
                            {hasSubs.map((sub, i) => (
                              <label key={sub.id} className="flex items-center gap-[8px] py-[5px] text-[11px] text-[#555555] cursor-pointer hover:text-[#0f5db8]">
                                <input type="checkbox" defaultChecked={i === 0} className="h-[13px] w-[13px] accent-[#0f5db8]" />
                                {sub.label}
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${category}/${product.id}`}
                  className="group block border border-[#eeeeee] bg-white shadow-[0_14px_30px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_38px_rgba(17,17,17,0.1)]"
                >
                  <div className="flex h-[200px] items-center justify-center bg-[#f8f8f8] p-[16px]">
                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]" />
                  </div>
                  <div className="px-[16px] py-[14px]">
                    <h3 className="mb-[8px] text-[15px] font-semibold text-[#222222]">{product.name}</h3>
                    <p className="text-[12px] text-[#666666]">Yuk ko'tarish quvvati: {product.loadCapacity}</p>
                    <p className="text-[12px] text-[#666666]">Dvigatel quvvati: {product.enginePower}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
