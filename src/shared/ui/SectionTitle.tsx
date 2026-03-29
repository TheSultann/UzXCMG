type SectionTitleProps = {
  children: React.ReactNode;
  centered?: boolean;
};

export const SectionTitle = ({ children, centered = true }: SectionTitleProps) => {
  return (
    <div className={`mb-[28px] flex items-center gap-[8px] ${centered ? 'justify-center' : ''}`}>
      <span className="h-[28px] w-[5px] bg-[#f3c316]" />
      <h2 className="text-[20px] font-semibold text-[#333333] md:text-[34px]">{children}</h2>
    </div>
  );
};
