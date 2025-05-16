
import React from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  // Sample gallery data
  const galleryCategories = [
    { id: "all", name: "All" },
    { id: "hackathons", name: "Hackathons" },
    { id: "workshops", name: "Workshops" },
    { id: "fun", name: "Fun Moments" }
  ];
  
  const galleryItems = [
    {
      id: 1,
      title: "Hackathon 2023",
      category: "hackathons",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Web Dev Workshop",
      category: "workshops",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Team Building Event",
      category: "fun",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "AI Workshop",
      category: "workshops",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Coding Challenge",
      category: "hackathons",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Club Meetup",
      category: "fun",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  ];
  
  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 text-center gradient-heading">Gallery</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-center mb-8">
            Explore photos and videos from our past events, workshops, and fun moments.
          </p>
          
          <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-12">
            <TabsList className="grid grid-cols-4 mb-8">
              {galleryCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {galleryCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {galleryItems
                    .filter(item => category.id === "all" || item.category === category.id)
                    .map((item) => (
                      <Card key={item.id} className="overflow-hidden card-hover">
                        <CardContent className="p-0">
                          <div className="relative group">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="p-4 w-full">
                                <h3 className="text-white font-medium">{item.title}</h3>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
