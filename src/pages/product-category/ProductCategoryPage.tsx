import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categoryTitles, productCatalog } from '../../shared/config/products';
import { PageHeroBanner } from '../../shared/ui/PageHeroBanner';
import { SectionTitle } from '../../shared/ui/SectionTitle';

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

const categoryMeta: Record<string, { description: string; chip: string; imageClass: string }> = {
  excavators: {
    description: "Qurilish va ishlab chiqarish maydonlari uchun kuchli, aniq va ishonchli ekskavatorlar.",
    chip: '6 model mavjud',
    imageClass: 'w-[84%] max-w-[250px] -translate-x-[8px]',
  },
  loaders: {
    description: "Yuqori unumdorlikdagi frontal va mini yuklagichlar kundalik ishlar uchun tayyor.",
    chip: '6 model mavjud',
    imageClass: 'w-[88%] max-w-[258px] translate-x-[4px]',
  },
  bulldozers: {
    description: "Og'ir yer ishlari va tekislash vazifalari uchun buldozer va greyderlar liniyasi.",
    chip: '6 model mavjud',
    imageClass: 'w-[90%] max-w-[265px] translate-x-[10px] -translate-y-[4px]',
  },
  'road-equipment': {
    description: "Yo'l qurilishi va asfalt ishlari uchun ixcham va samarali maxsus texnika.",
    chip: '6 model mavjud',
    imageClass: 'w-[62%] max-w-[180px] translate-x-[6px]',
  },
  mining: {
    description: "Tog' koni va karyer ishlari uchun chidamli, katta yuklamaga mos uskunalar.",
    chip: '6 model mavjud',
    imageClass: 'w-[76%] max-w-[214px] -translate-x-[10px]',
  },
};

export const ProductCategoryPage = () => {
  const { category = 'excavators' } = useParams<{ category: string }>();
  const [tabSelection, setTabSelection] = useState({ category, index: 0 });
  const title = categoryTitles[category] || 'Mahsulotlar';
  const tabs = subcategoryTabs[category] || subcategoryTabs['excavators'];
  const mobileCategoryLinks = sidebarCategories.filter((item) => item.id in categoryTitles);
  const meta = categoryMeta[category] || categoryMeta['excavators'];
  const products = productCatalog[category] || productCatalog['excavators'];
  const activeTabIndex = tabSelection.category === category ? tabSelection.index : 0;
  const activeTab = Math.min(activeTabIndex, Math.max(tabs.length - 1, 0));

  return (
    <>
      <PageHeroBanner title="Bizning mahsulotlar" />

      <section className="bg-white py-[28px] sm:py-[42px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6">
          <SectionTitle centered={false}>{title}</SectionTitle>

          <div className="mb-[16px] rounded-[22px] border border-[#eceff3] bg-[#fbfcfd] p-[12px] lg:hidden">
            <p className="mb-[10px] text-[12px] font-semibold tracking-[0.14em] text-[#8491a7] uppercase">Boshqa kategoriyalar</p>
            <div className="flex flex-wrap gap-[8px]">
              {mobileCategoryLinks.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.id}`}
                  className={`max-w-full rounded-full border px-[14px] py-[8px] text-left text-[12px] leading-[1.35] font-medium transition-all duration-300 ${
                    item.id === category
                      ? 'border-[#0f5db8] bg-[#0f5db8] text-white shadow-[0_10px_20px_rgba(15,93,184,0.2)]'
                      : 'border-[#d8dfe7] bg-white text-[#334155] hover:border-[#0f5db8] hover:text-[#0f5db8]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-[24px] border border-[#eceff3] bg-white p-[12px] shadow-[0_12px_28px_rgba(17,17,17,0.04)]">
            <div className="mb-[10px] flex items-center justify-between gap-[12px]">
              <p className="text-[12px] font-semibold tracking-[0.14em] text-[#8491a7] uppercase">Yo'nalishlar</p>
              <span className="text-[12px] font-medium text-[#8491a7]">{tabs.length} ta yo'nalish</span>
            </div>
            <div className="flex flex-wrap gap-[8px]">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setTabSelection({ category, index: i })}
                  className={`max-w-full px-[14px] py-[8px] text-left text-[12px] leading-[1.4] font-medium transition-all duration-300 sm:px-[16px] sm:text-[13px] ${
                    activeTab === i
                      ? 'bg-[#1f3553] text-white shadow-[0_12px_22px_rgba(31,53,83,0.18)]'
                      : 'border border-[#d8dfe7] bg-[#fbfcfd] text-[#334155] hover:-translate-y-[1px] hover:border-[#0f5db8] hover:text-[#0f5db8]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-[24px] lg:grid-cols-[220px_1fr]">
            <aside className="hidden lg:block">
              <div className="overflow-hidden border border-[#e5e5e5] bg-white shadow-[0_16px_34px_rgba(17,17,17,0.05)]">
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
                              <label key={sub.id} className="flex cursor-pointer items-center gap-[8px] py-[5px] text-[12px] text-[#555555] hover:text-[#0f5db8]">
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

            <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 sm:gap-[16px] xl:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${category}/${product.id}`}
                  className="group block overflow-hidden border border-[#e9edf2] bg-white shadow-[0_16px_34px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_22px_40px_rgba(17,17,17,0.1)]"
                >
                  <div className="relative flex h-[192px] items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#fbfbfb_0%,#f2f5f8_100%)] p-[16px] sm:h-[208px] sm:p-[18px]">
                    <div className="pointer-events-none absolute inset-x-[18px] bottom-[10px] h-[38px] rounded-full bg-[radial-gradient(circle_at_center,rgba(15,93,184,0.16),transparent_72%)] opacity-80" />
                    <span className="absolute left-[14px] top-[14px] rounded-full border border-[#dfe7f1] bg-white/95 px-[10px] py-[5px] text-[12px] font-semibold tracking-[0.08em] text-[#0f5db8] uppercase">
                      {product.badge}
                    </span>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`${meta.imageClass} relative z-10 object-contain transition-transform duration-300 group-hover:scale-[1.04]`}
                    />
                  </div>
                  <div className="px-[14px] pb-[14px] pt-[12px] sm:px-[16px] sm:pb-[16px]">
                    <div className="mb-[12px] flex items-start justify-between gap-[10px]">
                      <div className="min-w-0">
                        <h3 className="break-words text-[16px] font-semibold text-[#1f2937] sm:text-[17px]">{product.name}</h3>
                        <p className="mt-[4px] text-[12px] font-medium tracking-[0.14em] text-[#8a94a6] uppercase">{title}</p>
                      </div>
                      <span className="rounded-full bg-[#f3f6fa] px-[8px] py-[5px] text-[12px] font-medium text-[#5d6b7d]">
                        XCMG
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-[8px]">
                      {product.specs.map((spec) => (
                        <div key={spec.label} className="rounded-[16px] bg-[#f8fafc] px-[10px] py-[9px]">
                          <p className="text-[12px] font-medium text-[#97a1af]">{spec.label}</p>
                          <p className="mt-[3px] text-[13px] font-semibold text-[#233044]">{spec.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-[12px] flex items-center justify-between border-t border-[#eef2f6] pt-[12px]">
                      <span className="text-[12px] font-semibold text-[#0f5db8]">Batafsil ko'rish</span>
                      <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#0f5db8] text-white transition-transform duration-300 group-hover:translate-x-[2px]">
                        <ArrowRight className="h-[15px] w-[15px]" strokeWidth={2.2} />
                      </span>
                    </div>
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

