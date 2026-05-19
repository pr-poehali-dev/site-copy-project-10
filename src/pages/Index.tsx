import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MobileSecondScreen from '@/components/MobileSecondScreen';
import AboutSection from '@/components/AboutSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import BatumiSection from '@/components/BatumiSection';
import CatalogSection from '@/components/CatalogSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
import ReviewsSection from '@/components/ReviewsSection';
import SelectionSection from '@/components/SelectionSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTarget');
    if (target) {
      sessionStorage.removeItem('scrollTarget');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const saved = sessionStorage.getItem('scrollY');
    if (saved) {
      sessionStorage.removeItem('scrollY');
      requestAnimationFrame(() => {
        window.scrollTo({ top: parseInt(saved, 10), behavior: 'instant' });
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MobileSecondScreen />
      <AboutSection />
      <AdvantagesSection />
      <BatumiSection />
      <CatalogSection />
      <ProjectsSection />
      <TeamSection />
      <ReviewsSection />
      <SelectionSection />
      <Footer />
    </div>
  );
};

export default Index;