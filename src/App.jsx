import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import StatsSection from "./Components/StatsSection";
import JourneySection from "./Components/JourneySection";
import PlatformShowcase from "./Components/PlatformShowcase";
import Solutions from "./Components/Solutions";
import HowItWorks from "./Components/HowItWorks";
import ContinuousCareSection from "./Components/ContinuousCareSection";
import CorlifeOutcomes from "./Components/CorlifeOutcomes";
import EvidenceSection from "./Components/EvidenceSection";
import Footer from "./Components/Footer";
import RequestDemo from "./Components/RequestDemo";

function App() {
  const [isRequestDemoOpen, setIsRequestDemoOpen] = useState(false);

  const openRequestDemo = () => setIsRequestDemoOpen(true);
  const closeRequestDemo = () => setIsRequestDemoOpen(false);

  return (
    <>
      <Navbar onRequestDemo={openRequestDemo} />
      <Hero onRequestDemo={openRequestDemo} />
      <StatsSection />
      <PlatformShowcase />
      <JourneySection />
      <HowItWorks />
      <Solutions onRequestDemo={openRequestDemo} />
      <ContinuousCareSection />
      <CorlifeOutcomes />
      <EvidenceSection />
      <Footer />
      <RequestDemo isOpen={isRequestDemoOpen} onClose={closeRequestDemo} />
    </>
  );
}

export default App;
