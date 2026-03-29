import { type ComponentType } from 'react';
import { HomePage } from '../../pages/home/HomePage';
import { ProductsPage } from '../../pages/products/ProductsPage';
import { ProductCategoryPage } from '../../pages/product-category/ProductCategoryPage';
import { ProductDetailPage } from '../../pages/product-detail/ProductDetailPage';
import { AboutPage } from '../../pages/about/AboutPage';
import { NewsPage } from '../../pages/news/NewsPage';
import { MediaPage } from '../../pages/media/MediaPage';
import { VideoPage } from '../../pages/video/VideoPage';
import { ContactPage } from '../../pages/contact/ContactPage';
import { LeadershipPage } from '../../pages/leadership/LeadershipPage';
import { LeadershipDetailPage } from '../../pages/leadership-detail/LeadershipDetailPage';
import { CertificatesPage } from '../../pages/certificates/CertificatesPage';
import { ServicePage } from '../../pages/service/ServicePage';
import { ServiceCentersPage } from '../../pages/service-centers/ServiceCentersPage';
import { SparePartsPage } from '../../pages/spare-parts/SparePartsPage';
import { ServiceMaintenancePage } from '../../pages/service-maintenance/ServiceMaintenancePage';

export type AppRoute = {
  path: string;
  component: ComponentType;
  title: string;
};

export const routes: AppRoute[] = [
  { path: '/', component: HomePage, title: 'Bosh sahifa' },
  { path: '/products', component: ProductsPage, title: 'Mahsulotlar' },
  { path: '/products/:category', component: ProductCategoryPage, title: 'Kategoriya' },
  { path: '/products/:category/:id', component: ProductDetailPage, title: 'Mahsulot' },
  { path: '/about', component: AboutPage, title: 'Biz haqimizda' },
  { path: '/news', component: NewsPage, title: 'Yangiliklar' },
  { path: '/media', component: MediaPage, title: 'Mediya' },
  { path: '/video', component: VideoPage, title: 'Vidyo' },
  { path: '/contact', component: ContactPage, title: 'Aloqa' },
  { path: '/leadership', component: LeadershipPage, title: 'Rahbariyat' },
  { path: '/leadership/:id', component: LeadershipDetailPage, title: 'Rahbariyat' },
  { path: '/certificates', component: CertificatesPage, title: 'Sertifikatlar' },
  { path: '/service', component: ServicePage, title: 'Servis' },
  { path: '/service/centers', component: ServiceCentersPage, title: 'Servis markazlari' },
  { path: '/service/spare-parts', component: SparePartsPage, title: 'Ehtiyot qismlar' },
  { path: '/service/maintenance', component: ServiceMaintenancePage, title: "Xizmat ko'rsatish" },
];
