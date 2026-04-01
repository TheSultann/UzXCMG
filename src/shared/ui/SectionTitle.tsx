type SectionTitleProps = {
  children: React.ReactNode;
  centered?: boolean;
};

export const SectionTitle = ({ children, centered = true }: SectionTitleProps) => {
  return (
    <div className={`mb-[22px] flex items-center gap-[8px] ${centered ? 'justify-center' : ''} sm:mb-[28px]`}>
      <span className="h-[22px] w-[5px] bg-[#f3c316] sm:h-[28px]" />
      <h2 className="text-[18px] leading-[1.05] font-semibold text-[#333333] sm:text-[24px] md:text-[34px]">{children}</h2>
    </div>
  );
};
