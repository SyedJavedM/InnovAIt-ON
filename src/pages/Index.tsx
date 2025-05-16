
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
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-heading">Upcoming Events</h2>
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
