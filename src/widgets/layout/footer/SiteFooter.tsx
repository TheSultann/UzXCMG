import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../../../shared/ui/BrandLogo';
import {
  footerAddress,
  footerEmails,
  footerLinkColumns,
  footerPhones,
} from '../../../shared/config/footer';

export const SiteFooter = () => {
  return (
    <footer className="bg-[#1C1C1C] pb-6 pt-10 text-gray-300 sm:pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6">
        <div className="mb-10 flex justify-center sm:mb-16">
          <BrandLogo withPlate imageClassName="h-8 w-auto object-contain sm:h-10" />
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 sm:mb-16 sm:gap-8 md:grid-cols-3 lg:grid-cols-6">
          {footerLinkColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="mb-1 text-[15px] font-medium text-white sm:mb-2">{column.title}</h3>
              {column.links.map((link, index) => (
                <Link key={`${column.title}-${link.label}-${index}`} to={link.href} className="text-[13px] transition-colors hover:text-white sm:text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="mb-1 text-[15px] font-medium text-white sm:mb-2">Bog'lanish</h3>
            {footerPhones.map((phone) => (
              <a key={phone.label} href={phone.href} className="flex items-center gap-2 text-[13px] hover:text-white sm:text-sm">
                <Phone className="h-4 w-4" /> {phone.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="mb-1 text-[15px] font-medium text-white sm:mb-2">Elektron pochta</h3>
            {footerEmails.map((email) => (
              <a key={email.label} href={email.href} className="flex items-center gap-2 text-[13px] hover:text-white sm:text-sm">
                <Mail className="h-4 w-4" /> {email.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="mb-1 text-[15px] font-medium text-white sm:mb-2">Manzil</h3>
            <div className="flex items-start gap-2 text-[13px] leading-relaxed sm:text-sm">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
              <span>{footerAddress}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#333333] pt-6 md:flex-row">
          <p className="text-xs text-gray-500">
            Copyright (c) 2024 "UZXCMG" MCHJ | Barcha huquqlar himoyalangan
          </p>
          <p className="text-xs text-gray-500">Design by Jamoladdin</p>
        </div>
      </div>
    </footer>
  );
};

