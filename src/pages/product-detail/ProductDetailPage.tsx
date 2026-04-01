import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Phone, Weight, Box, Maximize, Fuel } from 'lucide-react';
import { PageHeroBanner } from '../../shared/ui/PageHeroBanner';
import { SectionTitle } from '../../shared/ui/SectionTitle';
import {
  categoryTitles,
  getCategoryProducts,
  getProductById,
  type ProductIconKey,
} from '../../shared/config/products';

const specIcons: Record<ProductIconKey, typeof Weight> = {
  weight: Weight,
  box: Box,
  fuel: Fuel,
  maximize: Maximize,
};

export const ProductDetailPage = () => {
  const [galleryState, setGalleryState] = useState({ productKey: '', index: 0 });
  const { category = 'excavators', id } = useParams<{ category: string; id: string }>();
  const categoryTitle = categoryTitles[category] || 'Mahsulotlar';
  const categoryProducts = getCategoryProducts(category);
  const product = getProductById(category, id);
  const productKey = `${category}/${product.id}`;
  const activeImageIndex = galleryState.productKey === productKey ? galleryState.index : 0;
  const currentImage = product.gallery[Math.min(activeImageIndex, product.gallery.length - 1)] || product.image;
  const similarProducts = categoryProducts.filter((item) => item.id !== product.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productKey]);

  return (
    <>
      <PageHeroBanner title="Bizning mahsulotlar" />

      <section className="bg-white py-[28px] sm:py-[42px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6">
          <div className="mb-[18px] flex flex-wrap items-center gap-[10px] sm:mb-[22px]">
            <Link
              to={`/products/${category}`}
              className="inline-flex items-center gap-[8px] rounded-full border border-[#d9e4f0] bg-[#f8fbff] px-[14px] py-[9px] text-[12px] font-semibold text-[#1f3553] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#0f5db8] hover:text-[#0f5db8]"
            >
              <ArrowLeft className="h-[15px] w-[15px]" strokeWidth={2.2} />
              {categoryTitle} bo'limiga qaytish
            </Link>
            <span className="rounded-full border border-[#e5ebf2] bg-white px-[12px] py-[8px] text-[12px] font-medium text-[#6b7789]">
              Kategoriya: {categoryTitle}
            </span>
            <span className="rounded-full border border-[#e5ebf2] bg-white px-[12px] py-[8px] text-[12px] font-medium text-[#6b7789]">
              Toifa: {product.badge}
            </span>
          </div>

          <div className="grid gap-[32px] lg:grid-cols-2">
            <div>
              <div className="mb-[12px] flex h-[240px] items-center justify-center overflow-hidden rounded-[24px] border border-[#eeeeee] bg-[#f8f8f8] p-[18px] shadow-[0_18px_36px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_24px_44px_rgba(17,17,17,0.1)] sm:h-[320px] sm:p-[24px] md:h-[400px]">
                <img
                  src={currentImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-[10px] sm:justify-start">
                {product.gallery.map((image, index) => (
                  <button
                    key={`${product.id}-${index}`}
                    type="button"
                    onClick={() => setGalleryState({ productKey, index })}
                    className={`flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-[20px] border bg-[#f8f8f8] p-[7px] shadow-[0_10px_20px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-[2px] md:h-[80px] md:w-[80px] ${
                      activeImageIndex === index
                        ? 'border-[#0f5db8] bg-[#ffffff] shadow-[0_12px_24px_rgba(15,93,184,0.18)]'
                        : 'border-[#eeeeee] hover:border-[#cfcfcf] hover:bg-white'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-[1.05]"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-[12px] flex flex-wrap gap-[8px]">
                <span className="rounded-full bg-[#f3f7fc] px-[10px] py-[6px] text-[12px] font-semibold text-[#0f5db8]">
                  {categoryTitle}
                </span>
                <span className="rounded-full border border-[#d8e3f1] px-[10px] py-[6px] text-[12px] font-medium text-[#5d6b7d]">
                  {product.badge}
                </span>
              </div>

              <h2 className="mb-[16px] text-[20px] leading-[1.05] font-bold text-[#222222] sm:text-[22px] md:text-[28px]">
                {product.name}
              </h2>
              <p className="mb-[20px] text-[14px] leading-[1.8] text-[#666666] sm:text-[15px]">{product.summary}</p>

              <ul className="mb-[20px] space-y-[8px]">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-[14px] leading-[1.6] text-[#444444]">
                    <span className="font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-[24px] grid grid-cols-1 gap-[8px] min-[420px]:grid-cols-2 sm:gap-[10px]">
                {product.mainSpecs.map((spec) => {
                  const Icon = specIcons[spec.icon];

                  return (
                    <div
                      key={`${product.id}-${spec.label}`}
                      className="group flex items-center gap-[10px] rounded-[18px] border border-[#eeeeee] bg-[#fafafa] px-[12px] py-[10px] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_14px_28px_rgba(17,17,17,0.06)] sm:px-[14px] sm:py-[12px]"
                    >
                      <Icon className="h-[18px] w-[18px] text-[#f3c316]" strokeWidth={1.8} />
                      <div>
                        <p className="text-[12px] text-[#888888]">{spec.label}</p>
                        <p className="text-[14px] font-semibold text-[#333333]">{spec.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/contact"
                className="inline-flex h-[44px] w-full items-center justify-center gap-[8px] rounded-full bg-[#f3c316] px-[32px] text-[13px] font-semibold text-black transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#ffd42b] hover:shadow-[0_12px_20px_rgba(243,195,22,0.28)] sm:w-auto"
              >
                <Phone className="h-[14px] w-[14px]" strokeWidth={2} />
                Bog'lanish
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] py-[28px] sm:py-[42px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6">
          <h3 className="mb-[20px] text-[20px] font-bold text-[#222222] sm:mb-[24px] sm:text-[22px]">Batafsil</h3>
          <div className="grid grid-cols-1 gap-x-[32px] gap-y-[2px] md:grid-cols-2 lg:grid-cols-4">
            {product.details.map((spec) => (
              <div key={`${product.id}-${spec.label}`} className="border-b border-[#e5e5e5] py-[12px] transition-colors duration-300 hover:bg-black/[0.015]">
                <p className="text-[13px] font-semibold text-[#333333]">{spec.label}</p>
                <p className="mt-[2px] text-[14px] text-[#777777]">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {similarProducts.length > 0 ? (
        <section className="bg-white py-[28px] sm:py-[42px]">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6">
            <SectionTitle>Shunga o'xshash mahsulotlar</SectionTitle>
            <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
              {similarProducts.map((similarProduct) => (
                <Link
                  key={similarProduct.id}
                  to={`/products/${category}/${similarProduct.id}`}
                  className="group block overflow-hidden rounded-[24px] border border-[#eeeeee] bg-white shadow-[0_14px_30px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_38px_rgba(17,17,17,0.1)]"
                >
                  <div className="flex h-[168px] items-center justify-center bg-[#f8f8f8] p-[16px] sm:h-[180px]">
                    <img
                      src={similarProduct.image}
                      alt={similarProduct.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="px-[14px] py-[12px]">
                    <h4 className="mb-[6px] text-[14px] font-semibold text-[#222222]">{similarProduct.name}</h4>
                    <p className="text-[12px] text-[#666666]">{similarProduct.specs[0]?.label}: {similarProduct.specs[0]?.value}</p>
                    <p className="text-[12px] text-[#666666]">{similarProduct.specs[1]?.label}: {similarProduct.specs[1]?.value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

