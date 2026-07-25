import { useState } from "react";
import "./JourneySection.css";
import ambulance from "../assets/ambulance.png";
import er from "../assets/er.png";
import icu from "../assets/icu.png";
import discharge from "../assets/discharge.png";
import home from "../assets/home.png";

/* ─── Stage data ─────────────────────────────────────────────────────── */
const stages = [
  {
    id: 1,
    number: "01",
    stageLabel: "STAGE 01",
    stageName: "AMBULANCE",
    title: "The golden hour, already monitored",
    description:
      "Monitoring starts at pickup — ECG and vitals reach the ER before the patient does, so the team prepares instead of starting blind.",
    status: "Data captured",
    navLabel: "Ambulance",
    visualClass: "sv-ambulance",
    img:ambulance,
  },
  {
    id: 2,
    number: "02",
    stageLabel: "STAGE 02",
    stageName: "EMERGENCY ROOM",
    title: "Arrive with the story on screen",
    description:
      "Vitals keep streaming through the doors, and triage sorts by real physiological risk — the sickest are seen first.",
    status: "Triage complete",
    navLabel: "Emergency room",
    visualClass: "sv-er",
    img:er,
  },
  {
    id: 3,
    number: "03",
    stageLabel: "STAGE 03",
    stageName: "ICU & WARD",
    title: "One view across every bed",
    description:
      "Bedside monitors feed the same dashboard, so trends stay continuous through every transfer — no gaps, no starting over.",
    status: "Monitoring",
    navLabel: "ICU & ward",
    img:icu,
  },
  {
    id: 4,
    number: "04",
    stageLabel: "STAGE 04",
    stageName: "DISCHARGE",
    title: "The handoff that doesn't drop",
    description:
      "The wearable goes home in the patient's bag. Discharge is backed by continuous data, and the riskiest window stays watched.",
    status: "Discharged",
    navLabel: "Discharge",
    visualClass: "sv-discharge",
    img:discharge,
  },
  {
    id: 5,
    number: "05",
    stageLabel: "STAGE 05",
    stageName: "HOME",
    title: "Recovery, still under watch",
    description:
      "Drift is caught before it becomes a crisis — risk signals trigger an earlier follow-up, not a surprise readmission.",
    status: "At home",
    navLabel: "Home",
    visualClass: "sv-home",
    img:home,
  },
];

