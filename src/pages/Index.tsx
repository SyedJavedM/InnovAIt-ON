
import Layout from "../components/Layout";
import HeroSection from "../components/home/HeroSection";
import EventCarousel from "../components/home/EventCarousel";
import FeaturesSection from "../components/home/FeaturesSection";
import FocusAreasSection from "../components/home/FocusAreasSection";
import CallToAction from "../components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 gradient-heading">Upcoming Events</h2>
          <EventCarousel />
        </div>
      </section>
      
      <FeaturesSection />
      <FocusAreasSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
