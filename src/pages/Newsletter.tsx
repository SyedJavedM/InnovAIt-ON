import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const handleSubscribe = async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  try {
    const response = await fetch("http://localhost:5000/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      alert("Subscription successful!");
    } else {
      alert("Failed to subscribe. Please try again.");
    }
  } catch (error) {
    console.error("Error subscribing:", error);
    alert("An error occurred. Please try again later.");
  }
};

const Newsletter = () => {
  const articles = []; // ← No newsletters available

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 gradient-heading">Newsletter</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Stay updated with our latest articles, tech insights, and community news.
            </p>
          </div>

          {articles.length === 0 ? (
            <div className="max-w-xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Subscribe to Our Newsletter</CardTitle>
                  <CardDescription>Get the latest articles and updates delivered to your inbox.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubscribe}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-2 rounded-md border border-border"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 rounded-md border border-border"
                        placeholder="your@email.com"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-tech-purple hover:bg-tech-purple/90">
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          ) : (
            // ← Existing newsletter layout can go here if needed later
            <></>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Newsletter;
