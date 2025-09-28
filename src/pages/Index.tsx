import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FirstMeetingSection from "@/components/FirstMeetingSection";
import ApproachSection from "@/components/ApproachSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <FirstMeetingSection />
      <SectionDivider />
      <ApproachSection />
      <SectionDivider />
      <FAQSection />
      <SectionDivider />
      <ContactForm />
      <SectionDivider />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
