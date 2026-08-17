// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Activity,
//   LayoutGrid,
//   Milestone,
//   Workflow,
//   Briefcase,
//   Award,
//   Star,
//   Cpu,
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
//   Lock,
// } from 'lucide-react';
// import logo from '../assets/corlife-logo-white.svg';

// const homeLink = (variant, hash) => (variant === 'jura' ? `/${hash}` : hash);
// const sectionLink = (variant, hash) => (variant === 'jura' ? `/${hash}` : hash);

// export default function Footer({ onRequestDemo, variant = 'home' }) {
//   const isJura = variant === 'jura';

//   return (
//     <footer
//       className="w-full text-white pt-14 pb-10 px-8 sm:px-12 md:px-16 lg:px-20 rounded-none"
//       style={{
//         backgroundColor: 'var(--midnight, #021E3C)',
//         color: '#FFFFFF',
//         fontFamily: 'var(--sans, Poppins, sans-serif)',
//       }}
//     >
//       <div className="w-full max-w-[1600px] mx-auto flex flex-col justify-between">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-10 lg:gap-x-16 pb-12 border-b border-white/10">
//           <div className="md:col-span-4 flex flex-col justify-start space-y-6 pr-0 lg:pr-6">
//             <div className="flex items-center gap-3">
//               <Link to={isJura ? '/' : '/'}>
//                 <img
//                   src={logo}
//                   alt="Corlife Logo"
//                   className="h-8 w-auto object-contain"
//                 />
//               </Link>
//             </div>

//             <div className="space-y-3">
//               <h3
//                 className="text-2xl sm:text-3xl font-medium tracking-wide text-white capitalize"
//                 style={{ fontFamily: 'var(--serif, Cormorant Garamond, serif)' }}
//               >
//                 care without a pause
//               </h3>

//               <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
//                 Continuous cardiac and vital-sign monitoring, from the hospital to the home.
//               </p>
//             </div>
//           </div>

