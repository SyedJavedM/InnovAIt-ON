
import { NavLink } from 'react-router-dom';
import { Calendar, Image, FileText, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Upcoming Events",
      description: "Stay updated with our latest workshops, hackathons, and tech talks.",
      link: "/events",
      linkText: "View Events"
    },
    {
      icon: <Image className="h-6 w-6" />,
      title: "Gallery",
      description: "Check out photos and videos from our past events and activities.",
      link: "/gallery",
      linkText: "Browse Gallery"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Newsletter",
      description: "Read our latest tech articles, tutorials, and community updates.",
      link: "/newsletter",
      linkText: "Read Articles"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Join Our Community",
      description: "Become part of our growing community of tech enthusiasts.",
      link: "/members",
      linkText: "Meet the Team"
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-heading">Discover What We Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border border-border card-hover overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink"></div>
              <CardHeader>
                <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center text-tech-purple mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <NavLink 
                  to={feature.link}
                  className="inline-block text-tech-purple font-medium hover:text-tech-indigo transition-colors"
                >
                  {feature.linkText} →
                </NavLink>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
