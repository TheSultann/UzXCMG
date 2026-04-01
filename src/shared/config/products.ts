import excavators from '../../assets/product-categories/excavators.png';
import loaders from '../../assets/product-categories/loaders.png';
import bulldozersGraders from '../../assets/product-categories/bulldozers-graders.png';
import miningEquipment from '../../assets/product-categories/mining-equipment.png';
import roadConstruction from '../../assets/product-categories/road-construction-equipment.png';
import legacyExcavator from '../../assets/legacy/excavator.png';
import mediaBackhoeBucket from '../../assets/media-backhoe-bucket.jpg';
import mediaDumpTruckLeft from '../../assets/media-dump-truck-left.jpg';
import mediaDumpTruckRight from '../../assets/media-dump-truck-right.jpg';
import mediaExcavatorMountain from '../../assets/media-excavator-mountain.jpg';
import mediaKomatsuHill from '../../assets/media-komatsu-hill.jpg';
import mediaKomatsuTruckSky from '../../assets/media-komatsu-truck-sky.jpg';
import mediaOpenMine from '../../assets/media-open-mine.jpg';
import newsCardGreenTruck from '../../assets/news-card-green-truck.png';
import newsCardTractors from '../../assets/news-card-tractors.png';
import newsCardTrucks from '../../assets/news-card-trucks.png';

export type ProductIconKey = 'weight' | 'box' | 'fuel' | 'maximize';

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductRecord = {
  id: string;
  name: string;
  badge: string;
  image: string;
  specs: ProductSpec[];
  summary: string;
  highlights: string[];
  mainSpecs: Array<ProductSpec & { icon: ProductIconKey }>;
  details: ProductSpec[];
  gallery: string[];
};

type ProductSeed = {
  id: string;
  name: string;
  badge: string;
  image: string;
  specs: [ProductSpec, ProductSpec];
};

export const categoryTitles: Record<string, string> = {
  excavators: 'Ekskavatorlar',
  loaders: 'Yuk ortgichlar',
  bulldozers: 'Buldozer va greyderlar',
  'road-equipment': "Yo'l qurilish texnikasi",
  mining: "Tog' konlari texnikasi",
};

const categoryApplications: Record<string, string> = {
  excavators: 'Qazish va yer ishlari',
  loaders: 'Yuklash va tashish',
  bulldozers: 'Tekislash va surish ishlari',
  'road-equipment': "Yo'l qurilishi va zichlash",
  mining: "Karyer va tog' kon ishlari",
};

const categoryGalleries: Record<string, string[]> = {
  excavators: [excavators, legacyExcavator, mediaExcavatorMountain, mediaBackhoeBucket],
  loaders: [loaders, newsCardGreenTruck, newsCardTractors, newsCardTrucks],
  bulldozers: [bulldozersGraders, mediaKomatsuHill, roadConstruction, mediaOpenMine],
  'road-equipment': [roadConstruction, mediaKomatsuHill, mediaKomatsuTruckSky, mediaOpenMine],
  mining: [miningEquipment, mediaDumpTruckLeft, mediaDumpTruckRight, mediaOpenMine],
};

