import { Button } from "@/components/ui/button";
import { Calendar } from 'lucide-react';

const EventCarousel = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-card shadow-md h-[400px] md:h-[450px] flex items-center justify-center">
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink h-1"></div>

      <div className="text-center px-6">
        <Calendar className="mx-auto text-tech-blue h-10 w-10 mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-2">Coming Soon !!!</h2>
        <p className="text-black/70 text-lg max-w-xl mx-auto">
          Stay tuned for exciting upcoming events. We’re working on something amazing for you!
        </p>
      </div>
    </div>
  );
};

export default EventCarousel;
