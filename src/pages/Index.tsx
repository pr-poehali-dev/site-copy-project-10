import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
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
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
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
