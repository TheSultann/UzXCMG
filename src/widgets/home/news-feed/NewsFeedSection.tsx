import { ChevronLeft, ChevronRight, Clock3 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { newsItems } from '../../../shared/config/news';

type NewsFeedSectionProps = {
  title?: string;
  sectionId?: string;
};

export const NewsFeedSection = ({
  title = 'Yangiliklar',
  sectionId = 'news',
}: NewsFeedSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(4);
        return;
      }

      if (window.innerWidth >= 768) {
        setVisibleCount(2);
        return;
      }

      setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(newsItems.length - visibleCount, 0);
  const clampedActiveIndex = Math.min(activeIndex, maxIndex);

  const translatePercent = useMemo(() => {
    return clampedActiveIndex * (100 / visibleCount);
  }, [clampedActiveIndex, visibleCount]);

  const goPrev = () => setActiveIndex((currentIndex) => Math.max(Math.min(currentIndex, maxIndex) - 1, 0));
  const goNext = () => setActiveIndex((currentIndex) => Math.min(Math.min(currentIndex, maxIndex) + 1, maxIndex));

  return (
    <section id={sectionId} className="bg-white py-8 sm:py-10">
      <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-6 w-[5px] bg-[#f3c316]"></span>
            <h2 className="text-[22px] font-bold text-[#2d2d2d]">{title}</h2>
          </div>

          <div className="flex w-full items-center gap-2 sm:w-auto">
            <button
              type="button"
              onClick={goPrev}
              disabled={clampedActiveIndex === 0}
              className="flex h-[40px] w-[40px] flex-none items-center justify-center border border-[#dddddd] bg-white text-[#2d2d2d] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#c8c8c8] hover:bg-[#fafafa] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
              aria-label="Oldingi yangiliklar"
            >
              <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={clampedActiveIndex === maxIndex}
              className="flex h-[40px] w-[40px] flex-none items-center justify-center border border-[#dddddd] bg-white text-[#2d2d2d] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#c8c8c8] hover:bg-[#fafafa] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
              aria-label="Keyingi yangiliklar"
            >
              <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2} />
            </button>
            <Link
              to="/news"
              className="ml-1 inline-flex h-[40px] flex-1 items-center justify-center bg-[#2d2d2d] px-[18px] text-[11px] font-semibold uppercase tracking-[0.04em] text-white transition-all duration-300 hover:-translate-y-[1px] hover:bg-black hover:shadow-[0_12px_20px_rgba(45,45,45,0.22)] sm:flex-none"
            >
              Barcha yangiliklar
            </Link>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${translatePercent}%)` }}
          >
            {newsItems.map((item) => (
              <div
                key={`${item.date}-${item.title}`}
                className="shrink-0 px-[6px]"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <Link
                  to="/news"
                  className="group block overflow-hidden border border-[#e5e5e5] bg-white shadow-[0_14px_30px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_38px_rgba(17,17,17,0.1)]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[182px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] sm:h-[150px]"
                  />

                  <div className="px-4 pb-4 pt-3">
                    <div className="mb-3 flex items-center gap-1.5 text-[11px] text-[#7a7a7a]">
                      <Clock3 className="h-[12px] w-[12px]" />
                      {item.date}
                    </div>
                    <h3 className="mb-3 text-[15px] font-medium leading-[1.45] text-[#222222] sm:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="text-[12px] leading-[1.55] text-[#666666] sm:text-[13px]">{item.excerpt}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