//           <div className="md:col-span-3 flex flex-col space-y-5">
//             <h4
//               className="text-xs font-semibold uppercase tracking-widest h-6 flex items-center"
//               style={{ color: 'var(--teal, #00A6A6)' }}
//             >
//               NAVIGATION
//             </h4>
//             <ul className="space-y-3.5 text-sm text-slate-300 font-medium">
//               <li>
//                 <a
//                   href={sectionLink(variant, '#home')}
//                   className="flex items-center gap-3 hover:text-white transition-colors"
//                 >
//                   <Activity size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
//                   <span>Home</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={sectionLink(variant, '#platform')}
//                   className="flex items-center gap-3 hover:text-white transition-colors"
//                 >
//                   <LayoutGrid size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
//                   <span>Platform</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={sectionLink(variant, '#care-journey')}
//                   className="flex items-center gap-3 hover:text-white transition-colors"
//                 >
//                   <Milestone size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
//                   <span>Journey</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={sectionLink(variant, '#how-it-works')}
//                   className="flex items-center gap-3 hover:text-white transition-colors"
//                 >
//                   <Workflow size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
//                   <span>Workflow</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={sectionLink(variant, '#who-it-s-for')}
//                   className="flex items-center gap-3 hover:text-white transition-colors"
//                 >
//                   <Briefcase size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
//                   <span>Solutions</span>
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="md:col-span-2 flex flex-col space-y-5">
//             <h4
//               className="text-xs font-semibold uppercase tracking-widest h-6 flex items-center"
//               style={{ color: 'var(--teal, #00A6A6)' }}
//             >
//               EXPLORE
//             </h4>
//             <ul className="space-y-3.5 text-sm text-slate-300 font-medium">
//               <li>
//                 <a
//                   href={sectionLink(variant, '#why-continuous-care')}
//                   className="flex items-center gap-3 hover:text-white transition-colors"
//                 >
//                   <Award size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
//                   <span>Outcomes</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={sectionLink(variant, '#evidence')}
//                   className="flex items-center gap-3 hover:text-white transition-colors"
//                 >
//                   <Star size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
//                   <span>Reviews</span>
//                 </a>
//               </li>
//               <li>
//                 <Link to="/jura" className="flex items-center gap-3 hover:text-white transition-colors">
//                   <Cpu size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
//                   <span>Jura</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="md:col-span-3 flex flex-col space-y-5">
//             <h4
//               className="text-xs font-semibold uppercase tracking-widest h-6 flex items-center"
//               style={{ color: 'var(--teal, #00A6A6)' }}
//             >
//               CONTACT
//             </h4>
//             <ul className="space-y-4 text-sm text-slate-300">
//               <li className="flex items-center gap-3">
//                 <Mail size={17} className="shrink-0" style={{ color: 'var(--teal, #00A6A6)' }} />
//                 <a href="mailto:corlifehealth@gmail.com" className="hover:text-white transition-colors">
//                   corlifehealth@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={17} className="shrink-0" style={{ color: 'var(--teal, #00A6A6)' }} />
//                 <a href="tel:+919342360785" className="hover:text-white transition-colors">
//                   +91 93423 60785
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <MapPin size={17} className="shrink-0 mt-0.5" style={{ color: 'var(--teal, #00A6A6)' }} />
//                 <div className="leading-relaxed">Velachery, Chennai, Tamil Nadu</div>
//               </li>
//               <li className="flex items-center gap-3 pt-1">
//                 <Clock size={17} className="shrink-0" style={{ color: 'var(--teal, #00A6A6)' }} />
//                 <span>Care Operations &middot; 24 / 7 / 365</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-slate-400">
//           <div className="flex items-center gap-3.5 bg-[#04284D]/60 border border-slate-700/50 rounded-xl px-4 py-2.5">
//             <div
//               className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#00A6A6]/10 shrink-0"
//               style={{ color: 'var(--teal, #00A6A6)' }}
//             >
//               <Lock size={16} />
//             </div>
//             <span className="text-xs font-medium leading-tight text-slate-300">
//               FDA-cleared &middot; HIPAA-compliant &middot; SOC 2
//             </span>
//           </div>

//           <div className="text-center space-y-2">
//             <div className="text-slate-300">
//               &copy; 2026 Corlife Healthcare Private Limited &middot; Care without a pause.
//             </div>
//             <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-400">
//               <a href={sectionLink(variant, '#privacy')} className="hover:text-white transition-colors">Privacy</a>
//               <span>&middot;</span>
//               <a href={sectionLink(variant, '#hipaa')} className="hover:text-white transition-colors">HIPAA</a>
//               <span>&middot;</span>
//               <a href={sectionLink(variant, '#terms')} className="hover:text-white transition-colors">Terms</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Activity,
  LayoutGrid,
  Milestone,
  Workflow,
  Briefcase,
  Award,
  Star,
  Cpu,
  Mail,
  Phone,
  MapPin,
  Clock,
  Lock,
} from 'lucide-react';
import logo from '../assets/corlife-logo-white.svg';

