
import { useState, useEffect } from 'react';
import {
  Activity,
  Clock,
  FileText,
  Home,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Droplets,
  Wind,
  Thermometer,
  Zap,
  ShieldAlert,
} from 'lucide-react';

const FEATURES = [
  {
    id: 'continuous',
    title: 'Continuous, not snapshot',
    icon: Activity,
    description:
      'Beat-by-beat ECG, SpOâ‚‚, respiration, temperature and activity â€” streamed and analysed around the clock, not sampled at a clinic visit.',
  },
  {
    id: 'alerts',
    title: 'Alerts that reach a human',
    icon: Clock,
    description:
      'Our algorithms surface what matters and route it to a monitoring nurse in seconds â€” filtering noise so real events never wait in a queue.',
  },
  {
    id: 'home',
    title: 'Hospital grade, at home',
    icon: Home,
    description:
      'The wearable is clinician-prescribed and clinically validated â€” the difference between a consumer tracker and a medical device.',
  },
  {
    id: 'records',
    title: 'Records clinicians trust',
    icon: FileText,
    description:
      'Every trend, event and intervention lands in a structured record that plugs into your EHR â€” audit-ready, not locked in an app.',
  },
];

const METRICS = [
  {
    label: 'SpOâ‚‚',
    icon: Droplets,
    posClass: 'top-[8%] left-[2%]',
    delay: '0s',
  },
  {
    label: 'ECG',
    icon: HeartPulse,
    posClass: 'top-[2%] right-[16%]',
    delay: '0.35s',
  },
  {
    label: 'Temperature',
    icon: Thermometer,
    posClass: 'top-[30%] right-[-2%]',
    delay: '0.7s',
  },
  {
    label: 'Respiration',
    icon: Wind,
    posClass: 'bottom-[8%] left-[8%]',
    delay: '1.05s',
  },
  {
    label: 'Activity',
    icon: Zap,
    posClass: 'bottom-[6%] right-[8%]',
    delay: '1.4s',
  },
];

const AUTO_ROTATE_MS = 3200;

