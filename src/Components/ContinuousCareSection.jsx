

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse,
  Activity,
  Waves,
  BatteryCharging,
  BellRing,
  Stethoscope,
  Pill,
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
} from 'lucide-react';

const TREND_DATA = {
  '24H': [
    { label: '00:00', date: 'Oct 12', value: 65, status: 'Normal' },
    { label: '04:00', date: 'Oct 12', value: 62, status: 'Normal' },
    { label: '08:00', date: 'Oct 12', value: 74, status: 'Stable' },
    { label: '12:00', date: 'Oct 12', value: 78, status: 'Elevated' },
    { label: '16:00', date: 'Oct 12', value: 72, status: 'Normal' },
    { label: '20:00', date: 'Oct 12', value: 82, status: 'High' },
    { label: '24:00', date: 'Oct 13', value: 68, status: 'Normal' },
  ],
  '7D': [
    { label: 'Day 1', date: 'Oct 06', value: 68, status: 'Normal' },
    { label: 'Day 2', date: 'Oct 07', value: 70, status: 'Normal' },
    { label: 'Day 3', date: 'Oct 08', value: 65, status: 'Normal' },
    { label: 'Day 4', date: 'Oct 09', value: 72, status: 'Stable' },
    { label: 'Day 5', date: 'Oct 10', value: 75, status: 'Elevated' },
    { label: 'Day 6', date: 'Oct 11', value: 80, status: 'High' },
    { label: 'Day 7', date: 'Oct 12', value: 74, status: 'Normal' },
  ],
  '14D': [
    { label: 'Day 1', date: 'Sep 29', value: 70, status: 'Normal' },
    { label: 'Day 3', date: 'Oct 01', value: 68, status: 'Normal' },
    { label: 'Day 5', date: 'Oct 03', value: 65, status: 'Normal' },
    { label: 'Day 7', date: 'Oct 05', value: 72, status: 'Stable' },
    { label: 'Day 9', date: 'Oct 07', value: 89, status: 'Nocturnal HR climbing - Flagged by Corlife AI' },
    { label: 'Day 11', date: 'Oct 09', value: 76, status: 'Recovering' },
    { label: 'Day 13', date: 'Oct 11', value: 71, status: 'Normal' },
    { label: 'Day 14', date: 'Oct 12', value: 70, status: 'Normal' },
  ]
};

