import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import BatumiSection from '@/components/BatumiSection';
import CatalogSection from '@/components/CatalogSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <BatumiSection />
      <CatalogSection />
      <Footer />
    </div>
  );
};

export default Index;
