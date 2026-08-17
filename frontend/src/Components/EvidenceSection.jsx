import React, { useState, useEffect } from 'react';
import { 
  HeartPulse, 
  ShieldAlert, 
  Zap, 
  Award, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Quote,
  Pause,
  Play,
  Building2,
  Sparkles
} from 'lucide-react';

// Helper function to extract cleanly the display initial for avatars (skips titles like "Dr. ")
const getAuthorInitial = (name) => {
  if (!name) return 'C';
  const cleanName = name.replace(/^Dr\.\s*/i, '').trim();
  return cleanName.charAt(0) || name.charAt(0);
};

// Faster Count-Up Animation Hook (Reduced Durations)
function useCountUpOnLoad(endValue, duration = 1000) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(endValue);
      }
    };

    const timer = setTimeout(() => {
      animationFrameId = window.requestAnimationFrame(step);
    }, 40);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [endValue, duration]);

  return displayValue;
}

const TESTIMONIALS = [
  {
    id: 1,
    quote: "We discharged a post-MI patient on a Friday. By Sunday night Corlife had flagged a creeping arrhythmia our next appointment would have missed by eleven days. We brought her in Monday morning.",
    highlight: "That's not a feature — that's a life.",
    author: "Dr. Meera Krishnan",
    role: "Cardiologist & Continuous Care Lead",
    institution: "St. Jude Heart Institute",
    badge: "Verified Clinician",
    impactMetric: "11 Days Earlier Detection"
  },
  {
    id: 2,
    quote: "The reduction in emergency readmissions was noticeable within our first quarter. The telemetry data stream is clean, actionable, and doesn't overwhelm our nursing staff with false alarms.",
    highlight: "It gives our care team superpowers.",
    author: "Dr. Robert Sterling",
    role: "Director of Cardiovascular Services",
    institution: "Metro Health System",
    badge: "Chief of Cardiology",
    impactMetric: "40% Reduced False Alarms"
  },
  {
    id: 3,
    quote: "Patients feel a profound sense of security going home knowing they are monitored continuously. It bridges the gap between acute discharge and outpatient recovery better than anything else.",
    highlight: "True peace of mind for families.",
    author: "Sarah Jenkins, MSN, RN",
    role: "Lead Post-Acute Care Coordinator",
    institution: "University Medical Center",
    badge: "Care Operations",
    impactMetric: "98% Reassurance Rating"
  }
];

const AUTOPLAY_DURATION = 4500; // 4.5 seconds per slide

