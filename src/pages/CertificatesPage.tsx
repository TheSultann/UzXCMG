import { useState } from 'react'
import { PageHeroBanner } from '../shared/ui/PageHeroBanner'
import { SectionTitle } from '../shared/ui/SectionTitle'

import certificateTemplate from '../assets/certificate-template.png'

const tabs = [
  { id: 'certificates', label: 'Xalqaro sertifikatlar' },
  { id: 'normative', label: 'Normativ hujjatlar' },
  { id: 'warranty', label: 'Kafolat va xizmatlar' },
] as const

const dummyCerts = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  image: certificateTemplate,
  date: '1900 yil, oktabr',
  title: "Xalqaro ISO 9001:1994 sertifikatining qo'lga kiritilishi.",
}))

export const CertificatesPage = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('certificates')

  const getTabTitle = () => {
    return tabs.find((t) => t.id === activeTab)?.label || 'Xalqaro sertifikatlar'
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f5f1e8_0%,#ffffff_22%,#ffffff_100%)]">
      <PageHeroBanner title={getTabTitle().toUpperCase()} />

      <section className="bg-white py-[42px]">
        <div className="mx-auto w-full max-w-[1238px] px-4 sm:px-5 lg:px-6">
          <div className="mb-[40px] flex flex-wrap gap-[8px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-[24px] py-[10px] text-[13px] font-medium shadow-[0_10px_24px_rgba(17,17,17,0.04)] transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#2d2d2d] text-white'
                    : 'bg-[#f0f0f0] text-[#555555] hover:-translate-y-[1px] hover:bg-[#e5e5e5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <SectionTitle>{getTabTitle()}</SectionTitle>

          <div className="min-h-[400px]">
            {activeTab === 'certificates' && (
              <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {dummyCerts.map((cert) => (
                  <div key={cert.id} className="group flex w-full flex-col items-center text-center">
                    <div className="mb-[16px] w-full overflow-hidden border border-[#eeeeee] bg-[#fafafa] p-[10px] shadow-[0_16px_30px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_22px_40px_rgba(17,17,17,0.09)]">
                      <div className="relative pt-[141%]">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        />
                      </div>
                    </div>
                    <div className="w-full text-left">
                      <p className="mb-[6px] text-[11px] text-[#888888]">{cert.date}</p>
                      <h4 className="text-[12px] font-semibold leading-[1.4] text-[#222222]">{cert.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'normative' && (
              <div className="border border-black/5 bg-white p-[22px] text-[14px] leading-relaxed text-[#555] shadow-[0_18px_36px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_22px_42px_rgba(17,17,17,0.09)]">
                <p>Normativ hujjatlar bo&apos;limi ruxsatnomalar, texnik shartlar va standartlarni o&apos;z ichiga oladi.</p>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div className="border border-black/5 bg-white p-[22px] text-[14px] leading-relaxed text-[#555] shadow-[0_18px_36px_rgba(17,17,17,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_22px_42px_rgba(17,17,17,0.09)]">
                <p>Kafolat va xizmatlar, ehtiyot qismlarni ta&apos;minlash shartlari haqida to&apos;liq ma&apos;lumot.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
