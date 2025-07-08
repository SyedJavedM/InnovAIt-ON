
import React from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  // Sample gallery data
  const galleryCategories = [
    { id: "all", name: "All" },
    { id: "blitzpy", name: "Blitz-Py" },
    { id: "talk", name: "Talks" },
    { id: "workshops", name: "Workshops" },
    { id: "fun", name: "Fun Moments" }
  ];
  
  const galleryItems = [
    {
      id: "blitzpy-1",
      title: "Blitz-Py",
      category: "blitzpy",
      image: "./images/Gallery/Blitz py.jpeg"
    },
    {
      id: "blitzpy-2",
      title: "Blitz-Py",
      category: "blitzpy",
      image: "./images/Gallery/Blitz py2.jpeg"
    },
    {
      id: "blitzpy-3",
      title: "Blitz-Py",
      category: "blitzpy",
      image: "./images/Gallery/blitz py4.jpeg"
    },
    {
      id: "blitzpy-4",
      title: "Blitz-Py",
      category: "blitzpy",
      image: "./images/Gallery/Blitz py 1.jpg"
    },
    {
      id: "blitzpy-5",
      title: "Blitz-Py",
      category: "blitzpy",
      image: "./images/Gallery/Blitz py 5.jpeg"
    },
    {
      id: "talk-1",
      title: "Computer Networks",
      category: "talk",
      image: "./images/Gallery/Talk 1.jpeg"
    },
    {
      id: "talk-2",
      title: "Computer Networks",
      category: "talk",
      image: "./images/Gallery/Talk.jpeg"
    },
    {
      id: "talk-3",
      title: "Computer Networks",
      category: "talk",
      image: "./images/Gallery/talk 2.jpg"
    },
    {
      id: "talk-4",
      title: "Ai in Cyberspace",
      category: "talk",
      image: "./images/Gallery/Ai Cyberspace.jpg"
    },
    {
      id: "talk-5",
      title: "Ai in Cyberspace",
      category: "talk",
      image: "./images/Gallery/Innovaiton team.jpg"
    },
    {
      id: "workshops-1",
      title: "Peer Learning",
      category: "workshops",
      image: "./images/Gallery/peer.jpeg"
    },
    {
      id: "workshops-2",
      title: "Peer Learning",
      category: "workshops",
      image: "./images/Gallery/peer1.jpeg"
    },
    {
      id: "workshops-3",
      title: "Peer Learning",
      category: "workshops",
      image: "./images/Gallery/peer2.jpeg"
    },
    {
      id: "workshops-4",
      title: "Peer Learning",
      category: "workshops",
      image: "./images/Gallery/peer3.jpeg"
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
          
          <Tabs defaultValue="all" className="w-full max-w-2xl mx-auto mb-8">
            {/* Make tab list horizontally scrollable on mobile */}
            <TabsList className="flex overflow-x-auto gap-1 mb-6 scrollbar-hide md:grid md:grid-cols-5">
              {galleryCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-xs px-3 py-2 whitespace-nowrap min-w-[80px] md:min-w-0"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {galleryCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {galleryItems
                    .filter(item => category.id === "all" || item.category === category.id)
                    .map((item) => (
                      <Card key={item.id} className="overflow-hidden card-hover">
                        <CardContent className="p-0">
                          <div className="relative group">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-40 xs:h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="p-2 sm:p-4 w-full">
                                <h3 className="text-white text-sm sm:text-base font-medium">{item.title}</h3>
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
