import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHeroBanner } from '../shared/ui/PageHeroBanner'
import { SectionTitle } from '../shared/ui/SectionTitle'
import { leaders } from '../data/leaders'

export const LeadershipPage = () => {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f5f1e8_0%,#ffffff_22%,#ffffff_100%)]">
      <PageHeroBanner title="Rahbariyat" />

      <section className="px-4 py-[42px] sm:px-5 lg:px-6">
        <div className="mx-auto w-full max-w-[1238px]">
          <SectionTitle>Rahbariyat</SectionTitle>

          <div className="grid gap-x-[14px] gap-y-[12px] md:grid-cols-2 xl:grid-cols-3">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className="group flex min-h-[152px] items-start gap-[10px] border border-black/5 bg-[#ececec] p-[14px] shadow-[0_14px_32px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_42px_rgba(17,17,17,0.12)]"
              >
                <div className="h-[127px] w-[127px] shrink-0 overflow-hidden bg-[#d8d8d8]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>

                <div className="min-w-0 flex-1 pt-[2px]">
                  <p className="mb-[8px] text-[13px] leading-none font-bold text-[#2f2f2f]">{leader.position}</p>
                  <h3 className="mb-[14px] text-[12px] leading-none text-[#4d4d4d]">{leader.name}</h3>
                  <p className="mb-[6px] text-[12px] leading-none text-[#595959]">Xizmat telefoni</p>

                  <div className="mb-[18px] flex items-center gap-[4px] text-[10px] leading-none text-[#595959]">
                    <Phone className="h-[10px] w-[10px] text-[#2f2f2f]" strokeWidth={1.8} />
                    <span>{leader.phone}</span>
                  </div>

                  <Link
                    to={`/leadership/${leader.id}`}
                    className="inline-flex h-[30px] items-center justify-center bg-[#313131] px-[14px] text-[10px] font-medium text-white transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#202020] hover:shadow-[0_10px_18px_rgba(49,49,49,0.24)]"
                  >
                    Biografiya bilan tanishish
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