export default function PlatformShowcase() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % FEATURES.length);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveFeatureIndex((prev) => (prev === 0 ? FEATURES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveFeatureIndex((prev) => (prev === FEATURES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="platform"
      className="box-border flex w-full min-h-screen items-center justify-center bg-[var(--mist-2)] px-4 py-6 text-[var(--ink)] sm:px-6 lg:px-8 lg:py-8"
    >
      {/* Outer Card Container Frame */}
      <div className="platform-frame relative mx-auto flex w-full max-w-7xl flex-col justify-between overflow-hidden rounded-[2.5rem] border border-[var(--line)] bg-[var(--white)] p-6 backdrop-blur-md shadow-[0_20px_60px_-15px_rgba(15,37,64,0.08)] sm:p-8 lg:p-10">
        
        {/* Top Header & Visual Graphic Grid */}
        <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Section Header */}
          <div className="max-w-[42rem]">
            <div
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border"
            style={{
              color: "var(--teal-deep)",
              borderColor: "var(--line)",
              backgroundColor: "rgba(255,255,255,0.8)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--gold)" }}
            />
             Platform
          </div>
            <h2 className="mt-1 font-garamond text-[clamp(2.1rem,3.2vw,3rem)] font-medium leading-[1.05] tracking-tight text-[var(--navy)]">
              One unbroken thread of care, from admission to recovery.
            </h2>
            <p className="mt-11 font-poppins text-xs font-normal leading-relaxed text-[var(--navy)]/85 sm:text-lg">
              A hospital discharge shouldn't mean going dark. Corlife carries the same continuous oversight patients get on the ward into their everyday life -” one wearable, one platform, one care team that never loses the signal.
            </p>
          </div>

          {/* Right Visual Hub (Orbit Center Anchor) */}
          <div className="relative hidden lg:flex items-center justify-center h-80 w-full overflow-visible">
            
            {/* Concentric Orbit Rings */}
            <div className="absolute h-36 w-36 rounded-full border border-[var(--teal)]/25 pointer-events-none" />
            <div className="absolute h-56 w-56 rounded-full border border-[var(--teal)]/15 border-dashed pointer-events-none" />
            <div className="absolute h-72 w-72 rounded-full border border-[var(--navy)]/8 pointer-events-none" />

            {/* Radar Sweep Effect */}
            <div className="absolute h-72 w-72 rounded-full pointer-events-none animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(0,166,166,0.12)_360deg)]" />

            {/* CREATIVE CENTER HUB: Monitoring Vitals for Swift Action */}
            <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-3xl border border-[var(--teal)]/30 bg-gradient-to-br from-[var(--white)] via-[var(--mist-2)] to-[var(--mist)] p-3 text-center shadow-[0_12px_30px_rgba(0,166,166,0.18)] transition-transform duration-300 hover:scale-105">
              
              {/* Pulse Signal Dot */}
              <div className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--teal)] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--teal)]" />
              </div>

              {/* Icon / Indicator */}
              <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--teal)]/10 text-[var(--teal)]">
                <ShieldAlert className="h-4 w-4 stroke-[2]" />
              </div>

              {/* Main Typography */}
              <span className="font-garamond text-xs font-semibold leading-tight text-[var(--navy)]">
                MONITORING VITALS
              </span>
              <span className="mt-0.5 font-poppins text-[9px] font-medium tracking-wide uppercase text-[var(--teal)]">
                for swift action
              </span>

              {/* Live Signal Line Accent */}
              <div className="mt-1.5 flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-[var(--teal)]" />
                <span className="h-0.5 w-6 rounded-full bg-[var(--teal)]/30" />
                <span className="font-poppins text-[8px] font-bold tracking-wider text-[var(--teal)]">LIVE</span>
              </div>
            </div>

            {/* Orbit-Aligned Mini Badges */}
            {METRICS.map((metric) => {
              const MetricIcon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className={`absolute z-20 ${metric.posClass}`}
                >
                  <div
                    style={{ animationDelay: metric.delay }}
                    className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-[var(--white)] bg-[var(--white)]/95 px-3 py-1.5 shadow-[0_6px_18px_rgba(15,37,64,0.06)] backdrop-blur-md animate-[miniCardHeartbeat_2s_ease-in-out_infinite]"
                  >
                    <MetricIcon className="h-3.5 w-3.5 shrink-0 text-[var(--teal)]" />
                    <div className="flex flex-col leading-none">
                      <span className="font-garamond text-xs font-medium text-[var(--navy)]">
                        {metric.label}
                      </span>
                      <span className="mt-0.5 font-poppins text-[9px] font-medium text-[var(--navy)]/80">
                        Continuous
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Showcase Tabs & Slider */}
        <div
          className="relative z-10 mt-4 grid items-center gap-6 lg:grid-cols-[minmax(15rem,18rem)_1fr] lg:gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Side Nav Buttons */}
          <nav className="hidden lg:flex flex-col gap-2.5" aria-label="Platform feature navigation">
            {FEATURES.map((feature, idx) => {
              const IconComponent = feature.icon;
              const isSelected = idx === activeFeatureIndex;

              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveFeatureIndex(idx)}
                  className={`group relative overflow-hidden rounded-xl border p-3 text-left transition-all duration-300 ease-[var(--ease-out)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--teal)] ${
                    isSelected
                      ? 'scale-[1.02] translate-x-1 border-[var(--teal)]/40 bg-[var(--white)] shadow-[0_8px_20px_rgba(0,166,166,0.12)]'
                      : 'border-[var(--line)] bg-[var(--mist-2)]/60 hover:translate-x-0.5 hover:border-[var(--teal)]/25 hover:bg-[var(--white)]'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span
                    className={`absolute bottom-2 left-0 top-2 w-1 rounded-r-full bg-[var(--teal)] transition-opacity duration-300 ${
                      isSelected ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                        isSelected
                          ? 'bg-[var(--teal)] text-[var(--white)] shadow-[0_4px_12px_-2px_rgba(0,166,166,0.35)]'
                          : 'bg-[var(--mist)] text-[var(--teal)] group-hover:bg-[var(--teal)]/15'
                      }`}
                    >
                      <IconComponent className="h-4 w-4 stroke-[1.8]" aria-hidden="true" />
                    </span>
                    <span className="block font-garamond text-base font-medium leading-tight text-[var(--navy)]">
                      {feature.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Active Feature Display Box */}
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[var(--teal)]/25 bg-gradient-to-br from-[var(--teal)]/8 via-[var(--white)] to-[var(--navy)]/5 p-5 shadow-[0_15px_40px_-10px_rgba(0,166,166,0.1)] sm:p-6 lg:p-8"
            style={{ perspective: '1000px' }}
          >
            {/* Sliding Track */}
            <div
              className="flex w-full transition-transform duration-450 ease-[var(--ease-out)] will-change-transform"
              style={{ transform: `translate3d(-${activeFeatureIndex * 100}%, 0, 0)` }}
            >
              {FEATURES.map((feature, idx) => {
                const ActiveIcon = feature.icon;
                const isCurrent = idx === activeFeatureIndex;

                return (
                  <div
                    key={feature.id}
                    className="w-full shrink-0 flex flex-col justify-center min-h-[9.5rem] sm:min-h-[10.5rem] transition-all duration-450 ease-[var(--ease-out)] transform-gpu"
                    style={{
                      transform: isCurrent
                        ? 'scale(1) translate3d(0, 0, 0)'
                        : 'scale(0.95) translate3d(20px, 0, 0)',
                      opacity: isCurrent ? 1 : 0,
                      visibility: isCurrent ? 'visible' : 'hidden',
                    }}
                  >
                    <div className="mb-3 flex items-center gap-3 text-[var(--teal)]">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-450 ease-[var(--ease-out)] ${
                          isCurrent
                            ? 'bg-[var(--teal)] text-[var(--white)] rotate-0 scale-100 shadow-md'
                            : 'bg-[var(--mist)] text-[var(--teal)] -rotate-12 scale-90'
                        }`}
                      >
                        <ActiveIcon className="h-4 w-4 stroke-[1.75]" aria-hidden="true" />
                      </div>
                      <span className="h-px flex-1 bg-gradient-to-r from-[var(--teal)]/40 via-[var(--teal)]/15 to-transparent" />
                    </div>

                    <h3
                      className={`font-garamond text-[clamp(1.6rem,2.5vw,2.3rem)] font-medium leading-tight text-[var(--navy)] transition-all duration-450 ease-[var(--ease-out)] ${
                        isCurrent ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                      }`}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className={`mt-2 max-w-xl font-poppins text-xs font-normal leading-relaxed text-[var(--navy)]/85 sm:text-sm transition-all duration-450 ease-[var(--ease-out)] ${
                        isCurrent ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Controls Bar */}
            <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-3">
              <div className="flex items-center gap-3">
                <div className="relative h-1.5 w-28 sm:w-36 rounded-full bg-[var(--teal)]/20 overflow-hidden">
                  <div
                    key={activeFeatureIndex}
                    className="absolute left-0 top-0 h-full bg-[var(--teal)]"
                    style={{
                      animation: isPaused
                        ? 'none'
                        : `progress ${AUTO_ROTATE_MS}ms linear forwards`,
                    }}
                  />
                </div>
                <span className="font-poppins text-xs font-semibold text-[var(--navy)]/70">
                  0{activeFeatureIndex + 1} / 0{FEATURES.length}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--white)]/80 text-[var(--navy)] backdrop-blur transition hover:bg-[var(--teal)] hover:text-[var(--white)] active:scale-95"
                  aria-label="Previous feature"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--white)]/80 text-[var(--navy)] backdrop-blur transition hover:bg-[var(--teal)] hover:text-[var(--white)] active:scale-95"
                  aria-label="Next feature"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes miniCardHeartbeat {
          0% {
            transform: scale(1);
            border-color: var(--white);
            box-shadow: 0 6px 18px rgba(15, 37, 64, 0.06);
          }
          12% {
            transform: scale(1.08);
            border-color: rgba(0, 166, 166, 0.6);
            box-shadow: 0 10px 25px rgba(0, 166, 166, 0.28);
          }
          24% {
            transform: scale(0.98);
            border-color: var(--white);
            box-shadow: 0 6px 18px rgba(15, 37, 64, 0.06);
          }
          36% {
            transform: scale(1.04);
            border-color: rgba(0, 166, 166, 0.4);
            box-shadow: 0 8px 20px rgba(0, 166, 166, 0.18);
          }
          50% {
            transform: scale(1);
            border-color: var(--white);
            box-shadow: 0 6px 18px rgba(15, 37, 64, 0.06);
          }
          100% {
            transform: scale(1);
            border-color: var(--white);
            box-shadow: 0 6px 18px rgba(15, 37, 64, 0.06);
          }
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}


