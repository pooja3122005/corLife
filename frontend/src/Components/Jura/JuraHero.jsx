import React from 'react';
import {
  Activity,
  Wind,
  HeartPulse,
  Thermometer,
  Droplets,
  UserCheck,
  Gauge,
  LineChart,
  Bell
} from 'lucide-react';
import logoWhite from '../../assets/corlife-logo-white.svg';
import JuraRiskSection from './JuraRiskSection';
import SmartDocumentation from './SmartDocumentation';
import HubAndSpokeSection from './HubAndSpokeSection';
import CorlifeFeatureSection from './CorlifeFeatureSection';

const METRIC_BUBBLES = [
  {
    id: 'ecg',
    title: 'ECG',
    subtitle: '& heart rate',
    icon: Activity,
    position: 'top-[4%] left-[2%] xl:left-[-1%] 2xl:left-[2%]',
    delay: '0s',
    duration: '6s',
    glowColor: 'rgba(0, 166, 166, 0.35)', // Teal
    accentColor: '#00A6A6',
  },
  {
    id: 'spo2',
    title: 'SpO₂',
    subtitle: 'oxygen saturation',
    icon: HeartPulse,
    position: 'top-[4%] right-[2%] xl:right-[-1%] 2xl:right-[2%]',
    delay: '1.2s',
    duration: '7s',
    glowColor: 'rgba(59, 130, 246, 0.35)', // Blue
    accentColor: '#3B82F6',
  },
  {
    id: 'resp',
    title: 'RESP',
    subtitle: 'respiration rate',
    icon: Wind,
    position: 'top-[24%] left-[0%] xl:left-[-4%] 2xl:left-[-1%]',
    delay: '2.5s',
    duration: '6.5s',
    glowColor: 'rgba(245, 158, 11, 0.35)', // Amber
    accentColor: '#F59E0B',
  },
  {
    id: 'nibp',
    title: 'NIBP',
    subtitle: 'blood pressure',
    icon: Gauge,
    position: 'top-[24%] right-[0%] xl:right-[-4%] 2xl:right-[-1%]',
    delay: '0.8s',
    duration: '5.8s',
    glowColor: 'rgba(168, 85, 247, 0.35)', // Purple
    accentColor: '#A855F7',
  },
  {
    id: 'pulse',
    title: 'PULSE',
    subtitle: 'pulse rate',
    icon: LineChart,
    position: 'top-[48%] left-[-2%] xl:left-[-6%] 2xl:left-[-2%]',
    delay: '1.8s',
    duration: '6.2s',
    glowColor: 'rgba(16, 185, 129, 0.35)', // Emerald
    accentColor: '#10B981',
  },
  {
    id: 'temp',
    title: 'TEMP',
    subtitle: 'skin temperature',
    icon: Thermometer,
    position: 'top-[48%] right-[-2%] xl:right-[-6%] 2xl:right-[-2%]',
    delay: '3.1s',
    duration: '7.2s',
    glowColor: 'rgba(239, 68, 68, 0.35)', // Red
    accentColor: '#EF4444',
  },
  {
    id: 'posture',
    title: 'POSTURE',
    subtitle: '& activity patterns',
    icon: UserCheck,
    position: 'top-[78%] left-[-1%] xl:left-[-5%] 2xl:left-[-1%]',
    delay: '0.5s',
    duration: '6.8s',
    glowColor: 'rgba(14, 165, 233, 0.35)', // Sky
    accentColor: '#0EA5E9',
  },
  {
    id: 'urine',
    title: 'URINE',
    subtitle: 'output & flow trends',
    icon: Droplets,
    position: 'top-[78%] right-[-1%] xl:right-[-5%] 2xl:right-[-1%]',
    delay: '2.2s',
    duration: '6.4s',
    glowColor: 'rgba(20, 184, 166, 0.35)', // Teal/Cyan
    accentColor: '#14B8A6',
  },
];

const TICKER_ITEMS = [
  "27 patients on screen",
  "EWS recalculated live",
  "3 wards · 1 view",
  "EHR-ready reports in one tap",
  "Priority list sorts itself",
];

