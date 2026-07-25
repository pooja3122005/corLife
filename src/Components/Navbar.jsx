import { useState } from "react";
import {
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";
import logo from "../assets/corlife-logo.svg";

const navItems = [
  "Home",
  "Platform",
  "Care Journey",
  "Jura",
  "About Us",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/95 sticky top-0 z-50 backdrop-blur-md border-b border-[var(--line-soft)] shadow-sm">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-6 h-20 sm:h-24">
          {/* LOGO ON FAR LEFT END */}
          <div className="flex items-center shrink-0">
            <a href="#" className="flex items-center">
              <img src={logo} alt="CorLife" className="h-10 sm:h-12 object-contain" />
            </a>
          </div>

          {/* NAVIGATION LINKS IN CENTER */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`corlife-nav-link relative text-[15px] lg:text-[16px] font-medium transition-all duration-300 ${
                  index === 0
                    ? "active text-[var(--teal)]"
                    : "text-[var(--navy)] hover:text-[var(--teal)]"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* GET IN TOUCH, SHOPPING BAG, USER ON FAR RIGHT END */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5 shrink-0">
             <button
              aria-label="User Account"
              className="p-2 text-[var(--navy)] hover:text-[var(--teal)] transition duration-300 hover:scale-110 rounded-full hover:bg-teal-50/50"
            >
              <FiUser size={22} />
            </button>
            <button
              aria-label="Shopping Bag"
              className="p-2 text-[var(--navy)] hover:text-[var(--teal)] transition duration-300 hover:scale-110 rounded-full hover:bg-teal-50/50"
            >
              <FiShoppingBag size={22} />
            </button>
        <button className="bg-[var(--teal)] text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-full font-semibold text-[15px] transition-all duration-300 hover:bg-[var(--teal-deep)] hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
              Get in Touch
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center p-2 text-[var(--navy)]"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {isOpen && (
          <div className="md:hidden border-t border-[var(--line-soft)] py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-[var(--navy)] hover:text-[var(--teal)] font-medium py-2 px-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex items-center justify-between pt-3 border-t border-[var(--line-soft)] px-2">
              <button className="bg-[var(--teal)] text-white px-5 py-2.5 rounded-full font-medium shadow-md">
                Get in Touch
              </button>
              <div className="flex items-center gap-3">
                <button aria-label="Shopping Bag" className="p-2 text-[var(--navy)] hover:text-[var(--teal)]">
                  <FiShoppingBag size={22} />
                </button>
                <button aria-label="User Account" className="p-2 text-[var(--navy)] hover:text-[var(--teal)]">
                  <FiUser size={22} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}