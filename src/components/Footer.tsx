import React from 'react';
import { NavLink } from 'react-router-dom';
import { Code, Github, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <NavLink to="/" className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-tech-purple" />
                <span className="text-2xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                  InnovAIt-ON
                </span>
              </NavLink>
            </div>
            <p className="text-muted-foreground text-base">
              A community of tech enthusiasts exploring cutting-edge technologies, learning together, and building amazing projects.
            </p>
            <div className="flex space-x-4 mt-6">
              
              <a href="https://www.instagram.com/innovaiton_rnsit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-muted-foreground hover:text-tech-purple transition-colors">
                <Instagram size={25} />
              </a>
             
              <a href="https://www.linkedin.com/company/innovaiton-rnsit/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-muted-foreground hover:text-tech-purple transition-colors">
                <Linkedin size={25} />
              </a>
              <a href="mailto:innovaiton.aiml@rnsit.ac.in" target="_blank" rel="noopener noreferrer" title="Email" className="text-muted-foreground hover:text-tech-purple transition-colors">
                <Mail size={25} />
              </a>

            </div>
          </div>

          {/* Quick Links & Resources (side by side on mobile) */}
          <div className="col-span-1 ml-0 flex flex-col sm:flex-row sm:space-x-12">
            {/* Quick Links */}
            <div className="mb-8 sm:mb-10">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <NavLink to="/" className="text-muted-foreground hover:text-tech-purple text-sm transition-colors">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="text-muted-foreground hover:text-tech-purple text-sm transition-colors">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/events" className="text-muted-foreground hover:text-tech-purple text-sm transition-colors">
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" className="text-muted-foreground hover:text-tech-purple text-sm transition-colors">
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Resources */}
            <div className="sm:pl-8">
              <h3 className="text-lg font-semibold mb-15">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <NavLink to="/newsletter" className="text-muted-foreground hover:text-tech-purple text-sm transition-colors">
                    Newsletter
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="text-muted-foreground hover:text-tech-purple text-sm transition-colors">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="col-span-1 md:col-start-4 md:ml-8">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-md bg-background px-3 py-2 text-sm border"
              />
              <button className="bg-tech-purple text-white px-4 py-2 rounded-md text-sm hover:bg-tech-indigo transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} InnovAIt-ON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
