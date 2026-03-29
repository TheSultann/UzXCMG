import { Camera, CirclePlay, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/hero/hero-banner.png';
import mediaExcavatorMountain from '../../../assets/media-excavator-mountain.jpg';
import mediaKomatsuTruckSky from '../../../assets/media-komatsu-truck-sky.jpg';
import mediaOpenMine from '../../../assets/media-open-mine.jpg';
import { heroContent } from './model/heroContent';

export const HeroSection = () => {
  const heroSlides = [banner, mediaExcavatorMountain, mediaOpenMine, mediaKomatsuTruckSky];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-[382px] w-full overflow-hidden border-b-2 border-[#0f5db8] sm:min-h-[430px] lg:min-h-[500px]">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <img
            key={slide}
            src={slide}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,14,0.83)_0%,rgba(8,10,14,0.6)_26%,rgba(8,10,14,0.18)_56%,rgba(8,10,14,0.2)_100%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,29,0.22)_0%,rgba(8,17,29,0.08)_34%,rgba(8,17,29,0.38)_100%)]"></div>

      <div className="relative z-10 mx-auto h-full w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
        <div className="flex min-h-[382px] items-center py-[34px] sm:min-h-[430px] sm:py-[40px] lg:min-h-[500px] lg:py-[46px]">
          <div className="max-w-[640px] pl-[10px] sm:pl-[14px] lg:pl-[8px]">
            <h1 className="font-display mb-[18px] max-w-[760px] text-[44px] leading-[0.95] font-black uppercase tracking-[-2.2px] text-white sm:text-[54px] lg:text-[56px] xl:text-[58px]">
              {heroContent.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mb-[18px] max-w-[510px] text-[11px] leading-[1.6] font-normal text-white/84 sm:text-[12px]">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap items-center gap-[10px]">
              <Link
                to={heroContent.primaryAction.href}
                className="inline-flex h-[40px] items-center justify-center bg-[#f3c316] px-[18px] text-[11px] font-semibold text-black transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#ffd42b] hover:shadow-[0_12px_22px_rgba(243,195,22,0.3)]"
              >
                {heroContent.primaryAction.label}
              </Link>
              <a
                href={heroContent.secondaryAction.href}
                className="inline-flex h-[40px] items-center justify-center border border-white/55 bg-black/18 px-[18px] text-[11px] font-medium text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/10 hover:shadow-[0_12px_22px_rgba(0,0,0,0.18)]"
              >
                {heroContent.secondaryAction.label}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[20px] top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-[11px] text-white/85 lg:flex">
        <a href="#instagram" aria-label="Instagram" className="transition-all duration-300 hover:scale-110 hover:text-white">
          <Camera className="h-[12px] w-[12px]" strokeWidth={1.85} />
        </a>
        <a href="#telegram" aria-label="Telegram" className="transition-all duration-300 hover:scale-110 hover:text-white">
          <Send className="h-[12px] w-[12px]" strokeWidth={1.85} />
        </a>
        <a href="#youtube" aria-label="YouTube" className="transition-all duration-300 hover:scale-110 hover:text-white">
          <CirclePlay className="h-[12px] w-[12px]" strokeWidth={1.85} />
        </a>
      </div>

      <div className="absolute bottom-[15px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[6px]">
        {heroSlides.map((_, index) => {
          const isActive = index === activeSlide;

          return (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={
                isActive
                  ? 'h-[4px] w-[24px] rounded-full bg-white'
                  : 'h-[4px] w-[14px] rounded-full bg-white/35 transition-all duration-300 hover:scale-110 hover:bg-white/65'
              }
            />
          );
        })}
      </div>
    </section>
  );
};
