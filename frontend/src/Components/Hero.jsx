import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import ECGDashboard from "./ECGDashboard";

const stats = [
  { value: 94, suffix: "%", label: "of deteriorations flagged before escalation" },
  { value: 24, suffix: "/7", label: "clinician-reviewed monitoring, every day of the year" },
  { value: 8, suffix: "s", label: "median time from anomaly to care-team alert" },
  { value: 40, suffix: "+", label: "hospitals and home-care programs live on Corlife" },
];

export default function Hero({ onRequestDemo }) {
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-num");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animateCounter = (element) => {
      const target = Number(element.dataset.count || 0);

      if (prefersReducedMotion) {
        element.textContent = target;
        return;
      }

      const duration = 1200;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(target * eased);

        element.textContent = currentValue;

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          element.textContent = target;
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target;
          if (element.dataset.animated === "true") return;

          element.dataset.animated = "true";
          animateCounter(element);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => {
      if (prefersReducedMotion) {
        counter.dataset.animated = "true";
        counter.textContent = Number(counter.dataset.count || 0);
      } else {
        counter.textContent = "0";
        observer.observe(counter);
      }
    });

    return () => observer.disconnect();
  }, []);

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

      <div className="hidden lg:flex absolute top-0 right-0 w-[52%] h-[57%] justify-end items-stretch pointer-events-none z-0">
        <div className="relative w-full h-full overflow-hidden ">
          <div className="w-full justify-center items-center h-full flex pointer-events-auto">
            <ECGDashboard />
          </div>
        </div>
      </div>

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
                The signal never <span className="text-[var(--gold)]">stops.</span>
                <br />
                Neither do we.
              </h1>
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

        <section className="stats" aria-label="Corlife by the numbers">
          <div className="wrap stats-grid">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="stat-value">
                  <span className="stat-num" data-count={stat.value}>0</span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}