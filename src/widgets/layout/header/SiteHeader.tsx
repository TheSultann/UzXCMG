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
import { useState } from 'react';
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

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href.split('#')[0]) || location.hash === href.split('#')[1];
  };

  return (
    <header className="relative z-50 w-full border-b-2 border-[#0f5db8] bg-white">
      <div className="mx-auto w-full max-w-[1238px] px-0">
        <div className="flex h-[42px] w-full items-stretch justify-between md:h-[44px]">
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

          <div className="flex items-stretch pr-[6px]">
            <div className="hidden items-center gap-[10px] border-l border-[#d8d8d8] px-[12px] text-[#444444] md:flex">
              {headerSocialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="transition-colors hover:text-[#0f5db8]"
                  >
                    <Icon className={link.icon === 'youtube' ? 'h-[12px] w-[12px]' : 'h-[11px] w-[11px]'} strokeWidth={1.9} />
                  </a>
                );
              })}
            </div>

            <button className="hidden items-center gap-[5px] border-l border-[#d8d8d8] px-[14px] text-[11px] font-normal text-[#2c2c2c] md:flex">
              <Globe className="h-[12px] w-[12px]" strokeWidth={1.9} />
              UZ
              <ChevronDown className="h-[11px] w-[11px]" strokeWidth={1.75} />
            </button>

            <a
              href={contactPhone.href}
              className="ml-[10px] hidden h-[34px] min-w-[160px] items-center justify-center gap-[6px] self-center bg-[#2e2e2e] px-[12px] text-white transition-colors hover:bg-black sm:flex md:h-[34px]"
            >
              <Phone className="h-[11px] w-[11px]" strokeWidth={2.1} />
              <span className="text-[11px] font-medium leading-none">{contactPhone.label}</span>
            </a>

            <button
              className="flex items-center justify-center px-3 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
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
        <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white shadow-lg lg:hidden">
          <nav className="mx-auto max-w-[1238px] px-4 py-3">
            {navigationItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50 last:border-0">
                <Link
                  to={item.href}
                  className="block py-3 text-[13px] font-medium text-[#2f2f2f] hover:text-[#0f5db8]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    className="block py-2 pl-4 text-[12px] text-gray-500 hover:text-[#0f5db8]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
