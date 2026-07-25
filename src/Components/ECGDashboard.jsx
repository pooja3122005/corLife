import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function ECGDashboard() {
  const [hr, setHr] = useState(120);
  const [spo2, setSpo2] = useState(98);
  const [resp, setResp] = useState(15);
  const [temp, setTemp] = useState("36.8");

  useEffect(() => {
    const interval = setInterval(() => {
      setHr(118 + Math.floor(Math.random() * 5));
      setSpo2(97 + Math.floor(Math.random() * 3));
      setResp(14 + Math.floor(Math.random() * 3));
      setTemp((36.7 + Math.random() * 0.3).toFixed(1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[640px] mx-auto py-4">
      {/* CSS Keyframes for Waveforms & Floating Animation */}
      <style>{`
        @keyframes scrollWave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200px); }
        }
        .animate-wave-ecg {
          animation: scrollWave 3s linear infinite;
        }
        .animate-wave-pleth {
          animation: scrollWave 4s linear infinite;
        }
        .animate-wave-resp {
          animation: scrollWave 6s linear infinite;
        }
        @keyframes subtleFloat1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes subtleFloat2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(7px); }
        }
        .animate-float-top {
          animation: subtleFloat1 4.5s ease-in-out infinite;
        }
        .animate-float-bottom {
          animation: subtleFloat2 5.2s ease-in-out infinite;
        }
      `}</style>

      {/* FLOATING BADGE 1: Reviewed by a clinician (Top Right) */}
      <div className="absolute -top-2 right-2 sm:right-6 z-20 animate-float-top pointer-events-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3 sm:p-3.5 border border-slate-100/90 flex items-center gap-3 min-w-[210px] hover:scale-105 transition-transform duration-300">
          <div className="w-9 h-9 rounded-full bg-[#1A385C] text-white flex items-center justify-center font-bold text-xs shadow-sm">
            MK
          </div>
          <div>
            <span className="font-bold text-[#0D2847] text-xs sm:text-sm leading-tight block">
              Reviewed by a clinician
            </span>
            <span className="text-[11px] text-slate-500 block mt-0.5 font-medium">
              Care Operations · 24/7
            </span>
          </div>
        </div>
      </div>

      {/* FLOATING BADGE 2: Rhythm normal (Bottom Left) */}
      <div className="absolute -bottom-2 left-2 sm:left-4 z-20 animate-float-bottom pointer-events-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3 sm:p-3.5 border border-slate-100/90 flex items-center gap-3 min-w-[200px] hover:scale-105 transition-transform duration-300">
          <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs border border-teal-100 shadow-sm">
            <FaCheck />
          </div>
          <div>
            <span className="font-bold text-[#0D2847] text-xs sm:text-sm leading-tight block">
              Rhythm normal
            </span>
            <span className="text-[11px] text-slate-500 block mt-0.5 font-medium">
              AF check cleared · 2s ago
            </span>
          </div>
        </div>
      </div>

      {/* MAIN ICU MONITOR FRAME */}
      <div className="bg-[#152A4A] border border-slate-700/60 rounded-[24px] shadow-2xl overflow-hidden text-white font-sans">
        
        {/* MONITOR TOP HEADER BAR */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0F1E36] border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <span className="bg-[#0B3A5A] text-[#00E5FF] text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border border-[#00E5FF]/40 tracking-wider">
              BED 07
            </span>
            <span className="text-slate-200 font-mono text-xs sm:text-sm font-medium tracking-wide">
              R. Sharma &nbsp;–&nbsp; 58 M &nbsp;–&nbsp; MRN 48213
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block bg-[#1D3554] text-slate-300 text-[10px] px-2.5 py-0.5 rounded uppercase tracking-wider font-semibold border border-slate-600/40">
              ADULT
            </span>
            <div className="flex items-center gap-1.5 text-[#22C55E] text-xs font-bold font-mono px-2 py-0.5 rounded bg-[#22C55E]/10 border border-[#22C55E]/30">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              LIVE
            </div>
          </div>
        </div>

        {/* MONITOR MAIN BODY GRID (Waveforms Left + Vitals Right) */}
        <div className="grid grid-cols-[1fr_115px] sm:grid-cols-[1fr_145px] bg-[#0E1C30]">
          
          {/* LEFT: WAVEFORMS SECTION */}
          <div className="p-3 sm:p-4 space-y-3 border-r border-slate-800/80">
            
            {/* ECG WAVEFORM */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#22C55E] font-bold tracking-wider">
                  ECG - II
                </span>
                <span className="text-slate-500 text-[10px]">
                  1 mV · 25 mm/s
                </span>
              </div>
              <div className="relative h-14 sm:h-16 w-full bg-[#0A1424] rounded-lg border border-slate-800/60 overflow-hidden bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px]">
                <svg className="w-full h-full" viewBox="0 0 600 60" preserveAspectRatio="none">
                  <g className="animate-wave-ecg">
                    <path
                      d="
                        M 0 30 L 30 30 L 38 28 L 43 8 L 48 52 L 53 30 L 63 30 L 73 22 L 83 30 L 130 30 
                        L 138 28 L 143 8 L 148 52 L 153 30 L 163 30 L 173 22 L 183 30 L 230 30 
                        L 238 28 L 243 8 L 248 52 L 253 30 L 263 30 L 273 22 L 283 30 L 330 30 
                        L 338 28 L 343 8 L 348 52 L 353 30 L 363 30 L 373 22 L 383 30 L 430 30 
                        L 438 28 L 443 8 L 448 52 L 453 30 L 463 30 L 473 22 L 483 30 L 530 30 
                        L 538 28 L 543 8 L 548 52 L 553 30 L 563 30 L 573 22 L 583 30 L 630 30
                        L 638 28 L 643 8 L 648 52 L 653 30 L 663 30 L 673 22 L 683 30 L 730 30 
                        L 738 28 L 743 8 L 748 52 L 753 30 L 763 30 L 773 22 L 783 30 L 830 30
                      "
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* PLETH WAVEFORM */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#38BDF8] font-bold tracking-wider">
                  PLETH
                </span>
              </div>
              <div className="relative h-12 sm:h-14 w-full bg-[#0A1424] rounded-lg border border-slate-800/60 overflow-hidden bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px]">
                <svg className="w-full h-full" viewBox="0 0 600 50" preserveAspectRatio="none">
                  <g className="animate-wave-pleth">
                    <path
                      d="
                        M 0 35 C 15 15, 25 10, 35 35 S 55 42, 65 35 
                        C 80 15, 90 10, 100 35 S 120 42, 130 35 
                        C 145 15, 155 10, 165 35 S 185 42, 195 35 
                        C 210 15, 220 10, 230 35 S 250 42, 260 35 
                        C 275 15, 285 10, 295 35 S 315 42, 325 35 
                        C 340 15, 350 10, 360 35 S 380 42, 390 35
                        C 405 15, 415 10, 425 35 S 445 42, 455 35
                        C 470 15, 480 10, 490 35 S 510 42, 520 35
                        C 535 15, 545 10, 555 35 S 575 42, 585 35
                        C 600 15, 610 10, 620 35 S 640 42, 650 35
                        C 665 15, 675 10, 685 35 S 705 42, 715 35
                        C 730 15, 740 10, 750 35 S 770 42, 780 35
                      "
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* RESP WAVEFORM */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#FACC15] font-bold tracking-wider">
                  RESP
                </span>
              </div>
              <div className="relative h-10 sm:h-12 w-full bg-[#0A1424] rounded-lg border border-slate-800/60 overflow-hidden bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px]">
                <svg className="w-full h-full" viewBox="0 0 600 40" preserveAspectRatio="none">
                  <g className="animate-wave-resp">
                    <path
                      d="
                        M 0 25 C 25 10, 50 10, 75 25 C 100 40, 125 40, 150 25
                        C 175 10, 200 10, 225 25 C 250 40, 275 40, 300 25
                        C 325 10, 350 10, 375 25 C 400 40, 425 40, 450 25
                        C 475 10, 500 10, 525 25 C 550 40, 575 40, 600 25
                        C 625 10, 650 10, 675 25 C 700 40, 725 40, 750 25
                        C 775 10, 800 10, 825 25 C 850 40, 875 40, 900 25
                      "
                      fill="none"
                      stroke="#FACC15"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>
            </div>

          </div>

          {/* RIGHT: VITALS NUMERIC READOUTS */}
          <div className="p-3 sm:p-4 bg-[#091526] flex flex-col justify-between text-right font-mono border-l border-slate-800/80">
            
            {/* HR */}
            <div className="border-b border-slate-800/60 pb-2">
              <div className="text-[10px] text-slate-400 font-sans uppercase tracking-wider font-semibold">
                HR
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#22C55E] leading-none mt-0.5">
                {hr}
              </div>
            </div>

            {/* SpO2 */}
            <div className="border-b border-slate-800/60 py-2">
              <div className="text-[10px] text-slate-400 font-sans uppercase tracking-wider font-semibold">
                SpO₂
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#38BDF8] leading-none mt-0.5">
                {spo2}
                <span className="text-xs font-normal text-slate-400 ml-0.5">%</span>
              </div>
            </div>

            {/* RESP */}
            <div className="border-b border-slate-800/60 py-2">
              <div className="text-[10px] text-slate-400 font-sans uppercase tracking-wider font-semibold">
                RESP
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#FACC15] leading-none mt-0.5">
                {resp}
                <span className="text-xs font-normal text-slate-400 ml-0.5">rpm</span>
              </div>
            </div>

            {/* NIBP */}
            <div className="border-b border-slate-800/60 py-2">
              <div className="flex items-center justify-between text-[9px] text-slate-400 font-sans">
                <span className="uppercase font-semibold tracking-wider">NIBP</span>
                <span>10:42</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
                118/78
              </div>
              <div className="text-[10px] text-slate-400 font-normal">
                (91) mmHg
              </div>
            </div>

            {/* TEMP */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-[9px] text-slate-400 font-sans">
                <span className="uppercase font-semibold tracking-wider">TEMP</span>
                <span>skin</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-slate-200 leading-tight mt-0.5">
                {temp} <span className="text-xs font-normal text-slate-400">°C</span>
              </div>
            </div>

          </div>

        </div>

        {/* MONITOR FOOTER BAR */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#0A1424] border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5 text-[#22C55E]">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            No active alarms
          </div>
          <div className="text-[10px] text-slate-500 hidden sm:block">
            Lead II · Auto NIBP 30 min · Corlife patch
          </div>
        </div>

      </div>
    </div>
  );
}