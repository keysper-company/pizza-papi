
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedMenuSection from "@/components/FeaturedMenuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tahiti-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedMenuSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
