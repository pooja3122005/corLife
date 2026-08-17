import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import JourneySection from "./Components/JourneySection";
import PlatformShowcase from "./Components/PlatformShowcase";
import Solutions from "./Components/Solutions";
import HowItWorks from "./Components/HowItWorks";
import ContinuousCareSection from "./Components/ContinuousCareSection";
import CorlifeOutcomes from "./Components/CorlifeOutcomes";
import EvidenceSection from "./Components/EvidenceSection";
import Footer from "./Components/Footer";
import RequestDemo from "./Components/RequestDemoComponents/RequestDemo";
import JuraHero from "./Components/Jura/JuraHero";

function HomePage({ onRequestDemo, isRequestDemoOpen, closeRequestDemo }) {
  return (
    <>
      <Hero onRequestDemo={onRequestDemo} />
      <PlatformShowcase />
      <JourneySection />
      <HowItWorks />
      <Solutions onRequestDemo={onRequestDemo} />
      <ContinuousCareSection />
      <CorlifeOutcomes />
      <EvidenceSection />
      <RequestDemo isOpen={isRequestDemoOpen} onClose={closeRequestDemo} />
    </>
  );
}

function JuraPage({ onRequestDemo, isRequestDemoOpen, closeRequestDemo }) {
  return (
    <>
      <JuraHero />
      <RequestDemo isOpen={isRequestDemoOpen} onClose={closeRequestDemo} />
    </>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return null;
}

function App() {
  const [isRequestDemoOpen, setIsRequestDemoOpen] = useState(false);

  const openRequestDemo = () => setIsRequestDemoOpen(true);
  const closeRequestDemo = () => setIsRequestDemoOpen(false);

  const location = useLocation();

  return (
    <div className="app-root">
      <ScrollToTop />
      <Navbar
        onRequestDemo={openRequestDemo}
        variant={location.pathname === "/jura" ? "jura" : "home"}
      />

      <main className={`app-main ${location.pathname !== '/' ? 'no-gap' : ''}`}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onRequestDemo={openRequestDemo}
                isRequestDemoOpen={isRequestDemoOpen}
                closeRequestDemo={closeRequestDemo}
              />
            }
          />

          <Route
            path="/jura"
            element={
              <JuraPage
                onRequestDemo={openRequestDemo}
                isRequestDemoOpen={isRequestDemoOpen}
                closeRequestDemo={closeRequestDemo}
              />
            }
          />
        </Routes>
      </main>

      <Footer
        variant={location.pathname === "/jura" ? "jura" : "home"}
      />
    </div>
  );
}

export default App;
