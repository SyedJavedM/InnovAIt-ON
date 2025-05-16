
import React from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const focusAreas = [
    {
      title: "Artificial Intelligence & ML",
      description: "Exploring the cutting-edge of AI, deep learning, and machine learning applications.",
      icon: "🤖"
    },
    {
      title: "Web Development",
      description: "Building modern, responsive websites using the latest frameworks and technologies.",
      icon: "🌐"
    },
    {
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications for iOS and Android devices.",
      icon: "📱"
    },
    {
      title: "Robotics & IoT",
      description: "Working with hardware and software to build robots and internet-connected devices.",
      icon: "🦾"
    },
    {
      title: "Open Source",
      description: "Contributing to and maintaining open-source projects that benefit the community.",
      icon: "🔄"
    },
    {
      title: "Cybersecurity",
      description: "Learning about security principles and ethical hacking to protect digital assets.",
      icon: "🔒"
    },
  ];
  
  
  
  const advisors = [
    {
      name: "Prof. Sajitha N",
      title: "Faculty Advisor",
      description: "Professor of Computer Science in Artificial Intelligence and Machine Learning, guides our club with valuable insights and mentorship.",
      image: "./images/members/Sajitha.jpg"
    },
    {
      name: "Mr. Shreyas Mahadeva",
      title: "Design & Media Coordinator",
      description: "Plays a key role in shaping our club’s visual identity and media presence through creative contributions and design support.",
      image: "./images/Shreyas_sir.jpg"
    },
  ];

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 gradient-heading">About Us</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Learn about our mission, history, and the team behind Tech Club.
            </p>
          </div>
          
          {/* Mission Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  We believe in empowering students to explore, learn, and innovate in the world of technology. Our mission is to create a collaborative environment where tech enthusiasts can share knowledge, build projects, and grow together.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  Through workshops, hackathons, and speaker events, we aim to bridge the gap between academic learning and industry practice, preparing our members for successful careers in technology.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <div className="bg-muted/50 px-4 py-2 rounded-full text-sm font-medium">20+ Active Members</div>
                  <div className="bg-muted/50 px-4 py-2 rounded-full text-sm font-medium">10+ Events Per Year</div>
                </div>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border shadow-md">
                <blockquote className="text-lg italic mb-6">
                  "Our goal is to foster a community where passion for technology translates into real-world skills and innovative solutions. We're not just about coding; we're about creating impact through technology."
                </blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="./images/members/Sujal S.jpg" 
                      alt="Club Head" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sujal S</p>
                    <p className="text-sm text-muted-foreground">Head, InnovAIt-ON Club</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Focus Areas */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Focus Areas</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We explore and develop expertise in various domains of technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="bg-card p-6 rounded-lg border border-border card-hover"
                >
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          
          {/* Faculty Advisor */}
<section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Advisors</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Meet the faculty members who guide and support our club activities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advisors.map((advisor, index) => (
                <Card key={index} className="overflow-hidden card-hover">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{advisor.name}</CardTitle>
                    <CardDescription className="text-tech-purple font-medium">
                      {advisor.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{advisor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          
          {/* Values */}
          <section>
            <div className="bg-muted/30 rounded-lg p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  The principles that guide our community and activities.
                </p>
              </div>
              
              <Tabs defaultValue="innovation" className="w-full">
                <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
                  <TabsTrigger value="innovation">Innovation</TabsTrigger>
                  <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
                  <TabsTrigger value="inclusivity">Inclusivity</TabsTrigger>
                  <TabsTrigger value="learning">Continuous Learning</TabsTrigger>
                </TabsList>
                
                <TabsContent value="innovation">
                  <div className="max-w-3xl mx-auto text-center">
                    <div className="text-5xl mb-6">💡</div>
                    <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                    <p className="text-lg text-muted-foreground">
                      We encourage creative thinking and novel approaches to problem-solving. Our members are constantly pushing boundaries and exploring new technologies to create impactful solutions.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="collaboration">
                  <div className="max-w-3xl mx-auto text-center">
                    <div className="text-5xl mb-6">🤝</div>
                    <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
                    <p className="text-lg text-muted-foreground">
                      We believe in the power of teamwork. By combining diverse skills and perspectives, we create better outcomes than any individual could achieve alone. Our community thrives on sharing knowledge and supporting each other.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="inclusivity">
                  <div className="max-w-3xl mx-auto text-center">
                    <div className="text-5xl mb-6">🌈</div>
                    <h3 className="text-2xl font-bold mb-4">Inclusivity</h3>
                    <p className="text-lg text-muted-foreground">
                      We welcome members from all backgrounds, experience levels, and disciplines. Everyone deserves the opportunity to learn and contribute to the tech community, and we strive to create a safe and supportive environment for all.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="learning">
                  <div className="max-w-3xl mx-auto text-center">
                    <div className="text-5xl mb-6">📚</div>
                    <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
                    <p className="text-lg text-muted-foreground">
                      Technology is always evolving, and so are we. We promote a culture of lifelong learning, where members are encouraged to constantly develop their skills, share knowledge, and stay curious about emerging technologies.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
