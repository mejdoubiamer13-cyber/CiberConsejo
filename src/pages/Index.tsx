import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TipsSection from "@/components/TipsSection";
import ResourcesSection from "@/components/ResourcesSection";
import ProtectionSection from "@/components/ProtectionSection";
import HelpSection from "@/components/HelpSection";
import PasswordGenerator from "@/components/PasswordGenerator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TipsSection />
      <ResourcesSection />
      <ProtectionSection />
      <HelpSection />
      <PasswordGenerator />
      <Footer />
    </div>
  );
};

export default Index;
