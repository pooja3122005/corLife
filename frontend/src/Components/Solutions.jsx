"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, X, Mail, Sparkles } from "lucide-react";

const solutions = [
  {
    id: "hospitals",
    number: "01",
    tag: "For hospitals",
    title: "Free up beds without losing sight of patients",
    description:
      "Move stable-but-watchful patients to home care with confidence. Corlife extends your ward's vigilance beyond its walls and flags who needs to come back.",
    ctaTitle: "See hospital vitals go live in 15 minutes",
    image:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: "clinicians",
    number: "02",
    tag: "For clinicians",
    title: "See the trend, not just the moment",
    description:
      "Open a patient and read weeks of continuous vitals at a glance. Fewer surprise readmissions, earlier intervention, less time chasing data.",
    ctaTitle: "Walk through the clinician dashboard live",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: "patients",
    number: "03",
    tag: "For patients & families",
    title: "Go home without going it alone",
    description:
      "Recover in your own bed knowing a care team is still watching. One wearable, no dashboards to manage — just the reassurance that someone will call if they need to.",
    ctaTitle: "Experience continuous care from home",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=70",
  },
];

export default function Solutions({ onRequestDemo }) {
  const [activeIdx, setActiveIdx] = useState(null);

  const activeSolution = activeIdx !== null ? solutions[activeIdx] : null;

  const handleNext = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % solutions.length);
    }
  };

  const handlePrev = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + solutions.length) % solutions.length);
    }
  };

  const handleDemoRequest = () => {
    onRequestDemo?.();
  };
  return (
    <section id="who-it-s-for"
      className="relative py-16 flex flex-col overflow-hidden scroll-mt-28"
      style={{
        backgroundColor: "var(--mist-2)",
        color: "var(--ink)",
        fontFamily: "var(--sans)",
      }}
    >
      <div
        className="mx-auto px-6 w-full"
        style={{ maxWidth: "var(--maxw)" }}
      >
        {/* Section Header */}
        <header className="mb-12 text-center">
          <div className="w-full flex justify-start mb-2">
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
               SOLUTIONS
          </div>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-normal tracking-tight mx-auto max-w-2xl"
            style={{ fontFamily: "var(--serif)", color: "var(--navy)" }}
          >
            Built for the people on both ends of the alert.
          </h2>
        </header>

        {/* 3 Full Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((item, idx) => (
            <motion.div
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              {/* Tag at Top */}
              <div className="absolute top-5 left-5">
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.85)",
                    color: "var(--navy)",
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Title & Arrow at Bottom */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white">
                <h3 className="text-xl font-medium leading-snug">
                  {item.tag.replace("For ", "")}
                </h3>
                <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slide-out Drawer Panel from Right */}
      <AnimatePresence>
        {activeSolution && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Dimmed Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIdx(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />

            {/* Right Panel Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-md sm:max-w-lg h-full bg-white z-10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-y-auto"
              style={{ backgroundColor: "var(--mist-2)" }}
            >
              <div>
                {/* Main Image */}
                <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <img
                    src={activeSolution.image}
                    alt={activeSolution.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Number & Tag */}
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: "var(--gold-deep)" }}
                  >
                    ({activeSolution.number})
                  </span>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md"
                    style={{
                      backgroundColor: "var(--line-soft)",
                      color: "var(--navy)",
                    }}
                  >
                    {activeSolution.tag}
                  </span>
                </div>

                {/* Main Card Title & Description */}
                <h3
                  className="text-xl font-bold mb-3 leading-snug"
                  style={{ fontFamily: "var(--serif)", color: "var(--navy)" }}
                >
                  {activeSolution.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--navy)" }}
                >
                  {activeSolution.description}
                </p>

              </div>

              {/* Bottom Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200 mt-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous item"
                    className="p-2.5 rounded-full border border-slate-300 hover:bg-slate-200 transition-colors"
                    style={{ color: "var(--navy)" }}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next item"
                    className="p-2.5 rounded-full border border-slate-300 hover:bg-slate-200 transition-colors"
                    style={{ color: "var(--navy)" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => setActiveIdx(null)}
                  aria-label="Close panel"
                  className="p-2.5 rounded-full hover:bg-slate-200 transition-colors"
                  style={{ color: "var(--navy)" }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}