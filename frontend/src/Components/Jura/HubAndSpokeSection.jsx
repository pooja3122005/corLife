import React from 'react';
import { Check } from 'lucide-react';
import hubImage from '../../assets/hub.jpeg';

const hubSpokeFeatures = [
  {
    text: "A hub hospital watches its spoke sites and connected ambulances from one screen",
  },
  {
    text: "Specialists support remote teams over shared dashboards and secure video",
  },
  {
    text: "Live triage guides escalations and transfers between facilities",
  },
];

export default function HubAndSpokeSection() {
  return (
    <section 
      className="corlife-stats-section relative min-h-screen flex items-center justify-center overflow-hidden p-8 font-[var(--sans)] selection:bg-[var(--teal)]/20 sm:p-12 md:p-16 bg-[radial-gradient(circle_at_bottom_left,#F4EADD_0%,transparent_28%),radial-gradient(circle_at_top_right,#CCE3E0_0%,transparent_35%),linear-gradient(to_bottom,#F8F7F2,#F5F4EF)]"
      style={{ color: 'var(--ink)' }}
    >
      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-[var(--maxw)] mx-auto flex flex-col items-center">
        
        {/* TOP SECTION: Balanced heading and subtitle */}
        <div className="mb-16 flex w-full max-w-5xl flex-col">
          <h2 
            className="font-bold tracking-tight mb-6 text-center"
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 700,
              fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: '1.1',
              color: 'var(--navy)'
            }}
          >
            One command center,{' '}
            <span className="italic font-normal inline-block" style={{ color: 'var(--teal)' }}>
              many sites.
            </span>
          </h2>

          <p 
            className="font-normal text-center text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-[var(--sans)]"
            style={{ color: 'var(--ink)' }}
          >
            Jura links a hospital network into a single monitoring structure — so expertise concentrates where it helps, and no site watches alone.
          </p>
        </div>

        {/* BOTTOM SECTION: Image Placeholder & Points Grid */}
        <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          
          {/* LEFT: Image matching the hub-and-spoke preview */}
          <div className="flex w-full">
            <div 
              className="group relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl bg-[var(--white)] p-0 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(0,161,150,0.22)] min-h-[420px]"
              style={{ 
                borderRadius: 'var(--radius)',
                border: 'none'
              }}
            >
              <img
                src={hubImage}
                alt="Hub and spoke command center"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Feature Cards Container matching exact height distribution */}
          <div className="flex w-full flex-col justify-between gap-6">
            {hubSpokeFeatures.map((feature, idx) => (
              <div 
                key={idx}
                className="group flex flex-1 items-center gap-5 rounded-2xl border border-[var(--line)] bg-[var(--white)] px-6 py-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--teal)] hover:bg-[linear-gradient(to_bottom,rgba(204,227,224,0.18),rgba(255,255,255,1))] hover:shadow-[0_16px_32px_-12px_rgba(0,161,150,0.22)] cursor-pointer"
                style={{
                  borderRadius: 'var(--radius)'
                }}
              >
                <div 
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-teal-100 bg-teal-50 text-[var(--teal)] shadow-sm transition-transform duration-200 group-hover:scale-[1.02]"
                  style={{ borderRadius: '14px' }}
                >
                  <Check className="h-6 w-6 stroke-[2.2]" />
                </div>
                <span 
                  className="text-sm font-medium leading-snug sm:text-base md:text-lg"
                  style={{ color: 'var(--navy)' }}
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}