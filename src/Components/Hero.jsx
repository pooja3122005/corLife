import { FaArrowRight, FaHeart } from "react-icons/fa";
import heroImage from "../assets/hero.png"; // Your hero image asset
export default function Hero() {
  return (
    <section className="corlife-hero relative overflow-hidden min-h-[620px] lg:min-h-[680px] flex items-center">
      
      {/* Tailwind Custom Keyframes Style Block for Soft Floating */}
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

      {/* RIGHT SIDE CURVED IMAGE CONTAINER */}
      <div className="absolute top-0 right-0 w-full lg:w-[52%] h-full flex justify-end items-stretch pointer-events-none z-0">
        <div className="relative w-full h-full overflow-hidden rounded-tl-[240px] sm:rounded-tl-[320px] lg:rounded-tl-[400px]">
          <img
            src={heroImage}
            alt="Corlife Medical Device Set"
            className="w-full h-full object-cover object-center pointer-events-auto"
          />
        </div>
      </div>

      {/* LEFT CONTENT AREA */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* LEFT CONTAINER (BOUNDS THE FLOATING BUTTONS) */}
          <div className="relative space-y-8 max-w-xl animate-[fadeInLeft_0.8s_ease] py-6">

            {/* FLOATING TRUST BADGES (Positioned around heading) */}
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

            {/* HEADING CONTENT */}
            <div className="space-y-2 pt-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.12] text-[var(--midnight)] tracking-tight">
                Care
                <br />
                without
                <br />
                <span className="text-[var(--gold)]">
                  a pause.
                </span>
              </h1>
            </div>

            {/* Gold Line + Heart Icon */}
            <div className="flex items-center gap-3 py-1">
              <div className="w-24 h-[1.5px] bg-[var(--gold)]" />
              <FaHeart className="text-[var(--gold)] text-xs" />
              <span className="text-[var(--gold)] text-base sm:text-lg font-normal">
                Continuous remote cardiac &amp; vitals monitoring
              </span>
            </div>

            {/* Paragraph Description */}
            <p className="text-[var(--ink-soft)] text-base sm:text-lg leading-relaxed max-w-md font-normal">
              Corlife keeps a clinical-grade watch on every heartbeat and vital sign — from the ICU bed
              to the living-room couch. When something changes, the right clinician knows before the
              patient ever feels it.
            </p>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  bg-[var(--teal)]
                  hover:bg-[var(--teal-deep)]
                  text-white
                  px-8
                  py-3.5
                  rounded-full
                  font-bold
                  text-base
                  shadow-md
                  hover:shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <span>Request a demo</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

          </div>

          {/* RIGHT SPACER FOR GRID ALIGNMENT */}
          <div className="hidden lg:block h-full" />

        </div>
        
      </div>
      
    </section>
  );
}