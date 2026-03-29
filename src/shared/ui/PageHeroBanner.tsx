import heroBanner from '../../assets/hero/hero-banner.png';

type PageHeroBannerProps = {
  title: string;
};

export const PageHeroBanner = ({ title }: PageHeroBannerProps) => {
  return (
    <section className="relative overflow-hidden bg-[#161616]">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[rgba(14,14,14,0.55)]" />
      </div>

      <div className="relative mx-auto flex min-h-[182px] w-full max-w-[1238px] items-center justify-center px-4 py-[28px] sm:px-5 lg:px-6">
        <h1 className="text-center text-[28px] leading-none font-black tracking-[-0.04em] text-white uppercase md:text-[46px]">
          {title}
        </h1>
      </div>
    </section>
  );
};
