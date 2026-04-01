import { PageHeroBanner } from '../shared/ui/PageHeroBanner'
import { SectionTitle } from '../shared/ui/SectionTitle'

import mediaDumpTruckLeft from '../assets/media-dump-truck-left.jpg'
import mediaExcavatorMountain from '../assets/media-excavator-mountain.jpg'
import mediaOpenMine from '../assets/media-open-mine.jpg'
import mediaDumpTruckRight from '../assets/media-dump-truck-right.jpg'
import mediaKomatsuHill from '../assets/media-komatsu-hill.jpg'
import mediaBackhoeBucket from '../assets/media-backhoe-bucket.jpg'
import mediaKomatsuTruckSky from '../assets/media-komatsu-truck-sky.jpg'

const mediaImages = [
  {
    id: 1,
    src: mediaDumpTruckLeft,
    alt: 'Karyer samosvali',
    imageClass: 'object-cover',
    frameClass: 'bg-white',
  },
  {
    id: 2,
    src: mediaExcavatorMountain,
    alt: 'Ekskavator tabiat fonida',
    imageClass: 'object-cover',
    frameClass: 'bg-white',
  },
  {
    id: 3,
    src: mediaOpenMine,
    alt: 'Kon maydonidagi texnika',
    imageClass: 'object-cover',
    frameClass: 'bg-white',
  },
  {
    id: 4,
    src: mediaDumpTruckRight,
    alt: 'Karyer samosvali',
    imageClass: 'object-cover',
    frameClass: 'bg-white',
  },
  {
    id: 5,
    src: mediaKomatsuHill,
    alt: 'Ekskavator tepada',
    imageClass: 'object-cover',
    frameClass: 'bg-white',
  },
  {
    id: 6,
    src: mediaBackhoeBucket,
    alt: 'Orqa kovlagich',
    imageClass: 'object-cover',
    frameClass: 'bg-white',
  },
  {
    id: 7,
    src: mediaKomatsuTruckSky,
    alt: 'Katta samosval',
    imageClass: 'object-cover',
    frameClass: 'bg-white',
  },
  {
    id: 8,
    src: mediaKomatsuHill,
    alt: 'Ekskavator tepada',
    imageClass: 'object-cover',
    frameClass: 'bg-white',
  },
] as const

const topRow = mediaImages.slice(0, 4)
const bottomRow = mediaImages.slice(4)

const topRowWidths = [
  'w-[170px] md:w-[260px] xl:w-[290px]',
  'w-[320px] md:w-[520px] xl:w-[560px]',
  'w-[300px] md:w-[430px] xl:w-[470px]',
  'w-[170px] md:w-[260px] xl:w-[290px]',
] as const

const bottomRowWidths = [
  'w-[250px] md:w-[360px] xl:w-[400px]',
  'w-[220px] md:w-[300px] xl:w-[340px]',
  'w-[320px] md:w-[470px] xl:w-[520px]',
  'w-[170px] md:w-[220px] xl:w-[250px]',
] as const

type MediaItem = (typeof mediaImages)[number]

type MediaCardProps = {
  item: MediaItem
  widthClass: string
  heightClass: string
}

const MediaCard = ({ item, widthClass, heightClass }: MediaCardProps) => {
  return (
    <div
      className={`group mr-[10px] shrink-0 overflow-hidden border border-black/5 shadow-[0_14px_30px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_18px_38px_rgba(17,17,17,0.1)] ${widthClass} ${heightClass} ${item.frameClass}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        className={`h-full w-full ${item.imageClass} transition-transform duration-500 group-hover:scale-[1.06]`}
      />
    </div>
  )
}

type MediaRowProps = {
  items: readonly MediaItem[]
  widths: readonly string[]
  direction: 'left' | 'right'
  duration: string
  heightClass: string
}

const MediaRow = ({
  items,
  widths,
  direction,
  duration,
  heightClass,
}: MediaRowProps) => {
  const animationName = direction === 'left' ? 'media-marquee-left' : 'media-marquee-right'

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max"
        style={{
          animation: `${animationName} ${duration} linear infinite`,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <MediaCard
            key={`${item.id}-${index}`}
            item={item}
            widthClass={widths[index % widths.length]}
            heightClass={heightClass}
          />
        ))}
      </div>
    </div>
  )
}

export const MediaPage = () => {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f5f1e8_0%,#ffffff_20%,#ffffff_100%)]">
      <style>{`
        @keyframes media-marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes media-marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <PageHeroBanner title="Mediya" />

      <section className="bg-white py-[36px] md:py-[42px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6">
          <SectionTitle>Mediya</SectionTitle>
        </div>

        <div className="mt-8 space-y-[10px] overflow-hidden">
          <MediaRow
            items={topRow}
            widths={topRowWidths}
            direction="left"
            duration="38s"
            heightClass="h-[180px] md:h-[205px] xl:h-[215px]"
          />

          <MediaRow
            items={bottomRow}
            widths={bottomRowWidths}
            direction="right"
            duration="34s"
            heightClass="h-[165px] md:h-[200px] xl:h-[205px]"
          />
        </div>
      </section>
    </main>
  )
}

