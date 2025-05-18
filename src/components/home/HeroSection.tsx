import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/Members#join-our-team');
  };

  return (
    <div className="relative overflow-hidden tech-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-heading">Ideate.Innovate.Ignite.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg lg:max-w-md mx-auto lg:mx-0">
              Our project-based club is a dynamic community of passionate individuals dedicated to bring ideas to life. Dive into collaborative projects spanning diverse fields from cutting-edge technology to sustainable design. Join us in transforming inspiration into tangible results and embark on a journey of innovation, learning and shared success!!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-tech-purple hover:bg-tech-purple/90 px-8" 
                onClick={handleJoinClick}
              >
                Join the Club <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 relative mb-8 lg:mb-0 lg:ml-[400px]">
            <img 
              src="./images/logo.png" 
              alt="Tech Club" 
              className="rounded-lg border-white/10 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
