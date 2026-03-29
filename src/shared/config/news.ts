import newsCardGreenTruck from '../../assets/news-card-green-truck.png';
import newsCardTractors from '../../assets/news-card-tractors.png';
import newsCardTrucks from '../../assets/news-card-trucks.png';
import newsFeaturedPort from '../../assets/news-featured-port.png';

export const newsItems = [
  {
    title: "XCMG va Fortescue dunyodagi eng yirik elektr kon uskunalari prototiplarini ishga tushirdi",
    date: '12.02.2024',
    excerpt:
      "XCMG Yangiliklari | 2026 yil 5-fevral. Sun'iy o'lchami 3-fevral kuni XCMG Group Fortescue kompaniyasining bosh direktori bilan uchrashdi.",
    image: newsFeaturedPort,
  },
  {
    title: "UzXCMG servis markazlari bo'ylab yangi texnik ko'rik dasturi yo'lga qo'yildi",
    date: '18.02.2024',
    excerpt:
      "Servis mutaxassislari uchun yangi standartlar joriy etildi, texnika diagnostikasi va ehtiyot qismlar logistikasiga urg'u berildi.",
    image: newsCardTractors,
  },
  {
    title: "Mahalliy bozorda yangi yuk ortgichlar liniyasi mijozlarga taqdim etildi",
    date: '24.02.2024',
    excerpt:
      "Frontal yuklagichlar, ekskavatorlar va yo'l qurilish texnikalari bo'yicha amaliy namoyishlar o'tkazildi.",
    image: newsCardGreenTruck,
  },
  {
    title: "UzXCMG eksport geografiyasini kengaytirib, yangi hamkorlar bilan bitim imzoladi",
    date: '03.03.2024',
    excerpt:
      "Kompaniya MDH va Markaziy Osiyo bozorlariga yetkazib berish hajmini oshirish bo'yicha rejalarni taqdim etdi.",
    image: newsCardTrucks,
  },
  {
    title: "Yangi servis loyihasi doirasida ehtiyot qismlar ta'minoti bo'yicha markazlashgan tizim joriy qilindi",
    date: '11.03.2024',
    excerpt:
      "Hududiy servis bo'limlari o'rtasida logistika tezligi oshirilib, buyurtmalarni qayta ishlash sifati yaxshilandi.",
    image: newsCardTractors,
  },
  {
    title: "UzXCMG qurilish va konchilik texnikalari uchun namoyish tadbirini o'tkazdi",
    date: '19.03.2024',
    excerpt:
      "Yangi modellarning samaradorligi, yoqilg'i tejamkorligi va ishlash quvvati mijozlar uchun amalda namoyish qilindi.",
    image: newsFeaturedPort,
  },
] as const;
