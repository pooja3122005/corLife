import React, { useState, useEffect, useRef } from "react";
import { FiActivity, FiShield, FiTrendingUp, FiCheckCircle } from "react-icons/fi";

const cardData = [
  {
    title: "RESUSCITATION",
    count: 3,
    label: "patients",
    description: "Immediate intervention — the team is already moving.",
     themeColor: "from-[var(--teal)] to-[var(--teal-deep)]",
    textColor: "text-[var(--teal-deep)]",
    badgeBg: "bg-teal-50 border-teal-100",
    icon: <FiActivity className="w-6 h-6  text-[var(--teal)] stroke-[2.2]" />,
  },
  {
    title: "STABILISATION",
    count: 5,
    label: "patients",
    description: "Actively deteriorating — vitals declining now.",
   themeColor: "from-[var(--teal)] to-[var(--teal-deep)]",
    textColor: "text-[var(--teal-deep)]",
    badgeBg: "bg-teal-50 border-teal-100",
    icon: <FiShield className="w-6 h-6  text-[var(--teal)] stroke-[2.2]" />,
  },
  {
    title: "ENHANCED CARE",
    count: 6,
    label: "patients",
    description: "Early signs detected — risk climbing, watched closely.",
    themeColor: "from-[var(--teal)] to-[var(--teal-deep)]",
    textColor: "text-[var(--teal-deep)]",
    badgeBg: "bg-teal-50 border-teal-100",
    icon: <FiTrendingUp className="w-6 h-6 text-[var(--teal)] stroke-[2.2]" />,
  },
  {
    title: "STANDARD CARE",
    count: 20,
    label: "patients",
    description: "Stable — under continuous monitoring all the same.",
     themeColor: "from-[var(--teal)] to-[var(--teal-deep)]",
    textColor: "text-[var(--teal-deep)]",
    badgeBg: "bg-teal-50 border-teal-100",
    icon: <FiCheckCircle className="w-6 h-6  text-[var(--teal)] stroke-[2.2]" />,
  },
];

export default function JuraRiskSection() {
  const [counts, setCounts] = useState(cardData.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = cardData.map(() => 0);
        setCounts(start);

        const duration = 1200;
        const steps = 32;
        const stepTime = duration / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += 1;
          setCounts(
            cardData.map((card) =>
              Math.min(card.count, Math.round((card.count / steps) * current))
            )
          );

          if (current >= steps) {
            clearInterval(timer);
          }
        }, stepTime);

        return () => clearInterval(timer);
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="corlife-stats-section py-24 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center font-[var(--sans)] bg-[radial-gradient(circle_at_bottom_left,#F4EADD_0%,transparent_28%),radial-gradient(circle_at_top_right,#CCE3E0_0%,transparent_35%),linear-gradient(to_bottom,#F8F7F2,#F5F4EF)]"
    >
      {/* Main Container */}
      <div className="w-full max-w-[var(--maxw)] mx-auto flex flex-col items-center">

        {/* Section Header Wrapper with Centered Badge and Heading */}
        <div className="w-full flex flex-col items-center mb-16 text-center">
          
          {/* Centered Hero Header Section with exact typography rules */}
          <div className="w-full max-w-3xl">
            <h2 
              className="font-bold tracking-tight mb-5"
              style={{ 
                fontFamily: 'var(--serif)',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '50px',
                lineHeight: '52px',
                color: 'var(--navy)'
              }}
            >
              Jura doesn't list patients. It <span className="italic" style={{ color: "var(--teal)" }}>ranks</span> them.
            </h2>
            <p 
              className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-[var(--sans)]"
              style={{ color: "var(--ink)" }}
            >
              Every patient is continuously scored from their live vitals and placed in one of four clinical states — and Jura shows the movement between states, not just the snapshot.
            </p>
          </div>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cardData.map((card, index) => (
            <div
              key={card.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--white)] p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--teal)] hover:bg-[linear-gradient(to_bottom,rgba(204,227,224,0.18),rgba(255,255,255,1))] hover:shadow-[0_16px_32px_-12px_rgba(0,161,150,0.22)] sm:p-7"
              style={{ 
                borderRadius: "var(--radius)"
              }}
            >
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 opacity-90"
                style={{
                  background: "linear-gradient(to right, #00A196 0%, #D4AF37 40%, #8A99AD 70%, #1D3557 100%)"
                }}
              />

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className={`text-xs font-bold tracking-wider ${card.textColor}`}>
                    {card.title}
                  </span>
                  <div 
                    className={`rounded-2xl border p-3 shadow-sm ${card.badgeBg}`}
                    style={{ borderRadius: "14px" }}
                  >
                    {card.icon}
                  </div>
                </div>

                <div className="mb-3 text-center">
                  <div 
                    className="font-[var(--sans)] text-4xl font-bold tracking-tight text-[var(--navy)] sm:text-5xl lg:text-6xl transition-transform duration-200 group-hover:scale-[1.01]"
                  >
                    {counts[index]}
                  </div>
                  <div className="mt-1 text-sm font-medium text-gray-500">
                    {card.label}
                  </div>
                </div>
              </div>

              <p 
                className="mt-4 border-t pt-4 text-center text-xs leading-relaxed sm:text-sm"
                style={{ 
                  color: "var(--ink)",
                  borderColor: "var(--line-soft)"
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}