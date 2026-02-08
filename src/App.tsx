import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { WhySection } from './components/WhySection';
import { GarageSection } from './components/GarageSection';
import { WanderlineSection } from './components/WanderlineSection';
import { PWASection } from './components/PWASection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDF8E1] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhySection />
      <GarageSection />
      <WanderlineSection />
      <PWASection />
      <FAQSection />
      <Footer />
    </div>
  );
}