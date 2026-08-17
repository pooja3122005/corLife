import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/corlife-logo.svg";

const leftNavItems = [
  { label: "Home", path: "/", hash: "#home" },
  { label: "About us", path: "/", hash: "#about-us" },
];

const rightNavItems = [
  { label: "Jura", path: "/jura", hash: "" },
];

const allNavItems = [...leftNavItems, ...rightNavItems];

export default function Navbar({ onRequestDemo, variant = "home" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const getActiveLabelFromLocation = () => {
    if (location.pathname === "/jura") return "Jura";
    switch (location.hash) {
      case "#platform":
        return "Platform";
      case "#care-journey":
        return "Journey";
      case "#how-it-works":
        return "Workflow";
      case "#who-it-s-for":
        return "Solutions";
      case "#why-continuous-care":
        return "Outcomes";
      case "#evidence":
        return "Reviews";
      case "#about-us":
        return "About us";
      default:
        return "Home";
    }
  };

  const [activeItem, setActiveItem] = useState(getActiveLabelFromLocation);
  const logoTo = variant === "jura" ? "/" : "#home";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setActiveItem(getActiveLabelFromLocation());
  }, [location.pathname, location.hash]);

  const handleNavigation = (item, e) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveItem(item.label);

    if (item.path === "/jura") {
      navigate("/jura");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      if (item.hash) {
        let attempts = 0;
        const maxAttempts = 20;
        const checkElement = setInterval(() => {
          attempts++;
          const element = document.querySelector(item.hash);
          if (element) {
            clearInterval(checkElement);
            element.scrollIntoView({ behavior: "smooth" });
          } else if (attempts >= maxAttempts) {
            clearInterval(checkElement);
          }
        }, 50);
      }
    } else if (item.hash) {
      const element = document.querySelector(item.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const renderNavItem = (item, className) => {
    return (
      <a
        key={item.label}
        href={item.path + item.hash}
        className={className}
        onClick={(e) => handleNavigation(item, e)}
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      <header className="bg-white/95 sticky top-0 z-50 backdrop-blur-md border-b border-[var(--line-soft)] shadow-sm">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-6 h-[4rem] sm:h-[4.5rem]">
            {/* Left Section: Logo + Home & About Us Links */}
            <div className="flex items-center gap-8">
              <div className="flex items-center shrink-0">
                {logoTo === "#home" ? (
                  <a href={logoTo} className="flex items-center">
                    <img src={logo} alt="CorLife" className="h-9 sm:h-10 object-contain" />
                  </a>
                ) : (
                  <Link to={logoTo} className="flex items-center">
                    <img src={logo} alt="CorLife" className="h-9 sm:h-10 object-contain" />
                  </Link>
                )}
              </div>

              <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                {leftNavItems.map((item) =>
                  renderNavItem(
                    item,
                    `corlife-nav-link relative text-[15px] lg:text-[16px] font-medium transition-colors duration-300 ${
                      activeItem === item.label
                        ? "active text-[var(--teal)]"
                        : "text-[var(--navy)] hover:text-[var(--teal)]"
                    }`
                  )
                )}
              </nav>
            </div>

            {/* Right Section: Jura Link + Request Demo Button */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0">
              <nav className="flex items-center gap-6 lg:gap-8">
                {rightNavItems.map((item) =>
                  renderNavItem(
                    item,
                    `corlife-nav-link relative text-[15px] lg:text-[16px] font-medium transition-colors duration-300 ${
                      activeItem === item.label
                        ? "active text-[var(--teal)]"
                        : "text-[var(--navy)] hover:text-[var(--teal)]"
                    }`
                  )
                )}
              </nav>

              <button
                type="button"
                onClick={() => onRequestDemo?.()}
                className="bg-[var(--teal)] text-white px-4 lg:px-5 py-2.5 rounded-full font-semibold text-[15px] transition-colors duration-300 hover:bg-[var(--teal-deep)] active:scale-95 shadow-md hover:shadow-lg"
              >
                Request Demo
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[var(--navy)] hover:bg-gray-100 transition-colors z-50 relative"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div 
          className="md:hidden fixed top-[4rem] right-4 w-72 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-[var(--line-soft)] z-[60] flex flex-col p-5 max-h-[50vh] overflow-y-auto animate-fadeIn"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="flex flex-col space-y-1 mb-4">
            {allNavItems.map((item) =>
              renderNavItem(
                item,
                "block text-[var(--navy)] hover:text-[var(--teal)] text-sm font-medium py-2 px-2.5 rounded-lg transition-colors"
              )
            )}
          </div>

          <div className="pt-3 border-t border-[var(--line-soft)] mt-auto">
            <button
              type="button"
              className="w-full bg-[var(--teal)] text-white px-4 py-2.5 rounded-full font-semibold text-center text-sm shadow-md hover:bg-[var(--teal-deep)] transition-colors"
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
    </>
  );
}