import { FaArrowRight, FaHeart } from "react-icons/fa";
import heroImage from "../assets/hero.png";

export default function Hero({ onRequestDemo }) {
  return (
    <section id="home" className="corlife-hero relative overflow-hidden min-h-[620px] lg:min-h-[680px] flex items-center scroll-mt-20">
      <style>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-6px) translateX(4px); }
        }
        @keyframes subtleFloatReverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(6px) translateX(-4px); }
        }
        .animate-float {
          animation: subtleFloat 4s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: subtleFloatReverse 5s ease-in-out infinite;
        }
      `}</style>

      {/* Right side image section: Hidden on mobile/tablet, visible as a split-screen image on large screens (lg:) */}
      <div className="hidden lg:flex absolute top-0 right-0 w-[52%] h-full justify-end items-stretch pointer-events-none z-0">
        <div className="relative w-full h-full overflow-hidden rounded-tl-[400px]">
          <img
            src={heroImage}
            alt="Corlife Medical Device Set"
            className="w-full h-full object-cover object-center pointer-events-auto"
          />
        </div>
      </div>

      {/* Left side content section aligned tightly to the left edge with matching padding */}
      <div className="relative z-10 w-full pl-6 sm:pl-12 lg:pl-16 xl:pl-24 pr-6 lg:pr-12 py-16">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div className="relative space-y-8 max-w-xl animate-[fadeInLeft_0.8s_ease] py-6">
            <div className="absolute -top-3 left-0 z-20 animate-float pointer-events-none">
              <span className="inline-flex items-center gap-2 bg-[var(--white)]/95 backdrop-blur-md border border-[var(--line)] text-[var(--navy)] font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-md">
                <span className="w-2 h-2 rounded-full bg-[var(--teal)] animate-pulse"></span>
                FDA-cleared wearables
              </span>
            </div>

            <div className="absolute top-28 -right-2 sm:right-6 z-20 animate-float-reverse pointer-events-none">
              <span className="inline-flex items-center gap-2 bg-[var(--white)]/95 backdrop-blur-md border border-[var(--line)] text-[var(--navy)] font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-md">
                <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
                HIPAA-compliant
              </span>
            </div>

            <div className="absolute -top-15 right-10 z-20 animate-float pointer-events-none">
              <span className="inline-flex items-center gap-2 bg-[var(--white)]/95 backdrop-blur-md border border-[var(--line)] text-[var(--navy)] font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-md">
                <span className="w-2 h-2 rounded-full bg-[var(--navy)]"></span>
                Live at 40+ care sites
              </span>
            </div>

            <div className="space-y-2 pt-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.12] text-[var(--midnight)] tracking-tight">
                Care
                <br />
                without
                <br />
                <span className="text-[var(--gold)]">a pause.</span>
              </h1>
            </div>

            <div className="flex items-center gap-3 py-1">
              <div className="w-24 h-[1.5px] bg-[var(--gold)]" />
              <FaHeart className="text-[var(--gold)] text-xs" />
              <span className="text-[var(--gold)] text-base sm:text-lg font-normal">
                Continuous remote cardiac &amp; vitals monitoring
              </span>
            </div>

            <p className="text-[var(--ink-soft)] text-base sm:text-lg leading-relaxed max-w-md font-medium">
              Corlife keeps a clinical-grade watch on every heartbeat and vital sign — from the ICU bed
              to the living-room couch. When something changes, the right clinician knows before the
              patient ever feels it.
            </p>

            <div>
              <button
                type="button"
                onClick={() => onRequestDemo?.()}
                className="group inline-flex items-center gap-3 bg-[var(--teal)] hover:bg-[var(--teal-deep)] text-white px-8 py-3.5 rounded-full font-bold text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>Request Demo</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <div className="hidden lg:block h-full" />
        </div>
      </div>
    </section>
  );
}