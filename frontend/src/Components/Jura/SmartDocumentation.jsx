import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Activity, 
  Bell, 
  BarChart2, 
  FlaskConical, 
  Droplet, 
  ShieldCheck, 
  Sparkles,
  Check,
  ClipboardList
} from 'lucide-react';

const MODULES = [
  { id: 'shift-report', title: 'Shift report', icon: FileText, desc: 'Automated end-of-shift handover summary compiled directly from telemetry.' },
  { id: 'discharge-summary', title: 'Discharge summary', icon: Download, desc: 'EHR-ready discharge documentation formatted to clinical coding standards.' },
  { id: 'vitals-snapshot', title: 'Vitals snapshot', icon: Activity, desc: 'Real-time physiological trending with automated baseline delta analysis.' },
  { id: 'alerts-history', title: 'Alerts history', icon: Bell, desc: 'Chronological telemetry alerts log with verified clinical response times.' },
  { id: 'fluids-output', title: 'Fluids & urine output', icon: Droplet, desc: 'Calculated fluid balances and automated hourly renal output tracking.' },
  { id: 'full-monitoring-record', title: 'Full monitoring record', icon: ClipboardList, desc: 'Continuous longitudinal monitoring record containing all captured telemetry.' },
  { id: 'daily-summary', title: 'Daily summary', icon: BarChart2, desc: 'Longitudinal 24-hour physiological overview and trends.' },
  { id: 'labs-overview', title: 'Labs overview', icon: FlaskConical, desc: 'Synthesized lab results cross-referenced against active medication profiles.' }
];

