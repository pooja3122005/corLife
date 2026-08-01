import React from 'react';
import { 
  Activity, 
  LayoutGrid, 
  Milestone, 
  Workflow, 
  Briefcase, 
  Award, 
  Star, 
  Cpu, 
  Send,
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Lock
} from 'lucide-react';
import logo from '../assets/corlife-logo-white.svg'; // Adjust the path as necessary

export default function Footer({ onRequestDemo }) {
  return (
    <footer 
      className="w-full text-white pt-14 pb-10 px-8 sm:px-12 md:px-16 lg:px-20 rounded-none"
      style={{
        backgroundColor: 'var(--midnight, #021E3C)',
        color: '#FFFFFF',
        fontFamily: 'var(--sans, Poppins, sans-serif)'
      }}
    >
      <div className="w-full max-w-[1600px] mx-auto flex flex-col justify-between">
        
        {/* ================= TOP GRID SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-10 lg:gap-x-16 pb-12 border-b border-white/10">
          
          {/* Brand & Logo Column (4/12 cols) */}
          <div className="md:col-span-4 flex flex-col justify-start space-y-6 pr-0 lg:pr-6">
            
            {/* Website Logo */}
            <div className="flex items-center gap-3">
              <a href="#home">
                <img 
                  src={logo}
                  alt="Corlife Logo" 
                  className="h-8 w-auto object-contain" 
                />
              </a>
            </div>

            <div className="space-y-3">
              {/* Slogan Header */}
              <h3 
                className="text-2xl sm:text-3xl font-medium tracking-wide text-white capitalize"
                style={{ fontFamily: 'var(--serif, Cormorant Garamond, serif)' }}
              >
                care without a pause
              </h3>

              {/* Sub-description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
                Continuous cardiac and vital-sign monitoring, from the hospital to the home.
              </p>
            </div>
          </div>

          {/* Navigation Links Column (3/12 cols) */}
          <div className="md:col-span-3 flex flex-col space-y-5">
            <h4 
              className="text-xs font-semibold uppercase tracking-widest h-6 flex items-center"
              style={{ color: 'var(--teal, #00A6A6)' }}
            >
              NAVIGATION
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300 font-medium">
              <li>
                <a href="#home" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Activity size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#platform" className="flex items-center gap-3 hover:text-white transition-colors">
                  <LayoutGrid size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Platform</span>
                </a>
              </li>
              <li>
                <a href="#care-journey" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Milestone size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Journey</span>
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Workflow size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Workflow</span>
                </a>
              </li>
              <li>
                <a href="#who-it-s-for" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Briefcase size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Solutions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Highlights Column (2/12 cols) */}
          <div className="md:col-span-2 flex flex-col space-y-5">
            <h4 
              className="text-xs font-semibold uppercase tracking-widest h-6 flex items-center"
              style={{ color: 'var(--teal, #00A6A6)' }}
            >
              EXPLORE
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300 font-medium">
              <li>
                <a href="#why-continuous-care" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Award size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Outcomes</span>
                </a>
              </li>
              <li>
                <a href="#evidence" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Star size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Reviews</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Cpu size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Jura</span>
                </a>
              </li>
              <li className="pt-1">
               
              </li>
            </ul>
          </div>

          {/* Contact Column (3/12 cols) */}
          <div className="md:col-span-3 flex flex-col space-y-5">
            <h4 
              className="text-xs font-semibold uppercase tracking-widest h-6 flex items-center"
              style={{ color: 'var(--teal, #00A6A6)' }}
            >
              CONTACT
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Mail size={17} className="shrink-0" style={{ color: 'var(--teal, #00A6A6)' }} />
                <a href="mailto:corlifehealth@gmail.com" className="hover:text-white transition-colors">
                  corlifehealth@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="shrink-0" style={{ color: 'var(--teal, #00A6A6)' }} />
                <a href="tel:+919342360785" className="hover:text-white transition-colors">
                  +91 93423 60785
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={17} className="shrink-0 mt-0.5" style={{ color: 'var(--teal, #00A6A6)' }} />
                <div className="leading-relaxed">
                  Velachery, Chennai, Tamil Nadu
                </div>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <Clock size={17} className="shrink-0" style={{ color: 'var(--teal, #00A6A6)' }} />
                <span>Care Operations &middot; 24 / 7 / 365</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM BAR SECTION ================= */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-slate-400">
          
          {/* Compliance Badge */}
          <div className="flex items-center gap-3.5 bg-[#04284D]/60 border border-slate-700/50 rounded-xl px-4 py-2.5">
            <div 
              className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#00A6A6]/10 shrink-0"
              style={{ color: 'var(--teal, #00A6A6)' }}
            >
              <Lock size={16} />
            </div>
            <span className="text-xs font-medium leading-tight text-slate-300">
              FDA-cleared &middot; HIPAA-compliant &middot; SOC 2
            </span>
          </div>

          {/* Copyright & Legal Links */}
          <div className="text-center space-y-2">
            <div className="text-slate-300">
              &copy; 2026 Corlife Healthcare Private Limited &middot; Care without a pause.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-400">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <span>&middot;</span>
              <a href="#hipaa" className="hover:text-white transition-colors">HIPAA</a>
              <span>&middot;</span>
              <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}