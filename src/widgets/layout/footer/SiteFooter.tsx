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
    <footer className="bg-[#1C1C1C] pb-6 pt-16 text-gray-300">
      <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
        <div className="mb-16 flex justify-center">
          <BrandLogo withPlate imageClassName="h-10 w-auto object-contain" />
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {footerLinkColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="mb-2 font-medium text-white">{column.title}</h3>
              {column.links.map((link) => (
                <Link key={link.label} to={link.href} className="text-sm transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="mb-2 font-medium text-white">Bog'lanish</h3>
            {footerPhones.map((phone) => (
              <a key={phone.label} href={phone.href} className="flex items-center gap-2 text-sm hover:text-white">
                <Phone className="h-4 w-4" /> {phone.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="mb-2 font-medium text-white">Elektron pochta</h3>
            {footerEmails.map((email) => (
              <a key={email.label} href={email.href} className="flex items-center gap-2 text-sm hover:text-white">
                <Mail className="h-4 w-4" /> {email.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="mb-2 font-medium text-white">Manzil</h3>
            <div className="flex items-start gap-2 text-sm leading-relaxed">
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