const rawCatalog: Record<string, ProductSeed[]> = {
  excavators: [
    {
      id: 'xe35u',
      name: 'XE35U',
      badge: 'Mini',
      image: excavators,
      specs: [
        { label: "Ish og'irligi", value: '4.2 t' },
        { label: 'Dvigatel', value: '18.2 kW' },
      ],
    },
    {
      id: 'xe55u',
      name: 'XE55U',
      badge: 'Universal',
      image: excavators,
      specs: [
        { label: "Ish og'irligi", value: '5.7 t' },
        { label: 'Dvigatel', value: '35.9 kW' },
      ],
    },
    {
      id: 'xe80e',
      name: 'XE80E',
      badge: 'Compact',
      image: excavators,
      specs: [
        { label: "Ish og'irligi", value: '8.1 t' },
        { label: 'Dvigatel', value: '53.7 kW' },
      ],
    },
    {
      id: 'xe215c',
      name: 'XE215C',
      badge: 'Crawler',
      image: excavators,
      specs: [
        { label: "Ish og'irligi", value: '21.5 t' },
        { label: 'Dvigatel', value: '129 kW' },
      ],
    },
    {
      id: 'xe370ca',
      name: 'XE370CA',
      badge: 'Heavy Duty',
      image: excavators,
      specs: [
        { label: "Ish og'irligi", value: '36.8 t' },
        { label: 'Dvigatel', value: '190.5 kW' },
      ],
    },
    {
      id: 'xe500dk',
      name: 'XE500DK',
      badge: 'Mining',
      image: excavators,
      specs: [
        { label: "Ish og'irligi", value: '49.8 t' },
        { label: 'Dvigatel', value: '299 kW' },
      ],
    },
  ],
  loaders: [
    {
      id: 'xc958',
      name: 'XC958',
      badge: 'Frontal',
      image: loaders,
      specs: [
        { label: "Kovsh hajmi", value: '3.2 m3' },
        { label: 'Dvigatel', value: '168 kW' },
      ],
    },
    {
      id: 'xc968-ev',
      name: 'XC968-EV',
      badge: 'Electric',
      image: loaders,
      specs: [
        { label: 'Yuklama', value: '6.0 t' },
        { label: 'Quvvat', value: '240 kWh' },
      ],
    },
    {
      id: 'lw300fn',
      name: 'LW300FN',
      badge: 'Popular',
      image: loaders,
      specs: [
        { label: 'Yuklama', value: '3.0 t' },
        { label: 'Dvigatel', value: '92 kW' },
      ],
    },
    {
      id: 'xc938',
      name: 'XC938',
      badge: 'Compact',
      image: loaders,
      specs: [
        { label: 'Yuklama', value: '3.5 t' },
        { label: 'Dvigatel', value: '129 kW' },
      ],
    },
    {
      id: 'xc975k',
      name: 'XC975K',
      badge: 'Heavy Duty',
      image: loaders,
      specs: [
        { label: "Kovsh hajmi", value: '5.0 m3' },
        { label: 'Dvigatel', value: '276 kW' },
      ],
    },
    {
      id: 'xc980',
      name: 'XC980',
      badge: 'Premium',
      image: loaders,
      specs: [
        { label: 'Yuklama', value: '8.0 t' },
        { label: 'Dvigatel', value: '250 kW' },
      ],
    },
  ],
  bulldozers: [
    {
      id: 'ty160',
      name: 'TY160',
      badge: 'Bulldozer',
      image: bulldozersGraders,
      specs: [
        { label: 'Pichoq hajmi', value: '4.5 m3' },
        { label: 'Dvigatel', value: '131 kW' },
      ],
    },
    {
      id: 'ty230',
      name: 'TY230',
      badge: 'Bulldozer',
      image: bulldozersGraders,
      specs: [
        { label: "Ish og'irligi", value: '23.5 t' },
        { label: 'Dvigatel', value: '169 kW' },
      ],
    },
    {
      id: 'gr1805t',
      name: 'GR1805T',
      badge: 'Greyder',
      image: bulldozersGraders,
      specs: [
        { label: 'Pichoq eni', value: '3.96 m' },
        { label: 'Dvigatel', value: '140 kW' },
      ],
    },
    {
      id: 'gr215',
      name: 'GR215',
      badge: 'Greyder',
      image: bulldozersGraders,
      specs: [
        { label: "Ish og'irligi", value: '16.5 t' },
        { label: 'Dvigatel', value: '160 kW' },
      ],
    },
    {
      id: 'gr2605',
      name: 'GR2605',
      badge: 'Heavy Duty',
      image: bulldozersGraders,
      specs: [
        { label: 'Pichoq eni', value: '4.27 m' },
        { label: 'Dvigatel', value: '194 kW' },
      ],
    },
    {
      id: 'gr3505',
      name: 'GR3505',
      badge: 'Mining',
      image: bulldozersGraders,
      specs: [
        { label: "Ish og'irligi", value: '29.5 t' },
        { label: 'Dvigatel', value: '261 kW' },
      ],
    },
  ],
  'road-equipment': [
    {
      id: 'xd123',
      name: 'XD123',
      badge: 'Road Roller',
      image: roadConstruction,
      specs: [
        { label: "Ish og'irligi", value: '12.3 t' },
        { label: 'Dvigatel', value: '119 kW' },
      ],
    },
    {
      id: 'xd133',
      name: 'XD133',
      badge: 'Road Roller',
      image: roadConstruction,
      specs: [
        { label: "Ish og'irligi", value: '13.0 t' },
        { label: 'Dvigatel', value: '119 kW' },
      ],
    },
    {
      id: 'rp603',
      name: 'RP603',
      badge: 'Asphalt Paver',
      image: roadConstruction,
      specs: [
        { label: 'Ish eni', value: '6.0 m' },
        { label: 'Dvigatel', value: '103 kW' },
      ],
    },
    {
      id: 'rp805',
      name: 'RP805',
      badge: 'Asphalt Paver',
      image: roadConstruction,
      specs: [
        { label: 'Ish eni', value: '8.0 m' },
        { label: 'Dvigatel', value: '177 kW' },
      ],
    },
    {
      id: 'xs143j',
      name: 'XS143J',
      badge: 'Compactor',
      image: roadConstruction,
      specs: [
        { label: "Ish og'irligi", value: '14.0 t' },
        { label: 'Dvigatel', value: '104 kW' },
      ],
    },
    {
      id: 'xs223j',
      name: 'XS223J',
      badge: 'Compactor',
      image: roadConstruction,
      specs: [
        { label: "Ish og'irligi", value: '22.0 t' },
        { label: 'Dvigatel', value: '140 kW' },
      ],
    },
  ],
  mining: [
    {
      id: 'xde110',
      name: 'XDE110',
      badge: 'Dump Truck',
      image: miningEquipment,
      specs: [
        { label: 'Yuklama', value: '110 t' },
        { label: 'Dvigatel', value: '565 kW' },
      ],
    },
    {
      id: 'xde130',
      name: 'XDE130',
      badge: 'Dump Truck',
      image: miningEquipment,
      specs: [
        { label: 'Yuklama', value: '130 t' },
        { label: 'Dvigatel', value: '970 kW' },
      ],
    },
    {
      id: 'xdr80t',
      name: 'XDR80T',
      badge: 'Rigid Truck',
      image: miningEquipment,
      specs: [
        { label: 'Yuklama', value: '76 t' },
        { label: 'Dvigatel', value: '566 kW' },
      ],
    },
    {
      id: 'xr360e',
      name: 'XR360E',
      badge: 'Drilling',
      image: miningEquipment,
      specs: [
        { label: 'Qazish chuq.', value: '102 m' },
        { label: 'Dvigatel', value: '298 kW' },
      ],
    },
    {
      id: 'xe490dk',
      name: 'XE490DK',
      badge: 'Mining',
      image: miningEquipment,
      specs: [
        { label: "Ish og'irligi", value: '49.2 t' },
        { label: 'Dvigatel', value: '310 kW' },
      ],
    },
    {
      id: 'xul202',
      name: 'XUL202',
      badge: 'Underground',
      image: miningEquipment,
      specs: [
        { label: 'Yuklama', value: '20 t' },
        { label: 'Dvigatel', value: '175 kW' },
      ],
    },
  ],
};

