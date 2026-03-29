import { MapPin, MessageSquareText, Phone, User } from 'lucide-react';

export const ContactBlockSection = () => {
  return (
    <section id="contact" className="bg-white py-8">
      <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
        <div className="grid gap-4 bg-white lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[250px] overflow-hidden bg-[#d9ddd8]">
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:34px_34px] opacity-60"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(58,97,145,0.3),transparent_25%),radial-gradient(circle_at_68%_34%,rgba(91,131,186,0.22),transparent_22%),radial-gradient(circle_at_78%_72%,rgba(76,117,168,0.2),transparent_18%)]"></div>
            <div className="absolute left-[48%] top-[34%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <MapPin className="h-8 w-8 text-[#db3e35]" fill="#db3e35" />
              <div className="mt-2 rounded bg-white/90 px-2 py-1 text-[11px] font-medium text-[#2d2d2d] shadow-sm">
                UZ XCMG Qo'shma korxonasi
              </div>
            </div>
          </div>

          <div className="bg-[#efefef] px-6 py-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-6 w-[5px] bg-[#f3c316]"></span>
              <h2 className="text-[22px] font-bold text-[#2d2d2d]">Bog'lanish</h2>
            </div>

            <form className="space-y-2">
              <label className="relative block">
                <User className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#8a8a8a]" />
                <input
                  type="text"
                  placeholder="Isim"
                  className="h-[34px] w-full border border-[#dedede] bg-white pl-8 pr-3 text-[12px] outline-none placeholder:text-[#8a8a8a]"
                />
              </label>

              <label className="relative block">
                <Phone className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#8a8a8a]" />
                <input
                  type="tel"
                  placeholder="Telefon raqam"
                  className="h-[34px] w-full border border-[#dedede] bg-white pl-8 pr-3 text-[12px] outline-none placeholder:text-[#8a8a8a]"
                />
              </label>

              <label className="relative block">
                <MessageSquareText className="pointer-events-none absolute left-2 top-3 h-3.5 w-3.5 text-[#8a8a8a]" />
                <textarea
                  placeholder="Xabar"
                  rows={5}
                  className="w-full border border-[#dedede] bg-white pl-8 pr-3 pt-2 text-[12px] outline-none placeholder:text-[#8a8a8a]"
                ></textarea>
              </label>

              <button
                type="button"
                className="h-[32px] w-full bg-[#2d2d2d] text-[11px] font-medium text-white transition-colors hover:bg-black"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
