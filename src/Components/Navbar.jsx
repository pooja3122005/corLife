import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Make sure react-icons is installed, or replace with your own icons
import logo from "../assets/corlife-logo.svg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Platform", href: "#platform" },
  { label: "Journey", href: "#care-journey" },
  { label: "Workflow", href: "#how-it-works" },
  { label: "Solutions", href: "#who-it-s-for" },
  { label: "Outcomes", href: "#why-continuous-care" },
  { label: "Reviews", href: "#evidence" },
  { label: "Jura", href: "#" },
];

export default function Navbar({ onRequestDemo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/95 sticky top-0 z-50 backdrop-blur-md border-b border-[var(--line-soft)] shadow-sm">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-6 h-20 sm:h-24">
          
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a href="#home" className="flex items-center">
              <img src={logo} alt="CorLife" className="h-10 sm:h-12 object-contain" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`corlife-nav-link relative text-[15px] lg:text-[16px] font-medium transition-all duration-300 ${
                  index === 0
                    ? "active text-[var(--teal)]"
                    : "text-[var(--navy)] hover:text-[var(--teal)]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Request Demo Button */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5 shrink-0">
            <button
              type="button"
              onClick={() => onRequestDemo?.()}
              className="bg-[var(--teal)] text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-full font-semibold text-[15px] transition-all duration-300 hover:bg-[var(--teal-deep)] hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger / Close) */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[var(--navy)] hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[var(--line-soft)] py-4 space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-[var(--navy)] hover:text-[var(--teal)] hover:bg-gray-50 font-medium py-2.5 px-3 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Request Demo Button */}
            <div className="pt-3 border-t border-[var(--line-soft)] px-2">
              <button
                type="button"
                className="w-full bg-[var(--teal)] text-white px-5 py-3 rounded-full font-semibold text-center shadow-md hover:bg-[var(--teal-deep)] transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  onRequestDemo?.();
                }}
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}