const rotateGallery = (images: string[], shift: number) =>
  images.map((_, index) => images[(index + shift) % images.length]);

const buildProductRecord = (category: string, seed: ProductSeed, galleryShift: number): ProductRecord => {
  const categoryTitle = categoryTitles[category] || 'Mahsulotlar';
  const application = categoryApplications[category] || 'Universal qo\'llanilish';
  const gallery = rotateGallery(categoryGalleries[category] || [seed.image], galleryShift);

  return {
    ...seed,
    summary: `${seed.name} modeli ${categoryTitle.toLowerCase()} segmentida ${seed.badge.toLowerCase()} ishlar uchun mos bo'lib, ${seed.specs[0].value} va ${seed.specs[1].value} ko'rsatkichlari bilan barqaror samaradorlik beradi.`,
    highlights: [
      `${seed.specs[0].label}: ${seed.specs[0].value}`,
      `${seed.specs[1].label}: ${seed.specs[1].value}`,
      "Original XCMG texnikasi va rasmiy servis qo'llab-quvvatlovi",
    ],
    mainSpecs: [
      { icon: 'weight', label: seed.specs[0].label, value: seed.specs[0].value },
      { icon: 'fuel', label: seed.specs[1].label, value: seed.specs[1].value },
      { icon: 'box', label: "Yo'nalish", value: seed.badge },
      { icon: 'maximize', label: "Qo'llanilish", value: application },
    ],
    details: [
      { label: seed.specs[0].label, value: seed.specs[0].value },
      { label: seed.specs[1].label, value: seed.specs[1].value },
      { label: 'Brend', value: 'XCMG' },
      { label: 'Model', value: seed.name },
      { label: 'Toifa', value: seed.badge },
      { label: 'Kategoriya', value: categoryTitle },
      { label: "Qo'llanilish", value: application },
      { label: 'Servis', value: "Rasmiy servis va original ehtiyot qismlar" },
    ],
    gallery,
  };
};

export const productCatalog: Record<string, ProductRecord[]> = Object.fromEntries(
  Object.entries(rawCatalog).map(([category, products]) => [
    category,
    products.map((product, index) => buildProductRecord(category, product, index)),
  ]),
) as Record<string, ProductRecord[]>;

export const getCategoryProducts = (category: string) => productCatalog[category] || productCatalog.excavators;

export const getProductById = (category: string, id?: string) => {
  const products = getCategoryProducts(category);

  return products.find((product) => product.id === id) || products[0];
};
