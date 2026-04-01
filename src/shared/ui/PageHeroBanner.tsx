import heroBanner from '../../assets/hero/hero-banner.png';

type PageHeroBannerProps = {
  title: string;
};

export const PageHeroBanner = ({ title }: PageHeroBannerProps) => {
  return (
    <section className="relative overflow-hidden bg-[#161616]">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt=""
          className="h-full w-full object-cover object-[center_38%] brightness-[1.08] saturate-110 sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.04)_0%,rgba(14,14,14,0.14)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,14,0.24)_0%,rgba(8,10,14,0.08)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[128px] w-full max-w-[1440px] items-center justify-center px-4 py-[20px] sm:min-h-[182px] sm:px-5 sm:py-[28px] lg:px-6">
        <h1 className="text-center text-[24px] leading-[0.95] font-black tracking-[-0.04em] text-white uppercase sm:text-[28px] md:text-[46px]">
          {title}
        </h1>
      </div>
    </section>
  );
};

