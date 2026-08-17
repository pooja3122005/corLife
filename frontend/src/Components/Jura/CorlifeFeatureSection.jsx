import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Clock, 
  Sliders, 
  FileText, 
  Bell, 
  ClipboardCheck, 
  ShieldCheck, 
  TrendingUp 
} from 'lucide-react';

// Configuration
const STEPS = [
  {
    number: '01',
    title: 'One patient,\nwhole story',
    description: 'Open any card and read the full vital history — live values on top of weeks of trend.',
    icon: User,
    position: 'top',
  },
  {
    number: '02',
    title: 'Scores that\nnever sleep',
    description: 'Early-warning scores recomputed continuously from the stream — not once per rounds.',
    icon: Clock,
    position: 'bottom',
  },
  {
    number: '03',
    title: 'Thresholds,\nyour way',
    description: 'Alert limits tuned per patient or per ward, matched to your clinical protocols.',
    icon: Sliders,
    position: 'top',
  },
  {
    number: '04',
    title: 'Context\nattached',
    description: "Notes, documents and labs sit on the patient's timeline, right next to the vitals.",
    icon: FileText,
    position: 'bottom',
  },
  {
    number: '05',
    title: 'Alarms with\nmanners',
    description: 'Noise filtered at the source — sustained instability alerts, single blips don\'t.',
    icon: Bell,
    position: 'top',
  },
  {
    number: '06',
    title: 'Documentation,\ndone for you',
    description: 'Structured, clinically coded reports generated from the continuous record.',
    icon: ClipboardCheck,
    position: 'bottom',
  },
];