export default function Footer({ onRequestDemo, variant = 'home' }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (hash, e) => {
    e.preventDefault();
    
    if (hash === '/jura') {
      navigate('/jura');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      if (hash) {
        let attempts = 0;
        const maxAttempts = 20;
        const checkElement = setInterval(() => {
          attempts++;
          const element = document.querySelector(hash);
          if (element) {
            clearInterval(checkElement);
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (attempts >= maxAttempts) {
            clearInterval(checkElement);
          }
        }, 50);
      }
    } else if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      className="w-full text-white pt-14 pb-10 px-8 sm:px-12 md:px-16 lg:px-20 rounded-none"
      style={{
        backgroundColor: 'var(--midnight, #021E3C)',
        color: '#FFFFFF',
        fontFamily: 'var(--sans, Poppins, sans-serif)',
      }}
    >
      <div className="w-full max-w-[1600px] mx-auto flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-10 lg:gap-x-16 pb-12 border-b border-white/10">
          <div className="md:col-span-4 flex flex-col justify-start space-y-6 pr-0 lg:pr-6">
            <div className="flex items-center gap-3">
              <Link to="/">
                <img
                  src={logo}
                  alt="Corlife Logo"
                  className="h-8 w-auto object-contain"
                />
              </Link>
            </div>

            <div className="space-y-3">
              <h3
                className="text-2xl sm:text-3xl font-medium tracking-wide text-white capitalize"
                style={{ fontFamily: 'var(--serif, Cormorant Garamond, serif)' }}
              >
                care without a pause
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
                Continuous cardiac and vital-sign monitoring, from the hospital to the home.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col space-y-5">
            <h4
              className="text-xs font-semibold uppercase tracking-widest h-6 flex items-center"
              style={{ color: 'var(--teal, #00A6A6)' }}
            >
              NAVIGATION
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300 font-medium">
              <li>
                <a
                  href="/#home"
                  onClick={(e) => handleNavigation('#home', e)}
                  className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"
                >
                  <Activity size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/#platform"
                  onClick={(e) => handleNavigation('#platform', e)}
                  className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"
                >
                  <LayoutGrid size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Platform</span>
                </a>
              </li>
              <li>
                <a
                  href="/#care-journey"
                  onClick={(e) => handleNavigation('#care-journey', e)}
                  className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"
                >
                  <Milestone size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Journey</span>
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  onClick={(e) => handleNavigation('#how-it-works', e)}
                  className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"
                >
                  <Workflow size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Workflow</span>
                </a>
              </li>
              <li>
                <a
                  href="/#who-it-s-for"
                  onClick={(e) => handleNavigation('#who-it-s-for', e)}
                  className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"
                >
                  <Briefcase size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Solutions</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col space-y-5">
            <h4
              className="text-xs font-semibold uppercase tracking-widest h-6 flex items-center"
              style={{ color: 'var(--teal, #00A6A6)' }}
            >
              EXPLORE
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300 font-medium">
              <li>
                <a
                  href="/#why-continuous-care"
                  onClick={(e) => handleNavigation('#why-continuous-care', e)}
                  className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"
                >
                  <Award size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Outcomes</span>
                </a>
              </li>
              <li>
                <a
                  href="/#evidence"
                  onClick={(e) => handleNavigation('#evidence', e)}
                  className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"
                >
                  <Star size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Reviews</span>
                </a>
              </li>
              <li>
                <a
                  href="/jura"
                  onClick={(e) => handleNavigation('/jura', e)}
                  className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"
                >
                  <Cpu size={17} style={{ color: 'var(--teal, #00A6A6)' }} />
                  <span>Jura</span>
                </a>
              </li>
            </ul>
          </div>

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
                <div className="leading-relaxed">Velachery, Chennai, Tamil Nadu</div>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <Clock size={17} className="shrink-0" style={{ color: 'var(--teal, #00A6A6)' }} />
                <span>Care Operations &middot; 24 / 7 / 365</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col lg:flex-row items-center justify-center gap-6 text-sm text-slate-400">
          {/* <div className="flex items-center gap-3.5 bg-[#04284D]/60 border border-slate-700/50 rounded-xl px-4 py-2.5">
            <div
              className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#00A6A6]/10 shrink-0"
              style={{ color: 'var(--teal, #00A6A6)' }}
            >
              <Lock size={16} />
            </div>
            {/* <span className="text-xs font-medium leading-tight text-slate-300">
              FDA-cleared &middot; HIPAA-compliant &middot; SOC 2
            </span> 
          </div> */}

          <div className="text-center space-y-2">
            <div className="text-slate-300">
              &copy; 2026 Corlife Healthcare Private Limited &middot; Care without a pause.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-400">
              <div >Privacy</div>
              <span>&middot;</span>
              <div >HIPAA</div>
              <span>&middot;</span>
              <div >Terms</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}