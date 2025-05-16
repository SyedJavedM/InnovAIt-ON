import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail } from 'lucide-react';

const Members = () => {
  // Sample members data
  const coreTeam = [
    {
      id: 1,
      name: "Sujal S",
      role: "Head of Club",
      bio: "Enthusiastic about advancing AI and ML through innovation, collaboration, and continuous learning.",
      image: "./images/members/Sujal S.jpg",
      linkedin: "https://www.linkedin.com/in/sujal-sarode-3a5b3a25b/",
      email: "1rn22ai128.sujalsudhakar@rnsit.ac.in"
    },
    {
      id: 2,
      name: "Syed Javed M",
      role: "Co Head of Club",
      bio: "Software Engineering student focusing on web technologies and cloud computing. Organizing workshops and hackathons.",
      image: "./images/members/Syed J.jpg",
      linkedin: "https://www.linkedin.com/in/syed-javed-m/",
      email: "1rn22ai136.syedjavedm@rnsit.ac.in"
    },
    {
      id: 3,
      name: "Nandan M Naik",
      role: "Technical Lead",
      bio: "Passionate about leveraging technical skills to design, develop, and support innovative solutions for impactful events.",
      image:"./images/members/Nandan.jpg",
      linkedin: "https://www.linkedin.com/in/nandan-naik-201539255/",
      email: "1rn22ai073.nandanmnaik@rnsit.ac.in"
    },
    {
      id: 4,
      name: "Varsha V",
      role: "Event Lead",
      bio: "Focused on creating memorable experiences by leading event planning, coordinating teams, and ensuring seamless execution.",
      image: "./images/members/Varsha.jpg",
      linkedin:  "https://www.linkedin.com/in/varsha-v-a16483264/",
      email: "1rn22ai146.varshav@rnsit.ac.in"
    },
    {
      id: 5,
      name: "Surabhi Metikurke",
      role: "Marketing & Finance Lead",
      bio: "Strategically managing finances and crafting innovative marketing strategies to drive impactful events and initiatives.",
      image: "./images/members/Surabhi.jpg",
      linkedin: "https://www.linkedin.com/in/surabhi-metikurke-828268260/",
      email: "1rn22ai134.surabhimetikurke@rnsit.ac.in"
    },
    {
      id: 6,
      name: "Anantesh Gopal",
      role: "Core Tech Team Member",
      bio: "Dedicated to solving complex problems through innovative technology, ensuring seamless execution and performance for all technical aspects of events.",
      image: "./images/members/Anantesh.jpg",
      linkedin: "https://www.linkedin.com/in/anantesh-gopal-6635b7264/",
    },
    {
      id: 7,
      name: "Prajwal M",
      role: "Core Tech Team Member",
      bio: "Focused on leveraging technical expertise to design and implement robust solutions that power the success of every event.",
      image:  "./images/members/Prajwal.jpg",
      linkedin:"https://www.linkedin.com/in/prajwal-m-787b6733b/",
    },
    {
      id: 8,
      name:  "Aditi Krishnanand N ",
      role: "Core Events Team Member",
      bio: "Passionate about organizing and executing flawless events, ensuring every detail aligns to create memorable experiences for all participants.",
      image: "./images/members/aditi.jpg",
      linkedin: "https://www.linkedin.com/in/aditikrishna2504/",
    },
    {
      id: 9,
      name:  "Nandini Patil",
      role: "Core Events Team Member",
      bio: "Focused on coordinating logistics, managing teams, and delivering impactful events that inspire and engage attendees.",
      image: "./images/members/nandini.jpg",
      linkedin: "https://www.linkedin.com/in/nandini-patil-1b5835347",
    }, 
    {
      id: 10,
      name:  "Vismaya Jagadeesh",
      role: "Core Finance Team Member",
      bio: "Focused on maintaining financial accuracy and efficiency, ensuring smooth budgeting and resource allocation for all events.",
      image: "./images/members/Vismaya.jpg",
      linkedin: "https://www.linkedin.com/in/vedha-k-b574712a7",
    },
    {
      id: 11,
      name:  "Dhanya Patgar",
      role: "Core Finance Team Member",
      bio: "Driven by strategic financial planning and analysis, working to optimize event budgets and support sustainable growth.",
      image: "./images/members/dhanya.jpg",
      linkedin: "https://www.linkedin.com/in/dhanya-patgar-7450ba2a7/",
    },
    {
      id: 12,
      name:  "Vedha K",
      role: "Core Marketing Team Member",
      bio: "Creative and strategic, dedicated to crafting innovative marketing campaigns that maximize visibility and engagement for every event.",
      image: "./images/members/Vedha.jpg",
      linkedin: "https://www.linkedin.com/in/vedha-k-b574712a7",
    },
    {
      id: 13,
      name:  "Srushti R Gowda",
      role: "Core Marketing Team Member",
      bio: "Creative and data-driven, focused on developing compelling marketing strategies that drive engagement and amplify event impact.",
      image: "./images/members/Srusthi.jpeg",
      linkedin: "https://www.linkedin.com/in/srushti-r-gowda-961764259/",
    },
  ];
  
  const tech = [
    {
      id: 1,
      name:  "Allu Varshitha Reddy",
      role: "Technical Contributor",
      bio: "Innovative problem-solver, enhancing event experiences through technical expertise.",
      image: "./images/members/Varshita.jpeg",
      linkedin: "https://www.linkedin.com/in/allu-varshitha-reddy-420b012a0/",
    },
    {
      id: 2,
      name: "Varshitha M",
      role: "Technical Contributor",
      bio: "Tech-driven, committed to solving challenges and optimizing event technology.",
      image: "./images/contrib/Varshita.jpg",
      linkedin: "https://www.linkedin.com/in/varshitha-m-9565aa260",
    },
    {
      id: 3,
      name: "Shivee Srivastava",
      role: "Technical Contributor",
      bio: "Dedicated to delivering seamless tech solutions for impactful event execution.",
      image: "./images/contrib/Shivee.jpg",
      linkedin: "https://www.linkedin.com/in/shivee-srivastava-8082a1354/",
    },
    {
      id: 4,
      name: "Boosi Reddy Prasad Reddy",
      role: "Technical Contributor",
      bio: "Passionate about building and maintaining the tech infrastructure behind every event.",
      image: "./images/contrib/boosi.jpg",
      linkedin: "https://www.linkedin.com/in/boosi-reddy-prasad-reddy-2a951628b/",
      
    },
    {
      id: 5,
      name: "Noti Gayatri",
      role: "Technical Contributor",
      bio: "Focused on creating reliable and scalable tech systems to power event success.",
      image: "./images/contrib/gayathri.jpg",
      linkedin: "https://www.linkedin.com/in/noti-gayatri-4610002a7",
    
    },
    {
      id: 6,
      name: "Rakin Mohammed Rafeeq",
      role: "Technical Contributor",
      bio: "Leveraging technical skills to ensure flawless event execution and innovation.",
      image: "./images/contrib/rakin.jpg",
      linkedin: "https://www.linkedin.com/in/rakinmohammedrafeeq/",
    },
    {
      id: 7,
      name: "Kranthi K",
      role: "Technical Contributor",
      bio: "Bringing tech to life, ensuring smooth and efficient event operations.",
      image: "./images/contrib/kranthi.jpg",
      linkedin: "https://www.linkedin.com/in/kranthi-k-795835296/",
    },
  ];

  const events = [
    
    {
      id: 1,
      name:  "Anagha MR",
      role:  "Event Operations Associate",
      bio: "Passionate about crafting engaging and memorable event experiences.",
      image: "./images/contrib/anagha.jpg",
      linkedin: "https://www.linkedin.com/in/anagha-m-r-70b969276/",
    }, 
    {
      id: 1,
      name:  "Prarthana Navada",
      role: "Event Operations Associate",
      bio: "Detail-oriented organizer ensuring smooth event execution.",
      image: "./images/contrib/Prarthana.jpg",
      linkedin: "https://www.linkedin.com/in/prarthana-navada-91540a359/",
    },
     {
      id: 1,
      name:  "Raageshwari Reddy R",
      role: "Event Operations Associate",
      bio: "Driven to create impactful events through teamwork and planning.",
      image: "./images/contrib/Rajeshwari.jpg",
      linkedin: "https://www.linkedin.com/in/raaga-reddy-7a76b035a/",
    }, 
    {
      id: 1,
      name:  "Shreeya ",
      role: "Event Operations Associate",
      bio: "Focused on turning ideas into well-executed, vibrant events.",
      image: "./images/contrib/shreeya.jpg",
      linkedin: "https://www.linkedin.com/in/shreeya-s-2a5187318/",
    }, 
    {
      id: 1,
      name:  "Surabhi K P ",
      role: "Event Operations Associate",
      bio: "Committed to coordinating events that inspire and connect.",
      image: "./images/contrib/surabhi.jpg",
      linkedin: "https://www.linkedin.com/in/surabhi-kp-66859b363/",
    },
    {
      id: 1,
      name:  "Sweekar SM",
      role: "Event Operations Associate",
      bio: "Bringing creativity and structure together for seamless event delivery.",
      image: "./images/contrib/Sweekar.jpg",
      linkedin: "https://www.linkedin.com/in/sweekar-s-m-2985a1363/",
    },
    {
      id: 1,
      name:  "Yashwanth Kalasa",
      role: "Event Operations Associate",
      bio: "Energetic and organized, always ready to make events unforgettable.",
      image: "./images/contrib/Yashwanth.jpg",
      linkedin: "https://www.linkedin.com/in/yashwanth-kalasa-019661306/",
    },
  ];
  const finance = [
    {
      id: 1,
      name:  "Lavanya A",
      role: "Marketing Associate",
      bio: "Creative thinker focused on promoting events with impactful strategies.",
      image: "./images/contrib/lavanya.jpg",
      linkedin: "https://www.linkedin.com/in/lavanya-a-688b9a363/",
    },
    {
      id: 1,
      name:  "Nithya Krishnamurthy ",
      role: "Marketing Associate",
      bio: "Passionate about engaging audiences through innovative marketing.",
      image: "./images/contrib/Nithya  .jpg",
      linkedin: "#",
    },
    {
      id: 1,
      name:  "Natania Chadha ",
      role: "Marketing Associate",
      bio: "Blending design and strategy to amplify the reach of every event.",
      image: "./images/contrib/natania.jpg",
      linkedin: "https://www.linkedin.com/in/natania-chadha-b47994325/",
    },
    {
      id: 1,
      name:  "Katkam Shivamani",
      role: "Finance Associate",
      bio: "Detail-driven, ensuring accurate budgeting and financial planning for events.",
      image: "./images/contrib/katkam.jpg",
      linkedin: "https://www.linkedin.com/in/katkam-shivamani-8466a7330/",
    },
    {
      id: 1,
      name:  "G V Adithiyha",
      role: "Finance Associate",
      bio: "Focused on managing event finances with strategy and precision.",
      image: "./images/contrib/GV.jpg",
      linkedin: "https://www.linkedin.com/in/adithiyha-g-v-b7653a28a/",
    },
    {
      id: 1,
      name:  "Punya K",
      role: "Finance Associate",
      bio: "Committed to managing resources efficiently for smooth event execution.",
      image: "./images/contrib/punya.jpg",
      linkedin: "https://www.linkedin.com/in/punya-k-3027a5359/",
    },
    {
      id: 1,
      name:  "Nikhilgouda Annagouni",
      role: "Digital Media Coordinator",
      bio: "Passionate about creating engaging digital content to amplify the club’s presence.",
      image: "./images/contrib/Nikhil.jpg",
      linkedin: "https://www.linkedin.com/in/nikhilgouda-annagouni-b1216a316/",
    },
    {
      id: 1,
      name:  "T Siva Sai Phalguni",
      role: "Digital Media Coordinator",
      bio: "Blending creativity and tech to manage and grow the club’s online footprint.",
      image: "./images/contrib/Phalguni.jpg",
      linkedin: "https://www.linkedin.com/in/phalguni-t-69a54b262",
    },
    {
      id: 1,
      name:  "Varsha S ",
      role: "Digital Media Coordinator",
      bio: "Focused on visual storytelling and consistent branding across digital platforms.",
      image: "./images/contrib/Varsha.jpg",
      linkedin: "https://www.linkedin.com/in/varsha-suresh-67b9b5363",
    },
   
  ];
  
  const alumni = [
    {
      id: 1,
      name: "Amogh N Kotha",
      role: "Former Head",
      bio: "Driven by a passion for innovation and collaboration, contributed significantly to the club’s growth and legacy.",
      image: "./images/Alumni/amogh-kotha.jpg",
      linkedin: "https://www.linkedin.com/in/amogh-kotha-a5617823b/"
    },
    {
      id: 2,
      name: "Amogh M",
      role: "Former Tech Lead",
      bio: "Played a key role in advancing the club’s technical initiatives, fostering innovation and building reliable tech solutions.",
      image: "./images/Alumni/amogh-bharadwaj.jpg",
      linkedin: "https://www.linkedin.com/in/amogh-m-985490216/"
    },
    {
      id: 3,
      name: "Aadi B Kumar",
      role: "Former Marketing Lead",
      bio: "Contributed to the club’s growth by driving creative outreach and impactful marketing initiatives.",
      image: "./images/Alumni/aadi-kumar.jpg",
      linkedin: "https://www.linkedin.com/in/aadi-b-kumar-584514254/"
    },
    {
      id: 4,
      name: "Anand Okade",
      image: "./images/Alumni/anand-okade.jpg",
      bio: "Collaborated on delivering seamless technical experiences for impactful events.",
      role: "Former Tech Team Member",
      linkedin: "https://www.linkedin.com/in/anand-okade-a9614a220/",
    },
    {
      id: 5,
      name: "Apeksha D Ankola",
      role: "Former Tech Team Member",
      bio: "Contributed to building reliable tech foundations that supported successful events.",
      image: "./images/Alumni/apeksha-d.jpg",
      linkedin: "https://www.linkedin.com/in/apeksha-d-ankola-aa4512254/",
    },
    {
      id: 6,
      name: "Ajay Anand",
      role: "Former Tech Team Member",
      bio: "Helped drive innovation through hands-on technical solutions and teamwork.",
      image: "./images/Alumni/ayaj-anand.jpg",
      linkedin: "https://www.linkedin.com/in/ayaj-anand-492986127/",
    }, 
    {
      id: 7,
      name: "Dhruva N U",
      role: "Former Tech Team Member",
      bio: "Supported the club’s technical growth with a focus on efficiency and creativity.",
      image: "./images/Alumni/dhruva-nu.jpg",
      linkedin: "https://www.linkedin.com/in/dhruva-n-u-b6788a249/",
    },
    {
      id: 8,
      name: "Nishitha R Lokande",
      role: "Former Tech Team Member",
      bio: "Played an active role in implementing and maintaining event tech systems.",
      image: "./images/Alumni/nishitha-L.jpg",  
      linkedin: "https://www.linkedin.com/in/nishitha-r-lokande-094509254/",
    },
    {
      id: 9,
      name: "Amogh Athreya",
      role: "Former Marketing Team Member",
      bio: "Contributed to the club’s visibility through creative campaigns and consistent outreach.",
      image: "./images/Alumni/amogh-athreya.jpg",
      linkedin: "https://www.linkedin.com/in/amogh-athreya-454515254/",
    },
    {
      id: 10,
      name: "Ranjitha S",
      role: "Former Events Team Member",
      bio: "Helped organize and execute impactful events with attention to detail and team coordination.",
      image: "./images/Alumni/ranjitha-s.jpg",
      linkedin: "#",
    },
  ];

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 gradient-heading">Our Team</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Meet the passionate individuals behind our tech club who work together to create amazing experiences.
            </p>
          </div>
          
          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="core">Core Team</TabsTrigger>
              <TabsTrigger value="contributors">Contributors</TabsTrigger>
              <TabsTrigger value="alumni">Alumni</TabsTrigger>
            </TabsList>
            
            <TabsContent value="core">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreTeam.map((member) => (
                  <Card key={member.id} className="overflow-hidden card-hover">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription className="text-tech-purple font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      <div className="flex space-x-3">
                  
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-purple transition-colors">
                          <Linkedin size={18} />
                        </a>
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-tech-purple transition-colors">
                            <Mail size={18} />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
         
            <TabsContent value="contributors" defaultValue="tech">
            <Tabs defaultValue="tech" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="tech">Tech Team</TabsTrigger>
              <TabsTrigger value="events">Events Team</TabsTrigger>
              <TabsTrigger value="finance">Other Team</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tech">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tech.map((member) => (
                  <Card key={member.id} className="overflow-hidden card-hover">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription className="text-tech-purple font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      <div className="flex space-x-3">
                  
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-purple transition-colors">
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.map((member) => (
                  <Card key={member.id} className="overflow-hidden card-hover">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription className="text-tech-purple font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      <div className="flex space-x-3">
                        
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-purple transition-colors">
                          <Linkedin size={18} />

                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="finance">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {finance.map((member) => (
                  <Card key={member.id} className="overflow-hidden card-hover">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription className="text-tech-purple font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      <div className="flex space-x-3">
                        
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-purple transition-colors">
                          <Linkedin size={18} />

                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
            </TabsContent>
            
            <TabsContent value="alumni">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {alumni.map((member) => (
                  <Card key={member.id} className="overflow-hidden card-hover">
                    <div className="aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription className="text-muted-foreground font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      <div className="flex space-x-3">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-purple transition-colors">
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We're always looking for passionate tech enthusiasts to join our club. Whether you're a developer, designer, or just curious about technology, there's a place for you here.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-tech-purple rounded-md shadow-sm hover:bg-tech-purple/90 transition-colors"
            >
              Apply to Join
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Members;
