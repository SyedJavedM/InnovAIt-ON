
import { Button } from "@/components/ui/button";
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink"></div>
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join the Tech Revolution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a coding expert or just starting out, our community welcomes all tech enthusiasts. Join us to learn, build, and grow together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-tech-purple hover:bg-tech-purple/90">
                  <NavLink to="/members">
                    Join Our Club <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-tech-purple text-tech-purple hover:bg-tech-purple/10">
                  <NavLink to="/contact">
                    Contact Us
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