export default function SmartDocumentationEngine() {
  const [activeId, setActiveId] = useState('vitals-snapshot');
  const [pulseCenter, setPulseCenter] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [ambientPulseId, setAmbientPulseId] = useState(null);
  const [beamTarget, setBeamTarget] = useState(null);

  const activeModule = MODULES.find((m) => m.id === activeId) || MODULES[2];

  // Micro Interactions: Periodic subtle ambient pulse every 7s
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * MODULES.length);
      setAmbientPulseId(MODULES[randomIndex].id);
      setTimeout(() => setAmbientPulseId(null), 1500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Selection Sequence: Energy beam -> JURA pulse -> Dynamic card update
  const handleSelectModule = (id) => {
    if (id === activeId) return;
    setBeamTarget(id);
    
    setTimeout(() => {
      setBeamTarget(null);
      setPulseCenter(true);
      setActiveId(id);
      setTimeout(() => setPulseCenter(false), 500);
    }, 450);
  };

  return (
    <section className="relative w-full min-h-screen bg-[radial-gradient(circle_at_bottom_left,#F4EADD_0%,transparent_28%),radial-gradient(circle_at_top_right,#CCE3E0_0%,transparent_35%),linear-gradient(to_bottom,#F8F7F2,#F5F4EF)] text-[#0B2B48] py-10 px-4 sm:px-8 lg:py-16 lg:px-16 flex items-center justify-center overflow-hidden select-none font-sans">
      
      {/* Background Dot Grid Accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]" 
        style={{
          backgroundImage: `radial-gradient(#008080 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-[#008080]/5 blur-[120px] pointer-events-none" />

      {/* Main Responsive Grid Layout */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[4.5fr_5.5fr] gap-10 lg:gap-16 items-center z-10">
        
        {/* Left Column Content */}
        <div className="flex flex-col items-start w-full">
          
          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[66px] font-bold tracking-tight text-[#0B2B48] leading-[1.06]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            The paperwork <br />
            writes <span className="italic font-normal text-[#008080]">itself.</span>
          </motion.h1>

          {/* Accent Gold Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-12 h-[3px] bg-[#C07D14] rounded-full my-4 sm:my-6 origin-left" 
          />

          {/* Body Description */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mb-6 sm:mb-8 font-normal"
          >
            Jura turns the monitoring record into structured, EHR-ready reports the moment they're needed — not at the end of a long shift.
          </motion.p>

          {/* Stacked Cards Section */}
          <div className="w-full max-w-[500px] flex flex-col gap-4 sm:gap-6">
            
            {/* Active Dynamic Module Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="w-full min-h-[96px] sm:min-h-[104px] relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 8, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -8, filter: 'blur(3px)' }}
                  transition={{ duration: 0.25 }}
                  className="w-full rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 bg-white/90 backdrop-blur-md border border-slate-900/10 shadow-[0_12px_30px_rgba(11,43,72,0.05)] flex items-center justify-between gap-3 sm:gap-4"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#008080]/10 border border-[#008080]/20 flex items-center justify-center shrink-0 text-[#008080]">
                      <ShieldCheck size={22} className="sm:w-6 sm:h-6" />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-[11px] font-extrabold text-[#0B2B48] uppercase tracking-wider">
                        {activeModule.title}
                      </span>
                      <span className="text-xs text-slate-600 font-medium mt-0.5 sm:mt-1 leading-snug">
                        {activeModule.desc}
                      </span>
                    </div>
                  </div>

                  <motion.div 
                    key={`check-${activeId}`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#008080]/15 text-[#008080] flex items-center justify-center border border-[#008080]/30 shrink-0"
                  >
                    <Check size={16} strokeWidth={2.5} className="sm:w-[18px] sm:h-[18px]" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Static Clinical Coding Standards Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="w-full rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 bg-white/90 backdrop-blur-md border border-slate-900/10 shadow-[0_12px_30px_rgba(11,43,72,0.05)] flex items-center justify-between gap-3 sm:gap-4"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#008080]/10 border border-[#008080]/20 flex items-center justify-center shrink-0 text-[#008080]">
                  <ShieldCheck size={22} className="sm:w-6 sm:h-6" />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0B2B48] leading-snug">
                    Structured against clinical coding standards,
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-600 font-normal mt-0.5 leading-snug">
                    generated straight from the continuous record.
                  </span>
                </div>
              </div>

              {/* Stacked Document Visual Illustration */}
              <div className="relative flex items-center justify-center shrink-0 w-10 sm:w-12 h-10 pr-2">
                <div className="absolute w-7 sm:w-8 h-7 sm:h-8 bg-[#F4EADD]/60 rounded-lg border border-[#E3D1B9] translate-x-1 -translate-y-1" />
                <div className="absolute w-7 sm:w-8 h-7 sm:h-8 bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col gap-1 p-1.5">
                  <div className="w-full h-1 bg-slate-200 rounded-full" />
                  <div className="w-3/4 h-1 bg-slate-200 rounded-full" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#008080] text-white flex items-center justify-center shadow-sm">
                  <Check size={10} strokeWidth={3} className="sm:w-3 sm:h-3" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Right Column Visualization */}
        <div className="relative flex flex-col items-center justify-center w-full">
          
          {/* MOBILE / TABLET VIEW (< 1024px): Responsive Interactive Grid Grid/Pill View */}
          <div className="flex lg:hidden flex-col items-center w-full max-w-lg gap-6">
            
            {/* Center Mobile Jura Badge */}
            <div className="relative w-28 h-28 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex flex-col items-center justify-center text-center">
              <Sparkles size={18} className="text-[#008080] mb-0.5" />
              <span 
                className="text-2xl font-extrabold tracking-widest text-[#0B2B48] pl-0.5"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                JURA
              </span>
            </div>

            {/* Grid of Interactive Module Buttons for Mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full">
              {MODULES.map((mod) => {
                const isActive = mod.id === activeId;
                const Icon = mod.icon;

                return (
                  <button
                    key={`mobile-${mod.id}`}
                    onClick={() => handleSelectModule(mod.id)}
                    className={`
                      flex flex-col items-center justify-center p-3 rounded-2xl text-center transition-all duration-200
                      ${isActive 
                        ? 'bg-white border-2 border-[#008080] shadow-md text-[#0B2B48]' 
                        : 'bg-white/70 border border-slate-200 text-slate-600 hover:bg-white/90'
                      }
                    `}
                  >
                    <div 
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center mb-1.5 transition-colors
                        ${isActive ? 'bg-[#008080] text-white' : 'bg-[#CCE3E0]/50 text-[#008080]'}
                      `}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="text-[11px] font-bold leading-tight line-clamp-1">
                      {mod.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* DESKTOP VIEW (≥ 1024px): Symmetrical Radial Wheel */}
          <div className="hidden lg:flex relative items-center justify-center w-[580px] h-[580px]">
            
            {/* Curved SVG Path Connectors with Animated Beams */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
              {MODULES.map((mod, idx) => {
                const total = MODULES.length;
                const angle = (idx * 360) / total - 90;
                const rad = (angle * Math.PI) / 180;
                
                const center = 290;
                const radius = 220; 

                const endX = center + Math.cos(rad) * radius;
                const endY = center + Math.sin(rad) * radius;

                const controlX = center + Math.cos(rad + 0.18) * (radius * 0.55);
                const controlY = center + Math.sin(rad + 0.18) * (radius * 0.55);

                const isActive = mod.id === activeId;
                const isHovered = mod.id === hoveredId;
                const isBeamActive = beamTarget === mod.id;

                const pathString = `M ${center},${center} Q ${controlX},${controlY} ${endX},${endY}`;

                return (
                  <g key={`curved-path-${mod.id}`}>
                    <path
                      d={pathString}
                      fill="none"
                      stroke={isActive || isHovered ? '#008080' : '#CBD5E1'}
                      strokeWidth={isActive ? '2.5' : isHovered ? '2' : '1.2'}
                      strokeDasharray={isActive || isHovered ? 'none' : '4 4'}
                      className="transition-all duration-300 opacity-80"
                    />
                    
                    {isBeamActive && (
                      <motion.circle
                        r="5"
                        fill="#008080"
                        initial={{ offsetDistance: '100%' }}
                        animate={{ offsetDistance: '0%' }}
                        transition={{ duration: 0.45, ease: 'easeIn' }}
                        style={{ offsetPath: `path("${pathString}")` }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Enhanced JURA Central Hub Core */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ 
                scale: pulseCenter ? [1, 1.08, 1] : 1,
              }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="absolute z-20 w-48 h-48 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-[0_20px_50px_rgba(11,43,72,0.08)] flex flex-col items-center justify-center text-center cursor-pointer group"
            >
              <div className="absolute -inset-3 rounded-full border border-dashed border-[#008080]/30 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-0 rounded-full bg-[#008080]/5 blur-md animate-pulse pointer-events-none" />

              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <Sparkles size={22} className="text-[#008080] mb-1 opacity-90" />
              </motion.div>

              <span 
                className="text-4xl font-extrabold tracking-[0.22em] text-[#0B2B48] pl-1"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                JURA
              </span>
            </motion.div>

            {/* 8 Symmetrically Arranged Radial Glass Cards */}
            {MODULES.map((mod, idx) => {
              const total = MODULES.length;
              const angle = (idx * 360) / total - 90;
              const rad = (angle * Math.PI) / 180;
              
              const radius = 220; 

              const targetX = Math.cos(rad) * radius;
              const targetY = Math.sin(rad) * radius;

              const isActive = mod.id === activeId;
              const isAmbientPulsing = mod.id === ambientPulseId;
              const Icon = mod.icon;

              return (
                <motion.div
                  key={mod.id}
                  onClick={() => handleSelectModule(mod.id)}
                  onMouseEnter={() => setHoveredId(mod.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  
                  initial={{ x: 0, y: 0, scale: 0.2, opacity: 0 }}
                  animate={{ 
                    x: targetX, 
                    y: targetY, 
                    scale: isActive ? 1.08 : isAmbientPulsing ? 1.05 : 1, 
                    opacity: 1 
                  }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 85,
                    damping: 14,
                    delay: 0.2 + idx * 0.05
                  }}
                  
                  whileHover={{ scale: 1.12, y: targetY - 6, zIndex: 40 }}
                  whileTap={{ scale: 0.96 }}
                  className={`
                    absolute z-30 cursor-pointer flex flex-col items-center justify-center text-center p-3.5 rounded-[26px] transition-all duration-300 w-32 h-32 overflow-hidden
                    ${isActive 
                      ? 'bg-white/95 border-2 border-[#008080] shadow-[0_16px_40px_rgba(0,128,128,0.22)] ring-4 ring-[#008080]/10' 
                      : 'bg-white/80 backdrop-blur-md border border-slate-900/10 shadow-[0_10px_25px_rgba(11,43,72,0.04)] hover:border-[#008080]/50'
                    }
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  <motion.div 
                    animate={{ scale: isActive ? 1.1 : 1 }}
                    className={`
                      w-11 h-11 rounded-full flex items-center justify-center mb-2 transition-colors duration-200
                      ${isActive 
                        ? 'bg-[#008080] text-white shadow-md' 
                        : 'bg-[#CCE3E0]/50 text-[#008080]'
                      }
                    `}
                  >
                    <Icon size={19} strokeWidth={isActive ? 2.2 : 1.8} />
                  </motion.div>

                  <span 
                    className={`
                      text-[11px] font-bold leading-tight px-1 transition-colors
                      ${isActive ? 'text-[#0B2B48]' : 'text-slate-600'}
                    `}
                  >
                    {mod.title}
                  </span>
                </motion.div>
              );
            })}

          </div>
        </div>

      </div>

    </section>
  );
}