// Motion Variants
const cardVariants = {
  hidden: (position) => ({
    opacity: 0,
    y: position === 'top' ? -15 : 15,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

// 1. Reusable Feature Card Component
const FeatureCard = memo(({ step, isActive, isHovered, onClick, onHover, onLeave, isMobile = false }) => {
  const Icon = step.icon;
  const isTop = step.position === 'top';

  const cardContent = (
    <motion.div
      tabIndex={0}
      role="button"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      variants={cardVariants}
      custom={step.position}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`
        relative w-full p-5 rounded-[20px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#008080] cursor-pointer
        backdrop-blur-xl border select-none flex flex-col justify-between h-[180px]
        ${isActive || isHovered 
          ? 'bg-white/95 border-[#008080] shadow-[0_12px_24px_-6px_rgba(0,128,128,0.18)] ' + 
            (isMobile ? '' : isTop ? '-translate-y-1' : 'translate-y-1')
          : 'bg-white/75 border-slate-900/10 shadow-[0_4px_16px_-4px_rgba(11,43,72,0.04)] hover:border-teal-600/30'
        }
      `}
    >
      {/* Icon + Number Badge Header */}
      <div className="flex items-center justify-between">
        <div 
          className={`
            w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-xs
            ${isActive || isHovered 
              ? 'bg-[#008080] text-white shadow-[0_0_12px_rgba(0,128,128,0.35)] scale-105' 
              : 'bg-[#CCE3E0]/40 text-[#0B2B48] border border-teal-600/20'
            }
          `}
        >
          <Icon size={20} strokeWidth={2.2} />
        </div>
        
        <span 
          className="text-[11px] font-bold tracking-widest px-2 py-0.5 rounded-md bg-[#F4EADD] border border-[#E3D1B9] text-[#A3690F]"
          style={{ fontFamily: 'var(--mono)' }}
        >
          {step.number}
        </span>
      </div>
      
      {/* Title */}
      <h3 
        className="font-bold text-sm leading-tight whitespace-pre-line text-[#0B2B48] mt-2"
        style={{ fontFamily: 'var(--sans)' }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-xs font-medium text-slate-600 leading-relaxed line-clamp-3">
        {step.description}
      </p>
    </motion.div>
  );

  if (isMobile) {
    return <div className="w-full mb-3">{cardContent}</div>;
  }

  return <div className="w-full">{cardContent}</div>;
});

FeatureCard.displayName = 'FeatureCard';

// 2. Central Target Dot Component
const TimelineNode = memo(({ isActive, isHovered, onClick, onHover, onLeave }) => (
  <div 
    onClick={onClick}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className="relative flex items-center justify-center cursor-pointer z-20"
  >
    {/* Soft Pulsing Glow */}
    <div className={`
      absolute w-8 h-8 rounded-full bg-[#008080]/20 transition-all duration-300 pointer-events-none
      ${isActive || isHovered ? 'scale-125 opacity-100' : 'scale-75 opacity-0'}
    `} />
    
    {/* Central Dot */}
    <div className={`
      w-6 h-6 rounded-full bg-white border-[3px] flex items-center justify-center transition-all duration-300 shadow-xs
      ${isActive || isHovered 
        ? 'border-[#008080] shadow-[0_0_12px_rgba(0,128,128,0.6)] scale-110' 
        : 'border-teal-600/60'
      }
    `}>
      <div className={`
        w-2 h-2 rounded-full transition-colors duration-300 
        ${isActive || isHovered ? 'bg-[#0B2B48]' : 'bg-[#008080]'}
      `} />
    </div>
  </div>
));

TimelineNode.displayName = 'TimelineNode';

// 3. Timeline Center Track Line
const TimelineTrack = memo(({ activeIndex }) => {
  const fillPercentage = activeIndex !== null ? ((activeIndex + 1) / STEPS.length) * 100 : 0;

  return (
    <>
      {/* Background Track */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[4px] -translate-y-1/2 bg-slate-900/10 rounded-full z-0" />

      {/* Smoothly Animated Click Progress Line */}
      <motion.div 
        animate={{ width: `${fillPercentage}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="hidden lg:block absolute top-1/2 left-0 h-[4px] -translate-y-1/2 bg-gradient-to-r from-[#0B2B48] via-[#008080] to-[#80C2BD] shadow-[0_0_10px_rgba(0,128,128,0.4)] rounded-full z-0"
      />

      {/* Mobile Vertical Track */}
      <div className="lg:hidden absolute top-0 bottom-0 left-6 w-[3px] bg-gradient-to-b from-[#0B2B48] via-[#008080] to-[#CCE3E0] rounded-full z-0 shadow-xs" />
    </>
  );
});

TimelineTrack.displayName = 'TimelineTrack';

// Main Component
export default function CorlifeFeatureSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section 
      style={{
        '--navy': '#0B2B48',
        '--teal': '#008080',
        '--gold': '#C07D14',
        '--sans': '"Poppins", system-ui, -apple-system, sans-serif',
        '--serif': '"Cormorant Garamond", Georgia, serif',
        '--mono': '"IBM Plex Mono", ui-monospace, monospace',
        fontFamily: 'var(--sans)',
      }}
      className="relative w-full py-12 md:py-16 px-4 md:px-8 bg-[radial-gradient(circle_at_bottom_left,#F4EADD_0%,transparent_28%),radial-gradient(circle_at_top_right,#CCE3E0_0%,transparent_35%),linear-gradient(to_bottom,#F8F7F2,#F5F4EF)] text-[#0B2B48] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Dot Grid Matrix Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#008080_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-[1350px] w-full mx-auto flex flex-col gap-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight"
            style={{ fontFamily: 'var(--serif)', color: '#0B2B48' }}
          >
            Built for the nurse <br className="hidden sm:block" />
            who watches <span className="italic font-bold bg-gradient-to-r from-[#008080] to-[#0B2B48] bg-clip-text text-transparent">everyone.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-sm sm:text-base max-w-[650px] mx-auto leading-relaxed font-normal"
          >
            Jura turns the monitoring record into structured, EHR-ready reports the moment they're needed — not at the end of a long shift.
          </motion.p>
        </div>

        {/* Timeline Flow */}
        <div className="relative my-6 lg:my-10">
          
          <TimelineTrack activeIndex={hoveredStep !== null ? hoveredStep : activeStep} />

          {/* 6 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-4 relative z-10">
            {STEPS.map((step, index) => {
              const isTop = step.position === 'top';
              const isActive = activeStep === index;
              const isHovered = hoveredStep === index;

              return (
                <div 
                  key={index} 
                  className="flex flex-col lg:items-center relative pl-12 lg:pl-0"
                >
                  {/* Mobile Node Dot */}
                  <div className="lg:hidden absolute left-[13px] top-5 w-5 h-5 rounded-full bg-white border-2 border-[#008080] -translate-x-1/2 flex items-center justify-center z-10 shadow-xs">
                    <div className="w-2 h-2 rounded-full bg-[#008080]" />
                  </div>

                  {/* Top Card Space */}
                  <div className="hidden lg:flex flex-col justify-end w-full mb-8">
                    {isTop ? (
                      <FeatureCard 
                        step={step} 
                        isActive={isActive}
                        isHovered={isHovered} 
                        onClick={() => setActiveStep(index)}
                        onHover={() => setHoveredStep(index)} 
                        onLeave={() => setHoveredStep(null)} 
                      />
                    ) : (
                      <div className="h-[180px] opacity-0 pointer-events-none" />
                    )}
                  </div>

                  {/* Center Node Target Dot */}
                  <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center z-20">
                    <TimelineNode 
                      isActive={isActive}
                      isHovered={isHovered} 
                      onClick={() => setActiveStep(index)}
                      onHover={() => setHoveredStep(index)} 
                      onLeave={() => setHoveredStep(null)} 
                    />
                  </div>

                  {/* Bottom Card Space */}
                  <div className="hidden lg:flex flex-col justify-start w-full mt-8">
                    {!isTop ? (
                      <FeatureCard 
                        step={step} 
                        isActive={isActive}
                        isHovered={isHovered} 
                        onClick={() => setActiveStep(index)}
                        onHover={() => setHoveredStep(index)} 
                        onLeave={() => setHoveredStep(null)} 
                      />
                    ) : (
                      <div className="h-[180px] opacity-0 pointer-events-none" />
                    )}
                  </div>

                  {/* Mobile Card */}
                  <div className="lg:hidden w-full">
                    <FeatureCard 
                      step={step} 
                      isActive={isActive}
                      isHovered={isHovered} 
                      onClick={() => setActiveStep(index)}
                      onHover={() => setHoveredStep(index)} 
                      onLeave={() => setHoveredStep(null)}
                      isMobile={true} 
                    />
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Metrics Banner (Using exact matching grid and equal column padding to seamlessly fill gaps) */}
       {/* Bottom Metrics Banner */}
<motion.div 
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}
  className="w-full bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 md:p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0"
>
  {/* Left Featured Item */}
  <div className="flex items-center justify-center gap-4 w-full md:w-[42%] md:pr-6 md:border-r border-slate-200">
    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl border border-[#008080]/20 bg-[#008080]/5 text-[#008080]">
      <ShieldCheck className="w-6 h-6" strokeWidth={1.8} />
    </div>
    <div className="text-left">
      <div className="text-sm font-bold text-[#0B2B48] leading-tight">
        Structured against clinical coding standards,
      </div>
      <div className="text-xs text-slate-500 font-medium mt-0.5">
        generated straight from the continuous record.
      </div>
    </div>
  </div>

  {/* Right Metrics Items */}
  <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-0 md:pl-6">
    {/* Metric 1 */}
    <div className="flex items-center justify-start md:justify-center gap-3.5 md:border-r border-slate-200 md:px-4">
      <TrendingUp className="w-6 h-6 text-[#008080] shrink-0" strokeWidth={1.8} />
      <div className="text-left">
        <div className="text-base font-bold text-[#0B2B48] leading-none" style={{ fontFamily: 'var(--sans)' }}>
          100%
        </div>
        <div className="text-[11px] text-slate-500 font-medium mt-1 whitespace-nowrap">
          Continuous capture
        </div>
      </div>
    </div>

    {/* Metric 2 */}
    <div className="flex items-center justify-start md:justify-center gap-3.5 md:border-r border-slate-200 md:px-4">
      <ShieldCheck className="w-6 h-6 text-[#008080] shrink-0" strokeWidth={1.8} />
      <div className="text-left">
        <div className="text-base font-bold text-[#0B2B48] leading-none" style={{ fontFamily: 'var(--sans)' }}>
          99.8%
        </div>
        <div className="text-[11px] text-slate-500 font-medium mt-1 whitespace-nowrap">
          Data accuracy
        </div>
      </div>
    </div>

    {/* Metric 3 */}
    <div className="flex items-center justify-start md:justify-center gap-3.5 md:pl-4">
      <Clock className="w-6 h-6 text-[#008080] shrink-0" strokeWidth={1.8} />
      <div className="text-left">
        <div className="text-base font-bold text-[#0B2B48] leading-none" style={{ fontFamily: 'var(--sans)' }}>
          24/7
        </div>
        <div className="text-[11px] text-slate-500 font-medium mt-1 whitespace-nowrap">
          Always monitoring
        </div>
      </div>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}