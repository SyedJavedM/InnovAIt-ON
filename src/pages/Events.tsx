import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from 'lucide-react';

const Events = () => {
  const pastEvents = [
    {
      id: 4,
      title: "Inaugration of Tech Club",
      description: "Join us for the inauguration of the Tech Club with exciting activities.",
      date: "March 12, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab, Building D",
      image: "./images/inaugposter.png",
      category: "All Events"
    },
    {
      id: 5,
      title: "Blitz-Py Episode 1",
      description: "Join us for an exiting Python Coding Challenge.",
      date: "December 21, 2022",
      time: " 3:20 PM",
      location: "Coding Lab, 4th Floor, AIML Block",
      image: "./images/poster1.jpg",
      category: "hackathon"
    },
    {
      id: 6,
      title: "Blitz-Py Episode 2",
      description: "Join us for an exiting Python Coding Challenge.",
      date: "January 09, 2023",
      time: " 2:00 PM",
      location: "3th Floor, AIML Block",
      image: "./images/poster2.jpg",
      category: "hackathon"
    },
    {
      id: 7,
      title: "Peer Learning for Enhanced Employability",
      description: "Learn the basics of web development in this hands-on workshop.",
      date: "February 14-15, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "401, AIML Block",
      image: "./images/Peer to peer.jpeg",
      category: "workshop"
    },
    {
      id: 8,
      title: "Model Your Language",
      description: "Distinguished Lecture on LLMs and Gen AI insights .",
      date: "July 24, 2024",
      time: "11:30 AM",
      location: "RN Shetty Mini Auditorium",
      image: "./images/Harsha sir LLM talk.png",
      category: "tech_talk"
    },
    {
      id: 9,
      title: "AI in CyberSpace",
      description: "Distinguished Lecture on Enhancing Security, Privacy And Threat.",
      date: "March 10, 2025",
      time: "2:00 PM",
      location: "RN Shetty Mini Auditorium",
      image: "./images/Talk.jpg",
      category: "tech_talk"
    },
  ];

  const eventCategories = [
    { id: "all", name: "All Events" },
    { id: "hackathon", name: "Hackathons" },
    { id: "workshop", name: "Workshops" },
    { id: "tech_talk", name: "Tech Talks" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPast = selectedCategory === "all"
    ? pastEvents
    : pastEvents.filter(event => event.category === selectedCategory);

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 gradient-heading">Events</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join us for exciting tech events, workshops, hackathons, and more.
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="inline-block border rounded-lg p-1">
              {eventCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 text-sm rounded-md transition-colors ${
                    selectedCategory === category.id
                      ? "bg-tech-purple text-white"
                      : "hover:bg-muted"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="col-span-full text-center py-20">
                <h2 className="text-2xl font-bold text-tech-purple mb-2">Coming Soon !!!</h2>
                <p className="text-muted-foreground">Stay tuned for exciting upcoming events.</p>
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPast.length > 0 ? (
                  filteredPast.map((event) => (
                    <Card key={event.id} className="overflow-hidden card-hover">
                      <div className="h-100 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4" />
                            {event.date}
                          </div>
                        </div>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          {event.location}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">No past events in this category.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
