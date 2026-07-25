import { useEffect, useState, useCallback, useRef } from "react";

export default function StatCard({ value, suffix, title }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const animRef = useRef(null);

  const startCountAnimation = useCallback(() => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
    }
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for realistic counting deceleration
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOutProgress * value);

      setCount(currentVal);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animRef.current = requestAnimationFrame(animate);
  }, [value]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Re-trigger counter animation every time card scrolls into view
          setCount(0);
          startCountAnimation();
        } else {
          // Reset count when out of view
          if (animRef.current) {
            cancelAnimationFrame(animRef.current);
          }
          setCount(0);
        }
      },
      { threshold: 0.25 }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [startCountAnimation]);

  return (
    <div
      ref={cardRef}
      className="
        group
        relative
        bg-white/95
        backdrop-blur-sm
        rounded-2xl
        p-6
        sm:p-7
        border
        border-slate-200/80
        hover:border-[var(--teal)]
        shadow-sm
        hover:shadow-[0_18px_40px_-8px_rgba(0,166,166,0.3)]
        hover:-translate-y-2
        hover:scale-[1.02]
        transition-all
        duration-300
        ease-out
        flex
        flex-col
        justify-center
        min-h-[150px]
        sm:min-h-[170px]
        w-full
        cursor-pointer
        overflow-hidden
      "
    >
      {/* TOP GLOW HIGHLIGHT STRIP */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--teal)] via-[var(--gold)] to-[var(--navy)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* AMBIENT LIGHT BACKGROUND SHIMMER */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-sky-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

      {/* STAT NUMBER DISPLAY */}
      <h2 className="relative z-10 text-4xl sm:text-5xl font-extrabold text-[var(--navy)] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] flex items-baseline gap-0.5 group-hover:text-[var(--midnight)] transition-colors duration-300">
        <span className="inline-block transition-transform duration-300 group-hover:scale-105">
          {count}
        </span>
        <span className="text-[var(--teal)] font-bold group-hover:text-[var(--teal-deep)] transition-colors duration-300">
          {suffix}
        </span>
      </h2>

      {/* DESCRIPTION */}
      <p className="relative z-10 mt-3 text-slate-600 group-hover:text-slate-900 text-sm sm:text-base font-medium leading-snug font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-300">
        {title}
      </p>
    </div>
  );
}