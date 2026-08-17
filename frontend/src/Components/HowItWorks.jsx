import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

const steps = [
  {
    id: "step-1",
    number: "01",
    title: "Wear",
    summary:
      "A soft patch or wrist wearable goes on in seconds — built to be forgotten about.",
    details: [
      "Single-lead ECG patch or wrist wearable, clinician-prescribed",
      "Water-resistant with a 7-day battery — shower and sleep in it",
      "No wires, no bedside box, nothing to configure",
      "On and streaming in under a minute",
    ],
    art: (
      <svg viewBox="0 0 220 130" className="w-full h-auto max-h-36">
        <circle
          className="animate-ping origin-center opacity-40"
          cx="110"
          cy="62"
          r="34"
          fill="none"
          stroke="var(--teal)"
          strokeWidth="1.5"
        />
        <rect x="70" y="40" width="80" height="44" rx="15" fill="var(--navy)" />
        <path
          d="M80 62 h16 l5 -10 6 20 5 -10 h14"
          fill="none"
          stroke="var(--teal)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g transform="translate(128 52) scale(.6)">
          <path
            d="M12 21C12 21 1.5 13.6 1.5 6.9 1.5 3.6 4.2 1 7.5 1 9.4 1 11.1 1.9 12 3.3 12.9 1.9 14.6 1 16.5 1 19.8 1 22.5 3.6 22.5 6.9 22.5 13.6 12 21 12 21Z"
            fill="var(--gold)"
          />
        </g>
      </svg>
    ),
  },
  {
    id: "step-2",
    number: "02",
    title: "Stream",
    summary:
      "Vitals flow securely to the Corlife cloud — beat by beat, without a gap.",
    details: [
      "Encrypted end to end (AES-256), HIPAA-compliant by design",
      "Cellular and Wi-Fi, with offline buffering — no dropped data",
      "No pairing rituals; it connects itself",
      "Continuous beat-by-beat stream, not periodic samples",
    ],
    art: (
      <svg viewBox="0 0 220 130" className="w-full h-auto max-h-36">
        <path
          d="M158 62 h32 a14 14 0 0 0 2 -28 22 22 0 0 0 -42 -8 16 16 0 0 0 8 36z"
          fill="rgba(0,166,166,.14)"
          stroke="var(--teal)"
          strokeWidth="1.6"
        />
        <rect x="18" y="86" width="48" height="30" rx="9" fill="var(--navy)" />
        <path
          d="M26 101 h8 l4 -7 4 13 4 -7 h10"
          fill="none"
          stroke="var(--teal)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M66 92 Q 105 34 152 48"
          fill="none"
          stroke="var(--teal)"
          strokeWidth="1.7"
        />
        <circle r="4" fill="var(--gold)">
          <animateMotion
            dur="2.2s"
            repeatCount="indefinite"
            path="M66 92 Q 105 34 152 48"
          />
        </circle>
      </svg>
    ),
  },
  {
    id: "step-3",
    number: "03",
    title: "Detect",
    summary:
      "Models watch every beat and learn each patient's normal, so alerts stay meaningful.",
    details: [
      "Arrhythmia, desaturation and early-deterioration models",
      "Learns each patient's baseline — fewer false alarms",
      "Noise is filtered before it ever becomes an alert",
      "Median 8 seconds from anomaly to flagged event",
    ],
    art: (
      <svg viewBox="0 0 220 130" className="w-full h-auto max-h-36">
        <defs>
          <linearGradient id="scanG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(0,166,166,0)" />
            <stop offset="1" stopColor="rgba(0,166,166,.35)" />
          </linearGradient>
        </defs>
        <path
          d="M10 78 h30 l8 -12 8 24 8 -12 h34 l7 -42 9 58 7 -16 h89"
          fill="none"
          stroke="var(--teal)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="105"
          cy="36"
          r="6"
          fill="var(--gold)"
          stroke="var(--white)"
          strokeWidth="2"
          className="animate-pulse"
        />
        <rect x="-30" y="8" width="30" height="114" fill="url(#scanG)" />
      </svg>
    ),
  },
  {
    id: "step-4",
    number: "04",
    title: "Respond",
    summary:
      "A monitoring clinician reviews the event and reaches the right person with a next step.",
    details: [
      "A monitoring clinician reviews every flagged event",
      "The care team — or the patient — gets a clear next step",
      "Escalation paths agreed with your team in advance",
      "Every event and action logged straight to the record",
    ],
    art: (
      <svg viewBox="0 0 220 130" className="w-full h-auto max-h-36">
        <rect x="88" y="16" width="54" height="98" rx="11" fill="var(--navy)" />
        <rect
          x="96"
          y="32"
          width="38"
          height="20"
          rx="5"
          fill="rgba(0,166,166,.3)"
        />
        <path
          d="M101 42 h18"
          stroke="var(--teal)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="142" cy="20" r="8" fill="var(--gold)" />
        <g>
          <circle cx="64" cy="84" r="16" fill="var(--teal)" />
          <path
            d="M56 84 l6 6 11 -12"
            fill="none"
            stroke="var(--white)"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section
      id="how-it-works"
      className="relative py-16 overflow-hidden flex flex-col justify-center scroll-mt-28"
      style={{
        backgroundColor: "var(--mist-2)",
        color: "var(--midnight)",
        fontFamily: "var(--sans)",
      }}
    >
      {/* Background Soft Glow Orbs matching the image design */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, var(--teal) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--gold-soft) 0%, transparent 70%)",
        }}
      />

      <div
        className="mx-auto px-6 relative z-10 w-full"
        style={{ maxWidth: "var(--maxw)" }}
      >
        {/* Section Header */}
        <header className="mb-16">
          <div className="flex justify-start mb-4">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full border"
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
              Workflow
            </div>
          </div>

          <div className="text-center flex flex-col items-center">
            <h2
              className="text-4xl sm:text-6xl font-normal tracking-tight mb-4 max-w-3xl"
              style={{ fontFamily: "var(--serif)", color: "var(--midnight)" }}
            >
              Four steps between a heartbeat and a clinician.
            </h2>
            <p
              className="text-base sm:text-lg max-w-xl"
              style={{ color: "var(--midnight)" }}
            >
              Hover - or tap - any step to follow the signal in detail.
            </p>
          </div>
        </header>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              layoutId={`card-${step.id}`}
              onClick={() => setActiveStep(step)}
              className="p-6 cursor-pointer flex flex-col justify-between group transition-all shadow-sm hover:shadow-xl"
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <motion.div
                  layoutId={`art-${step.id}`}
                  className="mb-6 flex justify-center items-center p-4 rounded-xl"
                  style={{
                    backgroundColor: "var(--midnight)",
                    border: "1px solid var(--navy-2)",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  {step.art}
                </motion.div>
                <div className="flex items-center justify-between mb-3">
                  <motion.span
                    layoutId={`num-${step.id}`}
                    className="font-bold text-sm tracking-wider"
                    style={{
                      color: "var(--gold-deep)",
                      fontFamily: "var(--mono)",
                    }}
                  >
                    {step.number}
                  </motion.span>
                  <span
                    className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--teal)" }}
                  >
                    Expand →
                  </span>
                </div>
                <motion.h3
                  layoutId={`title-${step.id}`}
                  className="text-2xl font-semibold mb-2"
                  style={{
                    fontFamily: "var(--serif)",
                    color: "var(--midnight)",
                  }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  layoutId={`summary-${step.id}`}
                  className="text-sm leading-relaxed font-medium"
                  style={{ color: "var(--midnight)" }}
                >
                  {step.summary}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {activeStep && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStep(null)}
              className="absolute inset-0 backdrop-blur-md"
              style={{ backgroundColor: "rgba(15, 37, 64, 0.4)" }}
            />

            {/* Expanded Center Card */}
            <motion.div
              layoutId={`card-${activeStep.id}`}
              className="relative w-full max-w-2xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
              }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveStep(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-full transition-colors"
                style={{
                  backgroundColor: "var(--mist)",
                  color: "var(--midnight)",
                }}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                <motion.div
                  layoutId={`art-${activeStep.id}`}
                  className="sm:col-span-1 p-4 flex items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "var(--midnight)",
                    border: "1px solid var(--navy-2)",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  {activeStep.art}
                </motion.div>

                <div className="sm:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.span
                      layoutId={`num-${activeStep.id}`}
                      className="font-bold text-lg"
                      style={{
                        color: "var(--gold-deep)",
                        fontFamily: "var(--mono)",
                      }}
                    >
                      {activeStep.number}
                    </motion.span>
                    <motion.h3
                      layoutId={`title-${activeStep.id}`}
                      className="text-3xl font-semibold"
                      style={{
                        fontFamily: "var(--serif)",
                        color: "var(--midnight)",
                      }}
                    >
                      {activeStep.title}
                    </motion.h3>
                  </div>

                  <motion.p
                    layoutId={`summary-${activeStep.id}`}
                    className="text-sm mb-6 leading-relaxed"
                    style={{ color: "var(--midnight)" }}
                  >
                    {activeStep.summary}
                  </motion.p>

                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.15, duration: 0.2 }}
                    className="space-y-2.5 pt-4"
                    style={{ borderTop: "1px solid var(--line-soft)" }}
                  >
                    {activeStep.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm"
                        style={{ color: "var(--midnight)" }}
                      >
                        <Check
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: "var(--teal)" }}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}