

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Activity, Building2, TrendingUp, Info } from "lucide-react";

const Counter = ({ from = 0, to, isInView, onComplete }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    if (isInView) {
      const controls = animate(from, to, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          node.textContent = Math.round(value);
        },
        onComplete() {
          if (onComplete) onComplete(true);
        },
      });
      return () => controls.stop();
    } else {
      node.textContent = from;
      if (onComplete) onComplete(false);
    }
  }, [from, to, isInView, onComplete]);

  return <span ref={nodeRef}>{from}</span>;
};

// Custom Card with Corlife Light Palette & Dynamic Animations
const OutcomeCard = ({ item, idx }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-80px" });
  const [isDone, setIsDone] = useState(false);

  const IconComponent = item.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-white p-8 sm:p-10 transition-all duration-300 ${item.borderColor} ${item.shadowColor}`}
    >
      {/* Dynamic Top Border Accent Bar */}
      <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${item.topBorderGradient}`} />

      {/* Light Shimmer Sweep while counting */}
      {isInView && !isDone && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-teal-500/5 to-transparent"
        />
      )}

      {/* Completion Subtle Soft Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isDone ? { opacity: 1, scale: 1.2 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full ${item.glowBg} blur-3xl`}
      />

      {/* Card Header: Category Tag & Icon */}
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className={`font-mono text-[11px] font-semibold uppercase tracking-widest ${item.tagTextColor}`}>
            {item.category}
          </span>
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg} border ${item.iconBorder} transition-transform duration-300 group-hover:scale-105`}>
            <IconComponent className={`h-5 w-5 ${item.iconColor}`} />
          </div>
        </div>

        {/* Big Number Statistic with Dynamic Ripple & Scale Bounce */}
        <div className="relative mt-6 inline-block">
          <motion.div
            animate={
              !isInView
                ? { scale: 1 }
                : !isDone
                  ? { scale: [1, 1.04, 1], transition: { repeat: Infinity, duration: 0.5 } }
                  : { scale: [1, 1.15, 1], transition: { type: "spring", stiffness: 400, damping: 14 } }
            }
            className="font-mono text-7xl font-bold tracking-tight text-[var(--navy)] sm:text-8xl"
          >
            <Counter
              from={0}
              to={item.count}
              isInView={isInView}
              onComplete={(state) => setIsDone(state)}
            />
          </motion.div>

          {/* Pulse Ring Ripple */}
          {isInView && !isDone && (
            <motion.span
              initial={{ opacity: 0.8, scale: 0.8 }}
              animate={{ opacity: 0, scale: 1.5 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeOut" }}
              className={`pointer-events-none absolute inset-0 rounded-full border ${item.pulseBorder}`}
            />
          )}
        </div>

        {/* Main Caption Title */}
        <h3 className={`mt-4 font-serif text-2xl font-bold tracking-tight text-[var(--navy)] transition-colors duration-300 ${item.hoverTitleColor}`}>
          {item.cap}
        </h3>
      </div>

      {/* Card Label / Context Description */}
      <p className="mt-4 font-sans text-sm font-normal leading-relaxed text-[var(--ink-text)]">
        {item.label}
      </p>
    </motion.div>
  );
};

export default function OutcomesSection() {
  const cards = [
    {
      count: 1,
      category: "Critical Alert",
      cap: "Code Blue",
      label: "prevented before it happened",
      icon: Activity,
      borderColor: "border-[var(--line)]",
      topBorderGradient: "from-transparent via-rose-500 to-transparent",
      glowBg: "bg-rose-500/10",
      shadowColor: "shadow-sm hover:shadow-xl hover:shadow-rose-500/5 hover:border-rose-300",
      tagTextColor: "text-rose-600",
      iconBg: "bg-rose-50",
      iconBorder: "border-rose-200",
      iconColor: "text-rose-600",
      pulseBorder: "border-rose-400/40",
      hoverTitleColor: "group-hover:text-rose-700",
    },
    {
      count: 5,
      category: "Escalation Prevention",
      cap: "ICU transfers",
      label: "avoided through earlier action",
      icon: Building2,
      borderColor: "border-[var(--line)]",
      topBorderGradient: "from-transparent via-[var(--gold)] to-transparent",
      glowBg: "bg-[var(--gold)]/10",
      shadowColor: "shadow-sm hover:shadow-xl hover:shadow-[var(--gold)]/10 hover:border-amber-300",
      tagTextColor: "text-[var(--gold-deep)]",
      iconBg: "bg-amber-50",
      iconBorder: "border-amber-200",
      iconColor: "text-[var(--gold-deep)]",
      pulseBorder: "border-amber-400/40",
      hoverTitleColor: "group-hover:text-[var(--gold-deep)]",
    },
    {
      count: 21,
      category: "Early Detection",
      cap: "deteriorations",
      label: "caught early enough to intervene",
      icon: TrendingUp,
      borderColor: "border-[var(--line)]",
      topBorderGradient: "from-transparent via-[var(--teal)] to-transparent",
      glowBg: "bg-[var(--teal)]/10",
      shadowColor: "shadow-sm hover:shadow-xl hover:shadow-[var(--teal)]/10 hover:border-teal-300",
      tagTextColor: "text-[var(--teal-deep)]",
      iconBg: "bg-teal-50",
      iconBorder: "border-teal-200",
      iconColor: "text-[var(--teal-deep)]",
      pulseBorder: "border-[var(--teal)]/40",
      hoverTitleColor: "group-hover:text-[var(--teal-deep)]",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Poppins:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600;700&display=swap');

        .outcomes-root {
          font-family: var(--sans);
          position: relative;
          background: var(--mist-2);
          padding: 0 0 36px;
          color: var(--ink);
          overflow: hidden;
        }

        .outcomes-root::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          background: rgba(0, 166, 166, 0.06);
          border-radius: 50%;
          filter: blur(120px);
          top: -150px;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }
      `}</style>

      <section className="outcomes-root scroll-mt-28" id="outcomes">
        {/* Subtle ECG Pulse Line Background Graphic */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-[0.04]">
          <svg
            className="w-full text-[var(--teal-deep)]"
            viewBox="0 0 1200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M0,100 L400,100 L415,60 L430,140 L445,30 L460,170 L475,100 L500,100 L1200,100" />
          </svg>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <header className="mb-8 text-center">
            <div className="flex justify-center">
              
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl font-bold tracking-tight text-[var(--navy)] sm:text-5xl lg:text-6xl leading-[1.15]"
            >
              What continuous catches, <br className="hidden sm:inline" />
              for every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--teal-deep)] via-[var(--navy-2)] to-[var(--teal)]">
                100 patients
              </span>{" "}
              monitored.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-5 max-w-2xl font-sans text-base sm:text-lg text-[var(--ink-text)] leading-relaxed"
            >
              Deterioration is usually written into the vitals hours before anyone calls for help. Catching it earlier changes the whole trajectory.
            </motion.p>
          </header>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {cards.map((item, idx) => (
              <OutcomeCard key={idx} item={item} idx={idx} />
            ))}
          </div>

          {/* Credibility Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 flex flex-col items-center justify-center gap-4 text-center"
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--line)] to-transparent" />
            <p className="inline-flex items-center gap-2 font-mono text-xs text-[var(--ink-text)]">
              <Info className="h-4 w-4 text-[var(--teal-deep)] shrink-0" />
              <span>Modeled on continuous-monitoring outcomes observed across early Corlife deployments.</span>
            </p>
          </motion.footer>
        </div>
      </section>
    </>
  );
}