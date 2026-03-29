import { Play } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import heroBanner from '../assets/hero/hero-banner.png'

const videos = Array.from({ length: 6 }, (_, index) => ({
  id: `${index + 1}`,
  title: "XCMG va Fortescue dunyodagi eng yirik elektr kon uskunalari prototiplarini ishga tushirdilar",
  thumbnail: heroBanner,
}))

export const VideoPage = () => {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f5f1e8_0%,#ffffff_22%,#ffffff_100%)] px-4 py-[18px] sm:px-5 lg:px-6">
      <div className="mx-auto w-full max-w-[1238px]">
        <SectionTitle>Vidyo</SectionTitle>

        <div className="grid gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <article
              key={video.id}
              className="group relative cursor-pointer overflow-hidden border border-black/5 bg-[#d8d8d8] shadow-[0_14px_32px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_18px_38px_rgba(17,17,17,0.1)]"
            >
              <div className="relative h-[230px] overflow-hidden md:h-[250px]">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-black/38 transition-colors group-hover:bg-black/44" />

                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white shadow-sm transition-transform group-hover:scale-110">
                    <Play
                      className="ml-[2px] h-[14px] w-[14px] text-[#222222]"
                      fill="#222222"
                      strokeWidth={0}
                    />
                  </div>
                </div>

                <div className="absolute inset-x-[10px] bottom-[10px]">
                  <p className="text-[11px] leading-[1.35] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
                    {video.title}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
