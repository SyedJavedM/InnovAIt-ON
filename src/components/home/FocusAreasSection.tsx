
import React from 'react';

const FocusAreasSection = () => {
  const focusAreas = [
    {
      title: "Artificial Intelligence",
      description: "Exploring machine learning algorithms, neural networks, and AI applications.",
      icon: "🤖"
    },
    {
      title: "Web Development",
      description: "Building modern web applications using the latest frameworks and technologies.",
      icon: "🌐"
    },
    {
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications for iOS and Android.",
      icon: "📱"
    },
    {
      title: "Cloud Computing",
      description: "Leveraging cloud platforms for scalable and reliable applications.",
      icon: "☁️"
    },
    {
      title: "Robotics",
      description: "Designing and programming robots for various applications and competitions.",
      icon: "🦾"
    },
    {
      title: "Cybersecurity",
      description: "Learning about security principles and protecting digital assets.",
      icon: "🔒"
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-heading">Our Focus Areas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're passionate about exploring various domains in technology. Here are the main areas we focus on in our workshops, events, and projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg border border-border hover:border-tech-purple/30 transition-all card-hover"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