/* ─── Stage nav icons ─────────────────────────────────────────────────── */
function AmbulanceIcon({ active }) {
  const c = active ? "#00A6A6" : "rgba(255,255,255,0.38)";
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="1" y="10" width="16" height="9" rx="2" stroke={c} strokeWidth="1.6"/>
      <path d="M17 13h3l3 3v3h-6v-6z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="6" cy="21" r="2" stroke={c} strokeWidth="1.5"/>
      <circle cx="18" cy="21" r="2" stroke={c} strokeWidth="1.5"/>
      <path d="M7 10V7h3M8.5 5.5V8.5M7 7H10" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function ERIcon({ active }) {
  const c = active ? "#00A6A6" : "rgba(255,255,255,0.38)";
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke={c} strokeWidth="1.6"/>
      <path d="M12 8v8M8 12h8" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function ICUIcon({ active }) {
  const c = active ? "#00A6A6" : "rgba(255,255,255,0.38)";
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 17h18M3 17v-5a2 2 0 012-2h14a2 2 0 012 2v5" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M7 10V8a2 2 0 012-2h6a2 2 0 012 2v2" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      <polyline points="6,13 8,13 9,11 11,15 13,13 14,13" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function DischargeIcon({ active }) {
  const c = active ? "#00A6A6" : "rgba(255,255,255,0.38)";
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="2" stroke={c} strokeWidth="1.6"/>
      <path d="M9 7h6M9 11h6M9 15h4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="17" cy="17" r="4" fill="rgba(0,166,166,0.18)" stroke={c} strokeWidth="1.4"/>
      <path d="M15 17l1.5 1.5L18.5 15.5" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function HomeIcon({ active }) {
  const c = active ? "#00A6A6" : "rgba(255,255,255,0.38)";
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 11L12 3l9 8" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 9v10a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1V9" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 16c0-1.66 1.34-3 3-3s3 1.34 3 3" stroke={c} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
const STAGE_ICONS = [AmbulanceIcon, ERIcon, ICUIcon, DischargeIcon, HomeIcon];

/* ─── SVG visuals for right-side cards ──────────────────────────────── */
function AmbulanceSVG() {
  return (
    <svg className="sv-art" viewBox="0 0 140 80" fill="none">
      <rect x="0" y="58" width="140" height="22" fill="rgba(255,255,255,0.05)" rx="2"/>
      <line x1="20" y1="69" x2="38" y2="69" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="6 4"/>
      <line x1="58" y1="69" x2="76" y2="69" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="6 4"/>
      <line x1="96" y1="69" x2="114" y2="69" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="6 4"/>
      <rect x="28" y="30" width="76" height="28" rx="4" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <path d="M100 38 L100 58 L114 58 L114 44 L107 38 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
      <rect x="58" y="36" width="16" height="4" rx="1" fill="rgba(239,68,68,0.75)"/>
      <rect x="64" y="30" width="4" height="16" rx="1" fill="rgba(239,68,68,0.75)"/>
      <circle cx="48" cy="58" r="7" fill="rgba(30,30,40,0.6)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
      <circle cx="90" cy="58" r="7" fill="rgba(30,30,40,0.6)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
      <path d="M118 22 Q122 15 118 8" stroke="rgba(0,166,166,0.65)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M123 24 Q130 15 123 6" stroke="rgba(0,166,166,0.45)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="116" cy="15" r="2.5" fill="rgba(0,166,166,0.8)"/>
    </svg>
  );
}
function ErSVG() {
  return (
    <svg className="sv-art" viewBox="0 0 140 80" fill="none">
      <rect x="22" y="10" width="96" height="52" rx="4" fill="rgba(0,59,115,0.55)" stroke="rgba(0,166,166,0.4)" strokeWidth="1.5"/>
      <rect x="26" y="14" width="88" height="40" rx="2" fill="rgba(2,30,60,0.85)"/>
      <rect x="62" y="62" width="16" height="6" rx="2" fill="rgba(255,255,255,0.12)"/>
      <line x1="26" y1="34" x2="114" y2="34" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
      <polyline points="26,34 45,34 52,18 58,48 64,34 76,34 82,22 88,46 94,34 114,34"
        fill="none" stroke="#00A6A6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="88" cy="46" r="2.5" fill="#00A6A6"/>
      <text x="30" y="26" fontFamily="monospace" fontSize="7" fill="rgba(0,166,166,0.65)">96 BPM</text>
    </svg>
  );
}
function IcuSVG() {
  return (
    <svg className="sv-art" viewBox="0 0 140 80" fill="none">
      <rect x="12" y="46" width="116" height="16" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      <rect x="12" y="30" width="54" height="18" rx="3" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <ellipse cx="39" cy="39" rx="14" ry="8" fill="rgba(255,255,255,0.1)"/>
      <line x1="100" y1="12" x2="100" y2="46" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <rect x="84" y="6" width="32" height="22" rx="3" fill="rgba(0,59,115,0.75)" stroke="rgba(0,166,166,0.5)" strokeWidth="1"/>
      <polyline points="86,17 89,17 92,11 94,22 96,17 100,17 103,13 105,20 108,17 114,17"
        fill="none" stroke="#00A6A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function DischargeSVG() {
  return (
    <svg className="sv-art" viewBox="0 0 140 80" fill="none">
      <rect x="50" y="16" width="40" height="48" rx="12" fill="rgba(0,59,115,0.65)" stroke="rgba(0,166,166,0.5)" strokeWidth="1.5"/>
      <rect x="54" y="20" width="32" height="40" rx="9" fill="rgba(2,30,60,0.9)"/>
      <path d="M65 42 C65 39 68 37 70 40 C72 37 75 39 75 42 C75 45 70 48 70 48 C70 48 65 45 65 42Z" fill="rgba(217,151,30,0.8)"/>
      <text x="57" y="32" fontFamily="monospace" fontSize="5.5" fill="rgba(0,166,166,0.8)">72 bpm</text>
      <circle cx="97" cy="18" r="8" fill="rgba(0,166,166,0.15)" stroke="rgba(0,166,166,0.5)" strokeWidth="1"/>
      <path d="M93 18 L96.5 21.5 L101.5 14" stroke="#00A6A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function HomeSVG() {
  return (
    <svg className="sv-art" viewBox="0 0 140 80" fill="none">
      <path d="M35 72 L35 42 L70 16 L105 42 L105 72 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <path d="M28 46 L70 12 L112 46" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinejoin="round"/>
      <rect x="58" y="52" width="24" height="20" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.14)" strokeWidth="1"/>
      <rect x="39" y="44" width="16" height="14" rx="2" fill="rgba(217,151,30,0.12)" stroke="rgba(217,151,30,0.28)" strokeWidth="1"/>
      <rect x="85" y="44" width="16" height="14" rx="2" fill="rgba(217,151,30,0.12)" stroke="rgba(217,151,30,0.28)" strokeWidth="1"/>
      <circle cx="17" cy="27" r="2.5" fill="rgba(0,166,166,0.65)"/>
    </svg>
  );
}
const stageVisuals = [AmbulanceSVG, ErSVG, IcuSVG, DischargeSVG, HomeSVG];

/* ═══════════════════════════════════════════════════════════════════════
   STAGE PANELS — left phone mockup content changes per stage
   ═══════════════════════════════════════════════════════════════════════ */

/* ── Stage 01: Ambulance — Live ECG + vitals ── */
function AmbulancePanel() {
  return (
    <div className="sp-root">
      <div className="sp-header">
        <span className="sp-title">UNIT 12 → CITY GENERAL</span>
        <span className="sp-badge badge-gold">ETA 6 MIN</span>
      </div>

      {/* Animated ECG */}
      <div className="sp-ecg-box">
        <svg className="sp-ecg-svg" viewBox="0 0 380 68" preserveAspectRatio="none">
          {[17,34,51].map(y => (
            <line key={y} x1="0" y1={y} x2="380" y2={y} stroke="rgba(0,255,136,0.05)" strokeWidth="0.5"/>
          ))}
          {[76,152,228,304].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="68" stroke="rgba(0,255,136,0.05)" strokeWidth="0.5"/>
          ))}
          <path
            className="sp-ecg-path"
            fill="none"
            stroke="#00ff88"
            strokeWidth="2"
            d="M0,34 L36,34 L42,27 L48,41 L52,34 L84,34 L88,8 L92,60 L96,34 L116,34 L122,27 L128,34 L160,34 L164,8 L168,60 L172,34 L192,34 L198,27 L204,34 L236,34 L240,8 L244,60 L248,34 L268,34 L274,27 L280,34 L312,34 L316,8 L320,60 L324,34 L380,34"
          />
        </svg>
      </div>

      {/* Vital boxes */}
      <div className="sp-vitals-grid">
        {[
          { val: "112", key: "HR" },
          { val: "94",  key: "SpO₂" },
          { val: "22",  key: "RESP" },
          { val: "100/68", key: "NIBP" },
        ].map((v, i) => (
          <div key={i} className="sp-vital-box" style={{ animationDelay: `${i * 0.07}s` }}>
            <span className="sp-vval">{v.val}</span>
            <span className="sp-vkey">{v.key}</span>
          </div>
        ))}
      </div>

      <div className="sp-footer-note">
        <span className="sp-dot-live" />
        Crew ↔ ER video link · vitals arriving before the patient
      </div>
    </div>
  );
}

/* ── Stage 02: ER Triage — EWS bar chart ── */
const erPatients = [
  { id: "CJ104", ews: 9, label: "RESUS",     color: "#ef4444", pct: 93 },
  { id: "CJ087", ews: 5, label: "STABILISE", color: "#f59e0b", pct: 54 },
  { id: "CJ121", ews: 3, label: "ENHANCED",  color: "#84cc16", pct: 32 },
  { id: "CJ092", ews: 1, label: "STANDARD",  color: "#22c55e", pct: 11 },
];

function ERPanel() {
  return (
    <div className="sp-root">
      <div className="sp-header">
        <span className="sp-title">ER TRIAGE · LIVE</span>
        <span className="sp-badge badge-teal">4 INCOMING</span>
      </div>

      <div className="sp-patients">
        {erPatients.map((p, i) => (
          <div key={p.id} className="sp-patient-row" style={{ animationDelay: `${i * 0.09}s` }}>
            <span className="sp-pid">{p.id}</span>
            <div className="sp-bar-track">
              <div
                className="sp-bar-fill"
                style={{ width: `${p.pct}%`, background: p.color, animationDelay: `${0.15 + i * 0.09}s` }}
              />
            </div>
            <div className="sp-ews-group">
              <span className="sp-ews-badge" style={{ color: p.color, borderColor: p.color }}>
                EWS {p.ews}
              </span>
              <span className="sp-action" style={{ color: p.color }}>{p.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="sp-footer-note">
        <span className="sp-dot-live" />
        Sorted by physiological risk — not by arrival order
      </div>
    </div>
  );
}

/* ── Stage 03: ICU Ward — 2×2 bed monitor grid ── */
const icuBeds = [
  { id: "BED 01", hr: 72,  ews: 1, alert: false,
    wave: "M0,15 C15,15 20,9 30,9 C40,9 45,15 60,15 C75,15 80,21 90,21 C100,21 106,15 120,15" },
  { id: "BED 03", hr: 104, ews: 6, alert: true,
    wave: "M0,18 C10,18 15,10 22,7 C29,4 36,15 50,15 C64,15 70,7 80,8 C90,9 100,18 120,18" },
  { id: "BED 04", hr: 64,  ews: 1, alert: false,
    wave: "M0,16 C14,16 20,10 28,10 C36,10 44,16 56,16 C68,16 74,20 86,20 C98,20 106,16 120,16" },
  { id: "BED 06", hr: 81,  ews: 2, alert: false,
    wave: "M0,14 C12,14 18,9 28,9 C38,9 46,14 58,14 C70,14 78,19 90,18 C102,17 108,14 120,14" },
];

function ICUPanel() {
  return (
    <div className="sp-root">
      <div className="sp-header">
        <span className="sp-title">WARD B · CONTINUOUS</span>
        <span className="sp-badge badge-gold">1 ALERT</span>
      </div>

      <div className="sp-bed-grid">
        {icuBeds.map((bed, i) => (
          <div
            key={bed.id}
            className={`sp-bed-card${bed.alert ? " sp-bed-alert" : ""}`}
            style={{ animationDelay: `${i * 0.09}s` }}
          >
            <span className="sp-bed-id">{bed.id}</span>
            <svg className="sp-bed-wave" viewBox="0 0 120 30" preserveAspectRatio="none">
              <path
                d={bed.wave}
                stroke={bed.alert ? "#f59e0b" : "#00A6A6"}
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                className="sp-wave-path"
              />
            </svg>
            <div className="sp-bed-bottom">
              <span className="sp-bed-hr" style={{ color: bed.alert ? "#f59e0b" : "#00A6A6" }}>
                {bed.hr}
              </span>
              <span className="sp-bed-ews">EWS {bed.ews}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="sp-footer-note">
        <span className="sp-dot-live" />
        Trends continuous across ER → ICU → ward
      </div>
    </div>
  );
}

/* ── Stage 04: Discharge — criteria checklist ── */
const dischargeChecks = [
  { label: "48 h of stable trends",          tag: "MET",  live: false },
  { label: "EWS ≤ 2 sustained",              tag: "MET",  live: false },
  { label: "Home patch paired & streaming",   tag: "LIVE", live: true  },
];

function DischargePanel() {
  return (
    <div className="sp-root">
      <div className="sp-header">
        <span className="sp-title">DISCHARGE REVIEW · CJ062</span>
        <span className="sp-badge badge-teal">CLEARED</span>
      </div>

      <div className="sp-checklist">
        {dischargeChecks.map((item, i) => (
          <div key={i} className="sp-check-row" style={{ animationDelay: `${i * 0.13}s` }}>
            <span className="sp-check-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7.5" stroke="#00A6A6" strokeWidth="1.2"/>
                <path d="M5.5 9L7.8 11.5L12.5 6" stroke="#00A6A6" strokeWidth="1.4"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="sp-check-label">{item.label}</span>
            <span className={`sp-check-tag${item.live ? " sct-live" : " sct-met"}`}>{item.tag}</span>
          </div>
        ))}
      </div>

      <div className="sp-footer-note" style={{ marginTop: "auto" }}>
        <span className="sp-dot-live" />
        Oversight travels home with the patient
      </div>
    </div>
  );
}

/* ── Stage 05: Home — 7-day HR trend chart ── */
function HomePanel() {
  return (
    <div className="sp-root">
      <div className="sp-header">
        <span className="sp-title">RESTING HR · 7 DAYS</span>
      </div>

      <div className="sp-home-chart">
        <svg viewBox="0 0 280 58" preserveAspectRatio="none" className="sp-chart-svg">
          <defs>
            <linearGradient id="hrAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00A6A6" stopOpacity="0.22"/>
              <stop offset="100%" stopColor="#00A6A6" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* Subtle grid */}
          {[15, 29, 43].map(y => (
            <line key={y} x1="0" y1={y} x2="280" y2={y}
              stroke="rgba(0,166,166,0.08)" strokeWidth="0.5"/>
          ))}
          {/* Area fill */}
          <path
            d="M0,46 C28,45 48,40 68,36 C88,32 104,25 128,20 C152,15 164,22 184,24 C204,26 224,32 244,37 C264,41 274,43 280,44 L280,58 L0,58 Z"
            fill="url(#hrAreaGrad)"
          />
          {/* Main line */}
          <path
            className="sp-hr-line"
            d="M0,46 C28,45 48,40 68,36 C88,32 104,25 128,20 C152,15 164,22 184,24 C204,26 224,32 244,37 C264,41 274,43 280,44"
            stroke="#00A6A6"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Peak gold dot */}
          <circle cx="128" cy="20" r="3.5" fill="#D9971E" className="sp-peak-dot"/>
          <circle cx="128" cy="20" r="7"   fill="rgba(217,151,30,0.18)" className="sp-peak-ring"/>
        </svg>
      </div>

      <div className="sp-vitals-grid sp-vitals-3col">
        {[
          { val: "67",   key: "HR"   },
          { val: "97",   key: "SpO₂" },
          { val: "36.6", key: "TEMP" },
        ].map((v, i) => (
          <div key={i} className="sp-vital-box" style={{ animationDelay: `${i * 0.08}s` }}>
            <span className="sp-vval">{v.val}</span>
            <span className="sp-vkey">{v.key}</span>
          </div>
        ))}
      </div>

      <div className="sp-footer-note">
        <span className="sp-dot-live" />
        Care team watching · next review Thu 09:00
      </div>
    </div>
  );
}

const STAGE_PANELS = [AmbulancePanel, ERPanel, ICUPanel, DischargePanel, HomePanel];

/* ─── Main Component ─────────────────────────────────────────────────── */
export default function JourneySection() {
  const [activeIdx, setActiveIdx] = useState(0); // default: Stage 01 (Ambulance)

  const progressPct = (activeIdx / (stages.length - 1)) * 100;
  const ActivePanel = STAGE_PANELS[activeIdx];

  return (
    <section className="journey-section">
      {/* ── HEADER ── */}
      <div className="journey-header">
        <p className="journey-label">One connected ecosystem</p>
        <h2 className="journey-title">
          Care that travels with the patient &mdash;
          <br />
          <span className="journey-title-accent">through every handoff.</span>
        </h2>
        <p className="journey-subtitle">
          From the ambulance to the living room, Corlife holds one continuous
          line on every patient. Each stage inherits the last stage&rsquo;s
          context, so no handoff ever drops the signal.
        </p>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="journey-main">

        {/* ── LEFT: ANIMATED STAGE PANEL ── */}
        <div className="journey-phone" aria-label="Stage dashboard">

          {/* Dynamic visualization — remounts on stage change to restart animations */}
          <div className="sp-wrapper" key={activeIdx}>
            <ActivePanel />
          </div>

          {/* Stage navigation list */}
          <nav className="phone-nav" aria-label="Patient journey stages">
            {stages.map((stage, i) => {
              const isActive = i === activeIdx;
              const isDone   = i < activeIdx;
              const isNext   = i === activeIdx + 1;
              let cls = "pni";
              if (isActive) cls += " pni-active";
              else if (isDone)  cls += " pni-done";
              else if (isNext)  cls += " pni-next";
              return (
                <button
                  key={stage.id}
                  id={`phone-nav-stage-${stage.id}`}
                  className={cls}
                  onClick={() => setActiveIdx(i)}
                  aria-current={isActive ? "step" : undefined}
                >
                  <span className="pni-num">{stage.number}</span>
                  <span className="pni-label">{stage.navLabel}</span>
                </button>
              );
            })}
          </nav>

          {/* Footer progress */}
          <div className="phone-footer">
            <span className="pf-label">
              {String(activeIdx + 1).padStart(2, "0")}
              <span> / {String(stages.length).padStart(2, "0")}</span>
            </span>
            <div className="pf-track">
              <div
                className="pf-fill"
                style={{ width: `${((activeIdx + 1) / stages.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: STAGE CARDS ── */}
        <div className="journey-right-col">
          <div className="journey-stages-scroller">
            <div className="journey-stages">

              {/* Timeline rail */}
              <div className="journey-timeline" aria-hidden="true">
                <div className="timeline-done" style={{ width: `${progressPct}%` }} />
              </div>

              {stages.map((stage, i) => {
                const isActive = i === activeIdx;
                const isDone   = i < activeIdx;

                return (
                  <div
                    key={stage.id}
                    id={`stage-col-${stage.id}`}
                    className={`stage-col${isActive ? " sc-active" : ""}${isDone ? " sc-done" : ""}`}
                    onClick={() => setActiveIdx(i)}
                    role="button"
                    tabIndex={0}
                    aria-label={`${stage.stageName} — ${isActive ? "current stage" : isDone ? "completed" : "upcoming"}`}
                    onKeyDown={(e) => e.key === "Enter" && setActiveIdx(i)}
                  >
                    {/* Timeline node */}
                    <div className="stage-circle">
                      {isDone ? (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <span className="circle-num">{stage.number}</span>
                      )}
                    </div>

                    {/* Card */}
                    <div className="stage-card">
                      <div className="stage-visual">
                        <img
                          src={stage.img}
                          alt={stage.stageName}
                          className="stage-card-img"
                        />
                      </div>
                      <div className="stage-body">
                        <p className="stage-meta">
                          {stage.stageLabel}
                          <span className="meta-sep"> · </span>
                          {stage.stageName}
                        </p>
                        <h3 className="stage-title">{stage.title}</h3>
                        <p className="stage-desc">{stage.description}</p>
                        <div className="stage-status">
                          <div className={`status-check${i <= activeIdx ? " check-done" : ""}`}>
                            {i <= activeIdx ? "✓" : "·"}
                          </div>
                          <div className="status-info">
                            <span className="status-label">{stage.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

