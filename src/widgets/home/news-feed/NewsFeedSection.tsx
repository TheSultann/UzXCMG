import { Clock3 } from 'lucide-react';
import banner from '../../../assets/news-banner.png';
import { newsItems } from '../../../shared/config/news';

type NewsFeedSectionProps = {
  title?: string;
  sectionId?: string;
};

export const NewsFeedSection = ({
  title = 'Yangiliklar',
  sectionId = 'news',
}: NewsFeedSectionProps) => {
  return (
    <section id={sectionId} className="bg-white py-8">
      <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
        <div className="mb-5 flex items-center justify-center gap-2">
          <span className="h-6 w-[5px] bg-[#f3c316]"></span>
          <h2 className="text-[22px] font-bold text-[#2d2d2d]">{title}</h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {newsItems.map((item) => (
            <article key={`${item.date}-${item.title}`} className="overflow-hidden border border-[#e5e5e5] bg-white">
              <img src={banner} alt={item.title} className="h-[108px] w-full object-cover" />

              <div className="px-3 pb-3 pt-2">
                <div className="mb-2 flex items-center gap-1 text-[9px] text-[#7a7a7a]">
                  <Clock3 className="h-[10px] w-[10px]" />
                  {item.date}
                </div>
                <h3 className="mb-2 text-[12px] font-medium leading-[1.4] text-[#222222]">{item.title}</h3>
                <p className="text-[10px] leading-[1.45] text-[#666666]">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