export default function EvidenceSection() {
  // Faster animated counter triggers
  const stat1Value = useCountUpOnLoad(38, 1200);
  const stat2Value = useCountUpOnLoad(11, 1000);
  const stat3Value = useCountUpOnLoad(48, 800);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isPaused, setIsPaused] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);

  // Auto-play interval handling
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection('next');
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleSelectSlide = (idx) => {
    setDirection(idx > currentIndex ? 'next' : 'prev');
    setCurrentIndex(idx);
  };

  // Touch / Drag Gesture Handlers
  const handleTouchStart = (e) => setDragStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!dragStartX) return;
    const dragEndX = e.changedTouches[0].clientX;
    const diff = dragStartX - dragEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setDragStartX(null);
  };

  return (
    <section 
      id="evidence"
      className="relative w-full py-20 px-4 md:px-8 overflow-hidden font-sans select-none"
      style={{
        backgroundColor: 'var(--mist-2, #FAF8F4)',
        color: 'var(--ink, #0F2540)',
        fontFamily: 'var(--sans, Poppins, sans-serif)'
      }}
    >
      {/* Background Subtle Mesh */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--navy, #003B73) 0.6px, transparent 0.6px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        
        {/* ================= HEADER ================= */}
        <div className="relative w-full mb-12">
          {/* Badge on the Left */}
          <div className="flex justify-start">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full border"
              style={{
                color: "var(--teal-deep, #006666)",
                borderColor: "var(--line, #E3E0D8)",
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--gold, #D9971E)" }}
              />
              REVIEWS
            </div>
          </div>

          {/* Main Heading in the Center */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 
              className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight"
              style={{ 
                fontFamily: 'var(--serif, Cormorant Garamond, serif)',
                color: 'var(--navy, #003B73)'
              }}
            >
              Care teams keep it running 
              because it <span style={{ color: 'var(--teal, #00A6A6)' }}>earns its place.</span>
            </h2>

            <div className="pt-2 flex items-center justify-center gap-4 opacity-80">
              <span 
                className="h-[1px] w-16"
                style={{ background: 'linear-gradient(to right, transparent, var(--teal, #00A6A6))' }}
              />
              <div className="relative" style={{ color: 'var(--teal, #00A6A6)' }}>
                <HeartPulse size={22} className="animate-pulse" />
              </div>
              <span 
                className="h-[1px] w-16"
                style={{ background: 'linear-gradient(to left, transparent, var(--teal, #00A6A6))' }}
              />
            </div>
          </div>
        </div>

        {/* ================= CAROUSEL CARD ================= */}
        <div 
          className="relative mt-8 w-full border rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
          style={{
            backgroundColor: 'var(--white, #FDFCFA)',
            borderColor: 'var(--line, #E3E0D8)',
            boxShadow: '0 12px 48px rgba(2, 30, 60, 0.05)'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Status & Controls Header */}
          <div 
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: 'var(--line-soft, #ECEAE3)', backgroundColor: 'var(--mist-2, #FAF8F4)' }}
          >
            <div className="flex items-center gap-3">
              <span 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono font-semibold uppercase tracking-wider border"
                style={{
                  backgroundColor: 'var(--white, #FDFCFA)',
                  borderColor: 'var(--line, #E3E0D8)',
                  color: 'var(--teal, #00A6A6)'
                }}
              >
                <Sparkles size={13} style={{ color: 'var(--gold, #D9971E)' }} />
                {TESTIMONIALS[currentIndex].impactMetric}
              </span>
              <span className="hidden sm:inline-block text-xs font-medium" style={{ color: 'var(--ink-soft, #6B7684)' }}>
                Direct Clinical Impact Report
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
                className="p-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors hover:bg-black/5"
                style={{ borderColor: 'var(--line, #E3E0D8)', color: 'var(--navy, #003B73)' }}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
                <span className="hidden md:inline text-[11px] font-medium">
                  {isPaused ? "Paused" : "Autoplay"}
                </span>
              </button>

              <div className="h-4 w-[1px]" style={{ backgroundColor: 'var(--line, #E3E0D8)' }} />

              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Feedback"
                  className="p-2 rounded-full border transition-transform hover:scale-105 active:scale-95"
                  style={{ borderColor: 'var(--line, #E3E0D8)', color: 'var(--navy, #003B73)' }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Feedback"
                  className="p-2 rounded-full border transition-transform hover:scale-105 active:scale-95"
                  style={{ borderColor: 'var(--line, #E3E0D8)', color: 'var(--navy, #003B73)' }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Main Slide Content Area */}
          <div className="relative p-8 md:p-12 min-h-[260px] md:min-h-[220px] flex items-center overflow-hidden">
            {/* Background Watermark Quote */}
            <Quote 
              size={180} 
              className="absolute right-4 bottom-0 opacity-[0.04] pointer-events-none select-none" 
              style={{ color: 'var(--navy, #003B73)' }}
            />

            {TESTIMONIALS.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={item.id}
                  className={`transition-all duration-400 ease-out w-full ${
                    isActive
                      ? 'opacity-100 translate-x-0 relative z-10'
                      : 'opacity-0 absolute inset-0 p-8 md:p-12 pointer-events-none ' + 
                        (direction === 'next' ? 'translate-x-10' : '-translate-x-10')
                  }`}
                >
                  <blockquote className="space-y-4">
                    <p 
                      className="text-lg md:text-2xl leading-relaxed font-normal tracking-wide"
                      style={{ color: 'var(--midnight, #01172E)' }}
                    >
                      "{item.quote}{" "}
                      <span 
                        className="font-semibold px-2 py-0.5 rounded-md border-b-2 inline-block mt-1"
                        style={{
                          color: 'var(--midnight, #01172E)',
                          backgroundColor: 'var(--mist, #F3F0E9)',
                          borderColor: 'var(--teal, #00A6A6)'
                        }}
                      >
                        {item.highlight}
                      </span>
                      "
                    </p>
                  </blockquote>
                </div>
              );
            })}
          </div>

          {/* Author Metadata Footer */}
          <div 
            className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:px-12 border-t gap-4"
            style={{ 
              borderColor: 'var(--line-soft, #ECEAE3)',
              backgroundColor: 'var(--mist-2, #FAF8F4)'
            }}
          >
            <div className="flex items-center gap-4">
              <div 
                className="h-11 w-11 rounded-full flex items-center justify-center font-bold text-lg border shadow-xs"
                style={{ 
                  backgroundColor: 'var(--navy, #003B73)', 
                  color: 'var(--white, #FDFCFA)',
                  borderColor: 'var(--line, #E3E0D8)'
                }}
              >
                {getAuthorInitial(TESTIMONIALS[currentIndex].author)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base md:text-lg" style={{ color: 'var(--navy, #003B73)' }}>
                    {TESTIMONIALS[currentIndex].author}
                  </h3>
                  <span 
                    className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium border"
                    style={{
                      backgroundColor: 'var(--white, #FDFCFA)',
                      color: 'var(--midnight, #01172E)',
                      borderColor: 'var(--line, #E3E0D8)'
                    }}
                  >
                    <CheckCircle2 size={11} style={{ color: 'var(--teal, #00A6A6)' }} />
                    {TESTIMONIALS[currentIndex].badge}
                  </span>
                </div>
                <p className="text-xs font-medium flex items-center gap-1 mt-0.5" style={{ color: 'var(--ink-soft, #6B7684)' }}>
                  {TESTIMONIALS[currentIndex].role} &middot; 
                  <span className="inline-flex items-center gap-1">
                    <Building2 size={12} className="opacity-70" />
                    {TESTIMONIALS[currentIndex].institution}
                  </span>
                </p>
              </div>
            </div>

            {/* Interactive Pill Navigation */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8' : 'w-2.5 hover:opacity-100 opacity-40'
                  }`}
                  style={{
                    backgroundColor: idx === currentIndex ? 'var(--teal, #00A6A6)' : 'var(--navy, #003B73)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Autoplay Progress Countdown Line */}
          {!isPaused && (
            <div 
              key={currentIndex} 
              className="h-1 w-full bg-black/5"
            >
              <div 
                className="h-full animate-progress"
                style={{ 
                  backgroundColor: 'var(--teal, #00A6A6)',
                  animationDuration: `${AUTOPLAY_DURATION}ms`
                }}
              />
            </div>
          )}
        </div>

        {/* ================= STATS CARDS ================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          
          {/* Stat Card 1 */}
          <div 
            className="group relative overflow-hidden flex flex-col justify-between p-7 backdrop-blur-md border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            style={{
              backgroundColor: 'var(--white, #FDFCFA)',
              borderRadius: 'var(--radius, 16px)',
              borderColor: 'var(--line, #E3E0D8)',
              boxShadow: '0 4px 20px rgba(2, 30, 60, 0.02)'
            }}
          >
            <div 
              className="absolute top-0 left-0 right-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: 'linear-gradient(to right, var(--teal, #00A6A6), var(--gold, #D9971E))' }}
            />
            
            <div className="flex items-center justify-between">
              <div 
                className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'var(--mist, #F3F0E9)', color: 'var(--navy, #003B73)' }}
              >
                <ShieldAlert size={20} style={{ color: 'var(--teal, #00A6A6)' }} />
              </div>
              <span 
                className="text-[11px] font-medium uppercase"
                style={{ 
                  fontFamily: 'var(--mono, IBM Plex Mono, monospace)',
                  color: 'var(--ink-soft, #6B7684)'
                }}
              >
                Outcome Metric
              </span>
            </div>

            <div className="mt-6">
              <div 
                className="text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#00A6A6]"
                style={{ 
                  fontFamily: 'var(--sans, Poppins, sans-serif)',
                  color: 'var(--navy, #003B73)'
                }}
              >
                -{stat1Value}%
              </div>
              <p className="mt-2 text-sm leading-relaxed font-medium" style={{ color: 'var(--midnight, #01172E)' }}>
                30-day cardiac readmissions across pilot sites
              </p>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div 
            className="group relative overflow-hidden flex flex-col justify-between p-7 backdrop-blur-md border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            style={{
              backgroundColor: 'var(--white, #FDFCFA)',
              borderRadius: 'var(--radius, 16px)',
              borderColor: 'var(--line, #E3E0D8)',
              boxShadow: '0 4px 20px rgba(2, 30, 60, 0.02)'
            }}
          >
            <div 
              className="absolute top-0 left-0 right-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: 'linear-gradient(to right, var(--teal, #00A6A6), var(--gold, #D9971E))' }}
            />
            
            <div className="flex items-center justify-between">
              <div 
                className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'var(--mist, #F3F0E9)', color: 'var(--midnight, #01172E)' }}
              >
                <Zap size={20} style={{ color: 'var(--gold, #D9971E)', fill: 'var(--gold, #D9971E)' }} />
              </div>
              <span 
                className="text-[11px] font-medium uppercase"
                style={{ 
                  fontFamily: 'var(--mono, IBM Plex Mono, monospace)',
                  color: 'var(--ink-soft, #6B7684)'
                }}
              >
                Detection Speed
              </span>
            </div>

            <div className="mt-6">
              <div 
                className="text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#00A6A6]"
                style={{ 
                  fontFamily: 'var(--sans, Poppins, sans-serif)',
                  color: 'var(--navy, #003B73)'
                }}
              >
                {stat2Value} days
              </div>
              <p className="mt-2 text-sm leading-relaxed font-medium" style={{ color: 'var(--midnight, #01172E)' }}>
                median earlier detection vs. scheduled follow-up
              </p>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div 
            className="group relative overflow-hidden flex flex-col justify-between p-7 backdrop-blur-md border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            style={{
              backgroundColor: 'var(--white, #FDFCFA)',
              borderRadius: 'var(--radius, 16px)',
              borderColor: 'var(--line, #E3E0D8)',
              boxShadow: '0 4px 20px rgba(2, 30, 60, 0.02)'
            }}
          >
            <div 
              className="absolute top-0 left-0 right-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: 'linear-gradient(to right, var(--teal, #00A6A6), var(--gold, #D9971E))' }}
            />
            
            <div className="flex items-center justify-between">
              <div 
                className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'var(--mist, #F3F0E9)', color: 'var(--midnight, #01172E)' }}
              >
                <Award size={20} style={{ color: 'var(--teal, #00A6A6)' }} />
              </div>
              <span 
                className="text-[11px] font-medium uppercase"
                style={{ 
                  fontFamily: 'var(--mono, IBM Plex Mono, monospace)',
                  color: 'var(--ink-soft, #6B7684)'
                }}
              >
                Patient Trust
              </span>
            </div>

            <div className="mt-6">
              <div 
                className="text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#00A6A6]"
                style={{ 
                  fontFamily: 'var(--sans, Poppins, sans-serif)',
                  color: 'var(--navy, #003B73)'
                }}
              >
                {(stat3Value / 10).toFixed(1)}/5
              </div>
              <p className="mt-2 text-sm leading-relaxed font-medium" style={{ color: "#0F2540" }}>
                patient-reported reassurance score at home
              </p>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress linear forwards;
        }
      `}</style>
    </section>
  );
}