export default function ContinuousCareSection() {
  const [range, setRange] = useState('14D');
  const [activePoint, setActivePoint] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  const currentPoints = TREND_DATA[range];

  const svgWidth = 300;
  const svgHeight = 110;
  const maxVal = 100;
  const minVal = 40;

  const pointsCoordinates = currentPoints.map((pt, index) => {
    const x = (index / (currentPoints.length - 1)) * (svgWidth - 20) + 10;
    const y = svgHeight - ((pt.value - minVal) / (maxVal - minVal)) * (svgHeight - 30) - 15;
    return { ...pt, x, y };
  });

  const pathString = pointsCoordinates.reduce((acc, pt, idx) => {
    return idx === 0 ? `M ${pt.x},${pt.y}` : `${acc} L ${pt.x},${pt.y}`;
  }, '');

  const areaString = `${pathString} L ${svgWidth - 10},${svgHeight} L 10,${svgHeight} Z`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Poppins:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

        .cc-root { 
          font-family: var(--sans);
          position: relative;
          background: var(--mist-2);
          overflow: hidden;
          padding: 100px 0;
          color: var(--ink);
        }

        /* Background Glow tuned to Brand Sheet */
        .cc-root::before {
          content: "";
          position: absolute;
          width: 550px;
          height: 550px;
          background: rgba(0, 166, 166, 0.08);
          border-radius: 50%;
          filter: blur(120px);
          top: -200px;
          left: -180px;
          pointer-events: none;
        }

        .cc-root::after {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: rgba(217, 151, 30, 0.07);
          filter: blur(140px);
          right: -150px;
          bottom: -120px;
          pointer-events: none;
        }

        .cc-outer {
          position: relative;
          max-width: var(--maxw, 1200px);
          width: 100%;
          margin: 0 auto;
          padding: 0 1.5rem;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        .cc-content { position: relative; z-index: 1; }

        @keyframes softBlink {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 6px rgba(0, 166, 166, 0.6); }
          50% { opacity: 0.4; transform: scale(0.92); box-shadow: 0 0 2px rgba(0, 166, 166, 0.2); }
        }

        .cc-badge-wrapper {
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }

        .cc-title {
          font-family: var(--serif);
          font-weight: 700;
          font-size: clamp(2.2rem, 3.2vw, 3.2rem);
          line-height: 1.15;
          letter-spacing: -0.01em;
          color: var(--navy);
          max-width: 900px;
          margin: 0 auto 2rem;
          text-align: center;
        }

        .cc-title .grad {
          background: linear-gradient(100deg, var(--teal-deep), var(--navy-2) 60%, var(--teal));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cc-grid {
          display: grid;
          grid-template-columns: 1.3fr 1px 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }
        .cc-desc {
          margin: 0;
          max-width: 520px;
          font-size: 1.03rem;
          line-height: 1.85;
          color: var(--ink-text);
          font-weight: 400;
        }
        .cc-desc p { margin: 0; }
        .cc-desc p + p { margin-top: 1rem; }

        .cc-keypoints {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2.4rem;
          height: 100%;
        }
        .cc-keypoint { display: flex; gap: 1rem; align-items: flex-start; padding: 0.25rem 0; min-height: 110px; }
        .cc-icon-chip {
          width: 42px; height: 42px;
          border-radius: var(--radius-sm, 10px);
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: var(--white);
          border: 1px solid var(--line);
          box-shadow: 0 4px 14px rgba(2, 30, 60, 0.05);
        }
        .cc-keypoint-body { flex: 1; }
        .cc-keypoint-body h3 {
          font-family: var(--serif);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--navy);
          margin: 0 0 0.2rem;
        }
        .cc-keypoint-body p {
          font-size: 0.88rem;
          line-height: 1.65;
          color: var(--ink-text);
          margin: 0;
          margin-top: 4px;
        }

        .cc-dashboard {
          position: relative;
          background: transparent;
          border: none;
          border-radius: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1.35fr 1fr 1fr;
          gap: 1.5rem;
          box-shadow: none;
          overflow: visible;
        }

        .cc-panel-title {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--mono);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--teal-deep);
          margin-bottom: 1rem;
        }

        .cc-chart-container-box {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius, 16px);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 10px 30px -10px rgba(2, 30, 60, 0.06);
          transition: border-color 0.3s var(--ease);
        }
        .cc-chart-container-box:hover {
          border-color: var(--teal);
        }

        .cc-chart-panel { position: relative; display: flex; flex-direction: column; flex: 1; }
        .cc-range-btns { display: flex; gap: 6px; margin-bottom: 1rem; }
        .cc-range-btn {
          font-family: var(--mono);
          background: var(--mist);
          border: 1px solid var(--line);
          color: var(--ink-text);
          font-size: 0.65rem;
          padding: 3px 9px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s var(--ease);
        }
        .cc-range-btn:hover { border-color: var(--teal); color: var(--teal-deep); background: var(--white); }
        .cc-range-btn.active {
          background: var(--navy);
          border-color: var(--navy);
          color: var(--white);
          box-shadow: 0 2px 8px rgba(0, 59, 115, 0.2);
        }

        .cc-chart-legend { display: flex; gap: 14px; margin-bottom: 0.85rem; }
        .cc-legend-item {
          display: flex; align-items: center; gap: 6px;
          font-family: var(--mono);
          font-size: 0.62rem;
          color: var(--ink-text);
        }
        .cc-legend-swatch { width: 12px; height: 2px; border-radius: 2px; display: inline-block; }
        .cc-legend-swatch--live { background: linear-gradient(90deg, var(--teal), var(--navy-2)); }
        .cc-legend-swatch--base { background: repeating-linear-gradient(90deg, var(--teal-deep) 0 4px, transparent 4px 7px); }

        .cc-chart-wrap { position: relative; flex: 1; cursor: crosshair; }
        .cc-chart-svg { width: 100%; height: 135px; overflow: visible; }

        .cc-tooltip {
          position: absolute;
          background: var(--navy);
          border: 1px solid var(--gold);
          color: var(--white);
          font-family: var(--mono);
          font-size: 0.65rem;
          padding: 8px 12px;
          border-radius: var(--radius-sm, 10px);
          pointer-events: none;
          z-index: 20;
          box-shadow: 0 10px 25px -5px rgba(2, 30, 60, 0.3);
          max-width: 200px;
        }
        .cc-tooltip-header { color: var(--gold-soft); font-weight: 600; margin-bottom: 2px; display: flex; align-items: center; gap: 4px; }
        .cc-tooltip-sub { color: var(--mist); font-size: 0.58rem; line-height: 1.3; }

        .cc-metrics { display: flex; flex-direction: column; gap: 0.65rem; }
        .cc-metric-card {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-sm, 10px);
          padding: 0.7rem 0.9rem;
          display: flex; align-items: center; justify-content: space-between;
          position: relative;
          overflow: hidden;
          transition: all 0.3s var(--ease-out);
        }
        .cc-metric-card:hover {
          border-color: var(--teal);
          box-shadow: 0 6px 20px rgba(0, 166, 166, 0.12);
          transform: translateY(-2px);
        }
        .cc-metric-info { display: flex; align-items: center; gap: 11px; }
        .cc-metric-icon-ring {
          width: 32px; height: 32px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .cc-metric-label { font-size: 0.68rem; color: var(--ink-text); display: block; line-height: 1.3; }
        .cc-metric-val { font-family: var(--mono); font-size: 0.82rem; font-weight: 600; color: var(--navy); }

        .cc-badge {
          font-family: var(--mono);
          font-size: 0.58rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 5px;
          text-transform: uppercase;
        }
        .badge-rose  { background: rgba(225, 29, 72, 0.1); color: #be123c; border: 1px solid rgba(225, 29, 72, 0.25); }
        .badge-amber { background: rgba(217, 151, 30, 0.12); color: var(--gold-deep); border: 1px solid rgba(217, 151, 30, 0.3); }
        .badge-teal  { background: rgba(0, 166, 166, 0.12); color: var(--teal-deep); border: 1px solid rgba(0, 166, 166, 0.3); }

        .cc-timeline { position: relative; display: flex; flex-direction: column; height: 100%; }
        .cc-timeline-list { display: flex; flex-direction: column; gap: 0.5rem; position: relative; }
        
        .cc-step-card {
          display: flex; gap: 12px; padding: 0.65rem 0.8rem;
          border-radius: var(--radius-sm, 10px);
          background: var(--white);
          border: 1px solid var(--line);
          position: relative;
          transition: all 0.3s var(--ease-out);
          cursor: default;
        }
        .cc-step-card:hover {
          background: var(--white);
          border-color: var(--teal);
          box-shadow: 0 6px 20px rgba(0, 166, 166, 0.1);
          transform: translateY(-2px);
        }

        .cc-step-rail {
          position: absolute; left: 27px; top: 40px; bottom: -12px;
          width: 1px;
          background: var(--line);
        }
        
        .cc-step-icon {
          width: 32px; height: 32px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          background: var(--mist-2);
          border: 1px solid var(--line);
          position: relative; z-index: 1;
          transition: all 0.3s var(--ease);
        }
        .cc-step-card:hover .cc-step-icon {
          background: rgba(0, 166, 166, 0.1);
          border-color: var(--teal);
        }

        .cc-step-title { font-size: 0.78rem; font-weight: 600; color: var(--navy); transition: color 0.2s ease; }
        .cc-step-card:hover .cc-step-title { color: var(--teal-deep); }

        .cc-step-desc { font-family: var(--mono); font-size: 0.64rem; color: var(--ink-text); margin-top: 2px; }

        .cc-status-banner {
          margin-top: 1rem;
          background: rgba(0, 166, 166, 0.08);
          border: 1px solid rgba(0, 166, 166, 0.3);
          color: var(--teal-deep);
          padding: 7px 13px;
          border-radius: 20px;
          font-size: 0.72rem;
          font-weight: 600;
          display: flex; align-items: center; gap: 7px;
        }

        .cc-divider {
          align-self: center;
          height: 170px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            var(--line),
            transparent
          );
        }

        @media (max-width: 992px) {
          .cc-outer { padding: 0 1rem; }
          .cc-grid { grid-template-columns: 1fr; }
          .cc-divider { display: none; }
          .cc-dashboard { grid-template-columns: 1fr; }
        }
      `}</style>

      <section 
        id="why-continuous-care" 
        className="cc-root scroll-mt-28"
        onMouseEnter={() => setAnimationKey((prev) => prev + 1)}
      >
        <div className="cc-outer">
          <div className="cc-content" key={animationKey}>
            <div className="cc-badge-wrapper">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border"
                style={{
                  color: "var(--teal-deep)",
                  borderColor: "var(--line)",
                  backgroundColor: "var(--white)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                OUTCOMES
              </div> 
            </div>

            <motion.h1
              className="cc-title"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Most emergencies <span className="grad">announce themselves hours early</span>. Someone just has to be listening.
            </motion.h1>

            <div className="cc-grid">
              <motion.div
                className="cc-desc"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p>A single clinic reading is one frame of a long film. Deterioration writes itself into the vitals long before a patient calls for help - subtle drifts in heart rate, oxygen and rhythm.</p>
                <p>Corlife catches that story while it's unfolding, providing continuous monitoring instead of relying on isolated clinic visits.</p>
              </motion.div>

              <div className="cc-divider" />

              <div className="cc-keypoints">
                <motion.div
                  className="cc-keypoint"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="cc-icon-chip">
                    <Stethoscope size={18} color="var(--teal-deep)" />
                  </div>
                  <div className="cc-keypoint-body">
                    <h3>The gap</h3>
                    <p>Patients are monitored intensively in hospital, then handed a follow-up appointment three weeks out. The riskiest window is the one with the least oversight.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="cc-keypoint"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="cc-icon-chip">
                    <ShieldCheck size={18} color="var(--gold-deep)" />
                  </div>
                  <div className="cc-keypoint-body">
                    <h3>The fix</h3>
                    <p>Carry ward-level monitoring home. Close the gap between discharge and recovery with a continuous line of sight - and a team on the other end of it.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="cc-dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Panel 1 - Interactive Trend Chart */}
              <div className="cc-chart-container-box">
                <div className="cc-chart-panel">
                  <div>
                    <div className="cc-panel-title">
                      <TrendingUp size={13} /> Live Patient Trend
                    </div>
                    <div className="cc-range-btns">
                      {['24H', '7D', '14D'].map((r) => (
                        <button
                          key={r}
                          type="button"
                          className={`cc-range-btn ${range === r ? 'active' : ''}`}
                          onClick={() => {
                            setRange(r);
                            setActivePoint(null);
                          }}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                    <div className="cc-chart-legend">
                      <span className="cc-legend-item"><i className="cc-legend-swatch cc-legend-swatch--live" />Patient trend</span>
                      <span className="cc-legend-item"><i className="cc-legend-swatch cc-legend-swatch--base" />Normal range</span>
                    </div>
                  </div>

                  <div className="cc-chart-wrap" onMouseLeave={() => setActivePoint(null)}>
                    <svg className="cc-chart-svg" viewBox={`0 0 ${svgWidth} ${svgHeight}`} fill="none">
                      <defs>
                        <linearGradient id="ecgStroke" x1="0" y1="0" x2={svgWidth} y2="0">
                          <stop offset="0%" stopColor="var(--teal)" />
                          <stop offset="60%" stopColor="var(--navy-2)" />
                          <stop offset="100%" stopColor="var(--teal-deep)" />
                        </linearGradient>
                        <linearGradient id="ecgFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {[20, 50, 80].map((y) => (
                        <line key={y} x1="0" y1={y} x2={svgWidth} y2={y} stroke="var(--line-soft)" strokeWidth="1" />
                      ))}

                      <line x1="0" y1="65" x2={svgWidth} y2="65" stroke="var(--teal-deep)" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.5" />

                      <path d={areaString} fill="url(#ecgFill)" />
                      <path d={pathString} stroke="url(#ecgStroke)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                      {pointsCoordinates.map((pt, idx) => (
                        <g key={idx}>
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r="14"
                            fill="transparent"
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={() => setActivePoint(pt)}
                          />
                          {activePoint?.label === pt.label && (
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r="9"
                              fill="none"
                              stroke="var(--gold)"
                              strokeWidth="1.5"
                              opacity="0.8"
                            >
                              <animate attributeName="r" values="5;14" dur="1.5s" repeatCount="indefinite" />
                              <animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite" />
                            </circle>
                          )}
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={activePoint?.label === pt.label ? "6" : "3.5"}
                            fill={activePoint?.label === pt.label ? "var(--gold)" : "var(--teal)"}
                            stroke="var(--white)"
                            strokeWidth="1.5"
                            style={{ transition: 'r 0.2s ease' }}
                          />
                        </g>
                      ))}
                    </svg>

                    <AnimatePresence>
                      {activePoint && (
                        <motion.div
                          className="cc-tooltip"
                          initial={{ opacity: 0, y: 5, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          style={{
                            left: `${Math.min(Math.max((activePoint.x / svgWidth) * 100, 15), 80)}%`,
                            top: `${Math.max((activePoint.y / svgHeight) * 100 - 32, 10)}%`,
                            transform: 'translateX(-50%)'
                          }}
                        >
                          <div className="cc-tooltip-header">
                            <BellRing size={11} /> {activePoint.label} ({activePoint.date})
                          </div>
                          <div className="cc-tooltip-sub">
                            HR: <strong>{activePoint.value} bpm</strong><br />
                            Status: {activePoint.status}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Panel 2 - detected metrics */}
              <div>
                <div className="cc-panel-title">
                  <BrainCircuit size={13} /> What Corlife Detected
                </div>
                <div className="cc-metrics">
                  {[
                    { icon: HeartPulse, color: '#be123c', bg: 'rgba(225, 29, 72, 0.1)', label: 'Heart Rate', val: '72 → 89 bpm', badge: 'High', badgeClass: 'badge-rose' },
                    { icon: Waves, color: 'var(--gold-deep)', bg: 'rgba(217, 151, 30, 0.12)', label: 'SpO2', val: '98% → 94%', badge: 'Trending', badgeClass: 'badge-amber' },
                    { icon: Activity, color: '#be123c', bg: 'rgba(225, 29, 72, 0.1)', label: 'Rhythm', val: 'Irregular episodes', badge: 'Detected', badgeClass: 'badge-rose' },
                    { icon: BatteryCharging, color: 'var(--teal-deep)', bg: 'rgba(0, 166, 166, 0.12)', label: 'Battery', val: '6 days remaining', badge: 'Good', badgeClass: 'badge-teal' },
                  ].map((m, i) => (
                    <motion.div
                      key={m.label}
                      className="cc-metric-card"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.35 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="cc-metric-info">
                        <div className="cc-metric-icon-ring" style={{ background: m.bg }}>
                          <m.icon size={16} color={m.color} />
                        </div>
                        <div>
                          <span className="cc-metric-label">{m.label}</span>
                          <span className="cc-metric-val">{m.val}</span>
                        </div>
                      </div>
                      <span className={`cc-badge ${m.badgeClass}`}>{m.badge}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Panel 3 - timeline */}
              <div className="cc-timeline">
                <div className="cc-panel-title">What Happens Next</div>
                <div className="cc-timeline-list">
                  {[
                    { icon: BrainCircuit, color: 'var(--navy-2)', title: 'AI Alert Sent', desc: 'Day 9 - 02:17 - Risk: High' },
                    { icon: Stethoscope, color: 'var(--teal-deep)', title: 'Clinician Notified', desc: 'Day 9 - 02:19 - Dr. Sharma reviewed' },
                    { icon: Pill, color: 'var(--gold-deep)', title: 'Action Taken', desc: 'Day 9 - 08:45 - Medication adjusted' },
                  ].map((s, i) => (
                    <motion.div
                      key={s.title}
                      className="cc-step-card"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {i < 2 && <div className="cc-step-rail" />}
                      <div className="cc-step-icon">
                        <s.icon size={14} color={s.color} />
                      </div>
                      <div>
                        <div className="cc-step-title">{s.title}</div>
                        <div className="cc-step-desc">{s.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="cc-status-banner"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ShieldCheck size={13} />
                  Risk reduced. Patient stays safe.
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}