export default function JuraHero() {
  return (
    <div id="jura" className="corlife-stats-section relative min-h-screen text-[var(--ink)] font-sans overflow-x-hidden flex flex-col justify-between">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-60">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[color:rgba(0,166,166,0.10)] rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[color:rgba(217,151,30,0.10)] rounded-full blur-3xl" />
      </div>

      {/* Main Container */}
      <section className="relative pt-12 pb-16 px-4 sm:px-8 lg:px-12 xl:px-12 max-w-7xl mx-auto w-full flex-grow flex flex-col items-center z-10">

        {/* FLOATING METRIC BUBBLES (DESKTOP ONLY) */}
        <div className="absolute inset-0 pointer-events-none z-30 hidden lg:block overflow-visible">
          {METRIC_BUBBLES.map((bubble) => {
            const IconComponent = bubble.icon;
            return (
              <div
                key={bubble.id}
                style={{
                  animationDelay: bubble.delay,
                  animationDuration: bubble.duration,
                }}
                className={`absolute ${bubble.position} pointer-events-auto animate-float`}
              >
                <div
                  className="relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/80 bg-white/85 px-4 py-3 backdrop-blur-xl"
                  style={{
                    boxShadow: `0 10px 30px -5px rgba(0,0,0,0.05), 0 0 20px 0 ${bubble.glowColor}`,
                  }}
                >
                  <div
                    className="relative rounded-xl p-2.5"
                    style={{
                      backgroundColor: `${bubble.accentColor}15`,
                      color: bubble.accentColor,
                    }}
                  >
                    <IconComponent className="h-4 w-4 stroke-[2.2]" />
                  </div>

                  <div className="relative flex flex-col text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold tracking-wider text-[var(--navy)]">
                        {bubble.title}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium whitespace-nowrap text-slate-500">
                      {bubble.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* HERO HEADER */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto mt-2">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--navy)] tracking-tight leading-[1.15] mb-6">
            Every patient. One screen.<br />
            <span className="italic font-normal text-[var(--teal)]">Zero pauses.</span>
          </h1>

          {/* Lede Body Text */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
            Jura turns a whole hospital of monitored patients into one calm, live view — every heartbeat
            scored, sorted and explained, so the sickest patient is always the first thing a clinician sees.
          </p>
        </div>

        {/* METRIC BUBBLES (MOBILE & TABLET HORIZONTAL CAROUSEL - VISIBLE ONLY < 1024px) */}
        <div className="w-full lg:hidden z-20 mt-6 mb-2 overflow-x-auto no-scrollbar py-2">
          <div className="flex gap-3 px-1 min-w-max">
            {METRIC_BUBBLES.map((bubble) => {
              const IconComponent = bubble.icon;
              return (
                <div
                  key={`mobile-${bubble.id}`}
                  className="flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/90 px-3.5 py-2.5 shadow-sm backdrop-blur-xl"
                  style={{
                    boxShadow: `0 4px 15px -3px rgba(0,0,0,0.05), 0 0 12px 0 ${bubble.glowColor}`,
                  }}
                >
                  <div
                    className="relative flex-shrink-0 rounded-lg p-2"
                    style={{
                      backgroundColor: `${bubble.accentColor}15`,
                      color: bubble.accentColor,
                    }}
                  >
                    <IconComponent className="h-3.5 w-3.5 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold tracking-wider text-[var(--navy)]">
                        {bubble.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium whitespace-nowrap text-slate-500">
                      {bubble.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CENTRAL DASHBOARD MOCKUP */}
        <div className="relative z-20 w-full max-w-3xl lg:max-w-4xl mt-8 sm:mt-12 bg-[var(--midnight)] text-white rounded-2xl p-4 sm:p-6 shadow-[0_20px_60px_-15px_rgba(5,22,38,0.5)] border border-slate-800/80">
          
          {/* Top Bar */}
          <div className="flex flex-wrap justify-between items-center pb-4 mb-4 border-b border-slate-800/80 gap-3">
            <div className="flex items-center gap-2.5">
              <img src={logoWhite} alt="CorLife" className="h-6 w-auto object-contain" />
              <span className="italic text-teal-400 font-serif text-lg">Jura</span>
              <span className="text-[11px] text-slate-400 border border-slate-700/80 rounded-md px-2 py-0.5 ml-2 hidden sm:inline-block">
                Central Monitoring Station
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-300 font-medium">Ward A · live</span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-medium">
                <Bell className="w-3 h-3 animate-bounce text-amber-400" />
                Alerts
              </span>
            </div>
          </div>

          {/* Ward State Tabs */}
          <div className="flex flex-wrap gap-2 mb-5 text-xs font-medium overflow-x-auto pb-1">
            <button className="px-3 py-1.5 rounded-lg bg-slate-800/60 text-slate-300 hover:bg-slate-800 transition-colors">
              Priority List <b className="ml-1 text-white">3</b>
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-[var(--teal)] text-white font-semibold shadow-sm">
              All Patients <b className="ml-1">27</b>
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-red-950/50 text-red-300 border border-red-800/40 hover:bg-red-900/40 transition-colors">
              Resuscitation <b className="ml-1 text-white">3</b>
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-amber-950/50 text-amber-300 border border-amber-800/40 hover:bg-amber-900/40 transition-colors">
              Stabilisation <b className="ml-1 text-white">5</b>
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-yellow-950/50 text-yellow-300 border border-yellow-800/40 hover:bg-yellow-900/40 transition-colors">
              Enhanced Care <b className="ml-1 text-white">6</b>
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-emerald-950/50 text-emerald-300 border border-emerald-800/40 hover:bg-emerald-900/40 transition-colors">
              Standard Care <b className="ml-1 text-white">20</b>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Patient 1: Stable */}
            <div className="bg-[var(--navy)] rounded-xl p-3.5 border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-500/60 transition-colors">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    CJ001
                  </span>
                  <span className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">HR Low</span>
                  <span className="text-xs bg-emerald-950 text-emerald-300 font-semibold px-2 py-0.5 rounded border border-emerald-500/40">
                    EWS 2
                  </span>
                </div>
                <div className="font-semibold text-white text-sm flex items-center justify-between">
                  <span>Ananya Rao</span>
                  <span className="text-[10px] text-slate-400 font-normal border border-slate-700 rounded px-1.5">⌐ Reclined</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 mb-3">46 F · Room 205 · Dr. Meera Nair</div>
              </div>
              <div className="grid grid-cols-6 gap-1 bg-[var(--midnight)] p-2 rounded-lg text-center font-mono border border-slate-800/60">
                <div><div className="text-teal-400 font-bold text-xs">56</div><div className="text-[9px] text-slate-500">BPM</div></div>
                <div><div className="text-blue-400 font-bold text-xs">98</div><div className="text-[9px] text-slate-500">SpO₂%</div></div>
                <div><div className="text-amber-400 font-bold text-xs">16</div><div className="text-[9px] text-slate-500">BRPM</div></div>
                <div><div className="text-slate-200 font-bold text-xs">98.4</div><div className="text-[9px] text-slate-500">°F</div></div>
                <div><div className="text-slate-200 font-bold text-[10px]">122/78</div><div className="text-[9px] text-slate-500">mmHg</div></div>
                <div><div className="text-slate-200 font-bold text-xs">48</div><div className="text-[9px] text-slate-500">ml/min</div></div>
              </div>
            </div>

            {/* Patient 2: Deteriorating */}
            <div className="bg-[var(--navy)] rounded-xl p-3.5 border border-amber-500/40 flex flex-col justify-between hover:border-amber-500/70 transition-colors">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                    CJ006
                  </span>
                  <span className="text-[10px] text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded truncate max-w-[100px]">
                    RR High · SpO₂ Low
                  </span>
                  <span className="text-xs bg-amber-950 text-amber-300 font-semibold px-2 py-0.5 rounded border border-amber-500/40">
                    EWS 7
                  </span>
                </div>
                <div className="font-semibold text-white text-sm flex items-center justify-between">
                  <span>Jacob F</span>
                  <span className="text-[10px] text-slate-400 font-normal border border-slate-700 rounded px-1.5">⌐ Reclined</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 mb-3">67 M · Room 103 · Dr. Ritu Menon</div>
              </div>
              <div className="grid grid-cols-6 gap-1 bg-[var(--midnight)] p-2 rounded-lg text-center font-mono border border-slate-800/60">
                <div><div className="text-teal-400 font-bold text-xs">104</div><div className="text-[9px] text-slate-500">BPM</div></div>
                <div className="bg-red-950/60 rounded border border-red-500/30"><div className="text-red-400 font-bold text-xs">89</div><div className="text-[9px] text-red-400/80">SpO₂%</div></div>
                <div className="bg-red-950/60 rounded border border-red-500/30"><div className="text-red-400 font-bold text-xs">30</div><div className="text-[9px] text-red-400/80">BRPM</div></div>
                <div><div className="text-slate-200 font-bold text-xs">101.8</div><div className="text-[9px] text-slate-500">°F</div></div>
                <div className="bg-red-950/60 rounded border border-red-500/30"><div className="text-red-400 font-bold text-[10px]">94/60</div><div className="text-[9px] text-red-400/80">mmHg</div></div>
                <div className="bg-red-950/60 rounded border border-red-500/30"><div className="text-red-400 font-bold text-xs">18</div><div className="text-[9px] text-red-400/80">ml/min</div></div>
              </div>
            </div>

            {/* Patient 3: Critical */}
            <div className="bg-[var(--navy)] rounded-xl p-3.5 border border-red-500/50 flex flex-col justify-between hover:border-red-500/80 transition-colors">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                    <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-ping" />
                    CJ008
                  </span>
                  <span className="text-[10px] text-red-300 bg-red-950/80 px-1.5 py-0.5 rounded truncate max-w-[100px]">
                    HR Low · SpO₂ Low
                  </span>
                  <span className="text-xs bg-red-950 text-red-300 font-semibold px-2 py-0.5 rounded border border-red-500/50">
                    EWS 9
                  </span>
                </div>
                <div className="font-semibold text-white text-sm flex items-center justify-between">
                  <span>Emmanuel D</span>
                  <span className="text-[10px] text-slate-400 font-normal border border-slate-700 rounded px-1.5">⌐ Reclined</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 mb-3">65 M · ER Bay 2 · Dr. Nikhil Varma</div>
              </div>
              <div className="grid grid-cols-6 gap-1 bg-[var(--midnight)] p-2 rounded-lg text-center font-mono border border-slate-800/60">
                <div className="bg-red-950/60 rounded border border-red-500/30"><div className="text-red-400 font-bold text-xs">47</div><div className="text-[9px] text-red-400/80">BPM</div></div>
                <div className="bg-red-950/60 rounded border border-red-500/30"><div className="text-red-400 font-bold text-xs">90</div><div className="text-[9px] text-red-400/80">SpO₂%</div></div>
                <div><div className="text-amber-400 font-bold text-xs">19</div><div className="text-[9px] text-slate-500">BRPM</div></div>
                <div><div className="text-slate-200 font-bold text-xs">102.3</div><div className="text-[9px] text-slate-500">°F</div></div>
                <div className="bg-red-950/60 rounded border border-red-500/30"><div className="text-red-400 font-bold text-[10px]">120/80</div><div className="text-[9px] text-red-400/80">mmHg</div></div>
                <div className="bg-red-950/60 rounded border border-red-500/30"><div className="text-red-400 font-bold text-xs">36</div><div className="text-[9px] text-red-400/80">ml/min</div></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTINUOUS TICKER BAR */}
      <div className="relative w-full bg-[var(--midnight)] border-t border-b border-[color:rgba(255,255,255,0.10)] overflow-hidden py-4 sm:py-5 text-lg sm:text-xl font-sans text-[var(--mist-2)] shadow-lg z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <div key={index} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1">
              <span className="text-[var(--gold)] text-xs leading-none inline-block shrink-0">
                ◆
              </span>
              <span className="font-medium tracking-wide text-[var(--mist-2)] whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <JuraRiskSection />
      <SmartDocumentation />
      <HubAndSpokeSection />
      <CorlifeFeatureSection/>
    </div>
  );
}