import {
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  Clock3,
  Cog,
  Headset,
  PackageCheck,
  ScanSearch,
  Settings,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { PageHeroBanner } from '../../shared/ui/PageHeroBanner';
import { SectionTitle } from '../../shared/ui/SectionTitle';

const serviceCards = [
  {
    title: "Uskunalarga texnik xizmat ko'rsatish",
    description:
      "Mutaxassislarimiz eng yuqori darajadagi xizmat ko'rsatib, uskunaning ish unumdorligini doimiy holatda saqlashga yordam beradi.",
    icon: Cog,
  },
  {
    title: 'Diagnostika va tekshirish',
    description:
      "Muammolarni aniqlash va ularni bartaraf etish uchun uskunani to'liq diagnostika qilish va tahlil o'tkaziladi.",
    icon: ClipboardCheck,
  },
  {
    title: "Ta'mirlash xizmatlari",
    description:
      "Sertifikatlangan texniklar va sifatli ehtiyot qismlar bilan buzilishlarni tezkor ravishda bartaraf etish ishlari amalga oshiriladi.",
    icon: Wrench,
  },
  {
    title: 'Joyida texnik yordam',
    description:
      "Uskunadagi nosozliklar bo'yicha servis guruhi mutaxassislari buyurtma joyiga chiqib muammoni qisqa vaqt ichida hal qiladi.",
    icon: Headset,
  },
] as const;

const advantages = [
  {
    title: 'Asl ehtiyot qismlar',
    description: "Barcha xizmat jarayonlarida original va sertifikatlangan ehtiyot qismlar qo'llaniladi.",
    icon: PackageCheck,
  },
  {
    title: 'Tez javob vaqti',
    description: "Xizmatga ehtiyoj bo'lganda so'rovlar qisqa muddatda ko'rib chiqiladi va servis guruhi yo'naltiriladi.",
    icon: Clock3,
  },
  {
    title: "Zamonaviy xizmat ko'rsatish uskunalari",
    description: "Eng zamonaviy diagnostika va ta'mirlash vositalari bilan xizmat jarayonlari samarali tashkil etiladi.",
    icon: Settings,
  },
  {
    title: 'Tajribali texniklar',
    description: "Uskunaga xizmat ko'rsatish bo'yicha yuqori malakali muhandis va texnik xodimlar ishlaydi.",
    icon: ShieldCheck,
  },
] as const;

const processSteps = [
  {
    title: "Xizmat so'rovini yuborish",
    description: "Uskunangiz holati va kerakli xizmat ehtiyojlaringiz bilan birga murojaat yuborasiz.",
    icon: BriefcaseBusiness,
  },
  {
    title: 'Texnik maslahat',
    description: "Bizning mutaxassis texniklar xizmat ko'rsatish bo'yicha eng maqbul yechimni tavsiya etadi.",
    icon: Headset,
  },
  {
    title: 'Uskunani tekshirish',
    description: "Muammoni aniqlash va unga xizmat ko'rsatish bo'yicha texnik tahlil amalga oshiriladi.",
    icon: ScanSearch,
  },
  {
    title: "Ta'mirlash va texnik xizmat ko'rsatish",
    description: "Sifatli ehtiyot qismlar hamda professional uskunalar bilan texnik ishlar bajariladi.",
    icon: BadgeCheck,
  },
] as const;

export const ServiceMaintenancePage = () => {
  return (
    <>
      <PageHeroBanner title="XIZMAT KO'RSATISH" />

      <section className="bg-white py-[38px] md:py-[42px]">
        <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
          <SectionTitle>Xizmat ko&apos;rsatish</SectionTitle>

          <div className="grid gap-[8px] md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="group relative min-h-[182px] overflow-hidden bg-[#ececec] px-[22px] py-[22px] transition-all duration-300 hover:-translate-y-[4px] hover:bg-[#e8e8e8] hover:shadow-[0_16px_26px_rgba(0,0,0,0.1)]"
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#f3c316] transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="mb-[18px] flex h-[38px] w-[38px] items-center justify-center bg-white text-[#2f2f2f] transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
                  </div>
                  <h3 className="mb-[10px] text-[15px] font-semibold leading-[1.35] text-[#232323] transition-colors duration-300 group-hover:text-black">
                    {card.title}
                  </h3>
                  <p className="text-[11px] leading-[1.65] text-[#666666]">{card.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-[48px]">
            <SectionTitle>Nima uchun bizning xizmatimizni tanlash kerak</SectionTitle>

            <div className="grid gap-y-[28px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[30px]">
              {advantages.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group mx-auto flex max-w-[190px] flex-col items-center rounded-[10px] px-[10px] py-[8px] text-center transition-all duration-300 hover:-translate-y-[4px]"
                  >
                    <div className="mb-[16px] flex h-[42px] w-[42px] items-center justify-center bg-[#232323] text-[#f3c316] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_22px_rgba(0,0,0,0.18)]">
                      <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-[-8deg]" strokeWidth={1.9} />
                    </div>
                    <h3 className="mb-[8px] text-[12px] font-semibold leading-[1.35] text-[#202020] transition-colors duration-300 group-hover:text-black">
                      {item.title}
                    </h3>
                    <p className="text-[10px] leading-[1.45] text-[#666666]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-[50px]">
            <SectionTitle>Xizmat ko&apos;rsatish jarayoni</SectionTitle>

            <div className="grid gap-y-[24px] md:grid-cols-4 md:gap-x-[10px]">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="group relative flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-[3px]">
                    <div className="relative mb-[14px] flex h-[42px] w-[42px] items-center justify-center bg-[#f3c316] text-[#232323] shadow-[0_2px_0_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_18px_rgba(243,195,22,0.28)]">
                      <span className="absolute -right-[3px] -top-[5px] flex h-[14px] min-w-[14px] items-center justify-center bg-[#232323] px-[2px] text-[8px] font-bold text-white">
                        {index + 1}
                      </span>
                      <Icon className="h-[19px] w-[19px]" strokeWidth={1.9} />
                    </div>
                    {index < processSteps.length - 1 ? (
                      <div className="absolute left-[calc(50%+28px)] top-[20px] hidden h-[1px] w-[calc(100%-56px)] bg-[#7d7d7d] md:block" />
                    ) : null}
                    <h3 className="mb-[8px] text-[12px] font-semibold leading-[1.35] text-[#202020]">
                      {step.title}
                    </h3>
                    <p className="max-w-[200px] text-[10px] leading-[1.45] text-[#666666]">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-[54px] flex flex-col items-center">
            <SectionTitle>Xizmat so&apos;rovi</SectionTitle>
            <p className="mb-[16px] text-center text-[11px] text-[#7a7a7a]">
              Shaklni to&apos;ldiring va bizning jamoamiz sizga tez orada javob beradi
            </p>

            <div className="w-full max-w-[430px] bg-[#efefef] px-[14px] py-[16px] shadow-[0_16px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_36px_rgba(0,0,0,0.14)] sm:px-[18px]">
              <form className="space-y-[8px]">
                <div className="grid gap-[8px] sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="F.I.O"
                    className="h-[28px] border border-[#d7d7d7] px-[8px] text-[11px] outline-none placeholder:text-[#8b8b8b] focus:border-[#f3c316]"
                  />
                  <input
                    type="text"
                    placeholder="Telefon raqam"
                    className="h-[28px] border border-[#d7d7d7] px-[8px] text-[11px] outline-none placeholder:text-[#8b8b8b] focus:border-[#f3c316]"
                  />
                </div>

                <div className="grid gap-[8px] sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Uskuna modeli"
                    className="h-[28px] border border-[#d7d7d7] px-[8px] text-[11px] outline-none placeholder:text-[#8b8b8b] focus:border-[#f3c316]"
                  />
                  <select className="h-[28px] border border-[#d7d7d7] px-[8px] text-[11px] text-[#6b6b6b] outline-none focus:border-[#f3c316]">
                    <option>Xizmat turi</option>
                    <option>Diagnostika</option>
                    <option>Ta&apos;mirlash</option>
                    <option>Joyida yordam</option>
                  </select>
                </div>

                <textarea
                  rows={5}
                  placeholder="Qo'shimcha izoh"
                  className="w-full border border-[#d7d7d7] px-[8px] py-[8px] text-[11px] outline-none placeholder:text-[#8b8b8b] focus:border-[#f3c316]"
                />

                <button
                  type="button"
                  className="h-[30px] w-full bg-[#f3c316] text-[11px] font-semibold text-black transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#ffd42b] hover:shadow-[0_10px_18px_rgba(243,195,22,0.28)]"
                >
                  Yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
