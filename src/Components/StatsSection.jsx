import { stats } from "../data/stats";
import StatCard from "./StatCard";
import ECGDashboard from "./ECGDashboard";

export default function StatsSection() {
  return (
    <section className="corlife-stats-section py-8 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* UNIFIED OUTER CONTAINER WITH ROUNDED BLUE BORDER */}
        <div className=" rounded-[32px] sm:rounded-[44px] p-6 sm:p-8 lg:p-12 bg-white/90 backdrop-blur-md shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: 2x2 STAT CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full">
              {stats.map((item, index) => (
                <StatCard
                  key={index}
                  {...item}
                />
              ))}
            </div>

            {/* RIGHT COLUMN: PATIENT MONITOR UI */}
            <div className="w-full">
              <ECGDashboard />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}