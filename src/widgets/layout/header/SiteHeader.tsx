import {
  Camera,
  ChevronDown,
  CirclePlay,
  Globe,
  Menu,
  Phone,
  Send,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from '../../../shared/ui/BrandLogo';
import {
  contactPhone,
  headerSocialLinks,
  navigationItems,
} from '../../../shared/config/navigation';

const socialIconMap: Record<(typeof headerSocialLinks)[number]['icon'], LucideIcon> = {
  instagram: Camera,
  telegram: Send,
  youtube: CirclePlay,
};

export const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href.split('#')[0]) || location.hash === href.split('#')[1];
  };

  return (
    <header className="relative z-50 w-full border-b-2 border-[#0f5db8] bg-white">
      <div className="mx-auto w-full max-w-[1238px] px-0">
        <div className="flex h-[46px] w-full items-stretch justify-between md:h-[52px]">
          <BrandLogo
            className="h-full w-[143px] border-r border-[#d8d8d8] pl-[14px]"
            imageClassName="h-[20px] w-auto self-center"
          />

          <nav className="hidden h-full items-center gap-[28px] pl-[16px] lg:flex">
            {navigationItems.map((item) => (
              <div key={item.label} className="group relative flex h-full items-center">
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-[11px] font-medium transition-colors hover:text-[#0f5db8] ${
                    isActive(item.href) ? 'text-[#0f5db8]' : 'text-[#2f2f2f]'
                  }`}
                >
                  <span className="leading-none">{item.label}</span>
                  {item.children ? <ChevronDown className="mt-px h-[11px] w-[11px]" strokeWidth={1.8} /> : null}
                </Link>

                {item.children ? (
                  <div className="invisible absolute left-0 top-full flex min-w-44 flex-col border border-gray-100 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="px-4 py-2 text-[11px] text-gray-600 hover:bg-gray-50 hover:text-[#0f5db8]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="flex items-stretch pr-0">
            <div className="hidden items-center gap-[10px] border-l border-[#d8d8d8] px-[10px] text-[#444444] md:flex">
              {headerSocialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-[18px] w-[18px] items-center justify-center transition-colors hover:text-[#0f5db8]"
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                  </a>
                );
              })}
            </div>

            <button className="hidden h-[22px] w-[76px] self-center items-center justify-center gap-[5px] border-l border-[#d8d8d8] px-0 text-[10px] font-normal text-[#2c2c2c] md:flex">
              <Globe className="h-[13px] w-[13px]" strokeWidth={1.9} />
              UZ
              <ChevronDown className="h-[11px] w-[11px]" strokeWidth={1.75} />
            </button>

            <a
              href={contactPhone.href}
              className="ml-[8px] hidden h-[46px] w-[202px] self-center items-center justify-center gap-[6px] bg-[#2e2e2e] px-[12px] text-white transition-colors hover:bg-black sm:flex"
            >
              <Phone className="h-[12px] w-[12px]" strokeWidth={2.1} />
              <span className="text-[10px] font-medium leading-none">{contactPhone.label}</span>
            </a>

            <button
              type="button"
              className="flex items-center justify-center px-3 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-[#2f2f2f]" />
              ) : (
                <Menu className="h-5 w-5 text-[#2f2f2f]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white shadow-[0_22px_40px_rgba(15,20,28,0.12)] lg:hidden">
          <div className="mx-auto max-h-[calc(100vh-46px)] max-w-[1238px] overflow-y-auto px-4 py-4">
            <a
              href={contactPhone.href}
              className="mb-4 flex h-[42px] w-full items-center justify-center gap-[6px] bg-[#2e2e2e] text-[12px] font-semibold text-white sm:hidden"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="h-[13px] w-[13px]" strokeWidth={2.1} />
              <span>{contactPhone.label}</span>
            </a>

            <nav className="space-y-2">
              {navigationItems.map((item) =>
                item.children ? (
                  <details
                    key={item.label}
                    className="group overflow-hidden rounded-xl border border-[#ececec] bg-[#fafafa]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[13px] font-semibold text-[#202020]">
                      <span>{item.label}</span>
                      <ChevronDown
                        className="h-[15px] w-[15px] text-[#555555] transition-transform group-open:rotate-180"
                        strokeWidth={1.8}
                      />
                    </summary>
                    <div className="border-t border-[#ececec] bg-white px-2 py-2">
                      <Link
                        to={item.href}
                        className="block rounded-lg px-3 py-2.5 text-[12px] font-medium text-[#0f5db8]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Barchasi
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block rounded-lg px-3 py-2.5 text-[12px] text-[#525252] transition-colors hover:bg-[#f7f7f7] hover:text-[#0f5db8]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`block rounded-xl border px-4 py-3 text-[13px] font-semibold transition-colors ${
                      isActive(item.href)
                        ? 'border-[#0f5db8] bg-[#f5f9ff] text-[#0f5db8]'
                        : 'border-[#ececec] bg-[#fafafa] text-[#202020] hover:border-[#d7e4f8] hover:text-[#0f5db8]'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="mt-4 flex items-center gap-2 border-t border-[#ececec] pt-4">
              {headerSocialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#e3e3e3] text-[#444444] transition-colors hover:border-[#0f5db8] hover:text-[#0f5db8]"
                  >
                    <Icon className="h-[16px] w-[16px]" strokeWidth={1.9} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
