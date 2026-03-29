import { CompanyOverviewSection } from '../../widgets/home/company-overview/CompanyOverviewSection';
import { ContactBlockSection } from '../../widgets/home/contact-block/ContactBlockSection';
import { FaqSection } from '../../widgets/home/faq/FaqSection';
import { HeroSection } from '../../widgets/home/hero/HeroSection';
import { NewsFeedSection } from '../../widgets/home/news-feed/NewsFeedSection';
import { PartnersSection } from '../../widgets/home/partners/PartnersSection';
import { ProductCategories } from '../../widgets/home/product-categories/ProductCategories';
import { QualityFeaturesSection } from '../../widgets/home/quality-features/QualityFeaturesSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ProductCategories />
      <QualityFeaturesSection />
      <CompanyOverviewSection />
      <FaqSection />
      <NewsFeedSection />
      <ContactBlockSection />
    </>
  );
};
